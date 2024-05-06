import React, { RefObject, useRef } from "react";
import {
  type AriaSliderThumbOptions,
  mergeProps,
  useFocusRing,
  useSliderThumb,
  VisuallyHidden,
} from "react-aria";
import { SliderState } from "react-stately";
import classNames from "classnames";

import styles from "./Thumb.module.scss";

interface SliderThumbProps extends Omit<AriaSliderThumbOptions, "inputRef"> {
  state: SliderState;
  trackRef: RefObject<Element>;
  index: number;
}

const Thumb = (props: SliderThumbProps) => {
  const inputRef = useRef(null);
  const { state, trackRef, index, name } = props;
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
      name,
    },
    state
  );
  const { focusProps, isFocusVisible } = useFocusRing();

  const classList = classNames(styles.thumb, {
    [styles[`thumb--dragging`]]: isDragging,
    [styles[`thumb--focused`]]: isFocusVisible,
  });

  return (
    <div {...thumbProps} className={classList}>
      <VisuallyHidden>
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
      {/* TODO: replace with correct icon from DS when it exists */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
        className={styles.thumb__icon}
      >
        <path d="M3 3C3 2.44772 3.44772 2 4 2C4.55228 2 5 2.44772 5 3V13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13V3Z" />
        <path d="M7 3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V3Z" />
        <path d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V3Z" />
      </svg>
    </div>
  );
};

export default Thumb;
