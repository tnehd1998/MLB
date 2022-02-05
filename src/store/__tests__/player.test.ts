import { Snapshot, snapshot_UNSTABLE } from "recoil";
import { IPlayer } from "../../types/player.type";
import { currentPlayerState, playerSelectionState } from "../player";

describe("Player", () => {
  let initialSnapshot: Snapshot;
  beforeEach(() => {
    initialSnapshot = snapshot_UNSTABLE();
  });

  describe("playerSelectionState", () => {
    it("checks not showing playerSelectionState initially", () => {
      expect(
        initialSnapshot.getLoadable(playerSelectionState).valueOrThrow()
      ).toBe(false);
    });

    it("checks when showing playerSelectionState", () => {
      const testSnapshot = snapshot_UNSTABLE(({ set }) =>
        set(playerSelectionState, true)
      );
      expect(
        testSnapshot.getLoadable(playerSelectionState).valueOrThrow()
      ).toBe(true);
    });
  });

  describe("currentPlayerState", () => {
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

    it("checks initial currentPlayerState", () => {
      expect(
        initialSnapshot.getLoadable(currentPlayerState).valueOrThrow()
      ).toEqual(initialPlayer);
    });

    it("checks currentPlayerState changed", () => {
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
        set(currentPlayerState, newPlayer)
      );
      expect(
        testSnapshot.getLoadable(currentPlayerState).valueOrThrow()
      ).toEqual(newPlayer);
    });
  });
});
