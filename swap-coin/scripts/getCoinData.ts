import axios from 'axios';

// 1. Define the shape of the Coin object based on CoinGecko's response
export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

const COINGECKO_API_KEY: string = 'YOUR_FREE_API_KEY'; 
const BASE_URL: string = 'https://api.coingecko.com/api/v3';

/**
 * Fetches a list of coins with full TypeScript support.
 */
export const getCoinData = async (
  page: number = 1, 
  perPage: number = 50
): Promise<Coin[]> => {
  try {
    // We tell Axios that the response data will be an array of Coins
    const response = await axios.get<Coin[]>(`${BASE_URL}/coins/markets`, {
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

    return response.data;
  } catch (error: any) {
    console.error("Error fetching crypto data:", error.response?.data || error.message);
    return [];
  }
};