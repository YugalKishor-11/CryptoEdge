export default function PortfolioRow({
    name,
    symbol,
    balance,
    price,
    change,
    value
}) {
    const isPositive = change.startsWith("+");

    return (
        <div className="grid grid-cols-6 gap-4 items-center px-4 py-2 border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200">

            {/* Asset */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-colors duration-200">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors">
                        {symbol[0]}
                    </span>
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                        {name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
                        {symbol}
                    </p>
                </div>
            </div>

            {/* Balance */}
            <div className="text-sm text-slate-700 dark:text-slate-300 transition-colors">
                {balance}
            </div>

            {/* Price */}
            <div className="text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors">
                {price}
            </div>

            {/* Change */}
            <div
                className={`text-sm font-medium transition-colors ${isPositive
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
            >
                {change}
            </div>

            {/* Value */}
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                {value}
            </div>

            {/* Action */}
            <div className="">
                <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer">
                    View
                </button>
            </div>

        </div>
    );
}