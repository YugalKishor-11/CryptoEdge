// src/pages/Dashboard.jsx
import { useQuery } from "@tanstack/react-query";
import { fetchMarkets } from "../features/markets/marketsApi";
import MyBalanceCard from "../components/Dashboard/balanceSec/MyBalanceCard";
import SpendingOverviewCard from "../components/Dashboard/spending/SpendingOverviewCard";
import BestToBuy from "../components/Dashboard/buying/BestToBuy";
import FastActionCard from "../components/Dashboard/buying/FastActionCard";
import MarketsTable from "../features/markets/MarketTable";
import CryptoAISec from "../components/Dashboard/cryptoAI/CryptoAISec";
import { useState } from "react";
import FastActionModal from "../components/Dashboard/buying/FastActionModal";
import { useLivePrices } from "../hooks/useLivePrices";

export default function MyAsset() {
  const [showAction, setShowAction] = useState(false);
  const livePrices = useLivePrices();

  const liveCoins = [
    { id: "ethereum", symbol: "ETH", name: "Ethereum", price: livePrices.ETH, badgeColor: "bg-emerald-500", icon: "Ξ" },
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin", price: livePrices.BTC, badgeColor: "bg-amber-500", icon: "₿" },
    { id: "solana", symbol: "SOL", name: "Solana", price: livePrices.SOL, badgeColor: "bg-purple-500", icon: "S" },
  ];

  const { data: coins = [], isLoading } = useQuery({
    queryKey: ["coins"],
    queryFn: fetchMarkets,
  });

  return (
    <main className="p-5 transition-colors duration-200">
      {/* ================= TOP CARDS ================= */}
      <section className="grid lg:grid-cols-3 gap-5 xl:grid-cols-3 grid-cols-1 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col lg:h-auto lg:col-span-2 xl:h-full gap-4 md:grid-cols-2">

          <div className="flex flex-col md:flex-row w-full bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 p-4 rounded-2xl lg:h-1/2 grid-cols-2 gap-5 shadow-sm transition-colors duration-200">
            <MyBalanceCard />
            <SpendingOverviewCard />
          </div>

          <div className="flex">
            <MarketsTable coins={coins} loading={isLoading} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5 grid-cols-1">
          <BestToBuy coins={coins} />
          <FastActionCard onOpen={() => setShowAction(true)} />
          <CryptoAISec />
        </div>
      </section>

      {showAction && (
        <FastActionModal
          isOpen={showAction}
          onClose={() => setShowAction(false)}
          coins={liveCoins}
        />
      )}
    </main>
  );
}