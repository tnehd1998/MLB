import styled from "styled-components";

export const Button = styled.button`
  width: 20vw;
  height: 6vh;
  text-align: center;
  line-height: 6vh;
  font-size: 2vw;
  color: ${({ theme }) => theme.textColor};
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  cursor: pointer;
  margin: 0 0.2em;
  background: transparent;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) =>
      theme.textColor ? theme.textColor : "black"};
    transition: all 0.3s linear;
    color: ${({ theme }) => (theme.bgColor ? theme.bgColor : "white")};
  }

  @media (max-width: 768px) {
    width: 18vw;
  }
`;
