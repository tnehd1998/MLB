import { Snapshot, snapshot_UNSTABLE } from "recoil";
import { showFARankingState } from "../ranking";

describe("ShowFARankingState", () => {
  let initialSnapshot: Snapshot;
  beforeEach(() => {
    initialSnapshot = snapshot_UNSTABLE();
  });
  it("checks showing showFARankingState", () => {
    expect(initialSnapshot.getLoadable(showFARankingState).valueOrThrow()).toBe(
      true
    );
  });

  it("checks not showing showFARankingState", () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) =>
      set(showFARankingState, false)
    );
    expect(testSnapshot.getLoadable(showFARankingState).valueOrThrow()).toBe(
      false
    );
  });
});
