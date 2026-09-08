import { useQuery } from "@tanstack/react-query";
import { fetchMarkets } from "../features/markets/marketapi";
import MarketsTable from "../features/markets/MarketTable";
import Pagination from "../features/markets/Pagination";
import { useState } from "react";

export default function MarketTab() {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const { data: coins = [], isLoading } = useQuery({
        queryKey: ["coins", page, perPage],
        queryFn: () => fetchMarkets({ pageKey: page, perPage }),
        keepPreviousData: true, // Keeps old data visible while fetching next page smoothly
    });


    return (
        <>
            <main className="p-4 max-w-7xl w-full bg-white rounded-2xl">
                <MarketsTable coins={coins} loading={isLoading} />

                <Pagination
                    page={page}
                    setPage={setPage}
                    perPage={perPage}
                    setPerPage={setPerPage}
                    totalItems={180}
                />
            </main>

        </>
    )
}