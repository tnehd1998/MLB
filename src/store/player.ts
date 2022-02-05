import { atom } from "recoil";
import { IPlayer } from "../types/player.type";

export const currentPlayerState = atom<IPlayer>({
  key: "currentPlayerState",
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

export const playerSelectionState = atom<boolean>({
  key: "playerSelectionState",
  default: false,
});
