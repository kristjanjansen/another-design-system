import React from "react";

import { getMarginStyles } from "../../helpers/marginToCss";
import { MarginProps, HeadingProps } from "../../types/types";

import styles from "./Heading.module.scss";

function getDefaultTag(variant: string): string {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
    case "ol":
    case "ul":
      return variant;
    case "line":
      return "p";
    case "list":
      return "ol";
    default:
      return "div";
  }
}

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
