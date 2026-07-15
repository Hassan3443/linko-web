import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-xl border bg-background text-foreground transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-9 px-3 py-2 text-sm",
        md: "h-11 px-4 py-2 text-base",
        lg: "h-14 px-5 py-3 text-lg",
      },
      error: {
        true: "border-error text-error focus-visible:ring-error",
        false: "border-border",
      },
      hasLeftIcon: {
        true: "",
        false: "",
      },
      hasRightIcon: {
        true: "",
        false: "",
      }
    },
    compoundVariants: [
      { size: "sm", hasLeftIcon: true, className: "pl-9" },
      { size: "md", hasLeftIcon: true, className: "pl-11" },
      { size: "lg", hasLeftIcon: true, className: "pl-12" },
      { size: "sm", hasRightIcon: true, className: "pr-9" },
      { size: "md", hasRightIcon: true, className: "pr-11" },
      { size: "lg", hasRightIcon: true, className: "pr-12" },
    ],
    defaultVariants: {
      size: "md",
      error: false,
      hasLeftIcon: false,
      hasRightIcon: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, error, leftIcon, rightIcon, disabled, ...props }, ref) => {
    
    // Icon spacing based on size variants
    const iconSizeClasses = {
      sm: "w-4 h-4 left-3 right-3",
      md: "w-5 h-5 left-3.5 right-3.5",
      lg: "w-6 h-6 left-4 right-4",
    };
    
    const currentIconClasses = iconSizeClasses[size || "md"];
    const leftIconPos = currentIconClasses.split(" ").find(c => c.startsWith("left-"));
    const rightIconPos = currentIconClasses.split(" ").find(c => c.startsWith("right-"));
    const iconDims = currentIconClasses.split(" ").filter(c => c.startsWith("w-") || c.startsWith("h-")).join(" ");

    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className={cn("absolute top-1/2 -translate-y-1/2 text-foreground/50 flex items-center justify-center pointer-events-none", leftIconPos, iconDims)}>
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({
              size,
              error,
              hasLeftIcon: !!leftIcon,
              hasRightIcon: !!rightIcon,
              className,
            })
          )}
          ref={ref}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {rightIcon && (
          <div className={cn("absolute top-1/2 -translate-y-1/2 text-foreground/50 flex items-center justify-center pointer-events-none", rightIconPos, iconDims)}>
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
