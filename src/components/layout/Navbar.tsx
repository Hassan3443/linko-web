"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { navigationConfig } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/heading";
import { AuthModal } from "@/components/auth/AuthModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const pathname = usePathname();

  // Handle scroll effect for glass navbar
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    handleScroll(); // Initial check
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background shadow-sm border-b border-border py-3"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20 md:h-24">


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navigationConfig.mainNav.map((item) => {
              const isActive = pathname === item.href || (pathname !== "/" && pathname?.startsWith(`${item.href}/`));
              
              return (
                <a
                  key={item.href}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={cn(
                    "text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1",
                    isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => setIsAuthModalOpen(true)} 
              className="rounded-full px-6 h-10 text-base tracking-wide border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/30 font-semibold"
              leftIcon={<User className="w-4 h-4" />}
            >
              Log In
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              className="rounded-full px-6 h-10 text-base tracking-wide border-0 bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/20 hover:opacity-90 font-semibold text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-colors hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg"
          >
            <nav className="flex flex-col p-4 gap-2" aria-label="Mobile Navigation">
              {navigationConfig.mainNav.map((item) => {
                const isActive = pathname === item.href || (pathname !== "/" && pathname?.startsWith(`${item.href}/`));
                
                return (
                  <a
                    key={item.href}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={cn(
                      "flex items-center w-full px-4 py-3 text-base font-semibold rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-primary/5 text-primary"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.title}
                  </a>
                );
              })}
              <div className="pt-4 pb-2 px-2 flex flex-col gap-3 border-t border-border mt-2">
                <Button 
                  variant="secondary" 
                  size="md" 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="w-full rounded-full text-base tracking-wide border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary/30 font-semibold"
                  leftIcon={<User className="w-5 h-5" />}
                >
                  Log In
                </Button>
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-full rounded-full text-base tracking-wide border-0 bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/20 hover:opacity-90 font-semibold text-white"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}
