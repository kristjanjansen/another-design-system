"use client";

import React, { forwardRef, ReactNode, useRef } from 'react';
import {
    AriaCheckboxProps,
    useCheckbox,
    useFocusRing,
    useId,
    VisuallyHidden,
} from 'react-aria';
import { useToggleState } from 'react-stately';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import classNames from 'classnames';

import { IconCheckSm } from '../../icons';
import Stack from '../Stack/Stack';
import type { DescriptionSeverity }  from '../../types/types';
import Label from "../Label/Label";
import Text from "../Text/Text";

import styles from './Checkbox.module.scss';

export interface CheckboxProps extends AriaCheckboxProps {
  description?: string;
  errorMessage?: string;
  children: ReactNode;
  descriptionSeverity?: DescriptionSeverity;
  suffix?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
      errorMessage: customErrorMessage,
      description,
      children,
      descriptionSeverity = 'regular',
      suffix,
      validationBehavior,
  } = props;

  const forwardedRef = useObjectRef(ref);
  const fallbackRef = useRef(null);
  const checkboxRef = forwardedRef || fallbackRef;

  const state = useToggleState(props);
  const {
      inputProps,
      labelProps,
      isSelected,
      isPressed,
      isInvalid,
      validationErrors,
  } = useCheckbox(props, state, checkboxRef);
  const { isFocusVisible, focusProps } = useFocusRing();

  const errorId = useId();
  const descriptionId = useId();

  const checkBoxclassList = classNames(styles.checkbox, {
      [styles['checkbox--pressed']]: isPressed,
      [styles['checkbox--selected']]: isSelected,
      [styles['checkbox--focused']]: isFocusVisible,
      [styles['checkbox--invalid']]: isInvalid,
  });

  const descriptionClassList = classNames({
      [styles['messages__description--regular']]:
          descriptionSeverity === 'regular',
      [styles['messages__description--warning']]:
          descriptionSeverity === 'warning',
  });

  // Allow only native error messages with native validation behaviour
  const errorMessage =
      validationBehavior === 'native'
          ? validationErrors.join(' ')
          : customErrorMessage;

  const hasMessages = errorMessage || description;

  // Remove aria-describedby from react-aria props and concat with internal id's to keep it usable
  const { 'aria-describedby': ariaDescribedBy, ...restInputProps } =
      inputProps;

  return (
      <Stack>
          <Label className={checkBoxclassList} {...labelProps}>
              <VisuallyHidden>
                  <input
                      {...mergeProps(restInputProps, focusProps)}
                      ref={checkboxRef}
                      // Keep this order of message id's so higher priority messages get read out first
                      aria-describedby={`${errorId} ${descriptionId} ${ariaDescribedBy}`}
                  />
              </VisuallyHidden>

              <span className={styles.checkbox__indicator} aria-hidden="true"><IconCheckSm className={styles.checkbox__icon}/></span>

              <div className={styles.checkbox__label}>
                  {children}
                  {suffix && (
                      <>
                          <span
                              className={styles['checkbox__suffix-separator']}
                          ></span>
                          <Text
                              variant="line"
                              italic
                              size="small"
                              className={styles.checkbox__suffix}
                          >
                              {suffix}
                          </Text>
                      </>
                  )}
              </div>
          </Label>

          {hasMessages && (
              <div className={styles.messages}>
                  {/* Show error message only when isInvalid */}
                  {errorMessage && isInvalid && (
                      <Text
                          variant="line"
                          size="small"
                          id={errorId}
                          className={styles.messages__error}
                      >
                          {errorMessage}
                      </Text>
                  )}
                  {description && (
                      <Text
                          variant="line"
                          size="small"
                          id={descriptionId}
                          className={descriptionClassList}
                      >
                          {description}
                      </Text>
                  )}
              </div>
          )}
      </Stack>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;