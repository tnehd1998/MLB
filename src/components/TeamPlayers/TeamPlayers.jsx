import React from "react";
import Player from "../Player/Player";
import styled from "styled-components";

const TeamPlayersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const TeamPlayers = ({ info }) => {
  return (
    <TeamPlayersContainer>
      {info.map((playerInfo) =>
        !playerInfo.PhotoUrl.includes("0.png") ? (
          <Player key={playerInfo.PlayerID} playerInfo={playerInfo} />
        ) : (
          ""
        )
      )}
    </TeamPlayersContainer>
  );
};

export default TeamPlayers;
