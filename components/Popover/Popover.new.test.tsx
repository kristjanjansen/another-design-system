import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Popover from "./Popover";

describe("Popover", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<Popover data-testid="popover">Popover</Popover>);
    const el = screen.getByTestId("popover") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
