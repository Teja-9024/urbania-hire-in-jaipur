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

export const jodhpurPackages: SightseeingPackage[] = [
  {
    slug: "royal-heritage",
    title: "Jodhpur Fort & Palace Day Tour",
    badge: "Full Day • 8 Hrs / 80 KM",
    description:
      "See the forts, palaces and memorials that made Jodhpur a royal capital, all in one comfortable day. Your Urbania and driver stay with you, so there is no hunting for autos or bargaining at every stop.",
    stopsLabel: "Places you will visit",
    stops: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Mandore Gardens", "Ghanta Ghar"],
    cta: "Book Day Tour",
    image: "/images/cities/mehrangarh-fort.jpg",
    imagePosition: "50% 40%",
    gradient: "from-amber-700 via-orange-800 to-stone-900",
  },
  {
    slug: "blue-city-sunset",
    title: "Blue City, Stepwell & Sunset Trip",
    badge: "Photo & Culture Trip",
    description:
      "A relaxed route for photographers and culture-loving groups, built around old stepwells, quiet lakes and the best viewpoints for golden-hour shots over the blue rooftops.",
    stopsLabel: "Places you will visit",
    stops: ["Toorji Ka Jhalra Stepwell", "Pachetia Hill Sunset Point", "Rao Jodha Desert Rock Park", "Kaylana Lake"],
    cta: "Book Photo Trip",
    image: "/images/jodhpur/blue-city.jpg",
    imagePosition: "50% 70%",
    gradient: "from-sky-500 via-blue-600 to-blue-900",
  },
  {
    slug: "transit-handicraft",
    title: "Quick Jodhpur Market & Airport Drop",
    badge: "Short Trip • 4 Hrs / 40 KM",
    description:
      "Made for business teams and visitors with a few spare hours between hotel checkout and a flight from Jodhpur Airport (JDH). Shop, grab a bite, and reach the terminal on time.",
    stopsLabel: "Stops on this route",
    stops: ["Tripolia Bazaar Spices", "National Handloom Emporium", "Clock Tower Lassi", "Airport Drop"],
    cta: "Book Short Trip",
    image: "/images/jodhpur/clock-tower-market.jpg",
    imagePosition: "50% 35%",
    gradient: "from-orange-400 via-rose-500 to-indigo-800",
  },
];
