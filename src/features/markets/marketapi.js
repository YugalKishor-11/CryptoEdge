// src/features/markets/marketapi.js
import { coinGeckoApi } from '../../config/api';

export const fetchMarkets = async ({ pageKey = 1, perPage = 10 }) => {
  const response = await coinGeckoApi.get('/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: perPage,
      page: pageKey,
      sparkline: true
    }
  });

  return response.data;
};