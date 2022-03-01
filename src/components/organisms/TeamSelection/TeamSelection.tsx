import styled from "styled-components";
import TeamButton from "../../atoms/Buttons/TeamButton";
import { ITeams } from "../../../types/teams.type";
import Loading from "../../atoms/Loading";

export interface IProps {
  teams: ITeams[] | null | undefined;
  isLoading: boolean;
  onClickTeam: (key: string) => void;
}

const TeamSelection = ({ teams, isLoading, onClickTeam }: IProps) => {
  return (
    <Wrapper>
      {isLoading && <Loading />}
      {teams?.map(
        (team) =>
          team.WikipediaLogoUrl && (
            <TeamButton
              key={team.Key}
              team={team}
              onClick={() => onClickTeam(team.Key)}
            />
          )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default TeamSelection;
