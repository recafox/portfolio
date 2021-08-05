import { render } from "@testing-library/react";
import { UserDataProvider } from "Contexts/UserContext";

const renderWithUserContext = (ui, options) => {
  render(ui, { wrapper: UserDataProvider, ...options });
};

export * from "@testing-library/react";
export { renderWithUserContext as render };
