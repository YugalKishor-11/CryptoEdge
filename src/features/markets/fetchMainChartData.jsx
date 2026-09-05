import { coinGeckoApi } from '../../config/api';

export const fetchMainChartData = async () => {
  try {
    // 1. Fetch historical data for TWO coins over the last 7 days simultaneously
    const [mainCoin, compareCoin] = await Promise.all([
      coinGeckoApi.get('/coins/binancecoin/market_chart', { params: { vs_currency: 'usd', days: 7} }),
      coinGeckoApi.get('/coins/ethereum/market_chart', { params: { vs_currency: 'usd', days: 7 } })
    ]);

    const mainPrices = mainCoin.data.prices;
    const comparePrices = compareCoin.data.prices;

    // 2. Loop through the first array and merge the second array's prices into it
    return mainPrices.map((item, index) => {
      const timestamp = item[0];
      const bluePrice = item[1];
      
      // Get the matching price from the second array (fallback to 0 if missing)
      const grayPrice = comparePrices[index] ? comparePrices[index][1] : 0; 

      return {
        day: new Date(timestamp).getDate(), // Extracts just the day of the month (e.g., 20, 21, 22)
        binance: bluePrice,
        ethereum: grayPrice,
      };
    });

  } catch (error) {
    console.error("Failed to fetch main chart data:", error);
    throw error;
  }
};