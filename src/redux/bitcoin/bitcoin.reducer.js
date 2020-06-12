import bitcoinActionTypes from "./bitcoin.types";
const INITIAL_STATE = {
  coin: null,
  loading: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bitcoinActionTypes.GET_BITCOIN_START:
      return {
        ...state,
        loading: true,
      };
    case bitcoinActionTypes.GET_BITCOIN_SUCCES:
      return {
        ...state,
        coin: action.payload,
        loading: false,
      };
    case bitcoinActionTypes.GET_BITCOIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
