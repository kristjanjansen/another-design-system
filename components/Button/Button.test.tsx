import React, { RefObject } from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button", () => {
  test("renders without errors", async () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button") as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  test("handles clicks", async () => {
    const onClickMock = vi.fn();
    render(<Button onPress={onClickMock}>Click me</Button>);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("forwards refs", () => {
    const ref: RefObject<HTMLButtonElement> = React.createRef();
    render(<Button ref={ref}>Click me</Button>);
    const button = screen.getByRole("button");
    expect(ref.current).toBe(button);
  });
});
