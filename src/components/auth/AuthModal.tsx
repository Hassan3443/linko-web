"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: "login" | "signup";
}

export function AuthModal({ isOpen, onClose, defaultView = "login" }: AuthModalProps) {
  const [view, setView] = React.useState<"login" | "signup">(defaultView);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setView(defaultView);
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      
      setTimeout(() => {
        if (modalRef.current) {
          const firstInput = modalRef.current.querySelector("input");
          if (firstInput) firstInput.focus();
        }
      }, 100);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose, defaultView]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 18, stiffness: 350 }}
            className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl shadow-primary/10 p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Top decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-secondary to-accent-tertiary" />
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2.5 text-foreground/50 hover:text-foreground transition-colors rounded-full hover:bg-muted"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <AnimatePresence mode="wait">
              {view === "login" ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <LoginForm onSwitchToSignup={() => setView("signup")} />
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <SignupForm onSwitchToLogin={() => setView("login")} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
