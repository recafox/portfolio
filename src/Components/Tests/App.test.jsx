import { render, screen, waitFor } from "../../TestUtils/renderWith";
import { profileResponse } from "TestUtils/Data";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("show loading before server responses", async () => {
  render(<App></App>);
  const loading = screen.getByTestId("loading");

  expect(loading).toBeInTheDocument();
  // expect loading to disappear after data loaded
  await waitFor(() => {
    const page = screen.getByTestId("page-component");
    const disappearLoading = screen.queryByTestId("loading");
    expect(disappearLoading).toBeNull();
    expect(page).toBeInTheDocument();
  });
});

test("header is in the page", async () => {
  render(<App></App>);
  await waitFor(() => {
    const Header = screen.getByTestId("component-header");
    const nickname = profileResponse[0].nickname;
    expect(Header).toBeInTheDocument();
    expect(Header).toHaveTextContent(nickname);
  });
});
