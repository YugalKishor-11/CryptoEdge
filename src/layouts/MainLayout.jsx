// import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import BalanceSection from '../components/Dashboard/balanceSec/BalanceSection';
import TopMoversSection from '../components/Dashboard/TopMove/TopMoversSection';
import AnalyticsSection from '../components/Dashboard/Analytic/AnalyticsSection';
import PortfolioSection from '../components/Dashboard/Portfolio/PortfolioSection';
import CryptoAISection from '../components/Dashboard/cryptoAI/CryptoAISection';
import { useState } from 'react';
import SearchModal from '../features/search/SearchModal';

export default function MainLayout() {
    const [showSearch,setShowSearch]=useState(false);
    return (
        <>
            <div className="h-screen w-full flex flex-col  bg-[#cee4fa] text-black dark:bg-slate-900 dark:text-white overflow-hidden ">
                <header className="shrink-0 p-4 pb-2 border-slate-200 dark:border-slate-800 flex justify-between">

                    <Navbar onClick={()=>setShowSearch(true)} />
                </header>

                <main className="flex flex-1 flex-col overflow-auto [&::-webkit-scrollbar]:hidden pl-4 pr-4   ">
                    <div className="flex flex-col h-auto lg:flex-row lg:h-132  p-4 gap-4">
                        <div className="flex flex-col  w-full lg:w-2/3 p-4  gap-5 border-0 bg-white border-slate-200 rounded-2xl overflow-hidden h-auto">
                            <BalanceSection />

                            <AnalyticsSection />
                            {/* The current route's page component will render here */}
                        </div>
                        <div className="flex flex-col lg:w-1/3  min-w-0   ">
                            <TopMoversSection />
                        </div>

                    </div>
                    <div className=" flex flex-col lg:flex-row p-4 gap-4  ">
                        <div className="flex w-full lg:w-2/3 h-full ">
                            <PortfolioSection />
                        </div>
                        <div className="w-full lg:w-1/3 h-full ">
                            <CryptoAISection />
                        </div>

                    </div>

                </main>
                
                <footer></footer>
            </div>
            {showSearch &&(
                <SearchModal
                onClose={()=>setShowSearch(false)}
                />
            )
            }

        </>
    );
}