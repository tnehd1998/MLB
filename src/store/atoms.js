import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { getTeamStandingData } from "../apis/apis";

export const themeState = atom({
  key: "themeState",
  default: true,
});

const { persistAtom } = recoilPersist({
  key: "mlb",
  storage: localStorage,
});

export const teamStandingInfo = selector({
  key: "teamStandingInfo",
  get: async () => {
    const info = await getTeamStandingData();
    return info;
  },
});

export const dreamTeamInfo = atom({
  key: "dreamTeamInfo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const playerSelection = atom({
  key: "playerSelection",
  default: false,
});

export const currentPlayer = atom({
  key: "currentPlayer",
  default: [],
});

export const currentYState = atom({
  key: "currentYState",
  default: 0,
});
