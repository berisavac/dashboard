import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBitcoin } from "../../redux/bitcoin/bitcoin.actions";

const Bitcoin = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.coin.coin);
  // console.log(data);

  useEffect(() => {
    dispatch(getBitcoin());
  }, [dispatch]);
  return (
    <div>
      {data && (
        <div>
          <p>{}</p>
          <img src={`${data.image.thumb}`} alt="" />
        </div>
      )}
    </div>
  );
};

export default Bitcoin;
