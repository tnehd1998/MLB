import { Snapshot, snapshot_UNSTABLE } from "recoil";
import { themeState } from "../theme";

describe("ThemeState", () => {
  let initialSnapshot: Snapshot;
  beforeEach(() => {
    initialSnapshot = snapshot_UNSTABLE();
  });

  it("checks initial themeState", () => {
    expect(initialSnapshot.getLoadable(themeState).valueOrThrow()).toBe(true);
  });

  it("checks initial themeState to false", () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) => set(themeState, false));
    expect(testSnapshot.getLoadable(themeState).valueOrThrow()).toBe(false);
  });
});
