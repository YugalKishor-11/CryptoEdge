// src/components/Dashboard/modals/FastActionModal.jsx
import { useState } from "react";
import { Sparkles, X, ChevronDown } from "lucide-react";

export default function FastActionModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState("Buy");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs p-4">

            {/* Modal Box */}
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl relative text-slate-900 animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                            <Sparkles size={18} />
                        </div>
                        <h2 className="text-lg font-bold">Fast Action</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-100 transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Segmented Tabs (Buy / Sell / Swap) */}
                <div className="flex rounded-full bg-slate-100 p-1 mb-5">
                    {["Buy", "Sell", "Swap"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 rounded-full py-2 text-xs font-semibold transition-all ${activeTab === tab
                                ? "bg-blue-500 text-white shadow-sm"
                                : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Pay With Card */}
                <div className="rounded-2xl border border-blue-400 p-3.5 bg-blue-50/20 mb-3">
                    <p className="text-xs text-slate-400 font-medium">Pay with</p>
                    <div className="mt-1 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-800">USD Wallet</span>
                        <span className="font-bold text-slate-900">$7,598.00</span>
                    </div>
                </div>

                {/* Asset Selector */}
                <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3.5 mb-4">
                    <span className="text-xs text-slate-500 font-medium">Buy</span>
                    <div className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl shadow-xs border border-slate-200">
                        <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">
                            Ξ
                        </div>
                        <span className="text-sm font-semibold text-slate-800">Ethereum</span>
                        <span className="text-xs text-slate-400">ETH</span>
                        <ChevronDown size={14} className="text-slate-500 ml-1" />
                    </div>
                </div>

                {/* Purchase Info */}
                <div className="flex items-center justify-between px-1 mb-6 text-xs">
                    <span className="text-slate-500 font-medium">Purchase</span>
                    <span className="text-slate-700 font-medium">
                        You get <span className="font-bold text-slate-900">0,014701 ETH</span> for US$48.16
                    </span>
                </div>

                {/* Confirm Button */}
                <button className="w-full rounded-full bg-black py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-md">
                    Confirm
                </button>

            </div>
        </div>
    );
}