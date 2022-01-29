import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getCertainTeamData } from "../../api/apis";
import TeamPositionPlayers from "../TeamPositionPlayers/TeamPositionPlayers";

const TeamPlayers = ({ teamName }) => {
  const { data: info } = useQuery(
    `${teamName}`,
    () => getCertainTeamData(teamName),
    {
      suspense: true,
    }
  );

  return (
    <TeamPlayersWrapper>
      <TeamPositionPlayers
        info={info}
        positions={["SP"]}
        title="선발투수 (Starting Pitcher)"
      />
      <TeamPositionPlayers
        info={info}
        positions={["RP"]}
        title="불펜투수 (Relief Pitcher)"
      />
      <TeamPositionPlayers
        info={info}
        positions={["1B", "2B", "3B", "SS", "DH", "C"]}
        title="내야수 (Infielder)"
      />
      <TeamPositionPlayers
        info={info}
        positions={["LF", "CF", "RF"]}
        title="외야수 (Outfielder)"
      />
    </TeamPlayersWrapper>
  );
};

const TeamPlayersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export default TeamPlayers;
