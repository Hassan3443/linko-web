import type { Metadata } from "next";
import { sora, manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "LINKO | Code. Create. Innovate.",
  description: "Equip your child to build the future with project-based technology education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}