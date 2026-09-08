import { MoreHorizontal, ArrowUpRight, Plus } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const miniSparkline = [
    { val: 20 }, { val: 35 }, { val: 30 }, { val: 45 }, { val: 40 }, { val: 60 }, { val: 50 }, { val: 70 }
];

export default function MarketOverviewCard() {
    return (
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                        <span className="text-xs font-bold">M</span>
                    </div>
                    <h2 className="font-bold text-base text-slate-900">Market Overview</h2>
                </div>
                <button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            <div className="py-4">
                <h3 className="text-2xl font-bold text-slate-900">$75,981.98</h3>
            </div>

            {/* Bitcoin Asset Item */}
            <div className="rounded-2xl bg-slate-50/60 p-4 border border-slate-100 mb-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                            ₿
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Bitcoin</p>
                            <p className="text-xs text-slate-400">BTC</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600">
                            <ArrowUpRight size={14} />
                        </button>
                        <button className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600">
                            <Plus size={14} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60">
                    <span className="text-green-500 font-semibold bg-green-50 px-2.5 py-1 rounded-full">+12.56%</span>
                    <span className="font-bold text-slate-900">$653B</span>
                </div>
            </div>

            {/* Metrics List */}
            <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between">
                    <span className="text-slate-500">Market Cap</span>
                    <div className="flex items-center gap-2">
                        <span className="text-green-500 font-semibold bg-green-50 px-2 py-0.5 rounded-full">3.09%</span>
                        <strong className="text-slate-900">$653B</strong>
                        <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">#1</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-500">Volume(24)</span>
                    <div className="flex items-center gap-2">
                        <strong className="text-slate-900">$653B</strong>
                        <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">#2</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-500">Supply</span>
                    <div className="text-right">
                        <strong className="text-slate-900 block">$17,897.98 BTC</strong>
                        <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">76.87%</span>
                    </div>
                </div>
            </div>

            {/* Bottom Mini Sparkline Preview */}
            <div className="mt-5 h-17.5 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={miniSparkline}>
                        <defs>
                            <linearGradient id="miniGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.0} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="val" stroke="#22c55e" strokeWidth={2} fill="url(#miniGrad)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}