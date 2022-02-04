import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { IPlayer } from "../types/player.type";

const { persistAtom } = recoilPersist({
  key: "mlb",
  storage: localStorage,
});

export const dreamTeamInfo = atom<IPlayer[]>({
  key: "dreamTeamInfo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
