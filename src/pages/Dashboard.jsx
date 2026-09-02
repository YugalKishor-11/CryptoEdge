import MarketTable from '../features/markets/MarketTable';
import SummaryCard from '../components/SummaryCard';


export default function Dashboard() {
    // In Sprint 2, you will replace these hardcoded values by calculating them 
    // dynamically from the user's saved local storage holdings.
    return (
        <div className="space-y-6">
            {/* Dashboard Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
                    <p className="text-slate-500 dark:text-slate-400">Your crypto portfolio at a glance</p>
                </div>
            </div>

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SummaryCard
                    title="Total Portfolio Value"
                    value="$0.00"
                    subtitle="Connect assets in Sprint 2"
                />
                <SummaryCard
                    title="24h Profit / Loss"
                    value="$0.00"
                    subtitle="0.00%"
                    trend="up"
                />
                <SummaryCard
                    title="Active Alerts"
                    value="0"
                    subtitle="No price alerts set"
                />
            </div>

            {/* Main Market Data Section */}
            <div className="bg-white text-black dark:bg-slate-900 dark:text-white rounded-xl border border-gray-200 p-1 md:p-6 shadow-sm">
                <div className="mb-4 px-4 md:px-0 flex justify-between items-center">
                    <h3 className="text-lg font-bold">Live Market Data</h3>
                </div>

                {/* The table component you created previously */}
                <MarketTable />
            </div>
        </div>
    );
}