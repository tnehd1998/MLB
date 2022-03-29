import TeamButton from "../../atoms/Buttons/TeamButton";
import { ITeams } from "../../../types/teams.type";
import Loading from "../../atoms/Loading";
import { Wrapper } from "./styles";

export interface IProps {
  teams: ITeams[] | null | undefined;
  isLoading: boolean;
  onClickTeam: (key: string) => void;
}

const TeamSelection = ({ teams, isLoading, onClickTeam }: IProps) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
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

export default TeamSelection;
