import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Spotify from "../Pages/SpotifyPage/Spotify";

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
        <Spotify />
      </MemoryRouter>
    );
  });

  it("renders SearchTopRow component correctly", () => {
    expect(renderedComponent.getByTestId("searchtop-row")).toBeInTheDocument();
  });

  it("renders RecommendationRow component correctly", () => {
    expect(
      renderedComponent.getByTestId("recommendation-row")
    ).toBeInTheDocument();
  });

  it("renders AIRecommendationRow component correctly", () => {
    expect(
      renderedComponent.getByTestId("spotify-airecommendation-row")
    ).toBeInTheDocument();
  });

  it("renders Spotify component correctly", () => {
    expect(
      renderedComponent.getByTestId("spotify-spotify-row")
    ).toBeInTheDocument();
  });
});

/**************************************     SearchTopRow     **************************************/

describe("SearchTopRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders texts in SearchTopRow component correctly", () => {
    const textContents = ["Spotify", "Top Tracks"];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });
});

/**************************************     RecommendationRow     **************************************/

describe("RecommendationRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders texts in RecommendationRow component correctly", () => {
    const textContents = ["New For You", "You May Like"];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders images in RecommendationRow component correctly", () => {
    const altTexts = ["cover"];

    altTexts.forEach((altText) => {
      expect(renderedComponent.getByAltText(altText)).toBeInTheDocument();
    });
  });
});

/**************************************     AIRecommendationRow     **************************************/

describe("AIRecommendationRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <Explore />
      </MemoryRouter>
    );
  });

  it("renders texts in AIRecommendationRow component correctly", () => {
    const textContents = [
      "Embedded AI Recommendation",
      "AI Recommendations",
      "AI Filtering",
      "You have to put something in the text field to perform this operation.",
    ];

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
    const textContents = ["Spotify Musics For You"];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });
});
