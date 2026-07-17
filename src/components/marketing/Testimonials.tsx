"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion/variants";

const cardScaleFadeVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const testimonials = [
  {
    name: "Alex Rivera",
    course: "React & Modern Frontend",
    testimonial: "Linko completely changed how I look at coding. Instead of just memorizing syntax, I actually built a full startup landing page from scratch. The mentors are incredibly supportive and the community is amazing.",
    rating: 5,
    initials: "AR",
    avatarColor: "bg-primary/10 border-primary/20 text-primary",
    topBorderColor: "border-t-primary/60"
  },
  {
    name: "Anonymous Parent",
    course: "Parent of Web Dev Student",
    testimonial: "I love how safe and supportive the environment is. The mentors provide excellent guidance, and the progress visibility lets me see exactly what my child is building each week. It's truly engaging and high quality.",
    rating: 5,
    initials: "P",
    avatarColor: "bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary",
    topBorderColor: "border-t-accent-secondary/60"
  },
  {
    name: "Marcus Johnson",
    course: "Web Development",
    testimonial: "The curriculum is so well structured. Every concept builds on the last one perfectly. I went from not knowing what HTML was to deploying my first website in just a few weeks. Highly recommend this to anyone.",
    rating: 5,
    initials: "MJ",
    avatarColor: "bg-accent-tertiary/10 border-accent-tertiary/20 text-accent-tertiary",
    topBorderColor: "border-t-accent-tertiary/60"
  }
];

export function Testimonials() {
  return (
    <Section spacing="default" className="bg-background">
      <Container>
        <motion.div
          variants={staggerContainerVariant as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-12 lg:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariant as Variants}>
            <SectionTitle
              eyebrow="Student & Parent Success"
              title="Don't just take our word for it"
              description="Hear from the families and students who have transformed their coding journey and built real-world projects through our curriculum."
              align="left"
              maxWidth="lg"
            />
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={cardScaleFadeVariant as Variants} className="h-full">
                <Card variant="elevated" padding="md" interactive className={cn("h-full relative overflow-hidden flex flex-col border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-background/80 backdrop-blur-sm group border-t-[3px]", testimonial.topBorderColor)}>
                  
                  {/* Author Header Row */}
                  <div className="flex flex-row items-center gap-4 mb-6 relative z-10">
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0 border shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300", testimonial.avatarColor)}>
                      <Text size="sm" weight="bold" className="tracking-wider">
                        {testimonial.initials}
                      </Text>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2">
                        <Heading as="h4" size="heading-4" className="text-base sm:text-lg mb-0.5 tracking-tight">
                          {testimonial.name}
                        </Heading>
                        <CheckCircle2 className="w-3.5 h-3.5 text-success/80" aria-hidden="true" />
                      </div>
                      <Text size="sm" variant="muted" className="text-xs tracking-wide uppercase">
                        {testimonial.course}
                      </Text>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5 relative z-10">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-primary/80 text-primary/80" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative z-10 flex-grow pl-4 border-l-[3px] border-border/60 group-hover:border-primary/40 transition-colors duration-300">
                    <Text className="text-foreground/80 leading-relaxed text-sm italic">
                      "{testimonial.testimonial}"
                    </Text>
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
