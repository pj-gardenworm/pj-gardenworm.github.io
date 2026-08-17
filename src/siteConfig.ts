import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "pj mini-net",
  description: "mini-net to keep up with pj :3",
  href: "https://pjcookie.com",
  author: "PJ",
  locale: "en-AU",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/posts",
    label: "posts",
  },
  daily: {
    path: "/daily",
    label: "daily",
  },
  newsletters: {
    path: "/newsletters",
    label: "newsletters",
  },
  gallery: {
    path: "/gallery",
    label: "gallery",
  },
  funstuff: {
    path: "/funstuff",
    label: "fun stuff",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:me@paula.coffee",
  },
	mastodon: {
		label: "Mastodon",
		href: "https://aus.social@regularbum",
	},
};
