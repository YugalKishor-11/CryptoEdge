import {
    Search, X, PieChart, ArrowLeftRight, Wallet,
    ArrowDownRight, ArrowUpRight, MoreVertical,
    ArrowDown, ArrowUp, CornerDownLeft
} from 'lucide-react';

export default function SearchModal({ onClose }) {
    // Dummy data for Trending Assets
    const trendingAssets = [
        { id: 1, name: 'Bitcoin', symbol: 'BTC', tag: '#290', price: '$0.2899', change: '56.89%', isUp: false, color: 'bg-orange-100 text-orange-500' },
        { id: 2, name: 'Ethereum', symbol: 'ETH', tag: '#20', price: '$0.9120', change: '76.89%', isUp: true, color: 'bg-green-100 text-green-500' },
        { id: 3, name: 'Solana', symbol: 'SOL', tag: '#890', price: '$0.8192', change: '67.89%', isUp: true, color: 'bg-purple-100 text-purple-500' },
    ];

    // Dummy data for Recent Transactions
    const recentTransactions = [
        { id: 1, name: 'Oxli..sdsd202', status: 'Completed', amount: '-2.092103 ETH', statusColor: 'text-emerald-400' },
        { id: 2, name: 'Oxli..sdsd202', status: 'Completed', amount: '-1.092103 ETH', statusColor: 'text-emerald-400' },
        { id: 3, name: 'Oxli..sdsd202', status: 'Pending', amount: '+2.092103 ETH', statusColor: 'text-orange-400' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs p-4">
            {/* Modal Container */}
            <div className="bg-white rounded-2xl w-full max-w-175 shadow-2xl flex flex-col overflow-hidden">

                {/* 1. Header & Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                    <div className="flex-1 flex items-center gap-2 bg-white">
                        <input
                            type="text"
                            placeholder="Search for an asset, contacts"
                            className="w-full text-gray-700 outline-none text-base placeholder:text-gray-400 bg-transparent"
                            autoFocus
                        />
                    </div>
                    <button className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                        <Search size={16} />
                        Search
                    </button>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[70vh] [&::-webkit-scrollbar]:hidden">
                    {/* 2. Filters */}
                    <div className="mb-8">
                        <p className="text-xs text-gray-400 mb-3">I'm searching for</p>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <Wallet size={16} /> Assets
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <ArrowLeftRight size={16} /> Transaction
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <PieChart size={16} /> Portfolio
                            </button>
                        </div>
                    </div>

                    {/* 3. Trending Assets */}
                    <div className="mb-8">
                        <p className="text-xs text-gray-400 mb-3">Trending assets</p>
                        <div className="flex flex-col gap-4">
                            {trendingAssets.map((asset) => (
                                <div key={asset.id} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${asset.color}`}>
                                            {/* Placeholder for coin icon - replace with real images later! */}
                                            <span className="font-bold">{asset.symbol[0]}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-900">{asset.name}</span>
                                            <span className="text-gray-400">{asset.symbol}</span>
                                            <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full font-medium">
                                                {asset.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-semibold text-gray-900">{asset.price}</span>
                                        <div className={`flex items-center gap-1 text-sm font-medium ${asset.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
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
                        <p className="text-xs text-gray-400 mb-3">Recent transactions</p>
                        <div className="flex flex-col gap-4">
                            {recentTransactions.map((tx) => (
                                <div key={tx.id} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        {/* Placeholder Avatar */}
                                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${tx.id}`} alt="avatar" />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-gray-900">{tx.name}</span>
                                            <span className={`text-sm ${tx.statusColor}`}>{tx.status}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-semibold text-gray-900">{tx.amount}</span>
                                        <button className="text-gray-400 hover:text-gray-700">
                                            <MoreVertical size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Footer / Navigation Hints */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 bg-gray-50/50">
                    <span>Showing 10 of 850 results</span>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span>Navigate</span>
                            <div className="flex gap-1">
                                <span className="p-1 border border-gray-200 rounded bg-white shadow-sm"><ArrowDown size={12} /></span>
                                <span className="p-1 border border-gray-200 rounded bg-white shadow-sm"><ArrowUp size={12} /></span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Select</span>
                            <span className="p-1 border border-gray-200 rounded bg-white shadow-sm"><CornerDownLeft size={12} /></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Close</span>
                            <span className="px-1.5 py-0.5 font-semibold border border-gray-200 rounded bg-white shadow-sm">ESC</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}