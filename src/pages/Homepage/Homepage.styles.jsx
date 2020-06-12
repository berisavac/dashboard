import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 50px;
  background: white;
  overflow: hidden;

  @media only screen and (max-width: 68.75em) {
    padding: 10px 25px;
  }
`;

export const HomePageDirectory = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HomePageItem = styled.div`
  min-width: 30%;
  height: 415px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid #950740;
  margin: 0 7.5px 15px;
  color: black;
  background-color: #fafafa;
  box-shadow: 10px 10px 16px #6f2232;
`;
