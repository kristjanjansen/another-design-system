import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Autocomplete from "./Autocomplete";

describe("Autocomplete", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<Autocomplete data-testid="autocomplete">Autocomplete</Autocomplete>);
    const el = screen.getByTestId("autocomplete") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
