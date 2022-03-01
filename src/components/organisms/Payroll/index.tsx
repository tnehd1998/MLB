import TeamRankingInfo from "../../molecules/TeamRankingInfo";
import PayrollPlayerInfo from "../../molecules/PlayerInfo/PayrollPlayerInfo";
import Loading from "../../atoms/Loading";
import { IPayroll } from "../../../types/payroll.type";
import { RankingWrapper, Wrapper } from "./styles";

export interface IProps {
  teams: IPayroll[] | null | undefined;
  isLoading: boolean;
  onClickTeam: (team: string) => void;
}

const Payroll = ({ teams, isLoading, onClickTeam }: IProps) => {
  console.log(teams);
  return (
    <Wrapper>
      {isLoading && <Loading />}
      {teams?.map((team) => (
        <RankingWrapper key={team.rank} onClick={() => onClickTeam(team.key)}>
          <TeamRankingInfo team={team} />
          <PayrollPlayerInfo team={team} />
        </RankingWrapper>
      ))}
    </Wrapper>
  );
};

export default Payroll;
