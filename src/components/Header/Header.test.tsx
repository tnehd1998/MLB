import { render } from "../../utils/test-util";
import Header from "./Header";
import { createMemoryHistory } from "history";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

describe("<Header />", () => {
  it("should render component in the page", async () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(container).toBeInTheDocument();
    expect(getByText("MLB TEAMS")).toBeInTheDocument();
  });
});
