import { FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { siteConfig } from "@/config/site";

export const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", icon: FacebookIcon },
  { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: MailIcon }
];
