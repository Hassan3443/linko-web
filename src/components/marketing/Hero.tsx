"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code2, Terminal, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

export function Hero() {
  return (
    <Section 
      spacing="none" 
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden flex flex-col items-center justify-center min-h-[80vh] bg-background"
    >
      {/* Refined Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-primary/[0.08] via-transparent to-transparent pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />
      
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[25%] left-[10%] hidden xl:flex w-20 h-20 bg-background/80 backdrop-blur-md border border-border/60 rounded-2xl items-center justify-center shadow-xl shadow-primary/5 z-0"
        aria-hidden="true"
      >
        <Terminal className="w-8 h-8 text-primary/60" />
      </motion.div>
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[10%] hidden xl:flex w-24 h-24 bg-background/80 backdrop-blur-md border border-border/60 rounded-3xl items-center justify-center shadow-xl shadow-accent/5 z-0"
        aria-hidden="true"
      >
        <Code2 className="w-10 h-10 text-accent/60" />
      </motion.div>

      <Container className="relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          animate="show"
        >
          
          {/* Subtle SaaS Eyebrow */}
          <motion.div variants={fadeUpVariant as Variants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border/60 shadow-sm text-sm font-medium text-foreground/80 tracking-wide">
              <Sparkles className="w-4 h-4 text-accent" />
              Redefining tech education for the next generation
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full mb-6">
            <Heading as="h1" size="display" align="center" className="tracking-tighter">
              Empower your child to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">build the future.</span>
            </Heading>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full mb-10">
            <Text size="xl" variant="muted" align="center" balance className="max-w-2xl mx-auto text-foreground/70">
              Project-based coding and technology education designed to turn today's students into tomorrow's innovators. Build real apps, not toy examples.
            </Text>
          </motion.div>

          {/* Bold Conversion Call to Action */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full">
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto sm:max-w-none">
              <Button size="lg" variant="primary" className="w-full sm:w-auto min-w-[220px] group shadow-xl shadow-primary/20">
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="#methodology" className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors underline-offset-4 hover:underline">
                Our Methodology
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-foreground/50 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success/80" /> 100% Project-Based
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success/80" /> Expert Mentors
              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </Section>
  );
}

