import React from "react";
import styled from "styled-components";
import PositionPlayer from "../PostionPlayer/PositionPlayer";

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
      <h1>선발투수</h1>
      <PositionPlayer info={info} positions={["SP"]} />
      <h1>불펜투수</h1>
      <PositionPlayer info={info} positions={["RP"]} />
      <h1>내야수</h1>
      <PositionPlayer info={info} positions={["1B", "2B", "3B", "SS", "DH"]} />
      <h1>외야수</h1>
      <PositionPlayer info={info} positions={["LF", "CF", "RF"]} />
    </TeamPlayersContainer>
  );
};

export default TeamPlayers;
