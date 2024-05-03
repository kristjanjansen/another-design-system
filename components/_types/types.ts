export type MarginValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18;

export interface MarginProps {
  mt?: MarginValue;
  mb?: MarginValue;
  my?: MarginValue;
}

export type DescriptionSeverity = "regular" | "warning";

export type Background = "main" | "alternative";

// Heading types

export type HeadingVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "leadtext"
  | "subheadline";

export type HeadingProps = {
  id?: string;
  variant: HeadingVariant;
  children?: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  italic?: boolean;
  underline?: boolean;
  weight?: "400" | "600";
  uppercase?: boolean;
  dangerouslySetInnerHTML?: any;
};
// Text types

export type TextVariant = "p" | "line" | "list";

export type TextSize = "tiny" | "small" | "default" | "large";

export type TextProps = {
  children?: React.ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  as?: React.ElementType;
  className?: string;
  id?: string;
  italic?: boolean;
  underline?: boolean;
  weight?: "400" | "600";
  uppercase?: boolean;
  dangerouslySetInnerHTML?: any;
};

// Label types

export type LabelSize = "tiny" | "small" | "default" | "large";

export type LabelProps = {
  id?: string;
  size?: LabelSize;
  children: React.ReactNode;
  className?: string;
  italic?: boolean;
  underline?: boolean;
  weight?: "400" | "600";
  uppercase?: boolean;
};
