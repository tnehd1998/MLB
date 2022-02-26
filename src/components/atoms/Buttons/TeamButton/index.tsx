import { ITeams } from "../../../../types/teams.type";
import { Button, Logo } from "./styles";

export interface IProps {
  team: ITeams;
  onClick: () => void;
}

const TeamButton = ({ team, onClick }: IProps) => {
  return (
    <Button onClick={onClick} iconBgColor={`${team.PrimaryColor}`}>
      <Logo src={`${team.WikipediaLogoUrl}`} alt={team.City} />
    </Button>
  );
};

export default TeamButton;
