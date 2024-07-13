import axios from 'axios';

const API_KEY = 'RIBXT3XYLI69PC0Q';

export const getStockData = async (symbol: string, func: string) => {
  const response = await axios.get(`https://www.alphavantage.co/query`, {
    params: {
      function: func,
      symbol: symbol,
      apikey: API_KEY,
    },
  });
  return response.data;
};
