import { atom } from "recoil";
import { IPlayer } from "../types/player.type";

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

export const playerSelection = atom<boolean>({
  key: "playerSelection",
  default: false,
});
