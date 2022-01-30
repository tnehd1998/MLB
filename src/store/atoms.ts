import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

interface IPlayerTypes {
  BatHand: string;
  BirthCity: string;
  BirthCountry: string;
  BirthDate: string;
  BirthState: null;
  College: string;
  DraftKingsName: string;
  DraftKingsPlayerID: number;
  Experience: string;
  FanDuelName: string;
  FanDuelPlayerID: number;
  FantasyAlarmPlayerID: number;
  FantasyDraftName: string;
  FantasyDraftPlayerID: number;
  FirstName: string;
  GlobalTeamID: number;
  Height: number;
  HighSchool: null;
  InjuryBodyPart: string;
  InjuryNotes: string;
  InjuryStartDate: null;
  InjuryStatus: string;
  Jersey: number;
  LastName: string;
  MLBAMID: number;
  PhotoUrl: string;
  PlayerID: number;
  Position: string;
  PositionCategory: string;
  ProDebut: string;
  RotoWirePlayerID: number;
  RotoworldPlayerID: number;
  Salary: null;
  SportRadarPlayerID: string;
  SportsDataID: string;
  SportsDirectPlayerID: number;
  StatsPlayerID: number;
  Status: string;
  Team: string;
  TeamID: number;
  ThrowHand: string;
  UpcomingGameID: number;
  UsaTodayHeadshotNoBackgroundUpdated: string;
  UsaTodayHeadshotNoBackgroundUrl: string;
  UsaTodayHeadshotUpdated: string;
  UsaTodayHeadshotUrl: string;
  UsaTodayPlayerID: number;
  Weight: number;
  XmlTeamPlayerID: number;
  YahooName: string;
  YahooPlayerID: number;
}

export const themeState = atom<boolean>({
  key: "themeState",
  default: true,
});

const { persistAtom } = recoilPersist({
  key: "mlb",
  storage: localStorage,
});

export const dreamTeamInfo = atom<IPlayerTypes[]>({
  key: "dreamTeamInfo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const playerSelection = atom<boolean>({
  key: "playerSelection",
  default: false,
});

export const currentPlayer = atom<IPlayerTypes[]>({
  key: "currentPlayer",
  default: [],
});

export const currentYState = atom<number>({
  key: "currentYState",
  default: 0,
});
