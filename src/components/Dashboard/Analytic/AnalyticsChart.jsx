// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// // import { fetchMarkets } from "../../../features/markets/marketsApi";
// import { fetchMainChartData } from "../../../features/markets/fetchMainChartData";

// // const offdata = [
// //   { day: "20", blue: 0.0048, gray: 0.004, },
// //   { day: "21", blue: 0.002, gray: 0.0045, },
// //   { day: "22", blue: 0.0008, gray: 0.0058, },
// //   { day: "23", blue: 0.0016, gray: 0.0028, },
// //   { day: "24", blue: 0.002, gray: 0.0018, },
// //   { day: "25", blue: 0.0024, gray: 0.0008, },
// //   { day: "26", blue: 0.002, gray: 0.0019, },
// //   { day: "27", blue: 0.005, gray: 0.003, },
// // ];

// export default function AnalyticsChart() {

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function loadChart() {
//       try {
//         const result = await fetchMainChartData();
//         //
//         //       const chartData = result.prices.map(([timestamp, price]) => ({
//         //         day: new Date(timestamp).getDate(),
//         //         blue: price,
//         //       }));

//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadChart();
//   }, []);
//   if (loading) {
//     return <p>Loading chart...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart data={data}>

//         <CartesianGrid strokeDasharray="6" vertical={false} />

//         <XAxis dataKey="day"
//           axisLine={true}
//           tickLine={true}
//           interval={23} />

//         <YAxis
//           axisLine={false}
//           tickLine={false}
//           tickCount={7} />

//         <Tooltip />

//         <Line
//           type="linear"
//           dataKey="binance"
//           stroke="#3b82f6"
//           strokeWidth={3}
//           dot={false}
//         />

//         <Line
//           type="linear"
//           dataKey="ethereum"
//           stroke="#9ca3af"
//           strokeWidth={3}
//           dot={false}
//         />

//       </LineChart>
//     </ResponsiveContainer>
//   );
// }

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchMainChartData } from "../../../features/markets/fetchMainChartData";

export default function AnalyticsChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(false);

  // 1. Detect Dark Mode
  useEffect(() => {
    // Function to check if the 'dark' class is present on <html>
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme(); // Initial check

    // Set up a MutationObserver to watch for theme toggles
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // 2. Fetch Chart Data
  useEffect(() => {
    async function loadChart() {
      try {
        const result = await fetchMainChartData();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadChart();
  }, []);

  // Theme-based hex colors
  const axisColor = isDark ? "#94a3b8" : "#64748b"; // slate-400 vs slate-500
  const gridColor = isDark ? "#334155" : "#e2e8f0"; // slate-700 vs slate-200
  const tooltipBg = isDark ? "#1e293b" : "#ffffff"; // slate-800 vs white
  const tooltipBorder = isDark ? "#334155" : "#e2e8f0"; // slate-700 vs slate-200
  const tooltipText = isDark ? "#f8fafc" : "#0f172a"; // slate-50 vs slate-900

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">Loading chart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>

        <CartesianGrid
          strokeDasharray="6"
          vertical={false}
          stroke={gridColor}
        />

        <XAxis
          dataKey="day"
          axisLine={true}
          tickLine={true}
          interval={23}
          stroke={axisColor}
          tick={{ fill: axisColor, fontSize: 12 }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={7}
          stroke={axisColor}
          tick={{ fill: axisColor, fontSize: 12 }}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: tooltipBg,
            borderColor: tooltipBorder,
            color: tooltipText,
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
          itemStyle={{ color: tooltipText }}
        />

        <Line
          type="linear"
          dataKey="binance"
          stroke="#3b82f6" // blue-500
          strokeWidth={3}
          dot={false}
        />

        <Line
          type="linear"
          dataKey="ethereum"
          stroke={isDark ? "#64748b" : "#9ca3af"} // Adjus grey line slightly for dark mode
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}