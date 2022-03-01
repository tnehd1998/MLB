import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 36em;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.textColor};
  margin-bottom: 10vh;

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (min-width: 1150px) {
    width: 50em;
  }
`;

export const RegionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.textColor};
`;

export const RegionWrapper = styled.div`
  padding: 1em;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }

  @media (min-width: 1150px) {
    font-size: 22px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  padding-top: 0.5em;
`;

export const StandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1150px) {
    font-size: 19px;
  }
`;

export const TeamWrapper = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  display: flex;
  padding: 1em 0;
  width: 100%;
  text-align: center;

  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
    border-radius: 18px;
  }
`;

export const NameWrapper = styled.div`
  width: 40%;
`;

export const RecordWrapper = styled.div`
  width: 20%;
`;
