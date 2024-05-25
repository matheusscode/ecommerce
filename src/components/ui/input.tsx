"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Label from "../typography/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: {
    message: string;
    has: boolean;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <Label id={`${label}-input`}>{label}</Label>
        <div
          className={cn(
            "w-full h-9 gap-2 focus-within:border-neutral-300 focus-within:ring-1 ring-neutral-950 flex items-center rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          {leftIcon && leftIcon}
          <input
            id={`${label}-input`}
            type={type}
            className="h-full w-full outline-none ring-0"
            ref={ref}
            {...props}
          />
          {rightIcon && rightIcon}
        </div>
        {error?.has && (
          <span
            id={`${label}-input`}
            className="text-l font-l leading-l text-red-500"
          >
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
