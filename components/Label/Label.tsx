import React from "react";

import { LabelProps } from "../../types/types";

import styles from "./Label.module.scss";

const Label: React.FC<LabelProps> = ({
  id,
  size = "default",
  children,
  italic = false,
  underline = false,
  weight = "400",
  uppercase = false,
  className,
  ...props
}) => {
  const baseClassName = styles[`label-${size}`];
  const classNames = `
        ${baseClassName}
        ${className}
        ${italic ? styles["text-italic"] : ""}
        ${underline ? styles["text-underline"] : ""}
        ${weight ? styles[`text-${weight}`] : ""}
        ${uppercase ? styles["text-uppercase"] : ""}
    `;
  return (
    <label id={id} className={classNames} {...props}>
      {children}
    </label>
  );
};

export default Label;
