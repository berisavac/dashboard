import React, { useEffect } from "react";

import Currency from "../Currency/Currency.component";

import { util } from "../../redux/currency/currency.utils";

import { getCurrency } from "../../redux/currency/currency.actions";
import { useDispatch, useSelector } from "react-redux";

import {CurrencyTitle} from './Currencys.styles'

// const images = require.context ( '../../assets', true, /\.png$/ )

const Currencys = () => {
  const dispatch = useDispatch();
  const currData = useSelector((state) => state.currency.currency);

  useEffect(() => {
    dispatch(getCurrency());
    return () => {};
  }, [dispatch]);

  return (
    <div>
      <CurrencyTitle>The base currency is the EUR</CurrencyTitle>
      {currData &&
        util(currData).map(({ currency, value, id }) => {
          return <Currency key={id} currency={currency} value={value} />;
        })}
    </div>
  );
};

export default Currencys;
