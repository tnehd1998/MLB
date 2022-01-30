import { IPlayer } from "./player.type";
import { ITeams } from "./teams.type";

export interface ITeam extends ITeams, IPlayer {}

export type ITeamNameProps = {
  teamName: string;
};
