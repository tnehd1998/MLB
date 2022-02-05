import { Snapshot, snapshot_UNSTABLE } from "recoil";
import { dreamTeamInfoState } from "../dreamteam";

describe("DreamTeam", () => {
  let initialSnapshot: Snapshot;
  beforeEach(() => {
    initialSnapshot = snapshot_UNSTABLE();
  });
  it("check showing dreamTeamInfoState", () => {
    expect(
      initialSnapshot.getLoadable(dreamTeamInfoState).valueOrThrow()
    ).toEqual([]);
  });
});
