"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Lightbulb, Rocket, Users, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

const features = [
  {
    icon: <Code className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Project-Based Learning",
    description: "Build real-world applications instead of copying theoretical examples. Every module produces a portfolio piece.",
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "Creative Problem Solving",
    description: "Develop the critical thinking skills needed to tackle complex challenges and architecture design.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Collaborative Environment",
    description: "Work in teams to simulate modern agile software development practices and peer reviews.",
  },
  {
    icon: <Rocket className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "Career-Ready Skills",
    description: "Learn modern frameworks and tools actively used in the tech industry today, from Git to deployment.",
  },
];

export function Features() {
  return (
    <Section spacing="default" className="bg-muted/20">
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
              eyebrow="Why Choose Linko"
              title="Equipping students for a digital world"
              description="Our comprehensive curriculum goes beyond basic coding syntax, focusing on architecture, design, and practical execution."
              align="center"
              maxWidth="md"
            />
          </motion.div>

          {/* Premium 2x2 Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeUpVariant as Variants}>
                <Card 
                  variant="elevated" 
                  interactive 
                  className={cn(
                    "border-border/50 bg-background/60 backdrop-blur-md p-6 sm:px-8 sm:pt-8 sm:pb-6 group overflow-hidden relative",
                    // Subtle visual differentiator: alternating border
                    index % 2 === 0 ? "border-l-[3px] border-l-primary/50" : "border-l-[3px] border-l-accent/50"
                  )}
                >
                  
                  {/* Subtle Background Accent */}
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" aria-hidden="true" />

                  <div className="relative z-10 flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-muted/80 flex items-center justify-center mb-5 border border-border/50 shadow-sm group-hover:scale-110 group-hover:bg-background group-hover:border-primary/20 transition-all duration-300">
                      {feature.icon}
                    </div>
                    
                    <Text weight="bold" size="xl" className="leading-tight text-foreground mb-3 tracking-tight">
                      {feature.title}
                    </Text>
                    
                    <Text variant="muted" className="text-base text-foreground/70 mb-5 leading-7">
                      {feature.description}
                    </Text>

                    <div className="flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
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
