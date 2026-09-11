// src/context/TradingContext.jsx
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const TradingContext = createContext();

export function TradingProvider({ children }) {
    const [fiatBalance, setFiatBalance] = useState(() => {
        const saved = localStorage.getItem("fiatBalance");
        return saved !== null ? parseFloat(saved) : 10000.0; // Default $10,000 USD
    });

    const [holdings, setHoldings] = useState(() => {
        const saved = localStorage.getItem("cryptoHoldings");
        return saved !== null ? JSON.parse(saved) : { BTC: 0.25, ETH: 1.5, SOL: 12.0 };
    });

    const [tradeHistory, setTradeHistory] = useState(() => {
        const saved = localStorage.getItem("tradeHistory");
        return saved !== null ? JSON.parse(saved) : [];
    });

    // Sync balances to localStorage
    useEffect(() => {
        localStorage.setItem("fiatBalance", fiatBalance.toString());
        localStorage.setItem("cryptoHoldings", JSON.stringify(holdings));
        localStorage.setItem("tradeHistory", JSON.stringify(tradeHistory));
    }, [fiatBalance, holdings, tradeHistory]);

    const executeTrade = ({ type, symbol, targetSymbol, usdAmount, coinPrice, targetPrice }) => {
        const amountUsd = parseFloat(usdAmount);
        const cryptoQty = amountUsd / coinPrice;

        if (type === "Buy") {
            if (amountUsd > fiatBalance) throw new Error("Insufficient USD Wallet balance.");

            setFiatBalance((prev) => prev - amountUsd);
            setHoldings((prev) => ({
                ...prev,
                [symbol]: (prev[symbol] || 0) + cryptoQty,
            }));
        } else if (type === "Sell") {
            const currentCoinBalance = holdings[symbol] || 0;
            if (cryptoQty > currentCoinBalance) throw new Error(`Insufficient ${symbol} balance.`);

            setFiatBalance((prev) => prev + amountUsd);
            setHoldings((prev) => ({
                ...prev,
                [symbol]: Math.max(0, currentCoinBalance - cryptoQty),
            }));
        } else if (type === "Swap") {
            if (symbol === targetSymbol) throw new Error("Cannot swap identical assets.");
            const currentSourceBalance = holdings[symbol] || 0;
            if (cryptoQty > currentSourceBalance) throw new Error(`Insufficient ${symbol} to swap.`);

            const targetCryptoQty = amountUsd / targetPrice;
            setHoldings((prev) => ({
                ...prev,
                [symbol]: Math.max(0, currentSourceBalance - cryptoQty),
                [targetSymbol]: (prev[targetSymbol] || 0) + targetCryptoQty,
            }));
        }

        // Record transaction
        const newTx = {
            id: Date.now(),
            type,
            symbol,
            targetSymbol: type === "Swap" ? targetSymbol : null,
            usdAmount: amountUsd,
            cryptoAmount: cryptoQty,
            price: coinPrice,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setTradeHistory((prev) => [newTx, ...prev]);
        return newTx;
    };

    return (
        <TradingContext.Provider value={{ fiatBalance, holdings, tradeHistory, executeTrade }}>
            {children}
        </TradingContext.Provider>
    );
}

export const useTrading = () => useContext(TradingContext);