import { combineReducers } from "redux";
import currencyReducer from "./currency/currency.reducer";
import newsReducer from "./news/news.reducer";
import coinReducer from "./bitcoin/bitcoin.reducer";

export default combineReducers({
  currency: currencyReducer,
  news: newsReducer,
  coin: coinReducer,
});
