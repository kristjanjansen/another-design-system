import { MarginValue } from "../types/types";

export const marginValueToCss = (value: MarginValue): string => {
  const spacingMap: Record<MarginValue, string> = {
    0: "var(--eds-spacing-none)",
    1: "var(--eds-spacing-small-1)",
    2: "var(--eds-spacing-small-2)",
    3: "var(--eds-spacing-small-3)",
    4: "var(--eds-spacing-small-4)",
    5: "var(--eds-spacing-small-5)",
    6: "var(--eds-spacing-medium-1)",
    7: "var(--eds-spacing-medium-2)",
    8: "var(--eds-spacing-medium-3)",
    9: "var(--eds-spacing-medium-4)",
    10: "var(--eds-spacing-medium-5)",
    11: "var(--eds-spacing-medium-6)",
    12: "var(--eds-spacing-medium-7)",
    13: "var(--eds-spacing-medium-8)",
    14: "var(--eds-spacing-large-1)",
    15: "var(--eds-spacing-large-2)",
    16: "var(--eds-spacing-large-3)",
    17: "var(--eds-spacing-large-4)",
    18: "var(--eds-spacing-large-5)",
  };
  return spacingMap[value] || "0px";
};

export const getMarginStyles = ({
  mt,
  mb,
  my,
}: {
  mt?: MarginValue;
  mb?: MarginValue;
  my?: MarginValue;
}) => {
  const marginTop =
    mt !== undefined
      ? marginValueToCss(mt)
      : my !== undefined
      ? marginValueToCss(my)
      : undefined;
  const marginBottom =
    mb !== undefined
      ? marginValueToCss(mb)
      : my !== undefined
      ? marginValueToCss(my)
      : undefined;

  return {
    marginTop,
    marginBottom,
  };
};
