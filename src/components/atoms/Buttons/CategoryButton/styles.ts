import styled from "styled-components";

export const Button = styled.p`
  width: 20vw;
  height: 6vh;
  text-align: center;
  line-height: 6vh;
  font-size: 2vw;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  cursor: pointer;
  margin: 0 0.2em;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.textColor};
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.bgColor};
  }

  @media (max-width: 768px) {
    width: 18vw;
  }
`;
