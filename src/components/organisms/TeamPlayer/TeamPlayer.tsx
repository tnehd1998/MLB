import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../store/player";
import { IPlayer } from "../../../types/player.type";
import BasicButton from "../../atoms/Buttons/BasicButton";
import Description from "../../atoms/Description";
import PlayerTitle from "../../atoms/Titles/PlayerTitle";
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
    <Wrapper>
      <PlayerImage imageUrl={playerInfo.PhotoUrl} imageType="main" />
      <DescriptionWrapper>
        <PlayerTitle text={`${playerInfo.FirstName} ${playerInfo.LastName}`} />
        <Description text={`포지션 : ${playerInfo.Position}`} />
        <Description text={`타격 위치 : ${playerInfo.BatHand}`} />
        <Description text={`투구 방향 : ${playerInfo.ThrowHand}`} />
        <Description text={`출생 : ${getBirthDate(playerInfo.BirthDate)}`} />
        <Description text={`국적 : ${playerInfo.BirthCountry}`} />
        <BasicButton
          onClick={() => showPlayerInfo(playerInfo)}
          content="🔎 선수 정보"
        />
      </DescriptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 10px;
  width: 24em;
  margin: 1em;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default TeamPlayer;
