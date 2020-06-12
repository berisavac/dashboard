import styled from "styled-components";

export const StreetCamerasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CameraButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media only screen and (max-width: 68.75em) {
    flex: 0 0 50%;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Img = styled.img`
  margin: 14px 5px;
  width: 330px;
  height: 311px;
  border: 3px solid black;
  border-radius: 7px;
  @media only screen and (max-width: 37.5em) {
    width: 277px;
    height: 273px;
  }
`;
