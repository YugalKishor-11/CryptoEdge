// src/components/Dashboard/Sidebar/BestToBuyCard.jsx
import { BarChart3, MoreHorizontal } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

export default function BestToBuyCard({ coins = [] }) {
    const coin = coins[0];

    if (!coin) {
        return (
            <div className="h-52.5 rounded-3xl bg-white p-5 flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm">
                Loading...
            </div>
        );
    }

    const chartData = coin.sparkline_in_7d?.price?.map((price, index) => ({
        index,
        price,
    })) || [];

    return (
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <BarChart3 size={15} />
                    </div>
                    <h2 className="font-medium text-slate-900">Best to buy</h2>
                </div>
                <button className="rounded-full border border-gray-300 p-2">
                    <MoreHorizontal size={15} />
                </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <h2 className="text-3xl font-semibold text-slate-900">
                    ${coin.current_price?.toLocaleString()}
                </h2>
                <span className="text-green-500 font-medium">+$250</span>
            </div>

            {/* Added explicit height block wrapper */}
            <div className="mt-4 h-20 w-full">
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <Area
                                type="monotone"
                                dataKey="price"
                                stroke="#22c55e"
                                fill="#22c55e"
                                fillOpacity={0.08}
                                strokeWidth={2}
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="h-full flex items-center justify-center text-xs text-slate-400">
                        No chart data available
                    </div>
                )}
            </div>
        </div>
    );
}