import React, { useState, useEffect } from "react";

import { getNews } from "../../redux/news/news.actions";
import { useDispatch, useSelector } from "react-redux";

// import "./News.styles.scss";

import { NewsContainer, Article, Img, Title } from "./News.styles";

import Spinner from "react-spinner-material";
import CustomButton from "../CustomButton/CustomButton.component";

const News = () => {
  const [article, setState] = useState(null);
  const dispatchNews = useDispatch();
  const newsData = useSelector((state) => state.news.news);

  useEffect(() => {
    dispatchNews(getNews());
  }, [dispatchNews]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setState(newsData[index]);
      index = (index + 1) % newsData.length;
    }, 5000);
    return () => clearInterval(interval);
  }, [newsData]);

  return (
    <NewsContainer>
      {article ? (
        <Article>
          <Title>{article.title}</Title>
          <Img src={`${article.urlToImage}`} alt="" />
          <CustomButton onClick={() => window.open(`${article.url}`)}>
            Find out more...
          </CustomButton>
        </Article>
      ) : (
        <Spinner size={120} color={"#950740"} position={"center"} />
      )}
    </NewsContainer>
  );
};

export default News;
