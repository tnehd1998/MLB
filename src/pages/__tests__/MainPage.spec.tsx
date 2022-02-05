import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "../MainPage";

test("<MainPage />", () => {
  const queryClient = new QueryClient();
  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
  const mainText = getByText("Loading...");

  expect(mainText).toBeInTheDocument();
});
