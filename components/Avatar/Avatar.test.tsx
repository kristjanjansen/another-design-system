import React from "react";
import { describe, test } from "vitest";
import { render } from "@testing-library/react";

import Avatar from "./Avatar";

describe("Avatar", () => {
  test("renders without errors", async () => {
    render(<Avatar imageUrl="" />);
  });
});