import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

const Label = ({ id, className, children, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={id}
      className={cn("!text-l !font-l !leading-l !select-none", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
