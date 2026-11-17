export interface SightseeingPackage {
  slug: string;
  title: string;
  /** Short label shown on the photo, e.g. "8 Hours • 80 KM Package". */
  badge: string;
  description: string;
  stopsLabel: string;
  stops: string[];
  cta: string;
  /** Optional photo in /public. Cards fall back to a gradient until one is added. */
  image?: string;
  /** CSS object-position for the photo crop. */
  imagePosition?: string;
  /** Tailwind gradient classes for the fallback cover. */
  gradient: string;
}

export const jaipurPackages: SightseeingPackage[] = [
  {
    slug: "pink-city-heritage",
    title: "Jaipur Fort & Palace Day Tour",
    badge: "Full Day • 8 Hrs / 80 KM",
    description:
      "See the forts, palaces and observatory that made Jaipur a royal capital, all in one comfortable day. Your Urbania and driver stay with you, so there is no hunting for autos or bargaining at every stop.",
    stopsLabel: "Places you will visit",
    stops: ["Amer Fort", "Jal Mahal", "City Palace", "Jantar Mantar", "Hawa Mahal"],
    cta: "Book Day Tour",
    image: "/images/cities/jaipur-fort-palace.jpg",
    imagePosition: "50% 50%",
    gradient: "from-rose-700 via-orange-800 to-stone-900",
  },
  {
    slug: "pink-city-sunset",
    title: "Nahargarh, Galta Ji & Sunset Trip",
    badge: "Photo & Culture Trip",
    description:
      "A relaxed route for photographers and culture-loving groups, built around hilltop forts, old temples and the best viewpoints for golden-hour shots over the Pink City.",
    stopsLabel: "Places you will visit",
    stops: ["Nahargarh Fort Sunset Point", "Galta Ji Temple", "Jaigarh Fort", "Albert Hall Museum"],
    cta: "Book Photo Trip",
    image: "/images/cities/jaipur-sunset.jpg",
    imagePosition: "50% 50%",
    gradient: "from-sky-500 via-blue-600 to-blue-900",
  },
  {
    slug: "bazaar-airport-drop",
    title: "Quick Jaipur Bazaar & Airport Drop",
    badge: "Short Trip • 4 Hrs / 40 KM",
    description:
      "Made for business teams and visitors with a few spare hours between hotel checkout and a flight from Jaipur Airport (JAI). Shop, grab a bite, and reach the terminal on time.",
    stopsLabel: "Stops on this route",
    stops: ["Johari Bazaar Jewellery", "Bapu Bazaar Textiles", "Lassiwala MI Road", "Airport Drop"],
    cta: "Book Short Trip",
    image: "/images/cities/jaipur-bazaar.jpg",
    imagePosition: "50% 50%",
    gradient: "from-orange-400 via-rose-500 to-indigo-800",
  },
];
