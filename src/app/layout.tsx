import type { Metadata, Viewport } from "next";
import { sora, manrope } from "./fonts";
import "./globals.css";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { Navbar } from "@/components/layout/Navbar";

// TODO: Replace https://example.com with the real production domain before launch
const BASE_URL = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "LINKO — Project-Based Coding Education for Students",
  description:
    "Empower your child to build the future with project-based coding and technology education. Real projects, expert mentors, beginner-friendly.",
  keywords: [
    "coding education",
    "programming for kids",
    "project-based learning",
    "tech education",
    "coding for students",
    "learn programming",
    "web development course",
    "Python for kids",
    "AI basics",
    "game development",
    "LINKO",
  ],
  openGraph: {
    title: "LINKO — Project-Based Coding Education for Students",
    description:
      "Empower your child to build the future with project-based coding and technology education. Real projects, expert mentors, beginner-friendly.",
    url: BASE_URL,
    siteName: "LINKO",
    locale: "en_US",
    type: "website",
    // NOTE: No dedicated OG image exists in /public yet.
    // Add an og-image.png (1200×630) to /public and uncomment:
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LINKO — Project-Based Coding Education" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LINKO — Project-Based Coding Education for Students",
    description:
      "Empower your child to build the future with project-based coding and technology education. Real projects, expert mentors, beginner-friendly.",
    // NOTE: No dedicated Twitter image exists in /public yet.
    // Add an og-image.png (1200×630) to /public and uncomment:
    // images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}