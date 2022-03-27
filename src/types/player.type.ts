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

export interface IRankingPlayerProps {
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
