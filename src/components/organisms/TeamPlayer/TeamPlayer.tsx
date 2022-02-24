import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import { IPlayer } from "../../../types/player.type";
import BasicButton from "../../atoms/Buttons/BasicButton";
import Description from "../../atoms/Description";

const TeamPlayer = ({ playerInfo }: { playerInfo: IPlayer }) => {
  const setPlayerSelected = useSetRecoilState(playerSelectionState);
  const setCurrentPlayer = useSetRecoilState(currentPlayerState);

  const showPlayerInfo = (playerInfo: IPlayer) => {
    setPlayerSelected((value) => !value);
    setCurrentPlayer(playerInfo);
  };

  const getBirthDate = (birthDate: string) => {
    return String(birthDate).substring(0, 10);
  };

  return (
    <TeamPlayerWrapper>
      <PlayerImage
        src={playerInfo.PhotoUrl}
        alt={`${playerInfo.FirstName} ${playerInfo.LastName}`}
      />
      <PlayerProfile>
        <PlayerDescriptionWrapper>
          <PlayerName>
            {playerInfo.FirstName} {playerInfo.LastName}
          </PlayerName>
          <Description text={`포지션 : ${playerInfo.Position}`} textSize={18} />
          <Description
            text={`타격 위치 : ${playerInfo.BatHand}`}
            textSize={18}
          />
          <Description
            text={`투구 방향 : ${playerInfo.ThrowHand}`}
            textSize={18}
          />
          <Description
            text={`출생 : ${getBirthDate(playerInfo.BirthDate)}`}
            textSize={18}
          />
          <Description
            text={`국적 : ${playerInfo.BirthCountry}`}
            textSize={18}
          />
        </PlayerDescriptionWrapper>
        <BasicButton
          onClick={() => showPlayerInfo(playerInfo)}
          content="🔎 선수 정보"
        />
      </PlayerProfile>
    </TeamPlayerWrapper>
  );
};

const TeamPlayerWrapper = styled.div`
  display: flex;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  width: 22em;
  height: 15em;
  margin: 0.5em;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const PlayerImage = styled.img`
  border-radius: 10px 0px 0px 10px;
  width: 10em;
  height: 15em;
`;

const PlayerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

const PlayerDescriptionWrapper = styled.div`
  margin-bottom: 0.5em;
`;

const PlayerName = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export default TeamPlayer;
