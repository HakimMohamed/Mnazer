export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "RMG",
  description: "",
  navItems: [
    {
      label: "التحول الرقمي",
      href: "/digital-transformation",
    },
    {
      label: "الذكاء الاصطناعي",
      href: "/ai",
    },
    {
      label: "اداره البيانات",
      href: "/data-management",
    },
  ],
  navMenuItems: [
    {
      label: "التحول الرقمي",
      href: "/digital-transformation",
    },
    {
      label: "الذكاء الاصطناعي",
      href: "/ai",
    },
    {
      label: "اداره البيانات",
      href: "/data-management",
    },
    {
      label: "الامن السيبراني",
      href: "/cybersecurity",
    },
    {
      label: "معايير الايزو",
      href: "/iso",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
