const baseUrl = (curr, perPage) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false`;
};

export { baseUrl };
