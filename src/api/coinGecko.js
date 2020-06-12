import axios from "axios";

export default axios.create({
  // baseURL:
    // " https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-01-2020",
  baseURL:
    "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
});
