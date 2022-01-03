import React, { useEffect, useState } from "react";
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
  padding-top: 10vh;
  width: 80vw;
`;

const Table = styled.table`
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

const Player = styled.tr``;

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
          <Table>
            <colgroup span="4" className="columns"></colgroup>
            <thead>
              <Subjects>
                <Subject>RANKING</Subject>
                <Subject>PLAYER NAME</Subject>
                <Subject>POSITION</Subject>
                <Subject>TEAM</Subject>
              </Subjects>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <Player key={player.StatID}>
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
