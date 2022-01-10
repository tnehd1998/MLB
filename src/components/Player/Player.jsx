import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  display: flex;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
  width: 28vw;
  height: 15vh;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-in;
  }
`;

const PlayerImage = styled.img`
  border-radius: 10px 0px 0px 10px;
`;

const PlayerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
`;

const PlayerName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const PlayerDescription = styled.p`
  font-size: 14px;
`;

const Player = ({ playerInfo }) => {
  return (
    <PlayerWrapper>
      <PlayerImage
        src={playerInfo.PhotoUrl}
        alt={`${playerInfo.FirstName} ${playerInfo.LastName}`}
      />
      <PlayerProfile>
        <PlayerName>
          {playerInfo.FirstName} {playerInfo.LastName}
        </PlayerName>
        <PlayerDescription>포지션 : {playerInfo.Position}</PlayerDescription>
        <PlayerDescription>타격 위치 : {playerInfo.BatHand}</PlayerDescription>
        <PlayerDescription>
          투구 방향 : {playerInfo.ThrowHand}
        </PlayerDescription>
        <PlayerDescription>
          출생 : {String(playerInfo.BirthDate).substring(0, 10)}
        </PlayerDescription>
        <PlayerDescription>국적 : {playerInfo.BirthCountry}</PlayerDescription>
      </PlayerProfile>
    </PlayerWrapper>
  );
};

export default Player;
