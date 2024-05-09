import React from "react";
import { describe, test } from "vitest";
import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("renders without errors", async () => {
    // eslint-disable-next-line react/no-children-prop
    render(<Checkbox children={""} />);
  });
});
