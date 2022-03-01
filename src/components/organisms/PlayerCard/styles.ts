import styled from "styled-components";

export const Wrapper = styled.div`
  width: 22em;
  height: 30em;
  left: 30vw;
  top: 20vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 30px;
  z-index: 20;
  border: 2px solid ${({ theme }) => theme.textColor};

  @media (max-width: 768px) {
    left: 2vw;
  }

  @media (min-width: 1186px) {
    left: 40vw;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;
