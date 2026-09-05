import AnalyticsCard from "./AnalyticsCard";
import PriceChart from "./PriceChart";

export default function AnalyticsSection() {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* Analytics card */}
            <div className="lg:col-span-1">
                <AnalyticsCard />
            </div>

            {/* Chart */}
            <div className="lg:col-span-3 ">
                <PriceChart />
            </div>

        </section>
    );
}
