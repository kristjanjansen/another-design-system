// TODO: Remove this

import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "../Icons/Icon.module.scss";

export type IconProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  color?: string;
  className?: string;
  children?: ReactNode | ReactNode[];
};

export default function SvgWrapper({
  size,
  color,
  className,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={classNames(className, styles.icon, {
        [styles[`icon--${size}`]]: size,
        [styles[`icon--${color}`]]: color,
      })}
    >
      {children}
    </svg>
  );
}
