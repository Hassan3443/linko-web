"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Terminal, Globe, Code2, Rocket, CheckCircle2, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

const stages = [
  {
    icon: <Terminal className="w-6 h-6" aria-hidden="true" />,
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
    icon: <Globe className="w-6 h-6" aria-hidden="true" />,
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
    icon: <Code2 className="w-6 h-6" aria-hidden="true" />,
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
    icon: <Rocket className="w-6 h-6" aria-hidden="true" />,
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

const stageColors = [
  {
    collapsedCardHover: "hover:border-border/60 hover:shadow-sm hover:bg-muted/50",
    iconCollapsed: "bg-primary/[0.06] text-primary/50 border-primary/10",
    badgeCollapsed: "bg-primary/[0.06] text-primary/60 border-primary/10",
    iconActive: "bg-gradient-to-br from-primary/20 to-accent-secondary/10 border-primary/30 text-primary shadow-md shadow-primary/20",
    badgeActive: "bg-primary/20 text-primary border border-primary/30",
    cardActive: "border-primary/60 shadow-xl shadow-primary/15",
    topBar: "bg-primary",
    chevronActive: "rotate-180 bg-primary/10 border-primary/20 text-primary",
    chevronCollapsed: "bg-muted border-border/40 text-foreground/50 group-hover:text-foreground/70 group-hover:border-border/50",
    bulletIcon: "bg-primary/10 border-primary/20 text-primary",
  },
  {
    collapsedCardHover: "hover:border-border/60 hover:shadow-sm hover:bg-muted/50",
    iconCollapsed: "bg-accent-secondary/[0.06] text-accent-secondary/50 border-accent-secondary/10",
    badgeCollapsed: "bg-accent-secondary/[0.06] text-accent-secondary/60 border-accent-secondary/10",
    iconActive: "bg-gradient-to-br from-accent-secondary/20 to-accent/10 border-accent-secondary/30 text-accent-secondary shadow-md shadow-accent-secondary/20",
    badgeActive: "bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30",
    cardActive: "border-accent-secondary/60 shadow-xl shadow-accent-secondary/15",
    topBar: "bg-accent-secondary",
    chevronActive: "rotate-180 bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary",
    chevronCollapsed: "bg-muted border-border/40 text-foreground/50 group-hover:text-foreground/70 group-hover:border-border/50",
    bulletIcon: "bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary",
  },
  {
    collapsedCardHover: "hover:border-border/60 hover:shadow-sm hover:bg-muted/50",
    iconCollapsed: "bg-accent-tertiary/[0.06] text-accent-tertiary/50 border-accent-tertiary/10",
    badgeCollapsed: "bg-accent-tertiary/[0.06] text-accent-tertiary/60 border-accent-tertiary/10",
    iconActive: "bg-gradient-to-br from-accent-tertiary/20 to-primary/10 border-accent-tertiary/30 text-accent-tertiary shadow-md shadow-accent-tertiary/20",
    badgeActive: "bg-accent-tertiary/20 text-accent-tertiary border border-accent-tertiary/30",
    cardActive: "border-accent-tertiary/60 shadow-xl shadow-accent-tertiary/15",
    topBar: "bg-accent-tertiary",
    chevronActive: "rotate-180 bg-accent-tertiary/10 border-accent-tertiary/20 text-accent-tertiary",
    chevronCollapsed: "bg-muted border-border/40 text-foreground/50 group-hover:text-foreground/70 group-hover:border-border/50",
    bulletIcon: "bg-accent-tertiary/10 border-accent-tertiary/20 text-accent-tertiary",
  },
  {
    collapsedCardHover: "hover:border-border/60 hover:shadow-sm hover:bg-muted/50",
    iconCollapsed: "bg-accent/[0.06] text-accent/50 border-accent/10",
    badgeCollapsed: "bg-accent/[0.06] text-accent/60 border-accent/10",
    iconActive: "bg-gradient-to-br from-accent/20 to-accent-tertiary/10 border-accent/30 text-accent shadow-md shadow-accent/20",
    badgeActive: "bg-accent/20 text-accent border border-accent/30",
    cardActive: "border-accent/60 shadow-xl shadow-accent/15",
    topBar: "bg-accent",
    chevronActive: "rotate-180 bg-accent/10 border-accent/20 text-accent",
    chevronCollapsed: "bg-muted border-border/40 text-foreground/50 group-hover:text-foreground/70 group-hover:border-border/50",
    bulletIcon: "bg-accent/10 border-accent/20 text-accent",
  },
];

export function Curriculum() {
  const [activeStage, setActiveStage] = useState<number | null>(0);

  return (
    <Section spacing="default" className="bg-muted-strong overflow-hidden relative">
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
              const colors = stageColors[index % 4];
              
              return (
                <motion.div key={stage.title} variants={fadeUpVariant as Variants}>
                  <Card 
                    variant="outline" 
                    interactive={!isActive}
                    className={cn(
                      "overflow-hidden transition-all duration-300 w-full text-left relative",
                      isActive 
                        ? `bg-background border-2 ${colors.cardActive}` 
                        : `group bg-background border-border/40 shadow-sm ${colors.collapsedCardHover} cursor-pointer`
                    )}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                    onClick={() => setActiveStage(prev => prev === index ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStage(prev => prev === index ? null : index);
                      }
                    }}
                  >
                    {/* Top Accent Bar for Active State */}
                    {isActive && (
                      <div className={cn("absolute top-0 left-0 right-0 h-1", colors.topBar)} aria-hidden="true" />
                    )}
                    
                    {/* Accordion Header */}
                    <div className={cn("p-5 sm:p-6 lg:p-8 flex items-center justify-between transition-colors", isActive && "pb-6 sm:pb-8")}>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <motion.div 
                          animate={isActive ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                          transition={isActive ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" } : { duration: 0.3 }}
                          className={cn("w-14 h-14 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-300", 
                          isActive ? colors.iconActive : colors.iconCollapsed
                        )}>
                          {stage.icon}
                        </motion.div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <Text size="sm" weight="bold" variant="accent" className={cn("px-2.5 py-1 rounded-md uppercase tracking-wider text-xs w-fit transition-colors border font-bold",
                            isActive ? colors.badgeActive : colors.badgeCollapsed
                          )}>
                            Stage {stage.number}
                          </Text>
                          <Heading as={isActive ? "h3" : "h4"} size={isActive ? "heading-2" : "heading-3"} className={cn("tracking-tight m-0 transition-colors duration-300", 
                            !isActive && "text-foreground/80 group-hover:text-foreground/90"
                          )}>
                            {stage.title}
                          </Heading>
                        </div>
                      </div>
                      
                      {/* Chevron Indicator */}
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border", 
                        isActive ? colors.chevronActive : colors.chevronCollapsed
                      )}>
                        <ChevronDown className="w-6 h-6" aria-hidden="true" />
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
                              <Text size="xl" variant="muted" balance className="mb-10 font-medium text-foreground/80 md:text-2xl md:leading-normal">
                                {stage.description}
                              </Text>
                              
                              <ul className="flex flex-col gap-6">
                                {stage.bullets.map((bullet, i) => (
                                  <li key={i} className="flex items-start gap-5">
                                    <div className={cn("w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 md:mt-0 border shadow-sm", colors.bulletIcon)}>
                                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                                    </div>
                                    <Text size="lg" className="leading-relaxed md:leading-loose text-foreground/90 mt-1 md:mt-1.5">
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
