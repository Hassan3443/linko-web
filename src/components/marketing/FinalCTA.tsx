"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

export function FinalCTA() {
  return (
    <Section spacing="default" className="bg-background">
      <Container>
        <motion.div
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden bg-primary px-6 py-14 sm:py-18 md:px-12 lg:px-16 text-center shadow-linko"
        >
          {/* Decorative background gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full bg-accent/10 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/15 blur-[100px] pointer-events-none rounded-full" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 blur-[100px] pointer-events-none rounded-full" aria-hidden="true" />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            
            <motion.div variants={fadeUpVariant as Variants}>
              <Heading as="h2" size="display" align="center" className="text-primary-foreground mb-4">
                The future belongs to those who build it.
              </Heading>
            </motion.div>

            <motion.div variants={fadeUpVariant as Variants}>
              <Text size="lg" className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-center" balance>
                Give your child the opportunity to learn real technology skills, build meaningful projects, and gain confidence that lasts a lifetime.
              </Text>
            </motion.div>

            <motion.div variants={fadeUpVariant as Variants} className="flex flex-col items-center w-full">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform duration-200 text-lg px-8 py-5 mb-3 sm:mb-4 shadow-xl text-primary bg-background border-transparent hover:bg-background/90 hover:text-primary">
                Book a Free Trial
              </Button>
              
              <Text size="sm" weight="medium" className="text-primary-foreground/70 tracking-wide text-center">
                Join 500+ students already building their future.
              </Text>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
