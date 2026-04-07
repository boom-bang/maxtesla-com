export const SITE = {
  name: "Max Tesla",
  handle: "max tesla",
  tagline: "builds things",
  description:
    "Max Tesla: CEO & Co-Founder of Blask — turning millions of live pages into market intelligence brands can reason about. Writing on product and AI.",
  url: "https://maxtesla.com",
  author: "Max Tesla",
  email: "ahoy@maxtesla.com",
  locale: "en-US",
  sameAs: ["https://x.com/allsetmax", "https://github.com/boom-bang"],
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
