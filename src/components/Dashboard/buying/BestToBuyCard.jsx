import { Star, MoreHorizontal } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const chartLine = [
    { v: 10 }, { v: 25 }, { v: 20 }, { v: 35 }, { v: 30 }, { v: 50 }, { v: 45 }, { v: 65 }
];

export default function BestToBuyCard() {
    return (
        <div className="rounded-3xl bg-white dark:bg-slate-900 xl:h-65 2xl:h-73 p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between transition-colors duration-200">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-xs">
                            <Star size={15} />
                        </div>
                        <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 transition-colors">
                            Best to buy
                        </h2>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Asset Pill */}
                        <span className="flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors">
                            <span className="h-2 w-2 rounded-full bg-green-500" /> Ethereum ETH
                        </span>

                        {/* Buy Button */}
                        <button className="rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold text-white shadow-xs hover:bg-blue-600 transition-colors">
                            Buy
                        </button>

                        {/* More Options Button */}
                        <button className="rounded-full border border-slate-200 dark:border-slate-700 p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                            <MoreHorizontal size={15} />
                        </button>
                    </div>
                </div>

                <div className="flex items-baseline justify-between mt-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
                        $120.980
                    </h3>

                    {/* Growth Pill */}
                    <span className="text-xs font-semibold text-green-500 bg-green-50 dark:bg-green-500/10 px-2.5 py-1 rounded-full transition-colors">
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
                        <Area
                            type="monotone"
                            dataKey="v"
                            stroke="#22c55e"
                            strokeWidth={2}
                            fill="url(#bestBuyGrad)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}