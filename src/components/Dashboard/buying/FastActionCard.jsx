// src/components/Dashboard/Sidebar/FastActionCard.jsx
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function FastActionCard({ onOpen }) {
    return (
        <div className="rounded-3xl bg-white dark:bg-slate-900 p-5 shadow-sm border gap-1 border-slate-100 dark:border-slate-800 transition-colors duration-200">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <Sparkles size={15} />
                    </div>
                    <h2 className="font-medium text-slate-900 dark:text-slate-100 transition-colors">
                        Fast Action
                    </h2>
                </div>
                <button
                    onClick={onOpen}
                    className="rounded-full border border-gray-300 dark:border-slate-700 p-2 text-slate-900 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                    <ArrowUpRight size={15} />
                </button>
            </div>

            {/* Pay With Box */}
            <div className="mt-5 rounded-xl border border-blue-400 dark:border-blue-500/50 p-3 bg-blue-50/30 dark:bg-blue-900/10 transition-colors duration-200">
                <p className="text-xs text-gray-400 dark:text-slate-500">Pay with</p>
                <div className="mt-1 flex justify-between text-slate-900 dark:text-slate-100 transition-colors">
                    <span className="text-sm font-medium">USD Wallet</span>
                    <span className="font-semibold">$7,598.00</span>
                </div>
            </div>

            {/* Receive Box */}
            <div className="mt-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 p-3 border border-slate-100 dark:border-slate-700/50 transition-colors duration-200">
                <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300 transition-colors">
                    <span>Receive</span>
                    <span className="font-semibold dark:text-slate-100">1.75 BTC</span>
                </div>
            </div>

            {/* Give Box */}
            <div className="mt-2 rounded-xl bg-gray-50 dark:bg-slate-800/50 p-3 border border-slate-100 dark:border-slate-700/50 transition-colors duration-200">
                <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300 transition-colors">
                    <span>Give</span>
                    <span className="font-semibold dark:text-slate-100">57,587.80 USD</span>
                </div>
            </div>

            {/* Confirm Button */}
            <button className="mt-4 w-full rounded-full bg-black dark:bg-blue-600 py-3 text-sm font-medium text-white hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors shadow-md cursor-pointer">
                Confirm
            </button>

        </div>
    );
}