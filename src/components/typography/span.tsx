import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface SpanProps extends HTMLAttributes<HTMLSpanElement> {}

const Span = ({ id, className, children, ...props }: SpanProps) => {
  return (
    <span
      className={twMerge(
        "!text-b !font-l !leading-l text-neutral-500 !whitespace-nowrap !select-none",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Span;
