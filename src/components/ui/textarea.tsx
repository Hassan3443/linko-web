import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-xl border bg-background text-foreground placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
      error: {
        true: "border-error text-error focus-visible:ring-error",
        false: "border-border",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, error, disabled, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ size, error, className }))}
        ref={ref}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
