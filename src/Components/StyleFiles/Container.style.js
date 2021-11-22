import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const PopContainer = styled.div`
  width: 400px;
  height: 400px;
  background: #DEDEDE;
  outline-color: black;
  outline-style: ridge;
  outline-width: 3px;
  top: 50%;
  left: 50%;
  position: fixed;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`;

export const AppContainer = styled.div`
  z-index: 1;
  max-width: 100%;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  background-color: #F5F5F5;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const TableName = styled.h1`
  color: "black";
`;

export const BtnDiv = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 15px;
`;

export default GlobalStyle;
