import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold ring-offset-background transition-colors transition-transform transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] relative",
  {
    variants: {
      variant: {
        primary: 
          "bg-accent text-accent-foreground shadow-xs hover:-translate-y-[2px] hover:bg-[#FFA152] hover:shadow-sm",
        secondary: 
          "bg-background text-foreground border border-border shadow-xs hover:border-primary hover:text-primary",
        ghost: 
          "text-foreground bg-transparent hover:text-accent group",
      },
      size: {
        sm: "h-8 px-4 text-xs gap-1.5",
        md: "h-11 px-6 text-sm gap-2",
        lg: "h-14 px-8 text-base gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = "button",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {/* Absolutely positioned loader ensures the button width/height never shifts */}
        {isLoading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <Loader2 className="h-4 w-4 animate-spin text-current" aria-hidden="true" />
          </span>
        )}

        {/* Content fades out during loading rather than unmounting, preserving flex layout structure */}
        {leftIcon && (
          <span 
            className={cn("shrink-0 inline-flex transition-opacity duration-200", isLoading ? "opacity-0" : "opacity-100")} 
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}
        
        <span className={cn("transition-opacity duration-200", isLoading ? "opacity-0" : "opacity-100")}>
          {children}
        </span>
        
        {rightIcon && (
          <span 
            className={cn("shrink-0 inline-flex transition-opacity duration-200", isLoading ? "opacity-0" : "opacity-100")} 
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}

        {/* Refined LINKO Signature Pixel Motif */}
        {variant === "ghost" && (
          <span 
            className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 bg-accent opacity-0 transition-opacity transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" 
            aria-hidden="true"
          />
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";