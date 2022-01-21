import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCertainTeamData } from "../../apis";
import PositionPlayer from "../PositionPlayer/PositionPlayer";

const TeamPlayersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const TeamPlayers = ({ teamName }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCertainTeamData(teamName);
      setInfo(data);
    }
    fetchData();
  }, [teamName]);

  return (
    <TeamPlayersWrapper>
      <PositionPlayer
        info={info}
        positions={["SP"]}
        title="선발투수 (Starting Pitcher)"
      />
      <PositionPlayer
        info={info}
        positions={["RP"]}
        title="불펜투수 (Relief Pitcher)"
      />
      <PositionPlayer
        info={info}
        positions={["1B", "2B", "3B", "SS", "DH", "C"]}
        title="내야수 (Infielder)"
      />
      <PositionPlayer
        info={info}
        positions={["LF", "CF", "RF"]}
        title="외야수 (Outfielder)"
      />
    </TeamPlayersWrapper>
  );
};

export default TeamPlayers;
