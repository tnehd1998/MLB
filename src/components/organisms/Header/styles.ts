import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid ${({ theme }) => theme.textColor};
  position: fixed;
  background-color: ${({ theme }) => theme.bgColor};
  z-index: 20;
  transition: all 0.3s linear;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const LinkWrapper = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`;
