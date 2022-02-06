import { render } from "../../utils/test-util";
import MainPage from "../MainPage";

describe("<MainPage />", () => {
  it("should render component in the page", () => {
    const { container } = render(<MainPage />);
    expect(container).toBeInTheDocument();
  });
});
