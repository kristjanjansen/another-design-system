"use client";

import React, { useRef } from "react";
import {
  AriaSliderProps,
  useId,
  useNumberFormatter,
  useSlider,
} from "react-aria";
import { useSliderState } from "react-stately";
import classNames from "classnames";

import type { DescriptionSeverity } from "../../types/types";
import { Label } from "..";
import { Text } from "..";

import Thumb from "./Thumb";

import styles from "./InputSlider.module.scss";

export interface InputSliderProps extends AriaSliderProps {
  description?: string;
  descriptionSeverity?: DescriptionSeverity;
  formatOptions?: Intl.NumberFormatOptions;
  tooltipTrigger?: React.ReactNode;
  scale?: boolean;
  name?: string;
}

const InputSlider: React.FC<InputSliderProps> = (props) => {
  const trackRef = useRef(null);

  const {
    label,
    formatOptions,
    description,
    descriptionSeverity = "regular",
    tooltipTrigger,
    scale,
    name,
  } = props;

  const numberFormatter = useNumberFormatter(formatOptions);
  const state = useSliderState({ ...props, numberFormatter });
  const {
    getThumbValueLabel,
    getThumbPercent,
    getThumbMinValue,
    getThumbMaxValue,
  } = state;
  const { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  const descriptionId = useId();

  const valuePercent = getThumbPercent(0) * 100;

  const trackClassList = classNames(styles.track, {
    [styles["track--no-scale"]]: !scale,
  });

  const descriptionClassList = classNames({
    [styles["messages__description--regular"]]:
      descriptionSeverity === "regular",
    [styles["messages__description--warning"]]:
      descriptionSeverity === "warning",
  });

  return (
    <div className={styles.base}>
      <div {...groupProps}>
        {label && (
          <div className={styles.label__container}>
            <div className={styles.label__inner}>
              {label && (
                <Label weight="600" {...labelProps} className={styles.label}>
                  {label}
                </Label>
              )}
              {tooltipTrigger}
            </div>
            {/* TODO: Add input field according to design */}
            <output {...outputProps} className={styles.output}>
              <Text weight="400">{getThumbValueLabel(0)}</Text>
            </output>
          </div>
        )}

        <div className={styles.track__container}>
          <div {...trackProps} ref={trackRef} className={trackClassList}>
            <span
              className={styles["track--highlight"]}
              style={{ width: `${valuePercent}%` }}
            ></span>
            <Thumb index={0} state={state} trackRef={trackRef} name={name} />
          </div>
          {scale && (
            <div className={styles.scale} aria-hidden="true">
              <Text variant="line" size="tiny">
                {getThumbMinValue(0)}
              </Text>
              <Text variant="line" size="tiny">
                {getThumbMaxValue(0)}
              </Text>
            </div>
          )}
        </div>
      </div>

      {description && (
        <div className={styles.messages}>
          <Text
            variant="line"
            size="small"
            id={descriptionId}
            className={descriptionClassList}
          >
            {description}
          </Text>
        </div>
      )}
    </div>
  );
};

export default InputSlider;
