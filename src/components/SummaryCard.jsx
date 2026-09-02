export default function SummaryCard({ title, value, subtitle, trend }) {
  const isPositive = trend === 'up';
  
  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      <div className="text-2xl font-bold mb-2">{value}</div>
      
      <div className="flex items-center text-sm">
        {trend && (
          <span className={`font-medium mr-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '↑' : '↓'}
          </span>
        )}
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

// export default function SummaryCard({ title, value, subtitle, trend }) {
//   const isPositive = trend === 'up';
  
//   return (
//     <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
//       <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</h3>
//       <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{value}</div>
      
//       <div className="flex items-center text-sm">
//         {trend && (
//           <span className={`font-medium mr-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
//             {isPositive ? '↑' : '↓'}
//           </span>
//         )}
//         <span className="text-slate-500 dark:text-slate-400">{subtitle}</span>
//       </div>
//     </div>
//   );
// }