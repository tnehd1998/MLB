export interface IPlayer {
  BatHand: string;
  BirthCountry: string;
  BirthDate: string;
  FirstName: string;
  LastName: string;
  MLBAMID: number;
  PhotoUrl: string;
  PlayerID: number;
  Position: string;
  ProDebut: string;
  ThrowHand: string;
}

export interface IAllStarPlayer {
  Name: string;
  PlayerID: number;
  Position: string;
  StatID: number;
  Team: string;
}

export interface IDreamPlayerProps {
  position: string;
}

export interface IRankingPlayerProps {
  ranking: number;
  name: string;
  team: string;
  years: number;
  SignedAge: number;
  averageValue: string;
  totalValue: string;
  period: string;
  position: string;
  playerImg: string;
}
