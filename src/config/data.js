const coinData = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 2412687,
    market_cap: 46694022829271,
    market_cap_rank: 1,
    fully_diluted_valuation: 50636692129300,
    total_volume: 1537117001798,
    high_24h: 2422044,
    low_24h: 2345902,
    price_change_24h: 48650,
    price_change_percentage_24h: 2.0579,
    market_cap_change_24h: 973076926278,
    market_cap_change_percentage_24h: 2.1283,
    circulating_supply: 19364900,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 5128383,
    ath_change_percentage: -52.86438,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 3993.42,
    atl_change_percentage: 60431.95641,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-05T16:43:57.255Z",
    price_change_percentage_24h_in_currency: 2.0579047845844904,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 162340,
    market_cap: 19536350187557,
    market_cap_rank: 2,
    fully_diluted_valuation: 19536350187557,
    total_volume: 845571188134,
    high_24h: 163202,
    low_24h: 152873,
    price_change_24h: 8002.75,
    price_change_percentage_24h: 5.18524,
    market_cap_change_24h: 975878185992,
    market_cap_change_percentage_24h: 5.25783,
    circulating_supply: 120369776.384031,
    total_supply: 120369776.384031,
    max_supply: null,
    ath: 362338,
    ath_change_percentage: -55.09318,
    ath_date: "2021-11-10T14:24:19.604Z",
    atl: 28.13,
    atl_change_percentage: 578312.78725,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 88.9245799504402,
      currency: "btc",
      percentage: 8892.45799504402,
    },
    last_updated: "2023-05-05T16:43:57.294Z",
    price_change_percentage_24h_in_currency: 5.185235034920666,
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 38.02,
    market_cap: 1970694702837,
    market_cap_rank: 6,
    fully_diluted_valuation: 3801654243251,
    total_volume: 72149625974,
    high_24h: 38.11,
    low_24h: 37.33,
    price_change_24h: 0.636116,
    price_change_percentage_24h: 1.70139,
    market_cap_change_24h: 37656495321,
    market_cap_change_percentage_24h: 1.94805,
    circulating_supply: 51837820505,
    total_supply: 99988965239,
    max_supply: 100000000000,
    ath: 215.1,
    ath_change_percentage: -82.3456,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.159343,
    atl_change_percentage: 23732.49674,
    atl_date: "2013-08-16T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-05T16:44:00.145Z",
    price_change_percentage_24h_in_currency: 1.7013929721230874,
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    current_price: 1839.74,
    market_cap: 725402811621,
    market_cap_rank: 11,
    fully_diluted_valuation: 1006552956205,
    total_volume: 32546525818,
    high_24h: 1843.5,
    low_24h: 1768.67,
    price_change_24h: 50.68,
    price_change_percentage_24h: 2.83271,
    market_cap_change_24h: 21404117256,
    market_cap_change_percentage_24h: 3.04036,
    circulating_supply: 394237897.870571,
    total_supply: 547035819.536916,
    max_supply: null,
    ath: 19286.66,
    ath_change_percentage: -90.45971,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 38.03,
    atl_change_percentage: 4738.84138,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2023-05-05T16:44:00.437Z",
    price_change_percentage_24h_in_currency: 2.8327146567972328,
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    current_price: 26787,
    market_cap: 4226480551508,
    market_cap_rank: 4,
    fully_diluted_valuation: 5353828782980,
    total_volume: 40055430710,
    high_24h: 26880,
    low_24h: 26428,
    price_change_24h: 213.33,
    price_change_percentage_24h: 0.80278,
    market_cap_change_24h: 33664074250,
    market_cap_change_percentage_24h: 0.8029,
    circulating_supply: 157886280,
    total_supply: 157900174,
    max_supply: 200000000,
    ath: 50351,
    ath_change_percentage: -46.83859,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 2.58,
    atl_change_percentage: 1035490.36681,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-05T16:44:03.152Z",
    price_change_percentage_24h_in_currency: 0.8027830783681484,
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    current_price: 6.48,
    market_cap: 900857444966,
    market_cap_rank: 9,
    fully_diluted_valuation: null,
    total_volume: 30697890967,
    high_24h: 6.5,
    low_24h: 6.37,
    price_change_24h: 0.059283,
    price_change_percentage_24h: 0.92338,
    market_cap_change_24h: 7843524946,
    market_cap_change_percentage_24h: 0.87832,
    circulating_supply: 139221856383.705,
    total_supply: null,
    max_supply: null,
    ath: 53.62,
    ath_change_percentage: -87.90207,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.00552883,
    atl_change_percentage: 117223.72893,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-05T16:44:01.523Z",
    price_change_percentage_24h_in_currency: 0.9233820129772814,
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    current_price: 32.32,
    market_cap: 1132190723911,
    market_cap_rank: 7,
    fully_diluted_valuation: 1453803746406,
    total_volume: 19331173323,
    high_24h: 32.42,
    low_24h: 31.51,
    price_change_24h: 0.438769,
    price_change_percentage_24h: 1.37621,
    market_cap_change_24h: 15853346689,
    market_cap_change_percentage_24h: 1.42012,
    circulating_supply: 35045020830.3234,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 225.26,
    ath_change_percentage: -85.65798,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 1.38,
    atl_change_percentage: 2248.90051,
    atl_date: "2017-11-02T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-05T16:44:03.894Z",
    price_change_percentage_24h_in_currency: 1.376214792294288,
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
    image:
      "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
    current_price: 589.74,
    market_cap: 305031629079,
    market_cap_rank: 21,
    fully_diluted_valuation: 589889085379,
    total_volume: 14837974777,
    high_24h: 592.8,
    low_24h: 569.26,
    price_change_24h: 14.83,
    price_change_percentage_24h: 2.5789,
    market_cap_change_24h: 8102610173,
    market_cap_change_percentage_24h: 2.7288,
    circulating_supply: 517099971.2305644,
    total_supply: 1000000000,
    max_supply: 1000000000,
    ath: 3862.15,
    ath_change_percentage: -84.72588,
    ath_date: "2021-05-10T00:13:57.214Z",
    atl: 9.55,
    atl_change_percentage: 6079.22491,
    atl_date: "2017-11-29T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-05T16:44:02.119Z",
    price_change_percentage_24h_in_currency: 2.578895048018261,
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
    image:
      "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
    current_price: 478.98,
    market_cap: 588856765956,
    market_cap_rank: 12,
    fully_diluted_valuation: 627631677906,
    total_volume: 12470248757,
    high_24h: 481.6,
    low_24h: 460.11,
    price_change_24h: 13.9,
    price_change_percentage_24h: 2.9897,
    market_cap_change_24h: 17696720156,
    market_cap_change_percentage_24h: 3.09838,
    circulating_supply: 1229389610.09065,
    total_supply: 1310342189.12097,
    max_supply: null,
    ath: 4095.22,
    ath_change_percentage: -88.30678,
    ath_date: "2021-11-04T14:10:09.301Z",
    atl: 202.26,
    atl_change_percentage: 136.75959,
    atl_date: "2020-08-19T03:44:11.556Z",
    roi: null,
    last_updated: "2023-05-05T16:43:58.204Z",
    price_change_percentage_24h_in_currency: 2.9897001214770027,
  },
  {
    id: "stellar",
    symbol: "xlm",
    name: "Stellar",
    image:
      "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157",
    current_price: 7.69,
    market_cap: 206046332882,
    market_cap_rank: 29,
    fully_diluted_valuation: 384714614283,
    total_volume: 3570793392,
    high_24h: 7.72,
    low_24h: 7.56,
    price_change_24h: 0.07298,
    price_change_percentage_24h: 0.95784,
    market_cap_change_24h: 2183644791,
    market_cap_change_percentage_24h: 1.07114,
    circulating_supply: 26780071617.7926,
    total_supply: 50001787359.1294,
    max_supply: 50001787359.1294,
    ath: 58.01,
    ath_change_percentage: -86.74696,
    ath_date: "2021-05-16T09:48:45.220Z",
    atl: 0.02966141,
    atl_change_percentage: 25818.22416,
    atl_date: "2015-03-05T00:00:00.000Z",
    roi: null,
    last_updated: "2023-05-05T16:43:59.060Z",
    price_change_percentage_24h_in_currency: 0.9578376447525858,
  },
];

export { coinData };
