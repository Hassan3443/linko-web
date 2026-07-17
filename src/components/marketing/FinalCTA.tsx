"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.15); 
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FinalCTA() {
  return (
    <Section spacing="default" className="relative">
      <Container>
        <motion.div
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden bg-primary px-6 py-14 sm:py-18 md:px-12 lg:px-16 text-center shadow-linko"
        >
          {/* Decorative Geometric Accents */}
          <motion.div
            animate={{ 
              rotate: [0, 90, 180, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="absolute -top-20 -right-20 w-64 h-64 border-[1.5px] border-white/10 rounded-2xl pointer-events-none hidden md:block"
            aria-hidden="true"
          />
          <motion.div
            animate={{ 
              rotate: [0, -90, -180, -360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
            className="absolute -bottom-32 -left-32 w-80 h-80 border-[1.5px] border-accent-tertiary/20 rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <motion.svg
            viewBox="0 0 100 100"
            animate={{ 
              rotate: [0, 180, 360],
              y: ["0%", "-5%", "0%"]
            }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            className="absolute top-[20%] left-[10%] w-32 h-32 text-white/10 overflow-visible pointer-events-none hidden lg:block"
            style={{ strokeWidth: "1px", fill: "none", stroke: "currentColor" }}
            aria-hidden="true"
          >
            <polygon points="50,10 90,90 10,90" />
          </motion.svg>

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
              <MagneticButton className="w-full sm:w-auto mb-3 sm:mb-4">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform duration-200 text-lg px-8 py-5 shadow-xl text-primary bg-background border-transparent hover:bg-background/90 hover:text-primary">
                  Book a Free Trial
                </Button>
              </MagneticButton>
              
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
