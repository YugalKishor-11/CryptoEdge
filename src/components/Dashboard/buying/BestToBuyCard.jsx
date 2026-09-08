import { Star, MoreHorizontal } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const chartLine = [
    { v: 10 }, { v: 25 }, { v: 20 }, { v: 35 }, { v: 30 }, { v: 50 }, { v: 45 }, { v: 65 }
];

export default function BestToBuyCard() {
    return (
        <div className="rounded-3xl bg-white xl:h-65 2xl:h-73 p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-xs">
                            <Star size={15} />
                        </div>
                        <h2 className="font-bold text-base text-slate-900">Best to buy</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            <span className="h-2 w-2 rounded-full bg-green-500" /> Ethereum ETH
                        </span>
                        <button className="rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold text-white shadow-xs hover:bg-blue-600">
                            Buy
                        </button>
                        <button className="rounded-full border border-slate-200 p-1.5 text-slate-600">
                            <MoreHorizontal size={15} />
                        </button>
                    </div>
                </div>

                <div className="flex items-baseline justify-between mt-2">
                    <h3 className="text-2xl font-bold text-slate-900">$120.980</h3>
                    <span className="text-xs font-semibold text-green-500 bg-green-50 px-2.5 py-1 rounded-full">
                        +$250 this week
                    </span>
                </div>
            </div>

            <div className="mt-6 h-20 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartLine}>
                        <defs>
                            <linearGradient id="bestBuyGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.0} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="v" stroke="#22c55e" strokeWidth={2} fill="url(#bestBuyGrad)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}