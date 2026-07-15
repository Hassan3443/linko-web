import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-heading tracking-tight text-foreground",
  {
    variants: {
      size: {
        display: "text-4xl md:text-5xl lg:text-6xl tracking-tighter",
        "heading-2": "text-3xl md:text-4xl lg:text-5xl tracking-tight",
        "heading-3": "text-2xl md:text-3xl lg:text-4xl",
        "heading-4": "text-xl md:text-2xl lg:text-3xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      }
    },
    defaultVariants: {
      size: "heading-2",
      weight: "bold",
      align: "left",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, align, as: Tag = "h2", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Tag;

    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ size, weight, align, className }))}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";
