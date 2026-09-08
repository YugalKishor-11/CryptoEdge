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
        <div className="grid grid-cols-6 gap-4 items-center px-4 py-1 border-b border-slate-100 hover:bg-slate-50">

            {/* Asset */}
            <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-700">
                        {symbol[0]}
                    </span>
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-900">
                        {name}
                    </p>

                    <p className="text-xs text-slate-500">
                        {symbol}
                    </p>
                </div>

            </div>

            {/* Balance */}
            <div className="text-sm text-slate-700">
                {balance}
            </div>

            {/* Price */}
            <div className="text-sm font-medium text-slate-900">
                {price}
            </div>

            {/* Change */}
            <div
                className={`text-sm font-medium ${isPositive
                    ? "text-green-500"
                    : "text-red-500"
                    }`}
            >
                {change}
            </div>

            {/* Value */}
            <div className="text-sm font-semibold text-slate-900">
                {value}
            </div>

            {/* Action */}
            <div className="">
                <button className="text-sm text-blue-600 hover:text-blue-700">
                    View
                </button>
            </div>

        </div>
    );
}

