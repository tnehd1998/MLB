import { IPlayer } from "../../../../types/player.type";
import Description from "../../../atoms/Description";
import { Wrapper } from "./styles";

export interface IProps {
  showingPlayer: IPlayer;
}

const CardPlayerInfo = ({ showingPlayer }: IProps) => {
  const getBirthDate = (birthDate: string) => {
    return birthDate.slice(0, 10);
  };

  const getDebutDate = (debutDate: string) => {
    return debutDate ? " " + debutDate.slice(0, 10) : " 아직 데뷔 전";
  };

  return (
    <Wrapper>
      <Description
        text={`이름 : ${showingPlayer.FirstName} ${showingPlayer.LastName}`}
      />
      <Description text={`국적 : ${showingPlayer.BirthCountry}`} />
      <Description
        text={`출생년도 : ${getBirthDate(showingPlayer.BirthDate)}`}
      />
      <Description text={`포지션 : ${showingPlayer.Position}`} />
      <Description text={`타격 위치 : ${showingPlayer.BatHand}`} />
      <Description text={`투구 방향 : ${showingPlayer.ThrowHand}`} />
      <Description text={` 데뷔일 : ${getDebutDate(showingPlayer.ProDebut)}`} />
    </Wrapper>
  );
};

export default CardPlayerInfo;
