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
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {teams?.map((team, index) => (
        <RankingWrapper key={team.rank} onClick={() => onClickTeam(team.key)}>
          <TeamRankingInfo team={team} ranking={index + 1} />
          <PayrollPlayerInfo team={team} />
        </RankingWrapper>
      ))}
    </Wrapper>
  );
};

export default Payroll;
