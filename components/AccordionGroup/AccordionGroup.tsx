"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import classNames from "classnames";

import styles from "./AccordionGroup.module.scss";

export interface AccordionGroupProps {
  mode?: "single" | "multiple";
  selectedKeys?: string[];
  children: ReactNode;
  className?: string;
}

export interface AccordionGroupState {
  mode: AccordionGroupProps["mode"];
  selectedKeys: AccordionGroupProps["selectedKeys"];
  setSelectedKeys: Dispatch<SetStateAction<string[]>>;
}

export const AccordionContext = createContext<AccordionGroupState | null>(null);

const AccordionGroup = (props: AccordionGroupProps) => {
  const { mode = "single", selectedKeys = [], children, className } = props;
  const [selected, setSelected] = useState(selectedKeys);

  const state = {
    mode: mode,
    selectedKeys: selected,
    setSelectedKeys: setSelected,
  };

  useEffect(() => {
    if (mode === "single") {
      // Use only first entry from array in single mode
      selectedKeys.length > 1 && setSelected([selectedKeys[0]]);
    }
  }, []);

  const classList = classNames(styles["accordion-group"], className);

  return (
    <div className={classList}>
      <AccordionContext.Provider value={state}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default AccordionGroup;
