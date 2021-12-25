import React from "react";
import styled from "styled-components";
import PositionPlayer from "../PositionPlayer/PositionPlayer";

const TeamPlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const TeamPlayers = ({ info }) => {
  return (
    <TeamPlayersContainer>
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
        positions={["1B", "2B", "3B", "SS", "DH"]}
        title="내야수 (Infielder)"
      />
      <PositionPlayer
        info={info}
        positions={["LF", "CF", "RF"]}
        title="외야수 (Outfielder)"
      />
    </TeamPlayersContainer>
  );
};

export default TeamPlayers;
