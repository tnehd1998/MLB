import styled from "styled-components";

export const Button = styled.button`
  font-size: 24px;
  margin-bottom: 2vh;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  background: transparent;
  &:hover {
    color: ${({ theme }) => theme.bgColor};
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1150px) {
    font-size: 32px;
  }
`;
