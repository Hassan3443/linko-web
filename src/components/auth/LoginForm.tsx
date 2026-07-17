"use client";

import * as React from "react";
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export function LoginForm({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [demoMessage, setDemoMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoMessage("This is a UI demo — authentication is not yet connected.");
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
          <Sparkles size={24} />
        </div>
        <Heading as="h3" size="heading-3" className="mb-2 text-center">Log In</Heading>
        <Text className="text-center text-foreground/60">Welcome back to LINKO</Text>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
            <input 
              id="email" 
              type="email" 
              required 
              className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all" 
              placeholder="name@example.com"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
            <input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              required 
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all" 
              placeholder="Enter your password"
            />
            <button 
              type="button" 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary accent-primary" />
            <Text size="sm" className="text-foreground/80">Remember me</Text>
          </label>
          <button type="button" className="text-sm font-medium text-primary hover:underline">Forgot password?</button>
        </div>

        {demoMessage && (
          <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm mt-2 text-center">
            {demoMessage}
          </div>
        )}

        <Button type="submit" className="w-full mt-4 py-6 text-base font-semibold bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
          Log In
        </Button>
      </form>

      {/* Social divider */}
      <div className="relative my-7">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-foreground/50">or continue with</span>
        </div>
      </div>

      <Button 
        variant="secondary" 
        className="w-full py-5 bg-background border-border shadow-sm hover:bg-muted transition-colors font-medium" 
        type="button"
        leftIcon={
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        }
      >
        Google
      </Button>

      <div className="mt-8 pt-6 border-t border-border/60">
        <Text className="text-center text-foreground/70" size="sm">
          Don't have an account?{" "}
          <button onClick={onSwitchToSignup} className="text-primary font-medium hover:underline">
            Sign up
          </button>
        </Text>
      </div>
    </div>
  );
}
