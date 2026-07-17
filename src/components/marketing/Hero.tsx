"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code2, Terminal, Sparkles, ArrowRight, CheckCircle2, Zap } from "lucide-react";

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

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const headlineWords1 = "Empower your child to".split(" ");
  const headlineWords2 = "build the future.".split(" ");

  return (
    <Section 
      spacing="none" 
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
    >
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      
      {/* Geometric Section Accents */}
      <motion.svg
        viewBox="0 0 200 200"
        animate={{ 
          rotate: [0, 180, 360],
          y: ["0%", "-5%", "0%"],
          x: ["0%", "-2%", "0%"]
        }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        className="absolute top-[15%] left-[2%] w-[15vw] h-[15vw] max-w-[200px] max-h-[200px] text-primary/10 overflow-visible pointer-events-none -z-10 hidden md:block"
        style={{ strokeWidth: "1px", fill: "none", stroke: "currentColor" }}
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" strokeDasharray="4 8" />
      </motion.svg>
      <motion.div
        animate={{ 
          rotate: [0, -90, -180, -360],
          x: ["0%", "5%", "0%"]
        }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute bottom-[20%] right-[2%] w-[12vw] h-[12vw] max-w-[150px] max-h-[150px] border border-accent/10 rounded-xl pointer-events-none -z-10 hidden md:block"
        aria-hidden="true"
      />
      
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2], scale: [1, 1.05, 1] }} 
        transition={{ 
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          scale: { repeat: Infinity, duration: 8, ease: "easeInOut" }
        }}
        className="absolute top-[25%] left-[10%] hidden xl:flex w-20 h-20 bg-background/80 backdrop-blur-md border border-border/60 rounded-2xl items-center justify-center shadow-xl shadow-primary/5 z-0"
        aria-hidden="true"
      >
        <Terminal className="w-8 h-8 text-primary/60" />
      </motion.div>
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [2, -2, 2], scale: [1, 1.05, 1] }} 
        transition={{ 
          y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
          scale: { repeat: Infinity, duration: 9, ease: "easeInOut" }
        }}
        className="absolute bottom-[25%] right-[10%] hidden xl:flex w-24 h-24 bg-background/80 backdrop-blur-md border border-border/60 rounded-3xl items-center justify-center shadow-xl shadow-accent/5 z-0"
        aria-hidden="true"
      >
        <Code2 className="w-10 h-10 text-accent/60" />
      </motion.div>
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [5, -5, 5], scale: [1, 1.08, 1] }} 
        transition={{ 
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          scale: { repeat: Infinity, duration: 7, ease: "easeInOut" }
        }}
        className="absolute top-[15%] right-[15%] hidden xl:flex w-16 h-16 bg-background/80 backdrop-blur-md border border-border/60 rounded-2xl items-center justify-center shadow-xl shadow-accent-tertiary/10 z-0"
        aria-hidden="true"
      >
        <Zap className="w-8 h-8 text-accent-tertiary/70" />
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
          <div className="w-full mb-6">
            <Heading as="h1" size="display" align="center" className="tracking-tighter">
              {headlineWords1.map((word, i) => (
                <React.Fragment key={i}>
                  <motion.span variants={fadeUpVariant as Variants} className="inline-block">
                    {word}
                  </motion.span>
                  {" "}
                </React.Fragment>
              ))}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {headlineWords2.map((word, i) => (
                  <React.Fragment key={`grad-${i}`}>
                    <motion.span variants={fadeUpVariant as Variants} className="inline-block">
                      {word}
                    </motion.span>
                    {i !== headlineWords2.length - 1 && " "}
                  </React.Fragment>
                ))}
              </span>
            </Heading>
          </div>

          {/* Description */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full mb-8">
            <Text size="xl" variant="muted" align="center" balance className="max-w-2xl mx-auto text-foreground/70">
              Project-based coding and technology education designed to turn today's students into tomorrow's innovators. Build real apps, not toy examples.
            </Text>
          </motion.div>

          {/* CTA Group */}
          <motion.div variants={fadeUpVariant as Variants} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              <MagneticButton className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="primary" 
                  className="relative overflow-hidden w-full sm:w-auto min-w-[260px] h-16 text-lg px-10 group shadow-2xl shadow-primary/25 hover:shadow-3xl hover:shadow-primary/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                  rightIcon={<ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary via-primary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  <span className="relative z-10">Explore Courses</span>
                </Button>
              </MagneticButton>
              <a 
                href="#methodology" 
                className="inline-flex items-center gap-1.5 h-16 px-6 text-sm font-semibold text-foreground/60 hover:text-primary transition-all duration-200 underline-offset-4 decoration-transparent hover:decoration-primary hover:underline"
              >
                Our Methodology
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/50 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-success/80" /> Project-Based
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-success/80" /> Expert Mentors
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-success/80" /> Beginner Friendly
              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </Section>
  );
}

