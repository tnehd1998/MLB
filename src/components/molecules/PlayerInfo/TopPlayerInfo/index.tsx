import { IRankingPlayerProps } from "../../../../types/player.type";
import Description from "../../../atoms/Description";
import PlayerTitle from "../../../atoms/Titles/PlayerTitle";
import { Wrapper } from "./styles";

export interface IProps {
  player: IRankingPlayerProps;
}

const TopPlayerInfo = ({ player }: IProps) => {
  return (
    <Wrapper>
      <PlayerTitle text={`Rank #${player.ranking} ${player.name}`} />
      <Description text={`포지션 : ${player.position}`} />
      <Description text={`소속팀 : ${player.team}`} />
      <Description text={`${player.totalValue} ${player.years}년 계약`} />
      <Description text={`계약 당시 나이 : ${player.SignedAge}`} />
      <Description text={`평균 연봉 : ${player.averageValue}`} />
      <Description text={`계약 기간 : ${player.period}`} />
    </Wrapper>
  );
};

export default TopPlayerInfo;
