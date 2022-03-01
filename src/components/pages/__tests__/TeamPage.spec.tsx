import { render } from "../../../utils/test-util";
import TeamPage from "../Team";

describe("<TeamPage />", () => {
  it("should render component in the page", () => {
    const { container } = render(<TeamPage />);

    expect(container).toBeInTheDocument();
  });
});
