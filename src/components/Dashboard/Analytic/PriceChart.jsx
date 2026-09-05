import AnalyticsChart from "./AnalyticsChart";

export default function PriceChart() {
    return (
        <div className="rounded-2xl 
        
         p-5">

            <div className="flex items-center justify-between mb-5">

                {/* <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Market Analytics
                    </h2>

                    <p className="text-sm text-slate-500">
                        BTC / USD
                    </p>
                </div> */}

                {/* <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-md bg-blue-100 text-blue-600 text-sm">
                        7D
                    </button>

                    <button className="px-3 py-1 rounded-md text-sm text-slate-500">
                        1M
                    </button>

                    <button className="px-3 py-1 rounded-md text-sm text-slate-500">
                        1Y
                    </button>
                </div> */}

            </div>

            {/* Chart placeholder */}
            <div className="h-64 flex items-center justify-center rounded-xl bg-slate-50">
                {/* <p className="text-slate-400"> */}
                    <AnalyticsChart/>
                {/* </p> */}
            </div>

        </div>
    );
}

