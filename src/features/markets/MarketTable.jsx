import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchMarkets } from './marketsApi';

export default function MarketTable() {
  const { data: coins, isLoading, isError } = useQuery({
    queryKey: ['markets'],
    queryFn: fetchMarkets
  });

  // Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48 bg-white text-black dark:bg-slate-900 dark:text-white">
        Fetching live market data...
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="flex justify-center items-center h-48 text-red-500 bg-red-50 rounded-lg">
        Failed to load market data. CoinGecko rate limit may be exceeded.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full bg-white text-black dark:bg-slate-900 dark:text-white">
      <table className="w-full text-left text-sm min-w-150">
        <thead className=" border-b border-gray-200 uppercase text-xs">
          <tr>
            <th className="px-6 py-4 font-semibold">Asset</th>
            <th className="px-6 py-4 font-semibold text-right">Price</th>
            <th className="px-6 py-4 font-semibold text-right">24h Change</th>
            <th className="px-6 py-4 font-semibold text-right hidden sm:table-cell">Market Cap</th>
          </tr>
        </thead>
        
        <tbody className="divide-y divide-gray-200">
          {coins.map((coin) => {
            const isPositive = coin.price_change_percentage_24h > 0;
            
            return (
              <tr key={coin.id} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <Link to={`/asset/${coin.id}`} className="flex items-center gap-3">
                    <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-bold group-hover:text-blue-600 transition-colors">
                        {coin.name}
                      </div>
                      <div className="text-xs uppercase font-medium">
                        {coin.symbol}
                      </div>
                    </div>
                  </Link>
                </td>
                
                <td className="px-6 py-4 text-right font-medium">
                  ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                
                <td className={`px-6 py-4 text-right font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {isPositive ? '+' : ''}{coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                
                <td className="px-6 py-4 text-right font-medium hidden sm:table-cell">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}




// import { useQuery } from '@tanstack/react-query';
// import { Link } from 'react-router-dom';
// import { fetchMarkets } from './marketsApi';

// export default function MarketTable() {
//   const { data: coins, isLoading, isError } = useQuery({
//     queryKey: ['markets'],
//     queryFn: fetchMarkets
//   });

//   // Loading State (Skeleton or Simple Text)
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-48 text-slate-500">
//         Fetching live market data...
//       </div>
//     );
//   }

//   // Error State
//   if (isError) {
//     return (
//       <div className="flex justify-center items-center h-48 text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg">
//         Failed to load market data. CoinGecko rate limit may be exceeded.
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto w-full">
//       <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300 min-w-150">
//         <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 uppercase text-xs">
//           <tr>
//             <th className="px-6 py-4 font-semibold">Asset</th>
//             <th className="px-6 py-4 font-semibold text-right">Price</th>
//             <th className="px-6 py-4 font-semibold text-right">24h Change</th>
//             <th className="px-6 py-4 font-semibold text-right hidden sm:table-cell">Market Cap</th>
//           </tr>
//         </thead>
        
//         <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//           {coins.map((coin) => {
//             const isPositive = coin.price_change_percentage_24h > 0;
            
//             return (
//               // Link component makes the entire row clickable to go to the detail page
//               <tr key={coin.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
//                 <td className="px-6 py-4">
//                   <Link to={`/asset/${coin.id}`} className="flex items-center gap-3">
//                     <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
//                     <div>
//                       <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
//                         {coin.name}
//                       </div>
//                       <div className="text-xs text-slate-500 uppercase font-medium">
//                         {coin.symbol}
//                       </div>
//                     </div>
//                   </Link>
//                 </td>
                
//                 <td className="px-6 py-4 text-right font-medium text-slate-900 dark:text-white">
//                   ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//                 </td>
                
//                 <td className={`px-6 py-4 text-right font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//                   {isPositive ? '+' : ''}{coin.price_change_percentage_24h?.toFixed(2)}%
//                 </td>
                
//                 <td className="px-6 py-4 text-right font-medium hidden sm:table-cell">
//                   ${coin.market_cap.toLocaleString()}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }