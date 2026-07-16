"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Footer() {
  return (
    <footer className="bg-muted/10 border-t border-border/50 pt-16 pb-8 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="flex flex-col"
        >
          {/* Top Section: Links & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
            
            {/* Column 1: Brand */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <Link href="/" className="mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1">
                <Image
                  src="/logos/full-logo.svg"
                  alt="LINKO Logo"
                  width={200}
                  height={64}
                  className="h-14 sm:h-16 w-auto dark:invert object-contain"
                  priority
                />
              </Link>
              <Text variant="muted" className="max-w-xs leading-relaxed">
                LINKO empowers students to learn programming through creativity, real projects, and modern technology education.
              </Text>

              {/* Verified Trust Element based on project stats */}
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-foreground/70 bg-background border border-border/50 px-3 py-1.5 rounded-full w-fit shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-success/80" aria-hidden="true" />
                <span className="tracking-wide">TRUSTED BY 500+ STUDENTS</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <nav className="flex flex-col gap-4" aria-label="Quick Links">
              <Heading as="h4" size="heading-4" className="text-base mb-2">
                Quick Links
              </Heading>
              {[
                { label: "Home", href: "#hero" },
                { label: "Programs", href: "#programs" },
                { label: "Curriculum", href: "#curriculum" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Column 3: Programs */}
            <nav className="flex flex-col gap-4" aria-label="Programs">
              <Heading as="h4" size="heading-4" className="text-base mb-2">
                Programs
              </Heading>
              {[
                "Programming Fundamentals",
                "Web Development",
                "Python",
                "AI Basics",
                "Game Development",
              ].map((program) => (
                <Link 
                  key={program} 
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors text-sm w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  {program}
                </Link>
              ))}
            </nav>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-4">
              <Heading as="h4" size="heading-4" className="text-base mb-2">
                Contact
              </Heading>
              <Text size="sm" variant="muted" className="flex flex-col gap-3">
                <a href="mailto:hello@linko.dev" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm w-fit">
                  hello@linko.dev
                </a>
                <span className="cursor-default text-foreground/70">
                  Egypt
                </span>
              </Text>
            </div>

          </div>

          {/* Bottom Section: Copyright & Socials */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
            <Text size="sm" variant="muted">
              © 2026 LINKO. All rights reserved.
            </Text>
            
            <div className="flex items-center gap-5">
              {[
                { icon: GithubIcon, label: "GitHub" },
                { icon: LinkedinIcon, label: "LinkedIn" },
                { icon: FacebookIcon, label: "Facebook" },
                { icon: InstagramIcon, label: "Instagram" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href="#" 
                    aria-label={social.label} 
                    className="text-foreground/50 hover:text-primary transition-all hover:-translate-y-0.5 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
          
        </motion.div>
      </Container>
    </footer>
  );
}
