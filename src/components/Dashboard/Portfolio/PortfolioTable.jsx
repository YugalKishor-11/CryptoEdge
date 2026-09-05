import PortfolioRow from "./PortfolioRow";

export default function PortfolioTable() {
    const portfolio = [
        {
            id: 1,
            name: "Bitcoin",
            symbol: "BTC",
            balance: "0.25 BTC",
            price: "$105,230",
            change: "+3.98%",
            value: "$26,307"
        },
        {
            id: 2,
            name: "Ethereum",
            symbol: "ETH",
            balance: "2.5 ETH",
            price: "$3,820",
            change: "+2.45%",
            value: "$9,550"
        },
        {
            id: 3,
            name: "Solana",
            symbol: "SOL",
            balance: "8 SOL",
            price: "$210",
            change: "-1.28%",
            value: "$1,680"
        }
    ];

    return (
        <div className="w-full overflow-y-auto">

            {/* Table Header */}
            <div className="min-w-175 grid grid-cols-6 gap-4 px-4 py-3 text-xs font-medium text-slate-500 border-b border-slate-200">

                <span>Asset</span>
                <span>Balance</span>
                <span>Price</span>
                <span>24H Change</span>
                <span>Value</span>
                <span>Action</span>

            </div>

            {/* Rows */}
            <div className="min-w-175 ">
                {portfolio.map((coin) => (
                    <PortfolioRow
                        key={coin.id}
                        {...coin}
                    />
                ))}
            </div>

        </div>
    );
}

