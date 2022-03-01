import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamWrapper = styled.div<{ selectPlayer: boolean }>`
  filter: blur(${(props) => (props.selectPlayer ? "4px" : "0")});
`;
