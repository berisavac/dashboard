import React from "react";

import StreetCameras from "../../components/StreetCameras/StreetCameras.component";
import Currency from "../../components/Currencys/Currencys.component";
import News from "../../components/News/News.component";
import Bitcoin from '../../components/Bitcoin/Bitcoin.component'

import "./HomePage.styles.scss";

import {
  HomePageContainer,
  HomePageDirectory,
  HomePageItem,
} from "./Homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageDirectory>
        {/* <div className="menu-item"></div> */}
        <HomePageItem>
          <Currency />
        </HomePageItem>
        <HomePageItem>
          <News />
        </HomePageItem>
        <HomePageItem>
          <StreetCameras />
        </HomePageItem>
        <HomePageItem>
    <Bitcoin />
        </HomePageItem>
      </HomePageDirectory>
    </HomePageContainer>
  );
};

export default HomePage;
