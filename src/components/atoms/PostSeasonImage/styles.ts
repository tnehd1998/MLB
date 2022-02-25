import styled from "styled-components";

export const Wrapper = styled.img`
  width: 36em;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.textColor};
  &:hover {
    border: 3px solid ${({ theme }) => theme.textColor};
    transform: scale(1.1);
    transition: all 0.3s ease-in;
  }

  @media (max-width: 768px) {
    width: 90vw;
    margin-bottom: 2em;
  }

  @media (min-width: 1150px) {
    width: 50em;
  }
`;
