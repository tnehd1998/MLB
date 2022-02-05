import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { IPlayer } from "../types/player.type";

const { persistAtom } = recoilPersist({
  key: "mlb",
  storage: localStorage,
});

export const dreamTeamInfoState = atom<IPlayer[]>({
  key: "dreamTeamInfoState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
