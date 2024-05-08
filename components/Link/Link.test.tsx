import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Link from "./Link";

describe("Link", () => {
  test("renders without errors", async () => {
    render(<Link />);
  });
});
