import React, { useEffect, useState } from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 12vh;
`;

const InfoTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
  }
`;

const InfoHeader = styled.tr`
  font-size: 20px;
  margin-bottom: 30px;
`;

const AllStarInfo = ({ getData }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, [getData]);
  return (
    <div>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <InfoContainer>
          <InfoTable>
            <colgroup span="4" className="columns"></colgroup>
            <InfoHeader>
              <th>RANKING</th>
              <th>PLAYER NAME</th>
              <th>POSITION</th>
              <th>TEAM</th>
            </InfoHeader>
            {info.map((player, index) => (
              <tr key={player.StatID}>
                <th>Rank {index + 1}</th>
                <th>{player.Name}</th>
                <th>{player.Position}</th>
                <th>{player.Team}</th>
              </tr>
            ))}
          </InfoTable>
        </InfoContainer>
      )}
    </div>
  );
};

export default AllStarInfo;
