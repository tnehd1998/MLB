import { render } from "../../../utils/test-util";
import Header from "./Header";
import { HashRouter as Router } from "react-router-dom";

describe("<Header />", () => {
  it("should render component in the page", () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(container).toBeInTheDocument();
  });
});
