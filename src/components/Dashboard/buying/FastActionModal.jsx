// src/components/Dashboard/buying/FastActionModal.jsx
import { useState, useMemo, useEffect, useRef } from "react";
import { Sparkles, X, ChevronDown, CheckCircle2, AlertCircle, ArrowUpDown } from "lucide-react";
import { useTrading } from "../../../context/TradingContext";

export default function FastActionModal({ isOpen, onClose, coins = [] }) {
    const { fiatBalance, holdings, executeTrade } = useTrading();

    const [activeTab, setActiveTab] = useState("Buy"); // "Buy" | "Sell" | "Swap"
    const [selectedCoin, setSelectedCoin] = useState(coins[0] || { symbol: "ETH", name: "Ethereum", price: 3400 });
    const [targetCoin, setTargetCoin] = useState(coins[1] || { symbol: "BTC", name: "Bitcoin", price: 65000 });
    const [usdAmount, setUsdAmount] = useState("48.16");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isTargetDropdownOpen, setIsTargetDropdownOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    const sourceDropdownRef = useRef(null);
    const targetDropdownRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (sourceDropdownRef.current && !sourceDropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (targetDropdownRef.current && !targetDropdownRef.current.contains(event.target)) {
                setIsTargetDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Keep active coins updated when live streams arrive
    const activeCoin = coins.find((c) => c.symbol === selectedCoin.symbol) || selectedCoin;
    const activeTargetCoin = coins.find((c) => c.symbol === targetCoin.symbol) || targetCoin;

    const activeCoinPrice = Number(activeCoin?.price || activeCoin?.current_price || 1);
    const targetCoinPrice = Number(activeTargetCoin?.price || activeTargetCoin?.current_price || 1);

    const sourceCoinBalance = holdings?.[activeCoin?.symbol] || 0;

    const cryptoAmount = useMemo(() => {
        const val = parseFloat(usdAmount);
        if (isNaN(val) || val <= 0 || !activeCoinPrice) return "0.000000";
        return (val / activeCoinPrice).toFixed(6);
    }, [usdAmount, activeCoinPrice]);

    const swapTargetAmount = useMemo(() => {
        const val = parseFloat(usdAmount);
        if (isNaN(val) || val <= 0 || !targetCoinPrice) return "0.000000";
        return (val / targetCoinPrice).toFixed(6);
    }, [usdAmount, targetCoinPrice]);

    if (!isOpen) return null;

    const handlePercentage = (pct) => {
        if (activeTab === "Buy") {
            setUsdAmount((fiatBalance * pct).toFixed(2));
        } else {
            const coinTotal = sourceCoinBalance * pct;
            setUsdAmount((coinTotal * activeCoinPrice).toFixed(2));
        }
    };

    const handleInvertSwap = (e) => {
        e.stopPropagation();
        const temp = selectedCoin;
        setSelectedCoin(targetCoin);
        setTargetCoin(temp);
    };

    const handleConfirm = () => {
        const val = parseFloat(usdAmount);
        if (isNaN(val) || val <= 0) {
            setStatusMessage({ type: "error", text: "Please enter a valid amount." });
            return;
        }

        try {
            executeTrade({
                type: activeTab,
                symbol: activeCoin.symbol,
                targetSymbol: activeTargetCoin.symbol,
                usdAmount: val,
                coinPrice: activeCoinPrice,
                targetPrice: targetCoinPrice,
            });

            setStatusMessage({
                type: "success",
                text: `${activeTab} executed successfully at $${activeCoinPrice.toLocaleString()}!`,
            });
            setTimeout(() => setStatusMessage(null), 3500);
        } catch (err) {
            setStatusMessage({
                type: "error",
                text: err.message || "Trade execution failed.",
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">

            {/* Modal Box */}
            <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-2xl relative text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 transition-colors">

                {/* Header */}
                <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                            <Sparkles size={18} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold leading-tight">Fast Action</h2>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium">Live Feed Connected</span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-slate-200 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Segmented Tabs */}
                <div className="flex rounded-full bg-slate-100 dark:bg-slate-800 p-1 mb-4">
                    {["Buy", "Sell", "Swap"].map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => {
                                setActiveTab(tab);
                                setIsDropdownOpen(false);
                                setIsTargetDropdownOpen(false);
                                setStatusMessage(null);
                            }}
                            className={`flex-1 rounded-full py-2 text-xs font-semibold transition-all cursor-pointer ${activeTab === tab
                                    ? "bg-blue-500 text-white shadow-sm"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Source Balance Info */}
                <div className="rounded-2xl border border-blue-400 dark:border-blue-500/50 p-3.5 bg-blue-50/20 dark:bg-blue-900/10 mb-3">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        {activeTab === "Buy" ? "Pay with" : "Pay with (Source)"}
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {activeTab === "Buy" ? "USD Wallet" : `${activeCoin.name} Wallet`}
                        </span>
                        <span className="font-bold text-slate-900 dark:text-slate-100 font-mono">
                            {activeTab === "Buy"
                                ? `$${fiatBalance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                                : `${sourceCoinBalance.toFixed(4)} ${activeCoin.symbol}`}
                        </span>
                    </div>
                </div>

                {/* Amount Input */}
                <div className="mb-3">
                    <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-medium mb-1.5 px-1">
                        <span>Amount ({activeTab === "Swap" ? activeCoin.symbol : "USD"})</span>
                        <div className="flex gap-1.5">
                            {[0.25, 0.5, 1.0].map((pct) => (
                                <button
                                    key={pct}
                                    type="button"
                                    onClick={() => handlePercentage(pct)}
                                    className="px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-[10px] font-semibold cursor-pointer"
                                >
                                    {pct * 100}%
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-sm font-semibold text-slate-400 dark:text-slate-500">$</span>
                        <input
                            type="number"
                            min="0"
                            step="any"
                            value={usdAmount}
                            onChange={(e) => setUsdAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl py-2.5 pl-8 pr-3.5 text-sm font-medium text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>
                </div>

                {/* Primary / Source Asset Dropdown */}
                <div ref={sourceDropdownRef} className="relative mb-2.5 z-40">
                    <div className="flex items-center justify-between rounded-2xl bg-slate-100 dark:bg-slate-800/50 p-3">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {activeTab === "Sell" ? "For" : activeTab === "Swap" ? "From" : "Receive"}
                        </span>
                        <button
                            type="button"
                            onClick={() => {
                                setIsDropdownOpen((prev) => !prev);
                                setIsTargetDropdownOpen(false);
                            }}
                            className="flex items-center gap-2 cursor-pointer bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 select-none"
                        >
                            <div className={`h-5 w-5 rounded-full ${activeCoin.badgeColor || "bg-blue-500"} flex items-center justify-center text-white text-[10px] font-bold overflow-hidden`}>
                                {activeCoin.image ? (
                                    <img src={activeCoin.image} alt={activeCoin.name} className="h-full w-full object-cover" />
                                ) : (
                                    activeCoin.icon || activeCoin.symbol?.[0]
                                )}
                            </div>
                            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                {activeCoin.name}
                            </span>
                            <span className="text-xs text-slate-400 dark:text-slate-500">
                                {activeCoin.symbol.toUpperCase()}
                            </span>
                            <ChevronDown size={14} className={`text-slate-500 dark:text-slate-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
                        </button>
                    </div>

                    {/* Popover List */}
                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1.5 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-1.5 z-50">
                            <ul className="max-h-48 overflow-y-auto flex flex-col gap-0.5">
                                {coins.map((coin) => (
                                    <li
                                        key={coin.id || coin.symbol}
                                        onClick={() => {
                                            setSelectedCoin(coin);
                                            setIsDropdownOpen(false);
                                        }}
                                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        <span className="font-semibold text-slate-800 dark:text-slate-200">{coin.name} ({coin.symbol.toUpperCase()})</span>
                                        <span className="text-slate-400 font-mono">${Number(coin.price || 0).toLocaleString()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Target Asset Dropdown (Only visible on Swap tab) */}
                {activeTab === "Swap" && (
                    <div ref={targetDropdownRef} className="relative mb-3 z-30">
                        <div className="flex justify-center -my-2.5 relative z-10">
                            <button
                                type="button"
                                onClick={handleInvertSwap}
                                className="p-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                            >
                                <ArrowUpDown size={14} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl bg-slate-100 dark:bg-slate-800/50 p-3">
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">To (Receive)</span>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsTargetDropdownOpen((prev) => !prev);
                                    setIsDropdownOpen(false);
                                }}
                                className="flex items-center gap-2 cursor-pointer bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700 select-none"
                            >
                                <div className={`h-5 w-5 rounded-full ${activeTargetCoin.badgeColor || "bg-blue-500"} flex items-center justify-center text-white text-[10px] font-bold overflow-hidden`}>
                                    {activeTargetCoin.image ? (
                                        <img src={activeTargetCoin.image} alt={activeTargetCoin.name} className="h-full w-full object-cover" />
                                    ) : (
                                        activeTargetCoin.icon || activeTargetCoin.symbol?.[0]
                                    )}
                                </div>
                                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                    {activeTargetCoin.name}
                                </span>
                                <span className="text-xs text-slate-400 dark:text-slate-500">
                                    {activeTargetCoin.symbol.toUpperCase()}
                                </span>
                                <ChevronDown size={14} className={`text-slate-500 dark:text-slate-400 transition-transform duration-200 ${isTargetDropdownOpen ? "rotate-180" : "rotate-0"}`} />
                            </button>
                        </div>

                        {/* Target Popover List */}
                        {isTargetDropdownOpen && (
                            <div className="absolute top-full right-0 mt-1.5 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-1.5 z-50">
                                <ul className="max-h-48 overflow-y-auto flex flex-col gap-0.5">
                                    {coins.map((coin) => (
                                        <li
                                            key={`target-${coin.id || coin.symbol}`}
                                            onClick={() => {
                                                setTargetCoin(coin);
                                                setIsTargetDropdownOpen(false);
                                            }}
                                            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                        >
                                            <span className="font-semibold text-slate-800 dark:text-slate-200">{coin.name} ({coin.symbol.toUpperCase()})</span>
                                            <span className="text-slate-400 font-mono">${Number(coin.price || 0).toLocaleString()}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Calculation Info Summary */}
                <div className="flex items-center justify-between px-1 mb-4 text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Calculation</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {activeTab === "Swap" ? (
                            <>
                                Swap <span className="font-bold text-slate-900 dark:text-slate-100">{cryptoAmount} {activeCoin.symbol}</span> for <span className="font-bold text-slate-900 dark:text-slate-100">{swapTargetAmount} {activeTargetCoin.symbol}</span>
                            </>
                        ) : (
                            <>
                                You get <span className="font-bold text-slate-900 dark:text-slate-100">{cryptoAmount} {activeCoin.symbol}</span> for US${parseFloat(usdAmount || 0).toLocaleString()}
                            </>
                        )}
                    </span>
                </div>

                {/* Status Notifications */}
                {statusMessage && (
                    <div
                        className={`p-3 mb-4 rounded-xl flex items-center gap-2 text-xs font-medium ${statusMessage.type === "success"
                                ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40"
                                : "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/40"
                            }`}
                    >
                        {statusMessage.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                        <span>{statusMessage.text}</span>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="button"
                    onClick={handleConfirm}
                    className="w-full rounded-full bg-black dark:bg-blue-600 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
                >
                    Confirm {activeTab}
                </button>

            </div>
        </div>
    );
}