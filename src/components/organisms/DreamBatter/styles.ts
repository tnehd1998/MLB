import styled from "styled-components";

export const Wrapper = styled.div``;

export const PlayerWrapper = styled.li`
  display: flex;
  width: 10.5em;
  height: 16em;
  margin: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 8px;
  margin-top: 1em;
`;
