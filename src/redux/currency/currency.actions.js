import fixer from "../../api/fixer";
import currencyActionTypes from "./currency.types";

export const getCurrencyStart = () => ({
  type: currencyActionTypes.GET_CURRENCY_START,
});

export const getCurrencySucces = (currency) => ({
  type: currencyActionTypes.GET_CURRENCY_SUCCES,
  payload: currency,
});

export const getCurrencyFailed = (error) => ({
  type: currencyActionTypes.GET_CURRENCY_FAILED,
  payload: error,
});

export const getCurrency = () => {
  return async (dispatch) => {
    dispatch(getCurrencyStart());
    try {
      const response = await fixer.get();
      dispatch(getCurrencySucces(response.data.rates));
    } catch (error) {
      dispatch(getCurrencyFailed());
    }
  };
};
