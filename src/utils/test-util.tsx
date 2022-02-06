import { FC, ReactElement } from "react";
import { render, RenderOptions, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const AllTheProviders: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export const expectText = (text: string) => {
  expect(screen.queryByText(text)).toBeInTheDocument();
};

export * from "@testing-library/react";
export { customRender as render };
