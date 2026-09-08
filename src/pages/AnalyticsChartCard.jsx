// src/components/Dashboard/Analytics/AnalyticsChartCard.jsx
import { useState } from "react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import {
    BarChart3, Maximize2, Camera, Settings,
    PenTool, Lock, ListFilter, Ruler, Type, CirclePlus, ZoomIn, Crop, RefreshCw
} from "lucide-react";
import left from "../assets/left-indent.svg"

const chartData = [

    { date: "2018", price: 32000 },
    { date: "2019", price: 44000 },
    { date: "2020", price: 48000 },
    { date: "2021", price: 53000 },
    { date: "2022", price: 47000 },
    { date: "2023", price: 50000 },
    { date: "2024", price: 56000 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-xl bg-white px-4 py-2.5 shadow-xl border border-slate-100 text-slate-900 text-xs">
                <p className="text-slate-400 font-medium mb-1">Nov 12, 2024</p>
                <p className="text-base font-bold text-slate-900">$1.250</p>
            </div>
        );
    }
    return null;
};

export default function AnalyticsChartCard() {
    const [timeframe, setTimeframe] = useState("1h");

    return (
        <div className="w-full rounded-3xl bg-white p-6 shadow-sm border border-slate-100 text-slate-900">

            {/* Top Header Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                            <BarChart3 size={16} />
                        </div>
                        <h2 className="font-bold text-lg text-slate-900">Chart</h2>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl text-xs font-semibold text-slate-600">
                        {["1m", "30m", "1h"].map((tf) => (
                            <button
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={`px-3 py-1.5 rounded-lg transition-all ${timeframe === tf ? "bg-white text-blue-600 shadow-xs" : "hover:text-slate-900"
                                    }`}
                            >
                                {tf}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap text-xs font-medium text-black">
                    <button className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50 transition-colors">
                        <img src={left} alt="left" className="h-4 w-3" /> Indicator
                    </button>
                    <button className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50 transition-colors">
                        <CirclePlus size={13} className="text-black" /> Compare
                    </button>

                    <div className="flex items-center gap-1.5 pl-2">
                        <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Maximize2 size={14} /></button>
                        <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Camera size={14} /></button>
                        <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><Settings size={14} /></button>
                    </div>
                </div>
            </div>

            {/* Sub-Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-1 text-xs border-b border-slate-100  gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                    <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-black">
                        # Analytics
                    </span>
                    <span className="text-blue-500 w-5 h-5">•</span>
                    <span className="font-semibold text-slate-700">DEFT/BTC</span>
                    <span className="text-slate-300">•</span>

                </div>

                <div className="flex items-center gap-4 text-[11px] font-medium text-black">
                    <span>O <strong className="text-blue-600 font-semibold">0.0682</strong></span>
                    <span>H <strong className="text-[#FFBE4C] font-semibold">0.0682</strong></span>
                    <span>L <strong className="text-blue-600 font-semibold">0.0682</strong></span>
                    <span>C <strong className="text-[#FFBE4C] font-semibold">0.0682</strong></span>
                </div>

            </div>
            <div className="mb-4">
                <span className="text-black ml-4">
                    Volume <strong className="text-blue-600 font-semibold">$229K</strong>
                </span>
            </div>

            {/* Main Chart Area with Sidebar Drawing Tools */}
            <div className="flex gap-2">

                {/* Left Side Drawing Tools Sidebar */}
                <div className="flex flex-col gap-1 pr-3 border-r border-slate-100 text-slate-400">
                    {[PenTool, Lock, ListFilter, Ruler, Type, PenTool, ZoomIn, Crop, RefreshCw].map((Icon, idx) => (
                        <button key={idx} className="p-2 rounded-xl hover:bg-slate-100 hover:text-slate-700 transition-colors">
                            <Icon size={16} />
                        </button>
                    ))}
                </div>

                {/* Recharts Area Container */}
                <div className="h-95 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="chartBlueGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="6 6" vertical={true} stroke="#cbd5e1" />
                            <XAxis dataKey="date" stroke="#cbd5e1" fontSize={11} tickLine={true} axisLine={true} tick={{ fill: '#94a3b8' }} />
                            <YAxis orientation="right" stroke="#94a3b8" fontSize={11} tickLine={true} axisLine={true} tick={{ fill: '#94a3b8' }} tickFormatter={(val) => `${val / 1000}K`} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="price"
                                stroke="#3b82f6"
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#chartBlueGrad)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    );
}