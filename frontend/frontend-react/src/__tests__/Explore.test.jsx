import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Explore from "../Pages/ExplorePage/Explore";

/**
 * Test that, if the test suite is called successfully
 */
it("execute test suite", () => {
  function sum(a, b) {
    return a + b;
  }
  expect(sum(1, 2)).toBe(3);
});

/**************************************     Components     **************************************/

describe("Components", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders IntroRow component correctly", () => {
    expect(renderedComponent.getByTestId("intro-row")).toBeInTheDocument();
  });

  it("renders IntroRow component correctly", () => {
    expect(renderedComponent.getByTestId("picture-row")).toBeInTheDocument();
  });

  it("renders IntroRow component correctly", () => {
    expect(renderedComponent.getByTestId("ai-row")).toBeInTheDocument();
  });

  it("renders YouTubeRow component correctly", () => {
    expect(
      renderedComponent.getByTestId("explore-youtube-row")
    ).toBeInTheDocument();
  });

  it("renders IntroRow component correctly", () => {
    expect(
      renderedComponent.getByTestId("explore-spotify-row")
    ).toBeInTheDocument();
  });

  it("renders IntroRow component correctly", () => {
    expect(renderedComponent.getByTestId("sub-row")).toBeInTheDocument();
  });
});

/**************************************     IntroRow     **************************************/

describe("IntroRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders texts in YouTubeRow component correctly", () => {
    const textContents = [
      "Listen & Watch:",
      "Your Ultimate App",
      "For Media Content",
      "Featuring a Diverse Library from Various Leading Platforms",
      "Others",
      "Start Exploring",
    ];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders links in YouTubeRow component correctly", () => {
    const linkContents = [
      { text: "YouTube", href: "/youtube" },
      { text: "Spotify", href: "/spotify" },
      { text: "New to Here?", href: "/explore/signup" },
    ];

    linkContents.forEach(({ text, href }) => {
      expect(renderedComponent.getByText(text)).toHaveAttribute("href", href);
    });
  });

  it("renders images in YouTubeRow component correctly", () => {
    const altTexts = ["horse", "man", "captain"];

    altTexts.forEach((altText) => {
      expect(renderedComponent.getByAltText(altText)).toBeInTheDocument();
    });
  });
});

/**************************************     PictureRow     **************************************/

describe("PictureRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders images in PictureRow component correctly", () => {
    const altTexts = ["cat", "pinkBall"];

    altTexts.forEach((altText) => {
      expect(renderedComponent.getByAltText(altText)).toBeInTheDocument();
    });
  });
});

/**************************************     YouTubeRow     **************************************/

describe("YouTubeRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders texts in YouTubeRow component correctly", () => {
    const textContents = ["YouTube Videos For You"];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });
});

/**************************************     SpotifyRow     **************************************/

describe("SpotifyRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders texts in SpotifyRow component correctly", () => {
    const textContents = ["Popular Tracks"];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });
});

/**************************************     SubRow     **************************************/

describe("SubRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders texts in SubRow component correctly", () => {
    const textContents = [
      "Popular Tracks",
      "News letter",
      "Subscribe Our Newsletter",
    ];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });
});
