import React from "react";
import styled from "styled-components";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
`;

const Player = ({ playerInfo }) => {
  return (
    <PlayerContainer>
      <img
        src={playerInfo.PhotoUrl}
        alt={`${playerInfo.FirstName} ${playerInfo.LastName}`}
      />
      <div>
        <h3>
          {playerInfo.FirstName} {playerInfo.LastName}
        </h3>
        <h3>Position : {playerInfo.Position}</h3>
        <h3>Batting Hand : {playerInfo.BatHand}</h3>
        <h3>Throwing Hand : {playerInfo.ThrowHand}</h3>
        <h3>Birth Date : {String(playerInfo.BirthDate).substring(0, 10)}</h3>
        <h3>Nationality : {playerInfo.BirthCountry}</h3>
      </div>
    </PlayerContainer>
  );
};

export default Player;
