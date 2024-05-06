import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Hello } from "./Hello";

describe("Hello", () => {
  test("renders without errors", async () => {
    render(<Hello />);
    const el = screen.getByText("Hello") as HTMLDivElement;
    expect(el).toBeInTheDocument();
  });
});
