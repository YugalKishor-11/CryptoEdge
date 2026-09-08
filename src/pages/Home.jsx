import BalanceSection from '../components/Dashboard/balanceSec/BalanceSection';
import TopMoversSection from '../components/Dashboard/TopMove/TopMoversSection';
import AnalyticsSection from '../components/Dashboard/Analytic/AnalyticsSection';
import PortfolioSection from '../components/Dashboard/Portfolio/PortfolioSection';
import CryptoAISection from '../components/Dashboard/cryptoAI/CryptoAISection';

export default function Home() {
    return (
        <div className="flex flex-col gap-4">

            {/* ROW 1: Balance, Analytics, and Top Movers */}
            <div className="flex flex-col h-auto lg:flex-row lg:h-132 px-4 pt-4 gap-4">
                <div className="flex flex-col w-full lg:w-2/3 p-4 gap-5 bg-white border border-slate-200 rounded-2xl overflow-hidden h-auto">
                    <BalanceSection />
                    <AnalyticsSection />
                </div>
                <div className="flex flex-col lg:w-1/3 min-w-0">
                    <TopMoversSection />
                </div>
            </div>

            {/* ROW 2: Portfolio and Crypto AI Section */}
            <div className="flex flex-col lg:flex-row px-4 pb-4 gap-4">
                <div className="flex w-full lg:w-2/3 h-full">
                    <PortfolioSection />
                </div>
                <div className="w-full lg:w-1/3 h-full">
                    <CryptoAISection />
                </div>
            </div>

        </div>
    );
}