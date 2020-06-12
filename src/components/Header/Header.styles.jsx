import styled, { css } from "styled-components";

const falseHeader = css`
  height: 0;
`;
const header = css`
  height: 50px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0 16px;
  background-color: #1a1a15;
  height: ${({ currentUser }) => (currentUser ? header : falseHeader)};
`;
