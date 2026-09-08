// src/components/Dashboard/Trade/TradePerformanceCard.jsx
import { useState } from "react";
import { BarChart3, ArrowUpRight } from "lucide-react";
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";
import chart from "../../../assets/Candlesticks.svg";
import month from "../../../assets/Month.svg";

// const mockCandles = [
//     { name: "Sep", open: 30, close: 45, high: 50, low: 20, isUp: true },
//     { name: "", open: 45, close: 25, high: 48, low: 15, isUp: false },
//     { name: "", open: 25, close: 35, high: 40, low: 20, isUp: true },
//     { name: "Oct", open: 35, close: 60, high: 65, low: 30, isUp: true },
//     { name: "", open: 60, close: 40, high: 62, low: 35, isUp: false },
//     { name: "", open: 40, close: 75, high: 80, low: 38, isUp: true },
//     { name: "Nov", open: 75, close: 55, high: 78, low: 50, isUp: false },
//     { name: "", open: 55, close: 65, high: 70, low: 52, isUp: true },
//     { name: "", open: 65, close: 45, high: 68, low: 42, isUp: false },
//     { name: "Dec", open: 45, close: 80, high: 85, low: 40, isUp: true },
//     { name: "", open: 80, close: 60, high: 82, low: 55, isUp: false },
//     { name: "Jan", open: 60, close: 90, high: 95, low: 55, isUp: true },
//     { name: "", open: 90, close: 70, high: 92, low: 65, isUp: false },
//     { name: "Feb", open: 70, close: 50, high: 75, low: 45, isUp: false },
//     { name: "", open: 50, close: 75, high: 80, low: 48, isUp: true },
//     { name: "Mar", open: 75, close: 88, high: 90, low: 70, isUp: true },
// ];

export default function TradePerformanceCard() {
    const [timeframe, setTimeframe] = useState("1M");

    return (
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                        <BarChart3 size={18} />
                    </div>
                    <div>
                        <h2 className="font-bold text-base text-slate-900">Trade Performance</h2>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-3 text-xs">
                        <span>BTC <strong className="text-green-500">+12.56%</strong></span>
                        <span>ETH <strong className="text-red-500">-04.56%</strong></span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
                        {["1M", "1Y", "All"].map((tf) => (
                            <button
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={`px-3 py-1 rounded-lg transition-all ${timeframe === tf ? "bg-white text-blue-600 shadow-xs" : "hover:text-slate-900"
                                    }`}
                            >
                                {tf}
                            </button>
                        ))}
                    </div>

                    <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600">
                        <ArrowUpRight size={15} />
                    </button>
                </div>
            </div>

            {/* Price Overview & OHLC Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-2">
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-slate-900">1.342</span>
                    <span className="text-xs font-semibold text-blue-500">$0.17</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span>O <strong className="text-blue-600">0.0682</strong></span>
                    <span>H <strong className="text-blue-600">0.0682</strong></span>
                    <span>L <strong className="text-blue-600">0.0682</strong></span>
                    <span>C <strong className="text-blue-600">0.0682</strong></span>
                </div>
            </div>

            {/* Chart Area */}
            <div className="h-auto w-full relative">
                <img src={chart} alt="loading..." className="w-187 h-77 xl:w-full" />
                <img src={month} alt="month" />
                {/* <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockCandles} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#f1f5f9" />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis orientation="right" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                        <Tooltip />
                        <Bar dataKey="close" radius={[4, 4, 0, 0]}>
                            {mockCandles.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.isUp ? "#22c55e" : "#ef4444"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer> */}

                {/* Floating Tooltip Mock Match */}
                {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-xl bg-white px-4 py-2 shadow-xl border border-slate-100 text-xs pointer-events-none">
                    <p className="text-slate-400 mb-0.5">Nov 12, 2024</p>
                    <p className="text-base font-bold text-slate-900">$1.250</p>
                </div> */}
            </div>
        </div>
    );
}