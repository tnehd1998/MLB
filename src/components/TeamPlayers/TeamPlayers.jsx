import React from "react";
import styled from "styled-components";
import PositionPlayer from "../PostionPlayer/PositionPlayer";

const TeamPlayersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const TeamPlayers = ({ info }) => {
  return (
    <TeamPlayersContainer>
      <PositionPlayer info={info} position={"SP"} />
    </TeamPlayersContainer>
  );
};

export default TeamPlayers;
