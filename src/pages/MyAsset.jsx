// src/pages/Dashboard.jsx
import { useQuery } from "@tanstack/react-query";
import { fetchMarkets } from "../features/markets/marketsApi";
import MyBalanceCard from "../components/Dashboard/balanceSec/MyBalanceCard";
import SpendingOverviewCard from "../components/Dashboard/spending/SpendingOverviewCard";
import BestToBuyCard from "../components/Dashboard/buying/BestToBuy";
import FastActionCard from "../components/Dashboard/buying/FastActionCard";
import MarketsTable from "../features/markets/MarketTable";
import CryptoAISec from "../components/Dashboard/cryptoAI/CryptoAISec";
import { useState } from "react";
import FastActionModal from "../components/Dashboard/buying/FastActionModal";


export default function MyAsset() {
  const [showAction, setShowAction] = useState(false);

  const { data: coins = [], isLoading } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchMarkets,
  });

  return (
    <main className=" p-5 ">
      {/* ================= TOP CARDS ================= */}
      <section className=" grid lg:grid-cols-3 gap-5 xl:grid-cols-3 grid-cols-1  items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col lg:h-auto lg:col-span-2 xl:h-full gap-4 md:grid-cols-2">

          <div className="flex flex-col md:flex-row w-full lg:h-1/2 grid-cols-2 gap-5">
            <MyBalanceCard />
            <SpendingOverviewCard />

          </div>
          <div className="flex">
            <MarketsTable coins={coins} loading={isLoading} />
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="space-y-5 grid-cols-1 ">
          <BestToBuyCard coins={coins} />
          <FastActionCard onOpen={() => setShowAction(true)} />
          <CryptoAISec />
        </div>
      </section>

      {showAction &&
        <FastActionModal
          isOpen={showAction}
          onClose={() => setShowAction(false)} />
      }

    </main>

  );
}

