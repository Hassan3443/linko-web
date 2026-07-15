import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Text } from "./text";

const sectionTitleVariants = cva("flex flex-col w-full", {
  variants: {
    align: {
      left: "text-left items-start mr-auto",
      center: "text-center items-center mx-auto",
      right: "text-right items-end ml-auto",
    },
    spacing: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    },
    maxWidth: {
      sm: "max-w-xl",
      md: "max-w-2xl",
      lg: "max-w-3xl",
      full: "max-w-full",
    }
  },
  defaultVariants: {
    align: "center",
    spacing: "md",
    maxWidth: "md",
  },
});

export interface SectionTitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof sectionTitleVariants> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, align, spacing, maxWidth, eyebrow, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sectionTitleVariants({ align, spacing, maxWidth, className }))}
        {...props}
      >
        {eyebrow && (
          <Text size="sm" weight="semibold" variant="accent" className="uppercase tracking-wider">
            {eyebrow}
          </Text>
        )}
        <Heading size="heading-2" align={align}>
          {title}
        </Heading>
        {description && (
          <Text size="lg" variant="muted" align={align} balance>
            {description}
          </Text>
        )}
      </div>
    );
  }
);

SectionTitle.displayName = "SectionTitle";
