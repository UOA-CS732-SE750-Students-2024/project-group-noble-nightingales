import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import YouTube from "../Pages/YouTubePage/YouTube";

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
        <YouTube />
      </MemoryRouter>
    );
  });

  it("renders PopularRow component correctly", () => {
    expect(renderedComponent.getByTestId("popular-row")).toBeInTheDocument();
  });

  it("renders AIRecommendationRow component correctly", () => {
    expect(
      renderedComponent.getByTestId("youtube-airecommendation-row")
    ).toBeInTheDocument();
  });

  it("renders YouTubeRow component correctly", () => {
    expect(
      renderedComponent.getByTestId("explore-youtube-row")
    ).toBeInTheDocument();
  });
});

/**************************************     PopularRow     **************************************/

describe("PopularRow", () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter initialEntries={["/"]}>
        <YouTube />
      </MemoryRouter>
    );
  });

  it("renders texts in YouTubeRow component correctly", () => {
    const textContents = ["Popular video cube", "Popular video cube"];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders images in PopularRow component correctly", () => {
    const altTexts = ["Popular video cube"];

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
        <YouTube />
      </MemoryRouter>
    );
  });

  it("renders texts in AIRecommendationRow component correctly", () => {
    const textContents = [
      "Embedded AI Recommendation",
      "AI Recommendations",
      "AI Filtering",
      "ou have to put something in the text field to perform this operation.",
    ];

    textContents.forEach((text) => {
      expect(renderedComponent.getByText(text)).toBeInTheDocument();
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
