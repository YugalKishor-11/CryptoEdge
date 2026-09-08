export default function TopMover({ name, symbol, price, change, image }) {
    const isPositive = change.startsWith("+");

    return (
        <div className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50">

            {/* Coin */}
            <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-700">
                        <img src={image} alt="img" className="h-8 w-auto" />
                    </span>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                        {name}
                    </h3>

                    <p className="text-xs text-slate-500">
                        {symbol}
                    </p>
                </div>

            </div>
            <p
                className={`text-xs font-medium ${isPositive
                    ? "text-green-500"
                    : "text-red-500"
                    }`}
            >
                {change}
            </p>

            {/* Price + Change */}
            <div className="text-right">

                <p className="text-sm font-semibold text-slate-900">
                    {price}
                </p>

            </div>

        </div>
    );
}

