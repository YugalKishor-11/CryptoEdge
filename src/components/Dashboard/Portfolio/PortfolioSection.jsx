import PortfolioTable from "./PortfolioTable";
import View from "../../../assets/Button2.svg"
import Time from "../../../assets/time-icon.svg"

export default function PortfolioSection() {
    return (
        <section className="w-full  rounded-2xl bg-white  p-4">

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                    <img src={Time} alt="Watchlist" />
                    <h2 className="text-xl font-bold text-slate-900">
                        My Portfolio
                    </h2>
                </div>

                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    <img src={View} alt="button" className="w-11 h-auto" />
                </button>
            </div>

            {/* Portfolio table */}
            <PortfolioTable />

        </section>
    );
}

