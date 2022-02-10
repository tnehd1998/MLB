import { render } from "../../utils/test-util";
import RankingPage from "../RankingPage";
import { RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<RankingPage />", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<RankingPage />);
  });

  it("should render component in the page", () => {
    const { container } = renderResult;

    expect(container).toBeInTheDocument();
  });

  it("clicks deleteAllBtn", async () => {
    const { getByText } = renderResult;
    const switchContent = getByText("MLB 지정 Top 200 선수 명단 확인하기");

    await waitFor(() => {
      userEvent.click(switchContent);
    });

    expect(switchContent.textContent).toEqual(
      "가장 많은 돈을 받는 선수 Top50 확인하기"
    );
  });
});
