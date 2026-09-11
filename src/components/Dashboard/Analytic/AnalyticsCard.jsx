export default function AnalyticsCard() {
    return (
        <div className="flex flex-col h-full lg:w-52 w-full">

            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-200">
                    Uniswap Analytics
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:flex w-full lg:flex-col">

                {/* LP PERP Card */}
                <div className="flex flex-col justify-center mt-4 h-28 lg:w-52 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-colors duration-200">
                    <div className="flex gap-4 items-center">
                        <div className="bg-blue-500 w-5 h-5 rounded-full ml-5 shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            LP PERP
                        </p>
                    </div>
                    <h3 className="mt-1 pl-5 text-2xl font-bold text-slate-900 dark:text-slate-100">
                        0,005 ETH
                    </h3>
                </div>

                {/* APR Card */}
                <div className="flex col-span-1 flex-col justify-center mt-4 lg:mt-0 h-28 lg:w-52 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-colors duration-200">
                    <div className="flex gap-4 items-center">
                        <div className="bg-gray-500 dark:bg-slate-400 w-5 h-5 rounded-full ml-5 shrink-0"></div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            APR
                        </p>
                    </div>
                    <h3 className="mt-1 pl-5 text-2xl font-bold text-slate-900 dark:text-slate-100">
                        115%
                    </h3>
                </div>

            </div>
        </div>
    );
}