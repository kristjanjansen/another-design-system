"use client";

import React, { ReactNode, useRef, useState } from "react";
import { type AriaTooltipProps, mergeProps, useTooltip } from "react-aria";
import type { TooltipTriggerState } from "react-stately";
import { CSSTransition } from "react-transition-group";

import styles from "./Tooltip.module.scss";

interface TooltipProps extends AriaTooltipProps {
  state: TooltipTriggerState;
  children: ReactNode;
}

const Tooltip = ({ state, ...props }: TooltipProps) => {
  const tooltipRef = useRef(null);
  const { tooltipProps } = useTooltip(props, state);
  const { isOpen } = state;
  const [exited, setExited] = useState(!isOpen);

  if (!(isOpen || !exited)) {
    return null;
  }

  return (
    <CSSTransition
      in={isOpen}
      appear
      onEntered={() => setExited(false)}
      onExited={() => setExited(true)}
      timeout={{ appear: 0, exit: 100 }}
      classNames={{
        appear: styles["tooltip--appear"],
        appearDone: styles["tooltip--appear-done"],
        exit: styles["mtooltip--exit"],
        exitActive: styles["tooltip--exit-active"],
      }}
      nodeRef={tooltipRef}
    >
      <span
        {...mergeProps(props, tooltipProps)}
        className={styles.tooltip}
        ref={tooltipRef}
        aria-hidden="true"
      >
        {props.children}
      </span>
    </CSSTransition>
  );
};

export default Tooltip;
