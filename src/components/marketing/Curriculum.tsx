"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Terminal, Globe, Code2, Rocket, CheckCircle2, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

const stages = [
  {
    icon: <Terminal className="w-5 h-5" aria-hidden="true" />,
    number: "01",
    title: "Python Fundamentals",
    description: "Master the building blocks of programming through hands-on scripting.",
    bullets: [
      "Variables, loops, and data structures",
      "Object-oriented programming concepts",
      "Terminal and basic algorithms",
    ]
  },
  {
    icon: <Globe className="w-5 h-5" aria-hidden="true" />,
    number: "02",
    title: "Web Development",
    description: "Learn how the internet works and build responsive web pages.",
    bullets: [
      "HTML5 semantic structure",
      "Advanced CSS3 & Tailwind CSS",
      "JavaScript DOM manipulation",
    ]
  },
  {
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    number: "03",
    title: "React & Modern Frontend",
    description: "Build interactive single-page applications like modern startups.",
    bullets: [
      "React hooks and state management",
      "Component-driven architecture",
      "API integrations & data fetching",
    ]
  },
  {
    icon: <Rocket className="w-5 h-5" aria-hidden="true" />,
    number: "04",
    title: "Capstone Projects",
    description: "Synthesize your knowledge by building and deploying full applications.",
    bullets: [
      "Full-stack project planning",
      "Version control with Git & GitHub",
      "Deployment to Vercel/Netlify",
    ]
  },
];

export function Curriculum() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <Section spacing="default" className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-background overflow-hidden relative">
      <Container size="default">
        <motion.div
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-12 lg:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariant as Variants} className="relative z-20 text-center max-w-3xl mx-auto mb-4">
            <Heading as="h2" size="heading-2" className="tracking-tighter mb-6 text-4xl sm:text-5xl lg:text-6xl text-foreground">
              What your child will learn
            </Heading>
            <Text size="lg" variant="muted" balance className="leading-relaxed sm:text-xl">
              Our syllabus is designed to teach real-world programming concepts. Each stage introduces powerful new skills, from basic scripting to building and deploying full modern applications.
            </Text>
          </motion.div>

          {/* Interactive Accordion Explorer */}
          <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full relative z-10 pt-4">
            {stages.map((stage, index) => {
              const isActive = activeStage === index;
              return (
                <motion.div key={stage.title} variants={fadeUpVariant as Variants}>
                  <Card 
                    variant="outline" 
                    interactive={!isActive}
                    className={cn(
                      "overflow-hidden transition-all duration-300 w-full text-left",
                      isActive 
                        ? "bg-background/95 border-primary/40 shadow-lg shadow-primary/5" 
                        : "bg-background/50 border-border/40 hover:bg-background hover:border-border/80 cursor-pointer"
                    )}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                    onClick={() => setActiveStage(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStage(index);
                      }
                    }}
                  >
                    {/* Accordion Header */}
                    <div className={cn("p-5 sm:p-6 lg:p-8 flex items-center justify-between transition-colors", isActive && "pb-6 sm:pb-8")}>
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0", 
                          isActive ? "bg-primary/10 border-primary/20 text-primary" : "bg-muted border-border/50 text-foreground/50 group-hover:text-primary"
                        )}>
                          {stage.icon}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <Text size="sm" weight="bold" variant="accent" className={cn("px-2.5 py-1 rounded-md uppercase tracking-wider text-xs w-fit transition-colors",
                            isActive ? "bg-accent/10 text-accent" : "bg-muted text-foreground/50"
                          )}>
                            Stage {stage.number}
                          </Text>
                          <Heading as={isActive ? "h3" : "h4"} size={isActive ? "heading-3" : "heading-4"} className={cn("tracking-tight m-0 transition-colors duration-300", 
                            !isActive && "text-foreground/80 group-hover:text-foreground"
                          )}>
                            {stage.title}
                          </Heading>
                        </div>
                      </div>
                      
                      {/* Chevron Indicator */}
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300", isActive && "rotate-180")}>
                        <ChevronDown className={cn("w-5 h-5", isActive ? "text-primary" : "text-foreground/40")} aria-hidden="true" />
                      </div>
                    </div>
                    
                    {/* Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10 pt-0">
                            <div className="pt-6 sm:pt-8 border-t border-border/40">
                              <Text size="xl" variant="muted" balance className="mb-8 font-medium text-foreground/80">
                                {stage.description}
                              </Text>
                              
                              <ul className="flex flex-col gap-5">
                                {stage.bullets.map((bullet, i) => (
                                  <li key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20 shadow-sm">
                                      <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                                    </div>
                                    <Text size="base" className="leading-relaxed text-foreground/90 mt-1">
                                      {bullet}
                                    </Text>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
