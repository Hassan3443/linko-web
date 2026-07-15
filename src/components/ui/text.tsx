import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-primary",
      accent: "text-accent",
      muted: "text-foreground/70",
    },
    size: {
      sm: "text-sm leading-relaxed",
      base: "text-base leading-relaxed",
      lg: "text-lg leading-relaxed",
      xl: "text-xl leading-relaxed",
    },
    weight: {
      default: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    balance: {
      true: "text-balance",
      false: "",
    }
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    weight: "default",
    align: "left",
    balance: false,
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  balance?: boolean;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, weight, align, balance, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, size, weight, align, balance, className }))}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";
