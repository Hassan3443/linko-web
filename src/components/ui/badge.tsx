import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold border transition-colors duration-200 select-none shrink-0",
  {
    variants: {
      variant: {
        default: 
          "border-transparent bg-muted text-primary",
        outline: 
          "border-border bg-transparent text-foreground",
        accent: 
          "border-transparent bg-accent/10 text-accent",
        success: 
          "border-transparent bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-500",
      },
      size: {
        sm: "h-5 px-2.5 text-[10px] tracking-wider gap-1",
        md: "h-6 px-3.5 text-xs tracking-normal gap-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, leftIcon, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";

    // When asChild is true, we pass children directly to the Slot to avoid breaking Radix UI requirements
    if (asChild) {
      return (
        <Comp ref={ref} className={cn(badgeVariants({ variant, size, className }))} {...props}>
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {leftIcon && (
          <span 
            className="shrink-0 inline-flex items-center justify-center opacity-90" 
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}
        <span className="leading-none">{children}</span>
      </Comp>
    );
  }
);

Badge.displayName = "Badge";