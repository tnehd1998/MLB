import React from "react";
import styled from "styled-components";

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
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
        <h3>Name</h3>
        <h3>
          {playerInfo.FirstName} {playerInfo.LastName}
        </h3>
      </div>
      <div>
        <h3>Position</h3>
        <h3>{playerInfo.Position}</h3>
      </div>
      <div>
        <h3>Batting Hand : {playerInfo.BatHand}</h3>
        <h3>Throwing Hand : {playerInfo.ThrowHand}</h3>
      </div>
      <div>
        <h3>Birth Date : {String(playerInfo.BirthDate).substring(0, 10)}</h3>
        <h3>
          Nationality : {playerInfo.BirthCountry}, {playerInfo.BirthCity}
        </h3>
      </div>
    </PlayerContainer>
  );
};

export default Player;
