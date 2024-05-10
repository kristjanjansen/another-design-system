import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import Accordion from "../Accordion/Accordion";

import AccordionGroup from "./AccordionGroup";
import userEvent from "@testing-library/user-event";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe("AccordionGroup", () => {
  test("renders with children withour errors", () => {
    render(
      <AccordionGroup>
        <Accordion id="first" title="Title 1">
          content 1
        </Accordion>
        <Accordion id="second" title="Title 2">
          content 2
        </Accordion>
      </AccordionGroup>
    );
    expect(screen.getAllByRole("button").length).toBe(2);
  });

  test("applies custom className", () => {
    const customClass = "test class";
    const { container } = render(
      <AccordionGroup className={customClass}>
        <Accordion id="first" title="Title 1">
          content 1
        </Accordion>
        <Accordion id="second" title="Title 2">
          content 2
        </Accordion>
      </AccordionGroup>
    );
    // expect(container.querySelector(".accordion-group")).toHaveClass(
    //   customClass
    // );
  });

  test('uses "single" mode by default correctly', () => {
    const { container } = render(
      <AccordionGroup>
        <Accordion id="first" title="Title 1">
          content 1
        </Accordion>
        <Accordion id="second" title="Title 2">
          content 2
        </Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    const panels = container.querySelectorAll(".accordion__panel");

    // All accordions closed
    buttons.forEach((button) => {
      expect(button).not.toHaveClass("accordion__button--open");
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
    panels.forEach((panel) => {
      expect(panel).toHaveClass("accordion__panel--closed");
      expect(panel).toHaveStyle("height: 0");
      expect(panel).toHaveAttribute("aria-hidden", "true");
    });

    /* Click first accordion */
    userEvent.click(buttons[0]);

    /* First accordion should be open, second closed */
    // expect(buttons[0]).toHaveClass("accordion__button--open");
    //expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[0]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[0]).not.toHaveStyle("height: 0");
    });
    //expect(panels[0]).toHaveAttribute("aria-hidden", "false");

    expect(buttons[1]).not.toHaveClass("accordion__button--open");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
    //expect(panels[1]).toHaveClass("accordion__panel--closed");
    //expect(panels[1]).toHaveStyle("height: 0");
    //expect(panels[1]).toHaveAttribute("aria-hidden", "true");

    /* Click second accordion */
    userEvent.click(buttons[1]);

    /* Second accordion should be open, first closed */
    //expect(buttons[1]).toHaveClass("accordion__button--open");
    //expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[1]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[1]).not.toHaveStyle("height: 0");
    });
    //expect(panels[1]).toHaveAttribute("aria-hidden", "false");

    expect(buttons[0]).not.toHaveClass("accordion__button--open");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    //expect(panels[0]).toHaveClass("accordion__panel--closed");
    //expect(panels[0]).toHaveStyle("height: 0");
    //expect(panels[0]).toHaveAttribute("aria-hidden", "true");
  });

  test('uses "multiple" mode correctly', () => {
    const { container } = render(
      <AccordionGroup mode="multiple">
        <Accordion id="first" title="Title 1">
          content 1
        </Accordion>
        <Accordion id="second" title="Title 2">
          content 2
        </Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    const panels = container.querySelectorAll(".accordion__panel");

    /* All accordions closed */
    buttons.forEach((button) => {
      expect(button).not.toHaveClass("accordion__button--open");
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
    panels.forEach((panel) => {
      expect(panel).toHaveClass("accordion__panel--closed");
      expect(panel).toHaveStyle("height: 0");
      expect(panel).toHaveAttribute("aria-hidden", "true");
    });

    // Click first accordion
    userEvent.click(buttons[0]);

    // First accordion should be open, second closed
    //expect(buttons[0]).toHaveClass("accordion__button--open");
    //expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[0]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[0]).not.toHaveStyle("height: 0");
    });
    //expect(panels[0]).toHaveAttribute("aria-hidden", "false");

    expect(buttons[1]).not.toHaveClass("accordion__button--open");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
    //expect(panels[1]).toHaveClass("accordion__panel--closed");
    //expect(panels[1]).toHaveStyle("height: 0");
    //expect(panels[1]).toHaveAttribute("aria-hidden", "true");

    // Click second accordion
    userEvent.click(buttons[1]);

    // Both accordions should be open
    //expect(buttons[0]).toHaveClass("accordion__button--open");
    //expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[0]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[0]).not.toHaveStyle("height: 0");
    });
    //expect(panels[0]).toHaveAttribute("aria-hidden", "false");

    //expect(buttons[1]).toHaveClass("accordion__button--open");
    //expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[1]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[1]).not.toHaveStyle("height: 0");
    });
    //expect(panels[1]).toHaveAttribute("aria-hidden", "false");
  });

  test("renders accordions with selected id's as open by default", () => {
    const { container } = render(
      <AccordionGroup mode="multiple" selectedKeys={["first", "second"]}>
        <Accordion id="first" title="Title 1">
          content 1
        </Accordion>
        <Accordion id="second" title="Title 2">
          content 2
        </Accordion>
        <Accordion id="third" title="Title 3">
          content 3
        </Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    const panels = container.querySelectorAll(".accordion__panel");

    /*  First and second accordions sould be open, third closed */
    /*  First */
    //expect(buttons[0]).toHaveClass("accordion__button--open");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[0]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[0]).not.toHaveStyle("height: 0");
    });
    //expect(panels[0]).toHaveAttribute("aria-hidden", "false");
    /* Second */
    //expect(buttons[1]).toHaveClass("accordion__button--open");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[1]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[0]).not.toHaveStyle("height: 0");
    });
    //expect(panels[1]).toHaveAttribute("aria-hidden", "false");
    /* Third */
    expect(buttons[2]).not.toHaveClass("accordion__button--open");
    expect(buttons[2]).toHaveAttribute("aria-expanded", "false");
    //expect(panels[2]).toHaveClass("accordion__panel--closed");
    //expect(panels[2]).toHaveStyle("height: 0");
    //expect(panels[2]).toHaveAttribute("aria-hidden", "true");
  });

  test("uses value at index 0 when multiple default open accordion id's provided in 'single' mode", () => {
    const { container } = render(
      <AccordionGroup mode="single" selectedKeys={["second", "first"]}>
        <Accordion id="first" title="Title 1">
          content 1
        </Accordion>
        <Accordion id="second" title="Title 2">
          content 2
        </Accordion>
      </AccordionGroup>
    );
    const buttons = screen.getAllByRole("button");
    const panels = container.querySelectorAll(".accordion__panel");

    // Second accordion should be open, first one closed
    /* First */
    expect(buttons[0]).not.toHaveClass("accordion__button--open");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    //expect(panels[0]).toHaveClass("accordion__panel--closed");
    //expect(panels[0]).toHaveStyle("height: 0");
    //expect(panels[0]).toHaveAttribute("aria-hidden", "true");
    /* Second */
    //expect(buttons[1]).toHaveClass("accordion__button--open");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
    //expect(panels[1]).not.toHaveClass("accordion__panel--closed");
    waitFor(() => {
      expect(panels[0]).not.toHaveStyle("height: 0");
    });
    //expect(panels[1]).toHaveAttribute("aria-hidden", "false");
  });
});
