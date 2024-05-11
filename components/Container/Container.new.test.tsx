import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Container from "./Container";

describe("Container", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<Container data-testid="container">Container</Container>);
    const el = screen.getByTestId("container") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
