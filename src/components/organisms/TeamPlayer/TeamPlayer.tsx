import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import { IPlayer } from "../../../types/player.type";
import BasicButton from "../../atoms/Buttons/BasicButton";
import Description from "../../atoms/Description";
import PlayerTitle from "../../atoms/PlayerTitle";
import PlayerImage from "../../atoms/PlayerImage";

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
      <PlayerImage imageUrl={playerInfo.PhotoUrl} />
      <PlayerProfile>
        <PlayerDescriptionWrapper>
          <PlayerTitle
            text={`${playerInfo.FirstName} ${playerInfo.LastName}`}
          />
          <Description text={`포지션 : ${playerInfo.Position}`} />
          <Description text={`타격 위치 : ${playerInfo.BatHand}`} />
          <Description text={`투구 방향 : ${playerInfo.ThrowHand}`} />
          <Description text={`출생 : ${getBirthDate(playerInfo.BirthDate)}`} />
          <Description text={`국적 : ${playerInfo.BirthCountry}`} />
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
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 1em;
`;

export default TeamPlayer;
