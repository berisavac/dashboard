import coinGecko from "../../api/coinGecko";
import bitcoinActionTypes from "./bitcoin.types";

export const getBitcoinStart = () => ({
  type: bitcoinActionTypes.GET_BITCOIN_START,
});

export const getBitcoinSucces = (bitcoin) => ({
  type: bitcoinActionTypes.GET_BITCOIN_SUCCES,
  payload: bitcoin,
});

export const getBitcoinFailed = (error) => ({
  type: bitcoinActionTypes.GET_BITCOIN_FAILED,
  payload: error,
});

export const getBitcoin = (currentDate) => {
    
  return async (dispatch) => {
    dispatch(getBitcoinStart());
    try {
      const response = await coinGecko.get();
      
      dispatch(getBitcoinSucces(response.data));
    } catch (error) {
      dispatch(getBitcoinFailed());
    }
  };
};
