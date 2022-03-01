import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  margin: 1em;
  width: 23em;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;
