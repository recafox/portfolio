import { render, screen, waitFor } from "../../TestUtils/renderWith";
import {
  profileResponse,
  demoListResponse,
  expListResponse,
} from "TestUtils/Data";
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

describe("component contact", () => {
  beforeEach(() => {
    render(<App></App>);
  });
  test("contact is in the page", async () => {
    await waitFor(() => {
      const Contact = screen.getByTestId("component-contact");
      expect(Contact).toBeInTheDocument();
    });
  });

  test("renders correct amount of links", async () => {
    const links = await screen.findAllByTestId("component-social-link");
    expect(links.length).toBe(profileResponse[0].socialLinks.length);
  });
});

describe("component tech stack", () => {
  beforeEach(() => {
    render(<App></App>);
  });

  test("tech stack is in the page", async () => {
    await waitFor(() => {
      const TechStack = screen.getByTestId("component-techstack");
      expect(TechStack).toBeInTheDocument();
    });
  });

  test("renders correct amount of skills", async () => {
    const Skills = await screen.findAllByTestId("component-skill");
    expect(Skills.length).toBe(profileResponse[0].skills.length);
  });
});

describe("component demos", () => {
  beforeEach(() => {
    render(<App></App>);
  });

  test("demos is in the page", async () => {
    await waitFor(() => {
      const Demo = screen.getByTestId("component-demo");
      expect(Demo).toBeInTheDocument();
    });
  });

  test("render correct amount of demo cards", async () => {
    const DemoCards = await screen.findAllByTestId("component-demo-card");
    expect(DemoCards.length).toBe(demoListResponse.length);
  });
});

describe("component exp", () => {
  beforeEach(() => {
    render(<App></App>);
  });

  test("exp is in the page", async () => {
    await waitFor(() => {
      const Exp = screen.getByTestId("component-exp");
      expect(Exp).toBeInTheDocument();
    });
  });

  test("render corrent amount of exp card", async () => {
    const ExpCards = await screen.findAllByTestId("component-exp-card");
    expect(ExpCards.length).toBe(expListResponse.length);
  });
});

describe("component introduction", () => {
  beforeEach(() => {
    render(<App></App>);
  });

  test("introduction is in the page", async () => {
    await waitFor(() => {
      const Introduction = screen.getByTestId("component-introduction");
      expect(Introduction).toBeInTheDocument();
    });
  });

  test("render correct text", async () => {
    const Introduction = await screen.findByTestId("component-introduction");
    expect(Introduction).toHaveTextContent(profileResponse[0].description);
  });
});
