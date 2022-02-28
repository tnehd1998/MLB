import { useSetRecoilState } from "recoil";
import {
  currentPlayerState,
  playerSelectionState,
} from "../../../../store/player";
import { IPlayer } from "../../../../types/player.type";
import BasicButton from "../../../atoms/Buttons/BasicButton";
import Description from "../../../atoms/Description";
import PlayerTitle from "../../../atoms/Titles/PlayerTitle";
import { Wrapper } from "./styles";

export interface IProps {
  playerInfo: IPlayer;
}

const TeamPlayerInfo = ({ playerInfo }: IProps) => {
  const setPlayerSelected = useSetRecoilState(playerSelectionState);
  const setCurrentPlayer = useSetRecoilState(currentPlayerState);

  const getBirthDate = (birthDate: string) => {
    return String(birthDate).substring(0, 10);
  };

  const showPlayerInfo = (playerInfo: IPlayer) => {
    setPlayerSelected((value) => !value);
    setCurrentPlayer(playerInfo);
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default TeamPlayerInfo;
