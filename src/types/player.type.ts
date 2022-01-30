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
