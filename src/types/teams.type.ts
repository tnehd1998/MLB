export interface ITeams {
  City: string;
  Key: string;
  PrimaryColor: string;
  TeamID: number;
  WikipediaLogoUrl: string;
}

export interface ITeamTitle extends ITeams {
  Name: string;
}
