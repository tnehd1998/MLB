import styled from "styled-components";

export const Wrapper = styled.img<{ imageType: string }>`
  border-radius: ${(props) =>
    props.imageType === "card" ? "20px" : "20px 0px 0px 20px"};
  width: 10em;
  height: 15em;
`;
