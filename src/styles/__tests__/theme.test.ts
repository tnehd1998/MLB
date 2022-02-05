import { darkTheme, lightTheme } from "../theme";

describe("Dark, Light Theme", () => {
  it("checks darkTheme", () => {
    expect(darkTheme.bgColor).toEqual("#252525");
    expect(darkTheme.textColor).toEqual("#f5f6fa");
  });

  it("checks lightTheme", () => {
    expect(lightTheme.bgColor).toEqual("#f5f6fa");
    expect(lightTheme.textColor).toEqual("#252525");
  });
});
