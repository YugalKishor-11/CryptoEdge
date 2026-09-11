import AnalyticsCard from "./AnalyticsCard";
import PriceChart from "./PriceChart";

export default function AnalyticsSection() {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 text-slate-800 dark:text-slate-100 transition-colors duration-200">

            {/* Analytics card */}
            <div className="lg:col-span-1 flex flex-col">
                <AnalyticsCard />
            </div>

            {/* Chart */}
            <div className="lg:col-span-3 flex flex-col">
                <PriceChart />
            </div>

        </section>
    );
}