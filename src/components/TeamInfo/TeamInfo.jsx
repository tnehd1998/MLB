import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getCertainTeamData } from "../../apis";
import Player from "../Player/Player";
import styled from "styled-components";

const Players = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const TeamInfo = ({ teamName }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getCertainTeamData(teamName);
      setInfo(data);
      setLoading((loading) => !loading);
    }
    fetchData();
  }, []);
  return (
    <div>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <Players>
          {info.map((playerInfo) =>
            !playerInfo.PhotoUrl.includes("0.png") ? (
              <Player key={playerInfo.PlayerID} playerInfo={playerInfo} />
            ) : (
              ""
            )
          )}
        </Players>
      )}
    </div>
  );
};

export default TeamInfo;
