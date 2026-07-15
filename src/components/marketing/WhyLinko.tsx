"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Target, TrendingUp, ShieldCheck, Users, Briefcase, Star, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

const benefits = [
  {
    icon: <Target className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Goal-Oriented Curriculum",
    description: "Every module is designed to produce tangible, portfolio-ready results.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "Industry-Aligned Skills",
    description: "We teach the exact frameworks and workflows used by top tech companies.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Safe & Supportive",
    description: "A moderated, inclusive environment where every student can thrive and build confidence.",
  },
];

const stats = [
  { value: "500+", label: "Students", icon: <Users className="w-5 h-5 text-primary" aria-hidden="true" /> },
  { value: "20+", label: "Projects", icon: <Briefcase className="w-5 h-5 text-accent" aria-hidden="true" /> },
  { value: "95%", label: "Satisfaction", icon: <Star className="w-5 h-5 text-primary" aria-hidden="true" /> },
];

export function WhyLinko() {
  return (
    <Section spacing="none" className="bg-background py-24 sm:py-32 border-t border-border/50">
      <Container>
        <motion.div
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariant as Variants}>
            <SectionTitle
              eyebrow="The Linko Difference"
              title="More than just a coding bootcamp"
              description="We provide a holistic educational experience that bridges the gap between learning to code and building real software."
              align="center"
              maxWidth="md"
            />
          </motion.div>

          {/* Premium Bento Grid Composition */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            {/* Top Row: Full Width Stats Banner */}
            <motion.div variants={fadeUpVariant as Variants}>
              <Card variant="elevated" padding="none" interactive className="w-full flex flex-col lg:flex-row bg-background/60 backdrop-blur-xl border-border/40 overflow-hidden relative group">
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-50" aria-hidden="true" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-50" aria-hidden="true" />
                
                <div className="relative z-10 p-8 sm:p-10 lg:pr-16 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border/50">
                  <Heading as="h4" size="heading-3" className="mb-3">
                    Our Impact
                  </Heading>
                  <Text variant="muted" balance>
                    Numbers that prove our methodology works.
                  </Text>
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 w-full lg:w-2/3 bg-muted/5">
                  {stats.map((stat) => (
                    <div 
                      key={stat.label} 
                      className={cn(
                        "flex flex-col justify-center items-center text-center gap-2 p-6 sm:p-8 transition-colors hover:bg-muted/40",
                        "border-border/50",
                        "border-b sm:border-b-0 last:border-b-0", // Mobile: horizontal borders
                        "sm:border-r sm:last:border-r-0" // Desktop: vertical borders
                      )}
                    >
                      <div className="mb-1 bg-background p-2 rounded-lg shadow-sm border border-border/30">
                        {stat.icon}
                      </div>
                      <Heading 
                        as="p" 
                        size="heading-3" 
                        className="tracking-tighter whitespace-nowrap"
                      >
                        {stat.value}
                      </Heading>
                      <Text size="sm" weight="semibold" variant="muted" className="uppercase tracking-wider">
                        {stat.label}
                      </Text>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Bottom Row: 3-Column Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div key={benefit.title} variants={fadeUpVariant as Variants}>
                  <Card 
                    variant="outline" 
                    interactive 
                    className={cn(
                      "border-border/60 bg-background/80 hover:border-primary/30 hover:bg-background transition-all group relative overflow-hidden flex flex-col p-6 sm:px-8 sm:pt-8 sm:pb-6",
                      index % 2 === 0 ? "border-l-[3px] border-l-primary/50" : "border-l-[3px] border-l-accent/50"
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="relative z-10 flex flex-col">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center border border-border/50 mb-5 group-hover:bg-background group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        {benefit.icon}
                      </div>
                      <Text weight="semibold" size="lg" className="text-foreground mb-3">
                        {benefit.title}
                      </Text>
                      <Text variant="muted" className="leading-7 text-sm mb-2">
                        {benefit.description}
                      </Text>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
