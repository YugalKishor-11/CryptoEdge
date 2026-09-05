import { CheckSquare, LayoutGrid, FileText, Clock } from "lucide-react";

export default function NotificationDropdown() {
    const notificationGroups = [
        {
            date: "Sat, 9 Nov 2024",
            items: [
                {
                    id: 1,
                    icon: <LayoutGrid size={18} className="text-blue-500" />,
                    title: "🚀 Bitcoin is on the move!",
                    desc: "BTC just hit $32,000. Check the trends and decide your n...",
                    isUnread: false,
                },
                {
                    id: 2,
                    icon: <FileText size={18} className="text-blue-500" />,
                    title: "📊 New AI Trade Signal!",
                    desc: "Our AI recommends buying Ethereum (ETH) as momentu...",
                    isUnread: false,
                },
                {
                    id: 3,
                    icon: <Clock size={18} className="text-blue-500" />,
                    title: "📈 Your portfolio is thriving!",
                    desc: "You've gained 12% this week. Check out the top-performin...",
                    isUnread: true, 
                },
            ],
        },
        {
            date: "Wed, 13 Nov 2024",
            items: [
                {
                    id: 4,
                    icon: <LayoutGrid size={18} className="text-blue-500" />,
                    title: "🟢 Greed is taking over the market!",
                    desc: "The Greed Index is at 80. Stay cautious and seize opportu...",
                    isUnread: false,
                },
                {
                    id: 5,
                    icon: <FileText size={18} className="text-blue-500" />,
                    title: "📰 Breaking News in Crypto!",
                    desc: "Major adoption news for Bitcoin—find out how it could im...",
                    isUnread: false,
                },
            ],
        },
    ];

    return (
        // 1. MOBILE: Fixed position, spans from left-4 to right-4.
        // 2. DESKTOP: Absolute position, locked to the right side, fixed 420px width.
        <div className="
            fixed left-4 right-4 top-20 
            sm:absolute sm:left-auto sm:-right-2 sm:top-14 
            sm:w-105 
            bg-white rounded-3xl shadow-2xl border border-gray-100 z-50 overflow-hidden flex flex-col
        ">
            
            {/* Header */}
            <div className="p-5 pb-0">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Notification</h2>
                
                {/* Tabs */}
                <div className="flex items-center justify-between border-b border-gray-100">
                    <div className="flex gap-6">
                        <button className="pb-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                            All
                        </button>
                        <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-600">
                            Unread (17)
                        </button>
                    </div>
                    <button className="pb-3 flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600 shrink-0">
                        <CheckSquare size={16} />
                        <span className="hidden sm:inline">Mark all as read</span>
                    </button>
                </div>
            </div>

            {/* Notification List */}
            {/* 3. MOBILE: Uses 60vh so it doesn't break tall screens. DESKTOP: Max 450px */}
            <div className="overflow-y-auto max-h-[60vh] sm:max-h-112.5 p-2 [&::-webkit-scrollbar]:hidden">
                {notificationGroups.map((group, index) => (
                    <div key={index} className="mb-2">
                        {/* Date Header */}
                        <p className="text-xs font-semibold text-gray-800 px-4 py-3">
                            {group.date}
                        </p>
                        
                        {/* Notification Items */}
                        <div className="flex flex-col gap-1">
                            {group.items.map((item) => (
                                <div 
                                    key={item.id} 
                                    className={`relative flex gap-4 p-3 rounded-2xl cursor-pointer transition-colors ${
                                        item.isUnread ? "bg-gray-50/80" : "hover:bg-gray-50"
                                    }`}
                                >
                                    {/* Icon */}
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="flex-1 pr-4 min-w-0">
                                        <h4 className="text-sm font-semibold text-slate-900 mb-1 truncate">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 leading-relaxed truncate whitespace-normal line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Unread Red Dot */}
                                    {item.isUnread && (
                                        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}