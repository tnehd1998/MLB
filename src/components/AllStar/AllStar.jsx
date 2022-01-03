import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AllStarWrapper = styled.div``;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 12vh;
`;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
  }
`;

const Subjects = styled.tr`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Subject = styled.td``;

const Player = styled.tr``;

const PlayerInfo = styled.td``;

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
