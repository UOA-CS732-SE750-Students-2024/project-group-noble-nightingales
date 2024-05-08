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

/**
 * Test that, if YouTubeRow component is rendered successfully
 */
it("renders YouTubeRow component correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Explore />
    </MemoryRouter>
  );

  expect(getByTestId("youtube-row")).toBeInTheDocument();
});

/**
 * Test that, when YouTubeRow component is rendered, texts are also rendered successfully
 */
it("renders texts in YouTubeRow component correctly", () => {
  const { getByTestId, getByText, queryByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Explore />
    </MemoryRouter>
  );

  expect(getByTestId("youtube-row")).toBeInTheDocument();

  expect(getByText("Listen & Watch:", { selector: "li" })).toBeInTheDocument();
  expect(
    getByText("Your Ultimate App", { selector: "li" })
  ).toBeInTheDocument();
  expect(
    getByText("For Media Content", { selector: "li" })
  ).toBeInTheDocument();
  expect(
    queryByText("Featuring a Diverse Library from Various Leading Platforms")
  ).toBeInTheDocument();
  expect(getByText("Others", { selector: "li" })).toBeInTheDocument();
  expect(
    getByText("Start Exploring", { selector: "span" })
  ).toBeInTheDocument();
});

/**
 * Test that, when YouTubeRow component is rendered, links are also rendered successfully
 */
it("renders links in YouTubeRow page correctly", () => {
  const { getByTestId, getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Explore />
    </MemoryRouter>
  );

  expect(getByTestId("youtube-row")).toBeInTheDocument();

  expect(getByText("YouTube")).toHaveAttribute("href", "/youtube");
  expect(getByText("Spotify")).toHaveAttribute("href", "/spotify");
  expect(getByText("New to Here?")).toHaveAttribute("href", "/explore/signup");
});

/**
 * Test that, when YouTubeRow component is rendered, images are also rendered successfully
 */
it("renders images in YouTubeRow page correctly", () => {
  const { getByTestId, getByAltText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <Explore />
    </MemoryRouter>
  );

  expect(getByTestId("youtube-row")).toBeInTheDocument();

  expect(getByAltText("horse")).toBeInTheDocument();
  expect(getByAltText("man")).toBeInTheDocument();
  expect(getByAltText("captain")).toBeInTheDocument();
});
