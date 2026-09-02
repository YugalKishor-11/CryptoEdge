import { 
  Wallet, 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  ArrowRightLeft 
} from 'lucide-react';

export default function WalletPortfolio() {
  // Mock data for the user's wallet holdings
  const holdings = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', balance: 0.145, price: 64230.50, change24h: 2.4 },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', balance: 2.4, price: 3450.75, change24h: -1.2 },
    { id: 'tether', name: 'Tether', symbol: 'USDT', balance: 1250.00, price: 1.00, change24h: 0.01 },
  ];

  // Calculate total portfolio value
  const totalValue = holdings.reduce((total, coin) => total + (coin.balance * coin.price), 0);

  return (
    <div className="bg-white text-black rounded-xl border border-gray-200 p-6 shadow-sm">
      
      {/* 1. Header & Total Balance Section */}
      <div className="flex items-center gap-2 mb-2 text-gray-500">
        <Wallet className="w-5 h-5" />
        <h3 className="font-semibold text-sm uppercase tracking-wider">Total Balance</h3>
      </div>
      
      <div className="flex items-end gap-3 mb-6">
        <h2 className="text-4xl font-bold">
          ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h2>
        <span className="text-green-500 font-medium mb-1 flex items-center text-sm">
          + $432.50 (Today)
        </span>
      </div>

      {/* 2. Quick Action Buttons */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <button className="flex flex-col items-center justify-center py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
          <ArrowDownToLine className="w-5 h-5 mb-1 text-blue-600" />
          <span className="text-sm font-medium">Deposit</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
          <ArrowUpFromLine className="w-5 h-5 mb-1 text-blue-600" />
          <span className="text-sm font-medium">Withdraw</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
          <ArrowRightLeft className="w-5 h-5 mb-1 text-blue-600" />
          <span className="text-sm font-medium">Swap</span>
        </button>
      </div>

      {/* 3. Your Assets List */}
      <div>
        <h3 className="text-lg font-bold mb-4">Your Assets</h3>
        <div className="divide-y divide-gray-100">
          {holdings.map((coin) => {
            const isPositive = coin.change24h > 0;
            const assetValue = coin.balance * coin.price;

            return (
              <div key={coin.id} className="flex justify-between items-center py-3">
                
                {/* Left Side: Coin Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                    {coin.symbol[0]}
                  </div>
                  <div>
                    <div className="font-bold">{coin.name}</div>
                    <div className="text-sm text-gray-500">
                      {coin.balance} {coin.symbol}
                    </div>
                  </div>
                </div>

                {/* Right Side: Fiat Value & Change */}
                <div className="text-right">
                  <div className="font-bold">
                    ${assetValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositive ? '+' : ''}{coin.change24h}%
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}