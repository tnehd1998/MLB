import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AllStarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12vh;
  width: 80vw;
`;

const TableTitle = styled.p`
  font-size: 24px;
  margin-bottom: 2vh;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
`;

const Table = styled.table`
  width: 100%;
  border: 4px solid black;
  border-collapse: collapse;
  text-align: center;
  th,
  td {
    border: 2px solid black;
  }
`;

const Subjects = styled.tr`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Subject = styled.td`
  padding: 10px;
`;

const Player = styled.tr`
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    font-size: 18px;
    transition: all 0.5s ease-in;
    background-color: black;
    color: white;
  }
`;

const PlayerInfo = styled.td`
  padding: 5px;
`;

const AllStar = ({ getData }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setPlayers(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, [getData]);

  return (
    <AllStarWrapper>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <TableWrapper>
          <TableTitle>😍 알고 싶은 선수를 선택하세요 😍</TableTitle>
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
                  onClick={() =>
                    (window.location.href = `player/${player.PlayerID}`)
                  }
                >
                  <PlayerInfo>Rank {index + 1}</PlayerInfo>
                  <PlayerInfo>{player.Name}</PlayerInfo>
                  <PlayerInfo>{player.Position}</PlayerInfo>
                  <PlayerInfo>{player.Team}</PlayerInfo>
                </Player>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </AllStarWrapper>
  );
};

export default AllStar;
