import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Textfield from "./Textfield";

describe("Textfield", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<Textfield data-testid="textfield">Textfield</Textfield>);
    const el = screen.getByTestId("textfield") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
