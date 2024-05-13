import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<Card data-testid="card">Card</Card>);
    const el = screen.getByTestId("card") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
