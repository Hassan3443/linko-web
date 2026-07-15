"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

export function Hero() {
  return (
    <Section 
      spacing="none" 
      className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]"
    >
      {/* Premium SaaS Background Glow */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      
      <Container>
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          animate="show"
        >
          
          {/* Eyebrow */}
          <motion.div variants={fadeUpVariant as Variants}>
            <Badge variant="accent" size="md">
              ✨ Redefining tech education
            </Badge>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full">
            <Heading as="h1" size="display" align="center" className="leading-tight">
              Empower your child to build the future.
            </Heading>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full">
            <Text size="xl" variant="muted" align="center" balance className="max-w-2xl mx-auto">
              Project-based coding and technology education designed to turn today's students into tomorrow's innovators.
            </Text>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" variant="primary" className="w-full sm:w-auto min-w-[200px]">
                Explore Courses
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto min-w-[200px]">
                Our Methodology
              </Button>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </Section>
  );
}
