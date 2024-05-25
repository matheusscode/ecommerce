import * as React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
  as: Component = "h1",
  className,
  children,
  ...props
}: HeadingProps) => {
  let styles: string;

  switch (Component) {
    case "h2":
      styles = "!text-h-2 !font-h-2 !leading-h-2";
      break;
    case "h3":
      styles = "!text-h-3 !font-h-3 !leading-h-3";
      break;
    case "h4":
      styles = "!text-h-4 !font-h-4 !leading-h-4";
      break;
    case "h5":
      styles = "!text-h-5 !font-h-5 !leading-h-5";
      break;
    case "h6":
      styles = "!text-h-6 !font-h-6 !leading-h-6";
      break;
    default:
      styles = "!text-h-1 !font-h-1 !leading-h-1";
  }

  return (
    <Component className={`${styles} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
