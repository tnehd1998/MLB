import { render } from "../../utils/test-util";
import ThemeButton from "./ThemeButton";
import { RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<ThemeButton />", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<ThemeButton />);
  });

  it("should render component in the page", () => {
    const { container } = renderResult;

    expect(container).toBeInTheDocument();
  });

  it("clicks themeButton", async () => {
    const { getByRole } = renderResult;
    const changeTheme = getByRole("button");
    await waitFor(() => {
      userEvent.click(changeTheme);
    });

    expect(changeTheme).toBeInTheDocument();
  });
});
