import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5em;
  font-size: 1.2em;
  border: 2px solid
    ${({ color, theme }) => (color ? "#" + color : theme.textColor)};
  border-radius: 20px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    background-color: ${({ color, theme }) =>
      color ? "#" + color : theme.textColor};
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.bgColor};
  }
`;
