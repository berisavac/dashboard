import React, { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton.component";

// import "./StreeetCamers.styles.scss";

import {
  StreetCamerasContainer,
  Img,
  CameraButtons,
} from "./StreetCameras.style";

const StreetCameras = () => {
  const [random, setRandom] = useState(null);
  const [state, setState] = useState("cam_18.jpg");
  const [cameras] = useState({
    brankov: "cam_1.jpg",
    slavija: "cam_8.jpg",
    gazela: "cam_2.jpg",
    trg: "cam_18.jpg",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    if (name === "brankov") {
      setState(cameras.brankov);
    } else if (name === "slavija") {
      setState(cameras.slavija);
    } else if (name === "gazela") {
      setState(cameras.gazela);
    } else {
      setState(cameras.trg);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandom(Math.random());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StreetCamerasContainer>
      <CameraButtons>
        <CustomButton name="brankov" onClick={handleChange}>
          cam 1
        </CustomButton>
        <CustomButton name="slavija" onClick={handleChange}>
          cam 2
        </CustomButton>
        <CustomButton name="gazela" onClick={handleChange}>
          cam 3
        </CustomButton>
        <CustomButton name="trg" onClick={handleChange}>
          cam 4
        </CustomButton>
      </CameraButtons>
      <Img
        src={`http://stream.uzivobeograd.rs/live/${state}?rand=${random}`}
        alt=""
        className="camera-box"
      />
    </StreetCamerasContainer>
  );
};

export default StreetCameras;
