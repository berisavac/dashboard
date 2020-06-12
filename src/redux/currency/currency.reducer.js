import currencyActionTypes from "./currency.types";


const INITIAL_STATE = {
  currency: null,
  loading: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case currencyActionTypes.GET_CURRENCY_START:
      return {
        ...state,
        loading: true,
      };
    case currencyActionTypes.GET_CURRENCY_SUCCES:
      return {
        ...state,
        currency: action.payload,
        loading: false,
      };
    case currencyActionTypes.GET_CURRENCY_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
