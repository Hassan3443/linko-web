"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Search, Hammer, Rocket } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

const cardScaleFadeVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const borderColors = [
  "border-l-[4px] border-l-primary/60 border-y-border/50 border-r-border/50",
  "border-l-[4px] border-l-accent-secondary/60 border-y-border/50 border-r-border/50",
  "border-l-[4px] border-l-accent-tertiary/60 border-y-border/50 border-r-border/50",
];

const iconBgGradients = [
  "from-muted via-primary/5 to-background",
  "from-muted via-accent-secondary/5 to-background",
  "from-muted via-accent-tertiary/5 to-background",
];

const iconOverlayColors = [
  "bg-primary/10",
  "bg-accent-secondary/10",
  "bg-accent-tertiary/10",
];

const steps = [
  {
    number: "01",
    icon: <Search className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Discover",
    description: "Students explore our available learning paths and choose the program that matches their interests.",
    colorIndex: 0,
  },
  {
    number: "02",
    icon: <Hammer className="w-6 h-6 text-accent-secondary" aria-hidden="true" />,
    title: "Learn & Build",
    description: "Students attend interactive sessions, complete challenges and build real projects with mentor guidance.",
    colorIndex: 1,
  },
  {
    number: "03",
    icon: <Rocket className="w-6 h-6 text-accent-tertiary" aria-hidden="true" />,
    title: "Launch",
    description: "Students publish their portfolio, showcase projects and continue their journey with advanced tracks.",
    colorIndex: 2,
  },
];

export function HowItWorks() {
  return (
    <Section spacing="none" className="bg-muted-strong py-24 sm:py-32 overflow-hidden relative">
      {/* Premium glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] blur-[120px] rounded-full pointer-events-none" aria-hidden="true">
        <motion.div animate={{ opacity: [1, 0, 0, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-primary/5 rounded-full" />
        <motion.div animate={{ opacity: [0, 1, 0, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-accent-secondary/5 rounded-full" />
        <motion.div animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-accent-tertiary/5 rounded-full" />
      </div>
      
      <Container>
        <motion.div
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-16 relative z-10"
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariant as Variants}>
            <SectionTitle
              eyebrow="Enrollment & Delivery"
              title="How the program is delivered"
              description="A straightforward, proven process designed to take students from curious beginners to confident builders step by step."
              align="center"
              maxWidth="md"
            />
          </motion.div>

          {/* Vertically Stacked Steps */}
          <div className="flex flex-col gap-6 relative max-w-3xl mx-auto w-full">
            {steps.map((step) => (
              <motion.div key={step.title} variants={cardScaleFadeVariant as Variants} className="relative z-10">
                
                <Card 
                  variant="outline" 
                  padding="lg" 
                  interactive 
                  className={cn(
                    "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-background/90 backdrop-blur-md hover:border-primary/40 group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
                    borderColors[step.colorIndex]
                  )}
                >
                  
                  {/* Subtle Background Number */}
                  <div className="absolute -bottom-4 -right-2 font-heading text-8xl font-black text-foreground/[0.03] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2" aria-hidden="true">
                    {step.number}
                  </div>

                  {/* Icon Block */}
                  <div className={cn("w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-b flex items-center justify-center border border-border/60 mb-6 sm:mb-0 sm:mr-8 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 relative z-10", iconBgGradients[step.colorIndex])}>
                    <div className={cn("absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300", iconOverlayColors[step.colorIndex])} />
                    <div className="relative z-10">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col relative z-10">
                    <div className="flex items-center justify-center sm:justify-start mb-2">
                      <Text size="sm" weight="bold" variant="accent" className="bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider text-accent/90 text-xs">
                        Phase {step.number}
                      </Text>
                    </div>

                    <Heading as="h3" size="heading-4" className="mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </Heading>
                    
                    <Text size="base" variant="muted" balance className="leading-relaxed">
                      {step.description}
                    </Text>
                  </div>

                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
