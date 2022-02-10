import React from "react";
import { ITeams } from "../../../../types/teams.type";
import { Button, Logo } from "./styles";

export interface Props {
  team: ITeams;
  onClick: () => void;
}

const TeamButton = ({ team, onClick }: Props) => {
  return (
    <Button onClick={onClick} iconBgColor={`${team.PrimaryColor}`}>
      <Logo src={`${team.WikipediaLogoUrl}`} alt={team.City} />
    </Button>
  );
};

export default TeamButton;
