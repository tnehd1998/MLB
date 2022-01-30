import { IPlayer } from "./player.type";
import { ITeamTitle } from "./teams.type";

export interface ITeam extends ITeamTitle, IPlayer {}
