"use client";

import React, { forwardRef, ReactNode, useRef } from "react";
import {
  AriaButtonProps,
  useButton,
  useFocusRing,
  useTooltipTrigger,
} from "react-aria";
import { useTooltipTriggerState } from "react-stately";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import classNames from "classnames";

import Tooltip from "./Tooltip";

import styles from "./Button.module.scss";

type Variant = "primary" | "secondary" | "tertiary" | "alert";

export interface ButtonProps extends AriaButtonProps {
  isIcon?: boolean;
  isFullWidth?: boolean;
  className?: string;
  variant?: Variant;
  inverted?: boolean;
  tooltipLabel?: string;
  tooltipWrapperClassName?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  element?: "button" | "a";
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      variant = "primary",
      inverted,
      isIcon,
      isFullWidth,
      tooltipLabel,
      tooltipWrapperClassName,
      iconLeft,
      iconRight,
      element = "button",
    } = props;
    const forwardedRef = useObjectRef(ref);
    const fallbackRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(
      null
    );
    const elementRef = forwardedRef || fallbackRef;

    const { buttonProps } = useButton(
      { elementType: element, ...props },
      elementRef
    );

    const { isFocusVisible, focusProps } = useFocusRing();
    const tooltipTriggerProps = { delay: 0, closeDelay: 0, ...props };
    const state = useTooltipTriggerState(tooltipTriggerProps);
    const { triggerProps, tooltipProps } = useTooltipTrigger(
      tooltipTriggerProps,
      state,
      elementRef
    );

    const classList = classNames(styles.btn, className, {
      [styles[`btn--${variant}`]]: variant,
      [styles["btn--inverted"]]: inverted,
      [styles[`btn--full-width`]]: isFullWidth,
      [styles["btn--icon-only"]]: isIcon,
      [styles["btn--has-icons"]]: iconLeft || iconRight,
      [styles["focus-ring"]]: isFocusVisible,
    });
    const tooltipWrapperClassList = classNames(
      styles.base,
      tooltipWrapperClassName
    );

    const buttonTriggerProps = isIcon && tooltipLabel ? triggerProps : {};
    const mergedProps = mergeProps(buttonProps, focusProps, buttonTriggerProps);

    const RegularButton = (
      <button
        {...mergedProps}
        ref={elementRef as React.MutableRefObject<HTMLButtonElement>}
        className={classList}
      >
        {iconLeft}
        <span className={styles.label}>{children}</span>
        {iconRight}
      </button>
    );

    const IconButton = (
      <button
        {...mergedProps}
        ref={elementRef as React.MutableRefObject<HTMLButtonElement>}
        className={classList}
      >
        {children}
      </button>
    );

    const IconButtonWithTooltip = (
      <span className={tooltipWrapperClassList}>
        {IconButton}
        <Tooltip state={state} {...tooltipProps}>
          {tooltipLabel}
        </Tooltip>
      </span>
    );

    const Link = (
      <a
        {...mergedProps}
        // React-aria gives different props for <a> and <button> but both contain role='button'
        // Remove it from link for correct semantics
        role={undefined}
        ref={elementRef as React.MutableRefObject<HTMLAnchorElement>}
        className={classList}
      >
        {iconLeft}
        <span className={styles.label}>{children}</span>
        {iconRight}
      </a>
    );

    switch (element) {
      case "a":
        return Link;
      case "button":
        if (isIcon && !tooltipLabel) {
          return IconButton;
        }
        if (isIcon && tooltipLabel !== undefined) {
          return IconButtonWithTooltip;
        }
        return RegularButton;
      default:
        return RegularButton;
    }
  }
);

Button.displayName = "Button";

export default Button;
