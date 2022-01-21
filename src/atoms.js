import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { getTeamData } from "./apis";

export const themeState = atom({
  key: "themeState",
  default: true,
});

const { persistAtom } = recoilPersist({
  key: "mlb",
  storage: localStorage,
});

export const teamInfo = selector({
  key: "teamInfo",
  get: async () => {
    const info = await getTeamData();
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

export const currentX = atom({
  key: "currentX",
  default: 0,
});

export const currentY = atom({
  key: "currentY",
  default: 0,
});
