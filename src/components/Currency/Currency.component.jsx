import React from "react";

// import "./Currency.styles.scss";
import { CurrencyContainer, Image } from "./Currency.styles";
import Images from "../../assets/usa.png";

const Currency = ({ currency, value }) => {
  return (
    <CurrencyContainer>
      <Image src={Images}  alt="usa" />
      {`${currency}: ${value}`}
    </CurrencyContainer>
  );
};

export default Currency;
