import React from "react";

import { getMarginStyles } from "../_helpers/marginToCss";
import { MarginProps, HeadingProps } from "../_types/types";

import { getDefaultTag } from "./helpers";

import styles from "./Heading.module.scss";

export const Heading: React.FC<MarginProps & HeadingProps> = ({
  id,
  variant,
  as,
  italic = false,
  underline = false,
  weight = "600",
  uppercase = false,
  children,
  className,
  dangerouslySetInnerHTML,
  mt,
  mb,
  my,
  ...props
}) => {
  const Component = as || getDefaultTag(variant);
  const baseClassName = styles[`heading-${variant}`];
  const classNames = `
        ${baseClassName}
        ${className}
        ${italic ? styles["text-italic"] : ""}
        ${underline ? styles["text-underline"] : ""}
        ${weight ? styles[`text-${weight}`] : ""}
        ${uppercase ? styles["text-uppercase"] : ""}
    `;
  const margins = getMarginStyles({ mt, mb, my });

  if (dangerouslySetInnerHTML) {
    return (
      <Component
        id={id}
        className={classNames}
        style={{ ...margins }}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        {...props}
      />
    );
  }

  return (
    <Component id={id} className={classNames} style={{ ...margins }} {...props}>
      {children}
    </Component>
  );
};
