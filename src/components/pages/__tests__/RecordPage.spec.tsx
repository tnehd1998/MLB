import { render } from "../../../utils/test-util";
import RecordPage from "../RecordPage";

describe("<RecordPage />", () => {
  it("should render component in the page", () => {
    const { container } = render(<RecordPage />);

    expect(container).toBeInTheDocument();
  });
});
