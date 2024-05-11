import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Banner from "./Banner";

describe("Banner", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<Banner data-testid="banner">Banner</Banner>);
    const el = screen.getByTestId("banner") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
