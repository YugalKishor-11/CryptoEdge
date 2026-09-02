import axios from 'axios';

export const coinGeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  // The free public API is heavily rate-limited. 
  // If you hit a 429 Error later, you can add a free demo key to the headers here.
});