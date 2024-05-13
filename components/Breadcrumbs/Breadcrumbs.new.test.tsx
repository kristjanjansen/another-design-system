import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  test("renders without errors", async () => {
    // data-testid requires {...props} passed to the component
    // If it is not passed, the test will fail
    // You can replace "test()" with "test.skip()" to skip the test
    render(<Breadcrumbs data-testid="breadcrumbs">Breadcrumbs</Breadcrumbs>);
    const el = screen.getByTestId("breadcrumbs") as HTMLElement;
    expect(el).toBeInTheDocument();
  });
});
