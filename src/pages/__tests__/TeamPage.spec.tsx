import { render } from "../../utils/test-util";
import TeamPage from "../TeamPage";

describe("<TeamPage />", () => {
  it("should render component in the page", () => {
    const { container, getByText } = render(<TeamPage />);

    expect(container).toBeInTheDocument();
    expect(container.textContent).toMatch("Loading...Loading...");
  });
});
