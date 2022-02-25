import styled from "styled-components";

export const Wrapper = styled.p`
  font-size: 32px;
  margin: 20px 0px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1150px) {
    font-size: 40px;
  }
`;
