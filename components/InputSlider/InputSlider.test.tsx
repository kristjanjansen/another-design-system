import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import InputSlider from "./InputSlider";

describe("InputSlider", () => {
  test("renders without errors", async () => {
    render(<InputSlider />);
    const el = screen.getByRole("slider") as HTMLInputElement;
    expect(el).toBeInTheDocument();
  });
});
