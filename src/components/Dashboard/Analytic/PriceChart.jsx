import AnalyticsChart from "./AnalyticsChart";

export default function PriceChart() {
    return (
        <div className="rounded-2xl m-5 pt-2 bg-white dark:bg-slate-900  border-slate-100 dark:border-slate-800 transition-colors duration-200">

            {/* <div className="flex items-center justify-between mb-5">
                {/* Add your title or filters here */}
            {/* Example: <h2 className="font-bold text-slate-800 dark:text-slate-100">Price Chart</h2> */}
            {/* </div> */}

            {/* Chart placeholder */}
            <div className="h-64 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
                <AnalyticsChart />
            </div>

        </div>
    );
}