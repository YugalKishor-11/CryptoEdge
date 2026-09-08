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
// import { fetchMarkets } from "../../../features/markets/marketsApi";
import { fetchMainChartData } from "../../../features/markets/fetchMainChartData";

// const offdata = [
//   { day: "20", blue: 0.0048, gray: 0.004, },
//   { day: "21", blue: 0.002, gray: 0.0045, },
//   { day: "22", blue: 0.0008, gray: 0.0058, },
//   { day: "23", blue: 0.0016, gray: 0.0028, },
//   { day: "24", blue: 0.002, gray: 0.0018, },
//   { day: "25", blue: 0.0024, gray: 0.0008, },
//   { day: "26", blue: 0.002, gray: 0.0019, },
//   { day: "27", blue: 0.005, gray: 0.003, },
// ];

export default function AnalyticsChart() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadChart() {
      try {
        const result = await fetchMainChartData();
        //
        //       const chartData = result.prices.map(([timestamp, price]) => ({
        //         day: new Date(timestamp).getDate(),
        //         blue: price,
        //       }));

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadChart();
  }, []);
  if (loading) {
    return <p>Loading chart...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>

        <CartesianGrid strokeDasharray="6" vertical={false} />

        <XAxis dataKey="day"
          axisLine={true}
          tickLine={true}
          interval={23} />

        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={7} />

        <Tooltip />

        <Line
          type="linear"
          dataKey="binance"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={false}
        />

        <Line
          type="linear"
          dataKey="ethereum"
          stroke="#9ca3af"
          strokeWidth={3}
          dot={false}
        />

      </LineChart>
    </ResponsiveContainer>
  );
}

