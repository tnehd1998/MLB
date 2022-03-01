import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
