// src/components/Dashboard/Markets/MarketsTable.jsx
import { BarChart3, SlidersHorizontal, MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react";
import { ResponsiveContainer, LineChart, Line } from "recharts";

export default function MarketsTable({ coins = [], loading = false }) {
    return (
        <section className="mt-5 w-full rounded-3xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                        <BarChart3 size={16} />
                    </div>
                    <h2 className="font-medium text-slate-900">Markets</h2>
                </div>

                <div className="flex gap-2">
                    <button className="hidden items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm md:flex text-slate-700">
                        Sort <SlidersHorizontal size={14} />
                    </button>
                    <button className="rounded-full border border-gray-300 p-2 text-slate-700">
                        <MoreHorizontal size={15} />
                    </button>
                </div>
            </div>

            {loading ? (
                <p className="py-10 text-center text-gray-500">Loading markets...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-187.5 text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-left text-gray-400 font-medium">
                                <th className="pb-4">Currency</th>
                                <th className="pb-4">Price</th>
                                <th className="pb-4">7 Days Market</th>
                                <th className="pb-4">24H Change</th>
                                <th className="pb-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* .slice(0, 6) ensures only the first 6 items are rendered */}
                            {coins.map((coin) => {
                                const change = coin.price_change_percentage_24h || 0;
                                const positive = change >= 0;
                                const sparkline = coin.sparkline_in_7d?.price?.map((price, index) => ({
                                    index,
                                    price,
                                })) || [];

                                return (
                                    <tr key={coin.id} className="border-b border-gray-50 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-3">
                                            <div className="flex items-center gap-3">
                                                <img src={coin.image} alt={coin.name} className="h-7 w-7 rounded-full" />
                                                <div>
                                                    <p className="font-medium text-slate-900">{coin.symbol.toUpperCase()}</p>
                                                    <p className="text-xs text-gray-400">{coin.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 font-medium text-slate-900">
                                            ${coin.current_price?.toLocaleString("en-US", { maximumFractionDigits: 6 })}
                                        </td>
                                        <td className="py-3">
                                            <div className="h-10 w-30">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <LineChart data={sparkline}>
                                                        <Line
                                                            type="monotone"
                                                            dataKey="price"
                                                            stroke={positive ? "#22c55e" : "#ef4444"}
                                                            strokeWidth={2}
                                                            dot={false}
                                                        />
                                                    </LineChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <span className={`flex items-center gap-1 font-medium ${positive ? "text-green-500" : "text-red-500"}`}>
                                                {positive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                                                {Math.abs(change).toFixed(2)}%
                                            </span>
                                        </td>
                                        <td className="py-3 text-center">
                                            <button className="rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition-colors">
                                                Buy
                                            </button>

                                        </td>
                                        <td>
                                            <MoreHorizontal size={15} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}