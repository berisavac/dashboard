import newsApi from "../../api/newsApi";
import newsActionTypes from "./news.types";

export const getNewsStart = () => ({
  type: newsActionTypes.GET_NEWS_START,
});

export const getNewsSucces = (news) => ({
  type: newsActionTypes.GET_NEWS_SUCCES,
  payload: news,
});

export const getNewsFailed = (error) => ({
  type: newsActionTypes.GET_NEWS_FAILED,
  payload: error.message,
});

export const getNews = () => {
  return async (dispatch) => {
    dispatch(getNewsStart());

    try {
      const response = await newsApi.get();

      dispatch(getNewsSucces(response.data.articles));
    } catch (error) {
      dispatch(getNewsFailed());
    }
  };
};
