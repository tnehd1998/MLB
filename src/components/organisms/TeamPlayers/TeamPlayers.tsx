import React from "react";
import styled from "styled-components";
import TeamPositionPlayers from "../TeamPositionPlayers/TeamPositionPlayers";
import { getCertainTeam } from "../../../api/team";
import { ITeamNameProps } from "../../../types/team.type";
import { useQuery } from "react-query";

const TeamPlayers = ({ teamName }: ITeamNameProps) => {
  const { data: info } = useQuery(
    `${teamName}`,
    () => getCertainTeam(teamName),
    {
      suspense: true,
    }
  );

  return (
    <Wrapper>
      <TeamPositionPlayers
        info={info!}
        positions={["SP"]}
        title="선발투수 (Starting Pitcher)"
      />
      <TeamPositionPlayers
        info={info!}
        positions={["RP"]}
        title="불펜투수 (Relief Pitcher)"
      />
      <TeamPositionPlayers
        info={info!}
        positions={["1B", "2B", "3B", "SS", "DH", "C"]}
        title="내야수 (Infielder)"
      />
      <TeamPositionPlayers
        info={info!}
        positions={["LF", "CF", "RF"]}
        title="외야수 (Outfielder)"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TeamPlayers;
