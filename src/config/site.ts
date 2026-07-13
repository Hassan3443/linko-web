export const siteConfig = {
  name: "LINKO",
  slogan: "Code. Create. Innovate.",
  description: "Equip your child to build the future with project-based technology education.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://linko.education",
  contact: {
    email: "hello@linko.education",
  },
};

export type SiteConfig = typeof siteConfig;