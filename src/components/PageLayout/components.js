import styled from "styled-components";

const Wrapper = styled.div`
  /* background-image: url(${require("./img/bg-pattern.png")}); */
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
  min-width: 1000px;
  color: #365997;
`;

const Main = styled.main`
  width: 1000px;
  flex: 1;
`;

export { Wrapper, Main };
