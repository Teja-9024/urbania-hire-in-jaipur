export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  /** Small grey heading shown at the top of the dropdown panel. */
  menuTitle?: string;
  children?: readonly NavLink[];
}

interface NavCity {
  name: string;
  slug: string;
}

const cityLinks = (
  cities: readonly NavCity[],
  label: (city: string) => string,
  href: (slug: string) => string,
): NavLink[] => cities.map((c) => ({ label: label(c.name), href: href(c.slug) }));

const jaipur = { name: "Jaipur", slug: "jaipur" };
const udaipur = { name: "Udaipur", slug: "udaipur" };
const mountAbu = { name: "Mount Abu", slug: "mount-abu" };
const jodhpur = { name: "Jodhpur", slug: "jodhpur" };
const jaisalmer = { name: "Jaisalmer", slug: "jaisalmer" };
const bikaner = { name: "Bikaner", slug: "bikaner" };
const delhi = { name: "Delhi", slug: "delhi" };
const agra = { name: "Agra", slug: "agra" };
const pushkar = { name: "Pushkar", slug: "pushkar" };

const rajasthanCities = [jaipur, udaipur, mountAbu, jodhpur, jaisalmer, bikaner];

export const primaryNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Bus-Services",
    href: "/bus-services",
    menuTitle: "Mini-Bus Services",
    children: cityLinks(
      rajasthanCities,
      (c) => `Mini-Bus Service in ${c}`,
      (s) => `/bus-services/mini-bus-service-in-${s}`,
    ),
  },
  {
    label: "Rajasthan Tours",
    href: "/rajasthan-tours",
    menuTitle: "Rajasthan Tours",
    children: cityLinks(
      [...rajasthanCities, delhi, agra, pushkar],
      (c) => `${c} Tour`,
      (s) => `/rajasthan-tours/${s}-tour`,
    ),
  },
  {
    label: "Force Urbania",
    href: "/urbania-hire",
    menuTitle: "Force Urbania Tempo",
    children: cityLinks(
      [delhi, jaipur, udaipur, mountAbu, jodhpur, jaisalmer, bikaner, agra, pushkar],
      (c) => `Force Urbania in ${c}`,
      (s) => `/urbania-hire/${s}`,
    ),
  },
  {
    label: "Innova & Taxi",
    href: "/taxi-services",
    menuTitle: "Taxi Services",
    children: cityLinks(
      rajasthanCities,
      (c) => `Taxi Service in ${c}`,
      (s) => `/taxi-services/taxi-service-in-${s}`,
    ),
  },
  {
    label: "Tempo Traveller",
    href: "/tempo-traveller",
    menuTitle: "Tempo Traveller",
    children: cityLinks(
      rajasthanCities,
      (c) => `Tempo Traveller in ${c}`,
      (s) => `/tempo-traveller/tempo-traveller-in-${s}`,
    ),
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  cities: [
    { label: "Urbania Hire Jaipur", href: "/urbania-hire/jaipur" },
    { label: "Urbania Hire Jodhpur", href: "/urbania-hire/jodhpur" },
    { label: "Urbania Hire Udaipur", href: "/urbania-hire/udaipur" },
    { label: "Urbania Hire Jaisalmer", href: "/urbania-hire/jaisalmer" },
    { label: "Urbania Hire Bikaner", href: "/urbania-hire/bikaner" },
    { label: "All cities", href: "/urbania-hire" },
  ],
  services: [
    { label: "Wedding Transport", href: "/services/wedding-transport" },
    { label: "Corporate Travel", href: "/services/corporate-travel" },
    { label: "Airport Transfer", href: "/services/airport-transfer" },
    { label: "Outstation Travel", href: "/services/outstation-travel" },
    { label: "Group Travel", href: "/services/group-travel" },
    { label: "Mini Bus Service", href: "/bus-services" },
    { label: "Taxi Service", href: "/taxi-services" },
    { label: "Tempo Traveller", href: "/tempo-traveller" },
    { label: "Rajasthan Tours", href: "/rajasthan-tours" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
