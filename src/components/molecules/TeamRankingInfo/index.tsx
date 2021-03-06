import { IPayroll } from "../../../types/payroll.type";
import Description from "../../atoms/Description";
import Logo from "../../atoms/Logo";
import PlayerTitle from "../../atoms/Titles/PlayerTitle";
import { Wrapper } from "./styles";

export interface IProps {
  team: IPayroll;
  ranking: number;
}

const TeamRankingInfo = ({ team, ranking }: IProps) => {
  return (
    <Wrapper>
      <PlayerTitle text={`랭킹 ${ranking}위`} />
      <Description text={`팀 이름 : ${team.team}`} />
      <Description text={`연봉 총액 : ${team.payroll}`} />
      <Logo imageUrl={team.teamLogoUrl} />
    </Wrapper>
  );
};

export default TeamRankingInfo;
