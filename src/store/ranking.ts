import { atom } from "recoil";

export const showFARankingState = atom<boolean>({
  key: "showFARankingState",
  default: true,
});
