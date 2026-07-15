"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

const faqs = [
  {
    question: "What age groups do you teach?",
    answer: "Our programs are primarily designed for middle and high school students (ages 12-18), but we also offer specialized introductory tracks for motivated younger learners."
  },
  {
    question: "Do students need prior coding experience?",
    answer: "Not at all. We have specific beginner tracks that start from zero. For students with prior experience, we offer an initial assessment to place them directly into advanced cohorts."
  },
  {
    question: "Are the classes online or in person?",
    answer: "We offer flexible hybrid models. Our core interactive sessions are held live online, supplemented by optional local hackathons and in-person mentorship workshops in select cities."
  },
  {
    question: "How project-based is the curriculum?",
    answer: "Extremely. Instead of standard exams, 80% of the learning comes from building real applications. Students graduate with a functional portfolio, not just a certificate."
  },
  {
    question: "How do parents track student progress?",
    answer: "Parents receive monthly detailed performance reports and have 24/7 access to our parent dashboard, which shows module completion, project milestones, and mentor feedback."
  },
  {
    question: "What happens after completing a learning path?",
    answer: "Graduates gain access to our alumni network, exclusive internship placement assistance, and advanced tracks in specialized fields like Artificial Intelligence and Cloud Architecture."
  }
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card 
      variant="outline" 
      padding="none" 
      interactive={false} 
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "bg-background/95 border-primary/30 shadow-md shadow-primary/5" : "bg-background/50 border-border/50 hover:bg-background/90 hover:border-border/80"
      )}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-transparent cursor-pointer group"
        aria-expanded={isOpen}
      >
        <Text weight="bold" size="lg" className={cn("m-0 pr-8 tracking-tight text-left transition-colors", isOpen ? "text-primary" : "text-foreground")}>
          {question}
        </Text>
        <div 
          className={cn(
            "shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ease-in-out",
            isOpen ? "bg-primary text-primary-foreground border-primary rotate-45" : "bg-muted/50 border-border/50 text-foreground/70 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30"
          )} 
        >
          <Plus className="w-5 h-5" aria-hidden="true" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
              <div className="pt-6 border-t border-border/40">
                <Text size="base" className="leading-relaxed text-foreground/70" balance>
                  {answer}
                </Text>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export function FAQ() {
  return (
    <Section spacing="none" className="bg-muted/20 border-y border-border/40 py-24 sm:py-32 relative">
      <Container size="narrow">
        <motion.div
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-12 sm:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariant as Variants}>
            <SectionTitle
              eyebrow="FAQ"
              title="Common questions"
              description="Everything you need to know about our programs and methodology. Can't find the answer? Reach out to our support team."
              align="center"
              maxWidth="md"
            />
          </motion.div>

          {/* Accordion List */}
          <div className="flex flex-col gap-6 relative z-10">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeUpVariant as Variants}>
                <FaqItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
