import styled from "styled-components";
import TeamRankingInfo from "../../molecules/TeamRankingInfo";
import PayrollPlayerInfo from "../../molecules/PlayerInfo/PayrollPlayerInfo";
import Loading from "../../atoms/Loading";
import { IPayroll } from "../../../types/payroll.type";

export interface IProps {
  teams: IPayroll[] | null | undefined;
  isLoading: boolean;
  onClickTeam: (team: string) => void;
}

const Payroll = ({ teams, isLoading, onClickTeam }: IProps) => {
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const RankingWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 20px;
  margin: 1em;
  padding: 1.5em;
  width: 24em;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};
  }
`;

export default Payroll;
