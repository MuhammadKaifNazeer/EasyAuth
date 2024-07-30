// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
    ],
  },
  {
    title: "JWT Auth",
    href: "jwtAuth",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Basic JWT Authentication", href: "/basicJwtAuth" },
      {
        title: "Auth with Profile Management",
        href: "/authWithProfileManagement",
      },
      { title: "Email Confirmation", href: "/emailconfirmation" },
    ],
  },
  {
    title: "Comming Soon",
    href: "comingSoon",
    items: [
      { title: "OAuth Authentication", href: "/OAuthAuthentication" },
      {
        title: "Passwordless Authentication",
        href: "/passwordlessAuthentication",
      },
      {
        title: "Session Based Authentication",
        href: "/sessionBasedAuthentication",
      },
      {
        title: "Social Auth",
        href: "/socialAuth",
      },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
