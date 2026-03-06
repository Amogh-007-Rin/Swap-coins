import axios from 'axios';

// Replace with your actual API key from CoinGecko's developer dashboard
const COINGECKO_API_KEY = 'YOUR_FREE_API_KEY'; 

const BASE_URL = 'https://api.coingecko.com/api/v3';

/**
 * Fetches a list of coins with their images and market data.
 * @param {number} page - The page number for pagination.
 * @param {number} perPage - Number of coins per request (max 250).
 * @returns {Promise<Array>} - Array of coin objects.
 */
export const getCoinData = async (page = 1, perPage = 50) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: perPage,
        page: page,
        sparkline: false,
      },
      headers: {
        'x-cg-demo-api-key': COINGECKO_API_KEY,
      }
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto data:", error.response?.data || error.message);
    return [];
  }
};
getCoinData()
// Default export if you want to import the whole file
export default { getCoinData };