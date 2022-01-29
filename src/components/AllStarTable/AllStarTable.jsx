import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";
import { getAllStarPlayerData } from "../../apis/apis";

const AllStarTable = () => {
  const { data: players } = useQuery("allStarInfo", getAllStarPlayerData, {
    suspense: true,
  });
  const navigate = useNavigate();

  return (
    <AllStarTableWrapper>
      <Table>
        <colgroup span="4" className="columns"></colgroup>
        <thead>
          <Subjects>
            <Subject>선수 랭킹 (RANKING)</Subject>
            <Subject>선수 이름 (PLAYER NAME)</Subject>
            <Subject>포지션 (POSITION)</Subject>
            <Subject>소속 팀 (TEAM)</Subject>
          </Subjects>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <Player
              key={player.StatID}
              onClick={() => navigate(`/${player.Team}`)}
            >
              <PlayerInfo>Rank {index + 1}</PlayerInfo>
              <PlayerInfo>{player.Name}</PlayerInfo>
              <PlayerInfo>{player.Position}</PlayerInfo>
              <PlayerInfo>{player.Team}</PlayerInfo>
            </Player>
          ))}
        </tbody>
      </Table>
    </AllStarTableWrapper>
  );
};

const AllStarTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

const Table = styled.table`
  width: 100%;
  border: 4px solid ${({ theme }) => theme.textColor};
  border-collapse: collapse;
  text-align: center;
  th,
  td {
    border: 2px solid ${({ theme }) => theme.textColor};
  }
`;

const Subjects = styled.tr`
  font-size: 14px;
  margin-bottom: 30px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1150px) {
    font-size: 22px;
  }
`;

const Subject = styled.td`
  padding: 10px;
`;

const Player = styled.tr`
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    font-size: 18px;
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

const PlayerInfo = styled.td`
  padding: 5px;
`;

export default AllStarTable;
