import { Snapshot, snapshot_UNSTABLE } from "recoil";
import { IPlayer } from "../../types/player.type";
import { currentPlayer, playerSelection } from "../player";

describe("Player", () => {
  let initialSnapshot: Snapshot;
  beforeEach(() => {
    initialSnapshot = snapshot_UNSTABLE();
  });

  describe("playerSelection", () => {
    it("checks not showing playerSelection initially", () => {
      expect(initialSnapshot.getLoadable(playerSelection).valueOrThrow()).toBe(
        false
      );
    });

    it("checks when showing playerSelection", () => {
      const testSnapshot = snapshot_UNSTABLE(({ set }) =>
        set(playerSelection, true)
      );
      expect(testSnapshot.getLoadable(playerSelection).valueOrThrow()).toBe(
        true
      );
    });
  });

  describe("currentPlayer", () => {
    let initialPlayer: IPlayer;
    beforeEach(() => {
      initialPlayer = {
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
      };
    });

    it("checks initial currentPlayer", () => {
      expect(initialSnapshot.getLoadable(currentPlayer).valueOrThrow()).toEqual(
        initialPlayer
      );
    });

    it("checks currentPlayer changed", () => {
      const newPlayer = {
        BatHand: "",
        BirthCountry: "",
        BirthDate: "",
        FirstName: "",
        LastName: "",
        MLBAMID: 1,
        PhotoUrl: "",
        PlayerID: 1,
        Position: "",
        ProDebut: "",
        ThrowHand: "",
      };
      const testSnapshot = snapshot_UNSTABLE(({ set }) =>
        set(currentPlayer, newPlayer)
      );
      expect(testSnapshot.getLoadable(currentPlayer).valueOrThrow()).toEqual(
        newPlayer
      );
    });
  });
});
