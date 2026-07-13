import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("relative w-full overflow-hidden flex flex-col", {
  variants: {
    spacing: {
      default: "py-24 md:py-32 lg:py-40", // 96px mobile to 160px desktop
      tight: "py-16 md:py-24", // 64px mobile to 96px desktop
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