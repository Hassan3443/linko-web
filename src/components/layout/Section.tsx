import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("relative w-full overflow-hidden flex flex-col", {
  variants: {
    spacing: {
      default: "py-16 md:py-20 lg:py-24", // Reduced vertical spacing by 25-35%
      tight: "py-8 md:py-12 lg:py-16",
      none: "py-0",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, as: Component = "section", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(sectionVariants({ spacing, className }))}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";