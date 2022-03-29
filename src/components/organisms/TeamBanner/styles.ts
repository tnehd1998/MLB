import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.a`
  margin-top: 1em;
`;
