import TradePerformanceCard from "../components/Dashboard/Trade/TradePerformanceCard";
import MarketOverviewCard from "../components/Dashboard/Trade/MarketOverviewCard";
import AccountsCard from "../components/Dashboard/Trade/AccountsCard";
import BestToBuyCard from "../components/Dashboard/buying/BestToBuyCard";
import CryptoAiSec from "../components/Dashboard/cryptoAI/CryptoAISec";

export default function Trade() {
    return (
        <div className="flex flex-col p-4  gap-6 ">
            <div className="flex flex-col lg:flex-row gap-5 ">
                <div className=" w-full lg:w-2/3 ">
                    <TradePerformanceCard />


                </div>
                <div className=" w-full lg:w-1/3">
                    <MarketOverviewCard />
                </div>

            </div>
            <div className="flex flex-col  lg:flex-row gap-5">
                <div className="flex flex-col lg:h-64 lg:w-2/3 md:flex-row grid-cols-1 md:grid-cols-2 gap-5">
                    <div className=" w-full md:w-1/3 ">
                        <AccountsCard />
                    </div>
                    <div className="w-full md:w-2/3 ">
                        <BestToBuyCard />
                    </div>

                </div>

                {/* Right Side:AI Automation */}
                <div className="lg:w-1/3">

                    <CryptoAiSec />
                </div>
            </div>


        </div>
    );
}