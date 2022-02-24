import styled from "styled-components";

export const Wrapper = styled.p<{ textSize: number }>`
  font-size: ${(props) => props.textSize + "px"};
  margin: 0.5em;
`;
