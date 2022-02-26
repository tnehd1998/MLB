import styled from "styled-components";

export const Wrapper = styled.p`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 30px;
  text-align: center;
  line-height: 40px;

  &:hover {
    transform: scale(1.1);
  }
`;
