import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { IPlayer } from "../types/player.type";

export const themeState = atom<boolean>({
  key: "themeState",
  default: true,
});

const { persistAtom } = recoilPersist({
  key: "mlb",
  storage: localStorage,
});

export const dreamTeamInfo = atom<IPlayer[]>({
  key: "dreamTeamInfo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const playerSelection = atom<boolean>({
  key: "playerSelection",
  default: false,
});

export const currentPlayer = atom<IPlayer>({
  key: "currentPlayer",
  default: {
    BatHand: "",
    BirthCountry: "",
    BirthDate: "",
    FirstName: "",
    LastName: "",
    MLBAMID: 0,
    PhotoUrl: "",
    PlayerID: 0,
    Position: "",
    ProDebut: "",
    ThrowHand: "",
  },
});

export const currentYState = atom<number>({
  key: "currentYState",
  default: 0,
});

export const showFARankingState = atom<boolean>({
  key: "showFARankingState",
  default: true,
});
