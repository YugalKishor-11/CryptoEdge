// src/components/Dashboard/Sidebar/FastActionCard.jsx
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function FastActionCard({ onOpen }) {
    return (
        <div className="rounded-3xl bg-white p-5 shadow-sm border gap-1 border-slate-100">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <Sparkles size={15} />
                    </div>
                    <h2 className="font-medium text-slate-900">Fast Action</h2>
                </div>
                <button className="rounded-full border border-gray-300 p-2">
                    <ArrowUpRight size={15} onClick={onOpen} />
                </button>
            </div>

            <div className="mt-5 rounded-xl border border-blue-400 p-3 bg-blue-50/30">
                <p className="text-xs text-gray-400">Pay with</p>
                <div className="mt-1 flex justify-between text-slate-900">
                    <span className="text-sm font-medium">USD Wallet</span>
                    <span className="font-semibold">$7,598.00</span>
                </div>
            </div>

            <div className="mt-3 rounded-xl bg-gray-50 p-3 border border-slate-100">
                <div className="flex justify-between text-sm text-slate-700">
                    <span>Receive</span>
                    <span className="font-semibold">1,75 BTC</span>
                </div>
            </div>

            <div className="mt-2 rounded-xl bg-gray-50 p-3 border border-slate-100">
                <div className="flex justify-between text-sm text-slate-700">
                    <span>Give</span>
                    <span className="font-semibold">57 587,80 USD</span>
                </div>
            </div>

            <button className="mt-4 w-full rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                Confirm
            </button>
        </div>
    );
}