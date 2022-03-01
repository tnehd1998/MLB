import { render } from "../../../utils/test-util";
import { RenderResult, waitFor } from "@testing-library/react";
import DreamTeamPage from "../DreamTeam";
import userEvent from "@testing-library/user-event";

describe("<DreamTeamPage />", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<DreamTeamPage />);
  });

  it("should render component in the page", () => {
    const { container } = renderResult;

    expect(container).toBeInTheDocument();
  });

  it("clicks deleteAllBtn", async () => {
    const { getByRole } = renderResult;
    const deleteAllBtn = getByRole("button");
    await waitFor(() => {
      userEvent.click(deleteAllBtn);
    });

    expect(deleteAllBtn.textContent).toEqual("전체 삭제");
  });
});
