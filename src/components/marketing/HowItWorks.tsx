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

const steps = [
  {
    number: "01",
    icon: <Search className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Discover",
    description: "Students explore our available learning paths and choose the program that matches their interests.",
  },
  {
    number: "02",
    icon: <Hammer className="w-6 h-6 text-accent" aria-hidden="true" />,
    title: "Learn & Build",
    description: "Students attend interactive sessions, complete challenges and build real projects with mentor guidance.",
  },
  {
    number: "03",
    icon: <Rocket className="w-6 h-6 text-primary" aria-hidden="true" />,
    title: "Launch",
    description: "Students publish their portfolio, showcase projects and continue their journey with advanced tracks.",
  },
];

export function HowItWorks() {
  return (
    <Section spacing="none" className="bg-muted-strong py-24 sm:py-32 overflow-hidden relative">
      {/* Premium glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      
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
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={fadeUpVariant as Variants} className="relative z-10">
                
                <Card 
                  variant="outline" 
                  padding="lg" 
                  interactive 
                  className={cn(
                    "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-background/90 backdrop-blur-md hover:border-primary/40 group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
                    index % 2 === 0 ? "border-l-[4px] border-l-primary/60 border-y-border/50 border-r-border/50" : "border-l-[4px] border-l-accent/60 border-y-border/50 border-r-border/50"
                  )}
                >
                  
                  {/* Subtle Background Number */}
                  <div className="absolute -bottom-4 -right-2 font-heading text-8xl font-black text-foreground/[0.03] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2" aria-hidden="true">
                    {step.number}
                  </div>

                  {/* Icon Block */}
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-b from-muted to-background flex items-center justify-center border border-border/60 mb-6 sm:mb-0 sm:mr-8 shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 relative z-10">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
