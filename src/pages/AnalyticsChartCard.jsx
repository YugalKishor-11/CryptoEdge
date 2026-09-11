// src/components/Dashboard/Analytics/AnalyticsChartCard.jsx
import { useState, useEffect } from "react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import {
    BarChart3, Maximize2, Camera, Settings,
    PenTool, Lock, ListFilter, Ruler, Type, CirclePlus, ZoomIn, Crop, RefreshCw
} from "lucide-react";
import left from "../assets/left-indent.svg";

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
            <div className="rounded-xl bg-white dark:bg-slate-800 px-4 py-2.5 shadow-xl border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs transition-colors duration-200">
                <p className="text-slate-400 dark:text-slate-400 font-medium mb-1">Nov 12, 2024</p>
                <p className="text-base font-bold text-slate-900 dark:text-slate-100">$1.250</p>
            </div>
        );
    }
    return null;
};

export default function AnalyticsChartCard() {
    const [timeframe, setTimeframe] = useState("1h");
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        checkDarkMode();

        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const gridStroke = isDarkMode ? "#334155" : "#cbd5e1";
    const axisStroke = isDarkMode ? "#475569" : "#cbd5e1";
    const tickColor = isDarkMode ? "#94a3b8" : "#94a3b8";

    return (
        <div className="w-full rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-200">

            {/* Top Header Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 transition-colors">
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                            <BarChart3 size={16} />
                        </div>
                        <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100 transition-colors">Chart</h2>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 transition-colors">
                        {["1m", "30m", "1h"].map((tf) => (
                            <button
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${timeframe === tf
                                        ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs"
                                        : "hover:text-slate-900 dark:hover:text-slate-200"
                                    }`}
                            >
                                {tf}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap text-xs font-medium text-slate-700 dark:text-slate-300">
                    <button className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <img src={left} alt="left" className="h-4 w-3 dark:opacity-80" /> Indicator
                    </button>
                    <button className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                        <CirclePlus size={13} className="text-slate-700 dark:text-slate-300" /> Compare
                    </button>

                    <div className="flex items-center gap-1.5 pl-2">
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"><Maximize2 size={14} /></button>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"><Camera size={14} /></button>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"><Settings size={14} /></button>
                    </div>
                </div>
            </div>

            {/* Sub-Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-1 text-xs border-b border-slate-100 dark:border-slate-800 gap-2 transition-colors">
                <div className="flex items-center gap-3 flex-wrap">
                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                        # Analytics
                    </span>
                    <span className="text-blue-500 w-5 h-5">•</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300 transition-colors">DEFT/BTC</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                </div>

                <div className="flex items-center gap-4 text-[11px] font-medium text-slate-700 dark:text-slate-300 transition-colors">
                    <span>O <strong className="text-blue-600 dark:text-blue-400 font-semibold">0.0682</strong></span>
                    <span>H <strong className="text-[#FFBE4C] font-semibold">0.0682</strong></span>
                    <span>L <strong className="text-blue-600 dark:text-blue-400 font-semibold">0.0682</strong></span>
                    <span>C <strong className="text-[#FFBE4C] font-semibold">0.0682</strong></span>
                </div>
            </div>

            <div className="mb-4">
                <span className="text-slate-700 dark:text-slate-300 ml-4 transition-colors">
                    Volume <strong className="text-blue-600 dark:text-blue-400 font-semibold">$229K</strong>
                </span>
            </div>

            {/* Main Chart Area with Sidebar Drawing Tools */}
            <div className="flex gap-2">

                {/* Left Side Drawing Tools Sidebar */}
                <div className="flex flex-col gap-1 pr-3 border-r border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 transition-colors">
                    {[PenTool, Lock, ListFilter, Ruler, Type, PenTool, ZoomIn, Crop, RefreshCw].map((Icon, idx) => (
                        <button key={idx} className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer">
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
                            <CartesianGrid strokeDasharray="6 6" vertical={true} stroke={gridStroke} />
                            <XAxis dataKey="date" stroke={axisStroke} fontSize={11} tickLine={true} axisLine={true} tick={{ fill: tickColor }} />
                            <YAxis orientation="right" stroke={axisStroke} fontSize={11} tickLine={true} axisLine={true} tick={{ fill: tickColor }} tickFormatter={(val) => `${val / 1000}K`} />
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