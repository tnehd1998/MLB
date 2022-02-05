import { render, RenderResult, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "../MainPage";

describe("<MainPage />", () => {
  let renderResult: RenderResult;
  let queryClient;
  beforeEach(async () => {
    await waitFor(() => {
      queryClient = new QueryClient();
      renderResult = render(
        <QueryClientProvider client={queryClient}>
          <MainPage />
        </QueryClientProvider>
      );
    });
  });

  it("should render OK", async () => {
    await waitFor(() => {
      expect(document.title).toBe("MLB | TEAMS");
    });
  });

  it("waits page to get teams", () => {
    const { getByText } = renderResult;
    const mainText = getByText("Loading...");

    expect(mainText).toBeInTheDocument();
  });
});
