import PortfolioTable from "./PortfolioTable";
import View from "../../../assets/Button2.svg"
import Time from "../../../assets/time-icon.svg"

export default function PortfolioSection() {
    return (
        <section className="w-full rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-transparent dark:border-slate-800 transition-colors duration-200">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                {/* Added gap-2 for better spacing between icon and text */}
                <div className="flex items-center gap-2">
                    <img src={Time} alt="Watchlist" className="dark:opacity-90 transition-opacity" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
                        My Portfolio
                    </h2>
                </div>

                <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <img src={View} alt="button" className="w-11 h-auto hover:opacity-80 dark:opacity-90 dark:hover:opacity-100 transition-opacity" />
                </button>
            </div>

            {/* Portfolio table */}
            <PortfolioTable />

        </section>
    );
}