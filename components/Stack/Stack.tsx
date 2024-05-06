import React from "react";

import styles from "./Stack.module.scss";

export interface StackProps {
  direction?: {
    xsmall?: "row" | "column";
    small?: "row" | "column";
    medium?: "row" | "column";
    large?: "row" | "column";
  };
  gap?: {
    xsmall?: number;
    small?: number;
    medium?: number;
    large?: number;
  };
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  direction = {
    xsmall: "column",
    small: "column",
    medium: "column",
    large: "column",
  },
  gap = {
    xsmall: 1,
    small: 1,
    medium: 1,
    large: 1,
  },
  children,
}) => {
  // Construct class names for direction
  const directionClasses = Object.entries(direction)
    .map(([breakpoint, dir]) => styles[`direction-${breakpoint}-${dir}`])
    .join(" ");

  // Construct class names for gap
  const gapClasses = Object.entries(gap)
    .map(([breakpoint, size]) => styles[`gap-${breakpoint}-${size}`])
    .join(" ");

  return (
    <div className={`${styles.stack} ${directionClasses} ${gapClasses}`}>
      {children}
    </div>
  );
};

Stack.displayName = "Stack";

export default Stack;
