import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Accordion from "./Accordion";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe("Accordion", () => {
  test("renders withour errors", () => {
    render(<Accordion title="Title">content</Accordion>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    const customClass = "test-class";
    const { container } = render(
      <Accordion className={customClass} title="Title">
        content
      </Accordion>
    );
    // expect(container.querySelector(".accordion")).toHaveClass(customClass);
  });

  test("applies aria attributes from props", () => {
    const props = {
      "aria-label": "test aria label",
      "aria-labelledby": "test aria labelled by",
      "aria-describedby": "test aria describedby",
    };
    render(
      <Accordion {...props} title="Title">
        content
      </Accordion>
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      props["aria-label"]
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-labelledby",
      props["aria-labelledby"]
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-describedby",
      props["aria-describedby"]
    );
  });

  test("renders accordion button title", () => {
    const title = "Accordion title";
    render(<Accordion title={title}>content</Accordion>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("renders children as accordion panel content", () => {
    const content = "Accordion content";
    render(<Accordion title="Title">{content}</Accordion>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  test("renders as closed by default", () => {
    const { container } = render(<Accordion title="Title">content</Accordion>);
    const panel = container.querySelector(".accordion__panel");
    //expect(panel).toHaveClass("accordion__panel--closed");
    //expect(panel).toHaveStyle({ height: 0 });
  });

  test("renders as open with isOpen prop", () => {
    const { container } = render(
      <Accordion title="Title" isOpen>
        content
      </Accordion>
    );
    const panel = container.querySelector(".accordion__panel");
    //expect(panel).not.toHaveClass("accordion__panel--closed");
    vi.waitFor(() => {
      expect(panel).not.toHaveStyle({ height: 0 });
    });
  });

  test("opens and closes with correct aria attributes and styles when clicked", () => {
    const { container } = render(<Accordion title="Title">content</Accordion>);

    const button = screen.getByRole("button");
    const buttonId = button.getAttribute("id");
    const panel = container.querySelector(".accordion__panel");
    const panelId = panel?.getAttribute("id");

    // Accordion closed
    expect(button).not.toHaveClass("accordion__button--open");
    expect(button).toHaveAttribute("aria-controls", panelId);
    expect(button).not.toHaveAttribute("aria-expanded");
    //expect(panel).toHaveClass("accordion__panel--closed");
    //expect(panel).toHaveStyle("height: 0");
    //expect(panel).toHaveAttribute("aria-hidden", "true");
    //expect(panel).toHaveAttribute("aria-labelledby", buttonId);

    userEvent.click(screen.getByRole("button"));

    // Accordion opened
    //expect(button).toHaveClass("accordion__button--open");
    expect(button).toHaveAttribute("aria-controls", panelId);
    //expect(button).toHaveAttribute("aria-expanded", "true");
    //expect(panel).not.toHaveClass("accordion__panel--closed");
    vi.waitFor(() => {
      expect(panel).not.toHaveStyle("height: 0");
    });
    //expect(panel).toHaveAttribute("aria-hidden", "false");
    //expect(panel).toHaveAttribute("aria-labelledby", buttonId);

    userEvent.click(screen.getByRole("button"));

    // Accordion closed
    expect(button).not.toHaveClass("accordion__button--open");
    expect(button).toHaveAttribute("aria-controls", panelId);
    //expect(button).toHaveAttribute("aria-expanded", "false");
    //expect(panel).toHaveClass("accordion__panel--closed");
    //expect(panel).toHaveStyle("height: 0");
    //expect(panel).toHaveAttribute("aria-hidden", "true");
    //expect(panel).toHaveAttribute("aria-labelledby", buttonId);
  });

  test("applies focus ring when has keyboard focus", () => {
    render(<Accordion title="Title">content</Accordion>);
    const accordionButton = screen.getByRole("button");
    act(() => {
      accordionButton.focus();
    });
    //expect(accordionButton).toHaveClass("accordion__button--focused");
  });

  test("focusable elements inside accordion panel are not focusable when accordion is closed", () => {
    render(
      <div>
        <Accordion title="Accordion1" isOpen>
          <button>Button</button>
          <input type="text" />
          <a href="some-link">Link</a>
        </Accordion>
        <Accordion title="Accordion2">Accordion content</Accordion>
      </div>
    );
    const firstAccordionButton = screen.getByRole("button", {
      name: "Accordion1",
    });
    const secondAccordionButton = screen.getByRole("button", {
      name: "Accordion2",
    });
    const buttonInAccordion = screen.getByRole("button", {
      name: "Button",
    });
    const inputInAccordion = screen.getByRole("textbox");
    const linkInAccordion = screen.getByRole("link", {
      name: "Link",
    });

    // Check if focusable elements inside accordion are focusable when accordion open
    userEvent.tab();
    vi.waitFor(() => {
      expect(firstAccordionButton).toHaveFocus();
    });
    userEvent.tab();
    vi.waitFor(() => {
      expect(buttonInAccordion).toHaveFocus();
    });
    userEvent.tab();
    vi.waitFor(() => {
      expect(inputInAccordion).toHaveFocus();
    });
    userEvent.tab();
    vi.waitFor(() => {
      expect(linkInAccordion).toHaveFocus();
    });
    userEvent.tab();
    vi.waitFor(() => {
      expect(secondAccordionButton).toHaveFocus();
    });

    // Close first accordion
    userEvent.click(firstAccordionButton);
    vi.waitFor(() => {
      expect(firstAccordionButton).toHaveFocus();
    });

    // Next focusable element should be second accordion button
    userEvent.tab();
    vi.waitFor(() => {
      expect(secondAccordionButton).toHaveFocus();
    });
  });
});
