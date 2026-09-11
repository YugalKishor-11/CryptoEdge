import {
    Search, X, PieChart, ArrowLeftRight, Wallet,
    ArrowDownRight, ArrowUpRight, MoreVertical,
    ArrowDown, ArrowUp, CornerDownLeft
} from 'lucide-react';

export default function SearchModal({ onClose }) {
    // Dummy data for Trending Assets
    const trendingAssets = [
        { id: 1, name: 'Bitcoin', symbol: 'BTC', tag: '#290', price: '$0.2899', change: '56.89%', isUp: false, color: 'bg-orange-100 text-orange-500 dark:bg-orange-500/20 dark:text-orange-400' },
        { id: 2, name: 'Ethereum', symbol: 'ETH', tag: '#20', price: '$0.9120', change: '76.89%', isUp: true, color: 'bg-green-100 text-green-500 dark:bg-green-500/20 dark:text-green-400' },
        { id: 3, name: 'Solana', symbol: 'SOL', tag: '#890', price: '$0.8192', change: '67.89%', isUp: true, color: 'bg-purple-100 text-purple-500 dark:bg-purple-500/20 dark:text-purple-400' },
    ];

    // Dummy data for Recent Transactions
    const recentTransactions = [
        { id: 1, name: 'Oxli..sdsd202', status: 'Completed', amount: '-2.092103 ETH', statusColor: 'text-emerald-400' },
        { id: 2, name: 'Oxli..sdsd202', status: 'Completed', amount: '-1.092103 ETH', statusColor: 'text-emerald-400' },
        { id: 3, name: 'Oxli..sdsd202', status: 'Pending', amount: '+2.092103 ETH', statusColor: 'text-orange-400' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 dark:bg-black/50 backdrop-blur-xs p-4 transition-colors duration-200">
            {/* Modal Container */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-175 shadow-2xl flex flex-col overflow-hidden border border-transparent dark:border-slate-800 transition-colors duration-200">

                {/* 1. Header & Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-slate-800 transition-colors">
                    <div className="flex-1 flex items-center gap-2 bg-white dark:bg-slate-900">
                        <input
                            type="text"
                            placeholder="Search for an asset, contacts"
                            className="w-full text-gray-700 dark:text-slate-100 outline-none text-base placeholder:text-gray-400 dark:placeholder:text-slate-500 bg-transparent"
                            autoFocus
                        />
                    </div>
                    <button className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">
                        <Search size={16} />
                        Search
                    </button>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[70vh] [&::-webkit-scrollbar]:hidden">
                    {/* 2. Filters */}
                    <div className="mb-8">
                        <p className="text-xs text-gray-400 dark:text-slate-500 mb-3 transition-colors">I'm searching for</p>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                <Wallet size={16} /> Assets
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                <ArrowLeftRight size={16} /> Transaction
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                <PieChart size={16} /> Portfolio
                            </button>
                        </div>
                    </div>

                    {/* 3. Trending Assets */}
                    <div className="mb-8">
                        <p className="text-xs text-gray-400 dark:text-slate-500 mb-3 transition-colors">Trending assets</p>
                        <div className="flex flex-col gap-4">
                            {trendingAssets.map((asset) => (
                                <div key={asset.id} className="flex items-center justify-between group cursor-pointer p-1.5 -mx-1.5 rounded-xl hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${asset.color}`}>
                                            <span className="font-bold">{asset.symbol[0]}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-900 dark:text-slate-100 transition-colors">{asset.name}</span>
                                            <span className="text-gray-400 dark:text-slate-400 transition-colors">{asset.symbol}</span>
                                            <span className="text-xs text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full font-medium transition-colors">
                                                {asset.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-semibold text-gray-900 dark:text-slate-100 transition-colors">{asset.price}</span>
                                        <div className={`flex items-center gap-1 text-sm font-medium transition-colors ${asset.isUp ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'}`}>
                                            {asset.isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                            {asset.change}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Recent Transactions */}
                    <div>
                        <p className="text-xs text-gray-400 dark:text-slate-500 mb-3 transition-colors">Recent transactions</p>
                        <div className="flex flex-col gap-4">
                            {recentTransactions.map((tx) => (
                                <div key={tx.id} className="flex items-center justify-between group cursor-pointer p-1.5 -mx-1.5 rounded-xl hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden transition-colors">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${tx.id}`} alt="avatar" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-900 dark:text-slate-100 transition-colors">{tx.name}</span>
                                            <span className={`text-sm ${tx.statusColor}`}>{tx.status}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-semibold text-gray-900 dark:text-slate-100 transition-colors">{tx.amount}</span>
                                        <button className="text-gray-400 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                                            <MoreVertical size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Footer / Navigation Hints */}
                <div className="p-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs text-gray-500 dark:text-slate-400 bg-gray-50/50 dark:bg-slate-800/50 transition-colors">
                    <span>Showing 10 of 850 results</span>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span>Navigate</span>
                            <div className="flex gap-1">
                                <span className="p-1 border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 shadow-sm transition-colors"><ArrowDown size={12} /></span>
                                <span className="p-1 border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 shadow-sm transition-colors"><ArrowUp size={12} /></span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Select</span>
                            <span className="p-1 border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 shadow-sm transition-colors"><CornerDownLeft size={12} /></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Close</span>
                            <span className="px-1.5 py-0.5 font-semibold border border-gray-200 dark:border-slate-700 rounded bg-white dark:bg-slate-900 shadow-sm transition-colors">ESC</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}