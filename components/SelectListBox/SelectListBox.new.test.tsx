import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import SelectListBox from "./SelectListBox";

describe("SelectListBox", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<SelectListBox data-testid="selectlistbox">SelectListBox</SelectListBox>);
    const el = screen.getByTestId("selectlistbox") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
