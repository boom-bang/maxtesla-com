export const SITE = {
  name: "Max Tesla",
  handle: "max tesla",
  tagline: "builds things",
  description:
    "Personal site of Max Tesla — building Blask, exploring the edges of product, data, and AI.",
  url: "https://maxtesla.com",
  author: "Max Tesla",
  email: "max@maxtesla.com",
  locale: "en-US",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_LINKS: SocialLink[] = [
  { label: "home", href: "/" },
  { label: "posts", href: "/posts" },
];
