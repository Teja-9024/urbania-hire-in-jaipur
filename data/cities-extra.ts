import { City } from "@/types";

/** Hubs outside Rajasthan that we serve as the start or end of Rajasthan circuits. */
export const extraCities: City[] = [
  {
    slug: "delhi",
    name: "Delhi",
    region: "Delhi NCR",
    state: "Delhi",
    heroImage: "/images/cities/delhi.jpg",
    shortDescription:
      "Force Urbania hire in Delhi NCR for airport transfers, corporate events, weddings and tours to Agra, Jaipur and Rajasthan.",
    intro: [
      "Delhi is where most North India group journeys begin. Corporate teams land at IGI Airport, wedding parties gather from across the country, and tour groups start the Golden Triangle and Rajasthan circuits from here — all needing a vehicle that can move a whole group together through heavy city traffic and onto the expressways.",
      "Our Urbania service in Delhi NCR covers airport and railway pickups, full-day city sightseeing, event shuttles across Delhi, Gurugram and Noida, and long-distance departures toward Agra, Jaipur, Mathura, Rishikesh and beyond, with drivers who know the city's routes and toll corridors.",
    ],
    localPickupInfo:
      "Pickup from Indira Gandhi International Airport (all terminals), New Delhi, Old Delhi and Hazrat Nizamuddin railway stations, and any hotel or address across Delhi, Gurugram, Noida and Ghaziabad.",
    useCases: [
      "Airport pickup and drop for tour groups and delegations",
      "Delhi sightseeing: India Gate, Red Fort, Humayun's Tomb and Qutub Minar",
      "Corporate event and conference shuttles across Delhi NCR",
      "Wedding guest transport in Delhi, Gurugram and Noida",
      "Start of Golden Triangle (Delhi-Agra-Jaipur) and Rajasthan tours",
    ],
    attractions: [
      { name: "India Gate", description: "The war memorial arch on Kartavya Path, a fixture on every Delhi city tour." },
      { name: "Red Fort", description: "The 17th-century Mughal fort in Old Delhi, a UNESCO World Heritage Site." },
      { name: "Humayun's Tomb", description: "Garden tomb that inspired later Mughal architecture, including the Taj Mahal." },
      { name: "Qutub Minar", description: "The 73-metre brick minaret in South Delhi, part of a UNESCO-listed complex." },
      { name: "Lotus Temple", description: "The lotus-shaped Bahá'í House of Worship, open to visitors of all faiths." },
    ],
    nearbyDestinations: [
      { name: "Agra", distanceKm: 230, description: "Taj Mahal city, reached in about 4 hours via the Yamuna Expressway." },
      { name: "Jaipur", distanceKm: 280, description: "The Pink City and the third corner of the Golden Triangle." },
      { name: "Mathura & Vrindavan", distanceKm: 150, description: "Pilgrimage towns on the way to Agra, often combined into one trip." },
      { name: "Neemrana", distanceKm: 125, description: "Fort-hotel town on the Delhi-Jaipur highway, popular for weekend breaks and weddings." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Can you arrange an Urbania for a Delhi airport pickup for a group?",
        answer:
          "Yes. We meet groups at IGI Airport with a driver tracking your flight, so a delayed arrival does not affect the pickup. Share your flight details and group size when you request a quote.",
      },
      {
        question: "How long does it take to drive from Delhi to Agra by Urbania?",
        answer:
          "Around 4 hours for the roughly 230 km via the Yamuna Expressway, depending on traffic leaving Delhi. Most groups leave early to see the Taj Mahal at sunrise and return the same day.",
      },
      {
        question: "Do you offer Delhi to Jaipur and Rajasthan tours from Delhi?",
        answer:
          "Yes, Delhi is a common starting point for our multi-city Rajasthan tours. Tell us your dates and cities and we will plan the route and quote it as one trip.",
      },
    ],
    seo: {
      title: "Urbania Hire in Delhi NCR | Force Urbania Rental",
      description:
        "Hire a Force Urbania in Delhi NCR for airport transfers, corporate events, weddings and Agra, Jaipur and Rajasthan tours. Verified drivers, transparent pricing.",
      keywords: ["urbania hire delhi", "urbania on rent in delhi", "force urbania rental delhi ncr", "urbania delhi to agra"],
    },
    lat: 28.6139,
    lng: 77.209,
  },
  {
    slug: "agra",
    name: "Agra",
    region: "Uttar Pradesh",
    state: "Uttar Pradesh",
    heroImage: "/images/cities/tajmahal.jpg",
    shortDescription:
      "Force Urbania hire in Agra for Taj Mahal and Agra Fort sightseeing, Fatehpur Sikri trips and Delhi-Agra-Jaipur circuit travel.",
    intro: [
      "Agra is the centrepiece of the Golden Triangle. Most groups arrive from Delhi or Jaipur, spend a day or two around the Taj Mahal, Agra Fort and Fatehpur Sikri, and move on — which makes a single vehicle with a driver who knows the entry gates, parking rules and timings far easier than juggling separate cabs.",
      "Our Agra Urbania service handles arrival transfers, a full-day sightseeing circuit, Fatehpur Sikri and Mathura day trips, and onward legs to Jaipur, Bharatpur and Delhi.",
    ],
    localPickupInfo:
      "Pickup from Agra Cantt and Agra Fort railway stations, Kheria Airport, and hotels around Taj Ganj, Fatehabad Road and the Cantonment area.",
    useCases: [
      "Taj Mahal sunrise visit and Agra Fort sightseeing",
      "Fatehpur Sikri and Sikandra day trips",
      "Delhi-Agra one-day tours for corporate and school groups",
      "Agra-Bharatpur-Jaipur circuit connections",
    ],
    attractions: [
      { name: "Taj Mahal", description: "The white-marble mausoleum on the Yamuna, closed to visitors on Fridays." },
      { name: "Agra Fort", description: "The red-sandstone Mughal fort a few kilometres from the Taj, a UNESCO World Heritage Site." },
      { name: "Itmad-ud-Daulah's Tomb", description: "Often called the 'Baby Taj', a delicate marble tomb on the Yamuna's east bank." },
      { name: "Mehtab Bagh", description: "Garden across the river with a classic back-view of the Taj Mahal at sunset." },
    ],
    nearbyDestinations: [
      { name: "Fatehpur Sikri", distanceKm: 40, description: "Akbar's abandoned red-sandstone capital, usually visited in half a day." },
      { name: "Bharatpur", distanceKm: 55, description: "Home to Keoladeo National Park and a common stop toward Jaipur." },
      { name: "Mathura", distanceKm: 58, description: "Pilgrimage town associated with Lord Krishna, easily combined with Vrindavan." },
      { name: "Delhi", distanceKm: 230, description: "Reached in about 4 hours by the Yamuna Expressway." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Can we visit the Taj Mahal and return to Delhi in one day by Urbania?",
        answer:
          "Yes. A Delhi-Agra-Delhi day trip is one of our most requested plans: leave Delhi early, see the Taj Mahal and Agra Fort, and drive back by evening. The Taj Mahal is closed on Fridays, so plan accordingly.",
      },
      {
        question: "How far is Fatehpur Sikri from Agra?",
        answer:
          "About 40 km, roughly an hour's drive. It is easy to add to an Agra sightseeing day or to visit on the way to Jaipur.",
      },
      {
        question: "Do you provide Agra to Jaipur transfers?",
        answer:
          "Yes, Agra to Jaipur is a common leg of the Golden Triangle, typically 5 to 6 hours with a stop at Fatehpur Sikri or Bharatpur if you wish.",
      },
    ],
    seo: {
      title: "Urbania Hire in Agra | Force Urbania Rental",
      description:
        "Book a Force Urbania in Agra for Taj Mahal and Agra Fort sightseeing, Fatehpur Sikri trips and Delhi-Agra-Jaipur travel. Verified drivers, clear pricing.",
      keywords: ["urbania hire agra", "urbania on rent in agra", "force urbania agra taj mahal", "delhi to agra urbania"],
    },
    lat: 27.1767,
    lng: 78.0081,
  },
];
