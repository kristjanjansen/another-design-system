import React, { ReactNode } from "react";
import classNames from "classnames";

import { Container } from "../Container";
import { Heading, Text } from "../Typography";

import styles from "./Banner.module.scss";

export interface BannerProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  inverted?: boolean;
  accent?: boolean;
  className?: string;
  children?: ReactNode;
  layout: "column" | "row";
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  icon,
  inverted,
  accent,
  className,
  children,
  layout,
  ...props
}) => {
  const iconWithClassname = icon
    ? React.cloneElement(icon as React.ReactElement, {
        className: styles.icon,
      })
    : null;

  return (
    <div
      className={classNames(styles.base, className, {
        [styles.inverted]: inverted,
        [styles.accent]: accent,
      })}
      {...props}
    >
      <Container>
        <div
          className={classNames(styles.inner, {
            [styles.column]: layout === "column",
          })}
        >
          {icon && iconWithClassname}
          <div className={styles.content}>
            <Heading variant="h3" className={styles.title}>
              {title}
            </Heading>
            {description && (
              <Text className={styles.description}>{description}</Text>
            )}
          </div>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
