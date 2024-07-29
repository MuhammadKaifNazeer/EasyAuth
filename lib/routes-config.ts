// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Project Structure", href: "/project-structure" },
    ],
  },
  {
    title: "JWT Auth",
    href: "jwtAuth",
    items: [
      { title: "Basic Auth", href: "/basicAuth" },
      { title: "With mail confirmation", href: "/mailconfirmation" },
    ],
  },
  {
    title: "Social Auth",
    href: "socialauth",
    items: [
      { title: "Google Auth", href: "/googleAuth" },
      { title: "Github Auth", href: "/githubAuth" },
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
