import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-3xl transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground border border-transparent",
        outline: "bg-background text-foreground border border-border/60 shadow-sm shadow-primary/5",
        elevated: "bg-background text-foreground border border-border/40 shadow-xl shadow-primary/5",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-5 md:p-6",
        lg: "p-6 md:p-8",
      },
      interactive: {
        true: "hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "none",
      interactive: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, interactive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ variant, padding, interactive, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 md:p-8", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 md:p-8 pt-0 md:pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 md:p-8 pt-0 md:pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";
