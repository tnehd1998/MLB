import styled from "styled-components";

export const Wrapper = styled.p<{ size: number; color: string }>`
  font-size: ${(props) => props.size + "px"};
  color: ${(props) => "#" + props.color};
`;
