import newsActionTypes from "./news.types";

const INITIAL_STATE = {
  news: [],
  loading: true,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case newsActionTypes.GET_NEWS_START:
      return {
        ...state,
        loading: true,
      };

    case newsActionTypes.GET_NEWS_SUCCES:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case newsActionTypes.GET_NEWS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
