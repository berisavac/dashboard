import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #C3073f;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 2px 2px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;



export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${buttonStyles}
  
  @media only screen and (max-width: 68.75em) {
    min-width: 126px;
    font-size: 1.4rem;
  }
`;