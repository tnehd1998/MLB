import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../../styles/theme";
import { render } from "../../../utils/test-util";
import TeamSelection from "./TeamSelection";
import { RenderResult } from "@testing-library/react";

describe("<TeamSelection />", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<h1>Loading</h1>}>
          <TeamSelection />
        </Suspense>
      </ThemeProvider>
    );
  });

  it("should render component in the page", () => {
    const { container, debug } = renderResult;
    debug();

    expect(container).toBeInTheDocument();
  });
});
