import { atom } from "recoil";

export const teamLogo = atom({
  key: "teamLogo",
  default: [],
});

export const selectPlayer = atom({
  key: "selectPlayer",
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
