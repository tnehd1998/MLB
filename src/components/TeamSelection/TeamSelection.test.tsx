import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/theme";
import { render } from "../../utils/test-util";
import TeamSelection from "./TeamSelection";

describe("<TeamSelection />", () => {
  it("should render component in the page", () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <TeamSelection />
        </Suspense>
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });
});
