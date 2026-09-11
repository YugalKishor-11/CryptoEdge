export default function TopMover({ name, symbol, price, change, image }) {
    const isPositive = change.startsWith("+");

    return (
        <div className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 cursor-pointer">

            {/* Coin */}
            <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-colors duration-200">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        <img src={image} alt="img" className="h-8 w-auto" />
                    </span>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                        {name}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
                        {symbol}
                    </p>
                </div>

            </div>

            <p
                className={`text-xs font-medium transition-colors ${isPositive
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
            >
                {change}
            </p>

            {/* Price */}
            <div className="text-right">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors">
                    {price}
                </p>
            </div>

        </div>
    );
}