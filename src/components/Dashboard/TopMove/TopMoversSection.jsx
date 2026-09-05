import { useState, useEffect } from "react";
import TopMover from "./TopMover";
import Data from "../../../assets/data.svg";
import Button from "../../../assets/Button2.svg";
import { fetchMarkets } from "../../../features/markets/marketsApi";

export default function TopMoversSection() {
    const [movers, setMovers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadMovers() {
            try {
                // This calls the API function we built earlier
                const data = await fetchMarkets();
                setMovers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadMovers();
    }, []);

    return (
        <section className="flex flex-col h-full lg:min-w-full rounded-2xl bg-white border border-slate-200  p-4">

            <div className="shrink-0 flex items-center justify-between mb-5 ">
                <div className="flex items-center gap-2">
                    <img src={Data} alt="data" className="w-10 h-auto" />
                    <h2 className="text-xl font-semibold text-slate-900">
                        Top Movers
                    </h2>
                </div>

                <button className="text-sm hover:text-blue-700">
                    <img src={Button} alt="three dot" className="w-11 h-auto flex items-center " />
                </button>
            </div>

            {/* Handle Loading & Error States */}
            {loading && <p className="text-center text-slate-500 py-4">Loading movers...</p>}
            {error && <p className="text-center text-red-500 py-4">Failed to load data</p>}

            {/* Render Data */}
            {!loading && !error && (

                <div className="space-y-3 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden ">
                    {movers.map((coin) => {
                        const currentPrice = coin.current_price || 0;
                        const formattedPrice = `$${currentPrice.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}`;

                        const percentageChange = coin.price_change_percentage_24h || 0;
                        const isPositive = percentageChange >= 0;
                        const formattedChange = `${isPositive ? '+' : ''}${percentageChange.toFixed(2)}%`;

                        return (
                            <TopMover
                                key={coin.id}
                                name={coin.name}
                                // CoinGecko returns lowercase symbols (e.g., "btc"), so we uppercase them
                                symbol={coin.symbol.toUpperCase()}
                                price={formattedPrice}
                                change={formattedChange}
                                // I added the image prop here just in case your <TopMover /> wants to display the real coin logos!
                                image={coin.image}
                            />
                        );
                    })}
                </div>


            )}

        </section>
    );
}


//const movers = [
//         {
//             id: 1,
//             name: "Bitcoin",
//             symbol: "BTC",
//             price: "$7,598.00",
//             change: "+3.98%"
//         },
//         {
//             id: 2,
//             name: "Ethereum",
//             symbol: "ETH",
//             price: "$3,245.00",
//             change: "+2.45%"
//         },
//         {
//             id: 3,
//             name: "Cardano",
//             symbol: "ADA",
//             price: "$2,598.00",
//             change: "+3.98"
//         },
//         {
//             id: 4,
//             name: "Solana",
//             symbol: "SOL",
//             price: "$210.50",
//             change: "-1.28%"
//         },
//         {
//             id: 5,
//             name: "XRP",
//             symbol: "XRP",
//             price: "$2.85",
//             change: "+4.21%"
//         }
//     ];