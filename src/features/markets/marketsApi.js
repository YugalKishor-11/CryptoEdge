import { coinGeckoApi } from '../../config/api';

export const fetchMarkets = async () => {
  const response = await coinGeckoApi.get('/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 7,
      page: 1,
      sparkline: false
    }
  });
  
  return response.data;
};