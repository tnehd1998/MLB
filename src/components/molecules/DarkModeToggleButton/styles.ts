import styled from "styled-components";

export const Wrapper = styled.div<{ currentTheme: boolean }>`
  cursor: pointer;
  font-size: 30px;
  background-color: ${(props) => (!props.currentTheme ? "grey" : "white")};
  border: 2px solid ${(props) => (!props.currentTheme ? "grey" : "black")};
  text-align: center;
  line-height: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 20;
`;
