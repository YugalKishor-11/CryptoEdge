// src/hooks/useLivePrices.js
import { useState, useEffect } from "react";

const INITIAL_PRICES = {
  BTC: 65420.5,
  ETH: 3480.25,
  SOL: 145.8,
};

export function useLivePrices() {
  const [prices, setPrices] = useState(INITIAL_PRICES);

  useEffect(() => {
    const wsUrl = "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/solusdt@ticker";
    let ws = new WebSocket(wsUrl);

    ws.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        const ticker = payload.data || payload;

        if (ticker?.s && ticker?.c) {
          const symbol = ticker.s.replace("USDT", "");
          const currentPrice = parseFloat(ticker.c);

          setPrices((prev) => ({
            ...prev,
            [symbol]: currentPrice,
          }));
        }
      } catch (err) {
        console.error("Error parsing ticker data:", err);
      }
    };

    ws.onerror = () => {
      // Fallback: If Binance is restricted or blocked, connect to CoinCap
      const fallbackWs = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum,solana");
      fallbackWs.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        if (data.bitcoin) setPrices((p) => ({ ...p, BTC: parseFloat(data.bitcoin) }));
        if (data.ethereum) setPrices((p) => ({ ...p, ETH: parseFloat(data.ethereum) }));
        if (data.solana) setPrices((p) => ({ ...p, SOL: parseFloat(data.solana) }));
      };
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) ws.close();
    };
  }, []);

  return prices;
}