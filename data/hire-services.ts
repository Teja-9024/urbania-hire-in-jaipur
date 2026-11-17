import type { City, FAQItem, Vehicle } from "@/types";

export type HireKind = "bus" | "taxi" | "tempo";

/** Cities that have their own bus / taxi / tempo traveller page (matches the navbar dropdowns). */
export const HIRE_CITY_SLUGS = ["jaipur", "udaipur", "mount-abu", "jodhpur", "jaisalmer", "bikaner"] as const;

export interface HireKindConfig {
  kind: HireKind;
  basePath: string;
  /** Breadcrumb / hub label, e.g. "Bus Services". */
  hubLabel: string;
  hubEyebrow: string;
  hubH1: string;
  /** One short line for the hero. */
  heroText: string;
  hubTitle: string;
  hubDescription: string;
  hubKeywords: string[];
  hubIntro: string[];
  hubFaqs: FAQItem[];
  /** Filter for which vehicles are shown on the pages of this service. */
  fleet: (vehicle: Vehicle) => boolean;
  fleetHeading: string;
  fleetIntro: string;
  slugFor: (citySlug: string) => string;
  pageName: (cityName: string) => string;
  h1: (cityName: string) => string;
  title: (cityName: string) => string;
  description: (city: City) => string;
  keywords: (cityName: string) => string[];
  intro: (city: City) => string;
  benefits: { title: string; text: string }[];
  priceFactors: string[];
  faqs: (city: City) => FAQItem[];
}

const NO_DESTINATION = { name: "nearby towns", distanceKm: 0, description: "" };
const nearby = (city: City, index: number) => city.nearbyDestinations[index] ?? city.nearbyDestinations[0] ?? NO_DESTINATION;

/** Hand-written, city-specific paragraph for each service, so pages never read as a find/replace. */
const angles: Record<HireKind, Record<string, string>> = {
  bus: {
    jaipur:
      "Jaipur is our home city and where most large groups begin: a 30-seater mini bus keeps a wedding baraat, school trip or corporate offsite together between the airport, the hotel belt and Amer Fort, and the same bus can then carry the group on to Jodhpur, Udaipur or Jaisalmer without changing vehicles.",
    udaipur:
      "In Udaipur a mini bus is the practical way to shuttle wedding guests between lakeside resorts, the airport at Dabok and the City Palace area, and to run a group day trip to Kumbhalgarh and Ranakpur, which sit roughly 84 and 96 km from the city.",
    "mount-abu":
      "Mount Abu's ghat road rewards a driver who runs it regularly. Groups usually come up from Abu Road station, spend a day on Nakki Lake, Sunset Point and the Dilwara Temples, and travel back down together in the same bus.",
    jodhpur:
      "Jodhpur groups typically combine the Mehrangarh and Umaid Bhawan area with an onward leg to Jaisalmer, about 285 km away, so a mini bus with proper luggage space and steady long-distance seating is the common choice.",
    jaisalmer:
      "For Jaisalmer, mini buses handle fort-area hotel transfers, the evening run out to the Sam sand dunes about 42 km from the city, and the long approaches from Jodhpur and Bikaner that make up most desert-circuit itineraries.",
    bikaner:
      "From Bikaner a mini bus is popular for pilgrimage groups heading to the Karni Mata Temple at Deshnoke, about 30 km away, and for tour groups moving on to Jaisalmer, roughly 330 km to the west.",
  },
  taxi: {
    jaipur:
      "As our home city, Jaipur is where we are quickest to respond: a car with driver suits families and couples who want to cover Amer Fort, the City Palace and Hawa Mahal at their own pace, or who need airport and railway transfers and a comfortable onward drive to Pushkar, Ajmer or Delhi.",
    udaipur:
      "Udaipur's lakeside lanes are easiest by car: airport transfers, a City Palace and Lake Pichola circuit, and a day trip to Kumbhalgarh and Ranakpur for a small family group that does not need a full-size vehicle.",
    "mount-abu":
      "For Mount Abu, a taxi is the simplest way up from Abu Road station, about 28 km away, and around Nakki Lake, Sunset Point and Guru Shikhar without hunting for local cabs each time you want to move.",
    jodhpur:
      "Jodhpur taxi bookings cover airport and railway pickups, Mehrangarh and Jaswant Thada sightseeing, and one-way or return trips to Jaisalmer, Osian and Udaipur for couples and small families.",
    jaisalmer:
      "Taxi service in Jaisalmer covers fort-area hotels, the Sam and Khuri dune camps, Kuldhara, and the long drives in from Jodhpur and Bikaner that most desert itineraries depend on.",
    bikaner:
      "Bikaner taxis cover railway station and Nal airport pickups, a Junagarh Fort and haveli tour, the Karni Mata trip to Deshnoke, and one-way trips toward Jaisalmer, Jodhpur and Jaipur.",
  },
  tempo: {
    jaipur:
      "Jaipur tempo traveller bookings, run from our home base, are usually family groups and corporate teams of 8 to 17 people travelling together to Amer Fort, Hawa Mahal and the city palaces, airport (JAI) and Sindhi Camp transfers, or moving on to Pushkar, Ajmer, Jodhpur and Udaipur without splitting into separate cars.",
    udaipur:
      "In Udaipur, tempo travellers run wedding guest shuttles between resorts and the airport, and small group tours around the lakes, with day trips to Kumbhalgarh, Ranakpur and Chittorgarh.",
    "mount-abu":
      "A Mount Abu tempo traveller suits friend and family groups coming up from Udaipur or Abu Road for Nakki Lake, Sunset Point and the Dilwara Temples, with a driver who knows the hill road.",
    jodhpur:
      "For Jodhpur, tempo travellers carry groups between Blue City hotels, Mehrangarh and Umaid Bhawan, and out to Osian, Rohet and Jaisalmer on the western circuit.",
    jaisalmer:
      "Jaisalmer tempo traveller hire covers desert-camp transfers to Sam and Khuri dunes, Kuldhara and the fort, and full multi-day desert circuits linking Jodhpur, Jaisalmer and Bikaner.",
    bikaner:
      "Bikaner tempo travellers serve pilgrimage groups to Deshnoke, heritage haveli tours, and Bikaner-to-Jaisalmer transfers for small tour groups who want one vehicle for the whole trip.",
  },
};

const commonPriceFactors = [
  "The vehicle and seating capacity you choose",
  "Total distance and the number of days on the road",
  "Travel dates — wedding season (October to February) and long weekends are busier",
  "Route type, night halts and any extra pickup points",
  "Extras such as vehicle decoration or waiting time at events",
];

export const hireServices: Record<HireKind, HireKindConfig> = {
  bus: {
    kind: "bus",
    basePath: "/bus-services",
    hubLabel: "Bus Services",
    hubEyebrow: "Mini bus & coach hire",
    hubH1: "Mini Bus Service in Rajasthan",
    heroText: "25 to 50 seater AC buses with driver for weddings, tours and group trips.",
    hubTitle: "Mini Bus Service in Rajasthan on Rent",
    hubDescription:
      "Book a 25 to 50 seater mini bus or coach in Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner and Mount Abu for weddings, tours and group trips. Driver included.",
    hubKeywords: ["mini bus service in rajasthan", "mini bus on rent", "bus hire rajasthan", "45 seater bus on rent"],
    hubIntro: [
      "When a group is too big for a van, a mini bus or coach keeps everyone together — one vehicle, one driver, one schedule. We run 25, 30 and 35 seater mini buses and 40 to 50 seater coaches for weddings, school and college tours, corporate events and pilgrimage groups across Rajasthan.",
      "Choose your city below to see local pickup points, popular routes and destinations, or send us your dates and group size and we will recommend the right size of bus and quote the whole trip.",
    ],
    hubFaqs: [
      {
        question: "What sizes of mini bus and coach do you offer?",
        answer:
          "We offer 25, 30 and 35 seater mini buses and 40, 45 and 50 seater coaches. Tell us your group size and luggage and we will suggest the most comfortable option.",
      },
      {
        question: "Which cities do you provide bus service in?",
        answer:
          "We run mini bus service in Jaipur, Udaipur, Mount Abu, Jodhpur, Jaisalmer and Bikaner, and take outstation bookings between them and across Rajasthan.",
      },
      {
        question: "Is a driver included with the bus?",
        answer: "Yes. Every bus comes with an experienced, verified driver. We do not offer self-drive rentals.",
      },
      {
        question: "How early should I book a bus for a wedding?",
        answer:
          "For wedding dates between October and February we recommend booking at least three to four weeks ahead so the right number of buses can be reserved for your schedule.",
      },
    ],
    fleet: (v) => v.category === "bus" && v.seatingCapacity <= 35,
    fleetHeading: "Mini buses available",
    fleetIntro: "Air-conditioned mini buses in 25, 30 and 35 seat configurations. Larger 40 to 50 seater coaches are available on request.",
    slugFor: (slug) => `mini-bus-service-in-${slug}`,
    pageName: (city) => `Mini Bus Service in ${city}`,
    h1: (city) => `Mini Bus Service in ${city}`,
    title: (city) => `Mini Bus Service in ${city} on Rent`,
    description: (city) =>
      `Hire a 25 to 35 seater mini bus in ${city.name} for weddings, school and college tours, corporate events and pilgrimages. Driver included, clear quote.`.slice(0, 158),
    keywords: (city) => [
      `mini bus service in ${city.toLowerCase()}`,
      `mini bus on rent in ${city.toLowerCase()}`,
      `bus hire ${city.toLowerCase()}`,
      `30 seater bus ${city.toLowerCase()}`,
    ],
    intro: (city) =>
      `Need one vehicle for the whole group in ${city.name}? Our mini bus service gives you an air-conditioned 25, 30 or 35 seater with an experienced driver, ready for weddings, school and college tours, corporate events and pilgrimage trips.`,
    benefits: [
      { title: "Whole group, one vehicle", text: "Everyone travels together on one schedule, which is far easier to coordinate than several cars." },
      { title: "Room for luggage", text: "Bus bodies leave space for bags, wedding gifts and equipment that vans struggle to carry." },
      { title: "Comfortable on long routes", text: "Air-conditioned cabins with pushback seats keep long outstation legs tiring for no one." },
      { title: "Driver included", text: "Every bus comes with an experienced, verified driver who knows the route." },
    ],
    priceFactors: commonPriceFactors,
    faqs: (city) => [
      {
        question: `How much does mini bus hire in ${city.name} cost?`,
        answer: `The price depends on the bus size, the distance, the number of days and your travel dates. Share your route and group size and we will send a clear quote for ${city.name}, usually within a few hours.`,
      },
      {
        question: `Which mini bus sizes can I book in ${city.name}?`,
        answer: `We offer 25, 30 and 35 seater mini buses in ${city.name}, and 40 to 50 seater coaches for larger groups. We will match the size to your group and luggage.`,
      },
      {
        question: `Can I take a mini bus from ${city.name} to ${nearby(city, 0).name} or ${nearby(city, 1).name}?`,
        answer: `Yes. ${nearby(city, 0).name} is about ${nearby(city, 0).distanceKm} km and ${nearby(city, 1).name} about ${nearby(city, 1).distanceKm} km from ${city.name}. We run these as day trips or as part of a longer outstation itinerary.`,
      },
      {
        question: `Do you provide buses for weddings in ${city.name}?`,
        answer: `Yes, we regularly supply buses for baraat and guest transfers. Wedding season runs from October to February, so book early for your dates.`,
      },
      {
        question: "Is the driver included in the mini bus rental?",
        answer: "Yes, every bus comes with an experienced, verified driver. We do not offer self-drive rentals.",
      },
    ],
  },

  taxi: {
    kind: "taxi",
    basePath: "/taxi-services",
    hubLabel: "Taxi Services",
    hubEyebrow: "Car rental with driver",
    hubH1: "Taxi Service in Rajasthan",
    heroText: "Innova and comfortable cars with driver for airport transfers, sightseeing and outstation trips.",
    hubTitle: "Innova & Taxi Service in Rajasthan | Car with Driver",
    hubDescription:
      "Book a taxi with driver in Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner and Mount Abu: airport transfers, sightseeing and outstation trips by Innova.",
    hubKeywords: ["taxi service in rajasthan", "car rental with driver rajasthan", "innova on rent rajasthan", "outstation taxi rajasthan"],
    hubIntro: [
      "For couples, families and small groups, a car with a driver is the simplest way to see Rajasthan. Our taxi service covers airport and railway transfers, local sightseeing, one-way drops and multi-day outstation trips in a comfortable Toyota Innova or similar car.",
      "Pick your city below for local pickup points and popular trips, or send us your route and dates and we will quote the journey.",
    ],
    hubFaqs: [
      {
        question: "Which cars do you offer for taxi service?",
        answer:
          "We offer the Toyota Innova for families of up to seven, and can arrange other cars depending on availability. Tell us your group size and luggage and we will suggest the best fit.",
      },
      {
        question: "Do you provide one-way taxi drops?",
        answer: "Yes. One-way drops between cities such as Jaipur, Jodhpur, Udaipur, Jaisalmer and Bikaner can be quoted on request.",
      },
      {
        question: "Can I book a taxi for a multi-day trip?",
        answer: "Yes. Send us your cities and dates and we will quote a multi-day trip with a single driver for the whole route.",
      },
      {
        question: "Are the drivers verified?",
        answer: "Yes, all our drivers are experienced and verified, and familiar with Rajasthan's city and highway routes.",
      },
    ],
    fleet: (v) => v.category === "car",
    fleetHeading: "Cars available",
    fleetIntro: "Comfortable air-conditioned cars for couples, families and small groups. Larger groups can move up to a Tempo Traveller or mini bus.",
    slugFor: (slug) => `taxi-service-in-${slug}`,
    pageName: (city) => `Taxi Service in ${city}`,
    h1: (city) => `Taxi Service in ${city}`,
    title: (city) => `Taxi Service in ${city} | Car Rental`,
    description: (city) =>
      `Book a taxi with driver in ${city.name} for airport transfers, sightseeing and outstation trips. Innova and comfortable cars, verified drivers, clear pricing.`.slice(0, 158),
    keywords: (city) => [
      `taxi service in ${city.toLowerCase()}`,
      `car rental in ${city.toLowerCase()}`,
      `innova on rent in ${city.toLowerCase()}`,
      `${city.toLowerCase()} outstation taxi`,
    ],
    intro: (city) =>
      `Looking for a reliable taxi in ${city.name}? Book a comfortable car with an experienced driver for airport and railway transfers, local sightseeing or an outstation trip — with a clear quote before you travel.`,
    benefits: [
      { title: "Door-to-door pickup", text: "Your driver meets you at the airport, station or hotel at the time you choose." },
      { title: "Flexible plans", text: "Change your stops on the day without negotiating with a new driver each time." },
      { title: "Comfort for families", text: "Air-conditioned cars with space for luggage, suited to couples and families." },
      { title: "Verified drivers", text: "Experienced drivers who know the city and highway routes." },
    ],
    priceFactors: [
      "The car you choose and its seating capacity",
      "Local hours versus outstation distance",
      "One-way drop versus return trip",
      "Travel dates, night halts and any extra stops",
      "Extras such as vehicle decoration for weddings",
    ],
    faqs: (city) => [
      {
        question: `How can I book a taxi in ${city.name}?`,
        answer: `Call or WhatsApp us with your pickup point, destination and dates, or send an enquiry on the site. We confirm the car, driver and a clear quote for ${city.name}, usually within a few hours.`,
      },
      {
        question: `Which cars are available for taxi service in ${city.name}?`,
        answer: `We offer the Toyota Innova for families of up to seven in ${city.name}, and can arrange other cars depending on availability.`,
      },
      {
        question: `Do you offer taxi from ${city.name} to ${nearby(city, 0).name}?`,
        answer: `Yes. ${nearby(city, 0).name} is about ${nearby(city, 0).distanceKm} km from ${city.name}. We run it as a day trip, a one-way drop or part of a longer journey.`,
      },
      {
        question: `Can I get an airport or railway station pickup in ${city.name}?`,
        answer: city.localPickupInfo,
      },
      {
        question: "Is the driver included in the taxi booking?",
        answer: "Yes, every taxi comes with an experienced, verified driver. We do not offer self-drive rentals.",
      },
    ],
  },

  tempo: {
    kind: "tempo",
    basePath: "/tempo-traveller",
    hubLabel: "Tempo Traveller",
    hubEyebrow: "12 to 17 seater vans",
    hubH1: "Tempo Traveller on Rent in Rajasthan",
    heroText: "12, 15 and 17 seater vans with driver for family trips, weddings and tours.",
    hubTitle: "Tempo Traveller on Rent in Rajasthan",
    hubDescription:
      "Hire a 12, 15 or 17 seater Tempo Traveller or Force Urbania in Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner and Mount Abu. Verified drivers, transparent pricing.",
    hubKeywords: ["tempo traveller on rent in rajasthan", "tempo traveller hire", "17 seater tempo traveller", "force urbania rental"],
    hubIntro: [
      "A Tempo Traveller is the go-to vehicle for family trips, corporate teams and friend groups of 8 to 17. Our 12, 15 and 17 seater vans, including the Force Urbania, come with pushback seats, air conditioning and room for luggage, so a whole group can travel across Rajasthan together.",
      "Select your city to see local pickup points and popular trips, or send us your route and dates for a quote.",
    ],
    hubFaqs: [
      {
        question: "What is the difference between a Tempo Traveller and a Force Urbania?",
        answer:
          "Both are group vans. The Force Urbania is Force Motors' newer, more spacious van, usually with more legroom and comfort on long routes. We can advise which suits your group and budget.",
      },
      {
        question: "How many people fit in a Tempo Traveller?",
        answer: "Our vans seat 12, 15 or 17 passengers. For fewer than 12 an Innova is often more economical; for more than 17, a mini bus is the better choice.",
      },
      {
        question: "Can a Tempo Traveller be booked for multi-day tours?",
        answer: "Yes. Send us your cities and dates and we will quote the complete trip with one driver and one vehicle for the whole route.",
      },
      {
        question: "Is luggage space enough for outstation trips?",
        answer: "Yes, our vans have a luggage area suited to outstation trips. Tell us about any bulky items when you enquire.",
      },
    ],
    fleet: (v) => v.category === "van",
    fleetHeading: "Tempo Traveller & Urbania vans",
    fleetIntro: "12, 15 and 17 seater vans with pushback seating and air conditioning, ideal for groups of 8 to 17.",
    slugFor: (slug) => `tempo-traveller-in-${slug}`,
    pageName: (city) => `Tempo Traveller in ${city}`,
    h1: (city) => `Tempo Traveller on Rent in ${city}`,
    title: (city) => `Tempo Traveller in ${city} on Rent`,
    description: (city) =>
      `Hire a 12, 15 or 17 seater Tempo Traveller or Force Urbania in ${city.name} for family trips, weddings and tours. Verified drivers, transparent pricing.`.slice(0, 158),
    keywords: (city) => [
      `tempo traveller in ${city.toLowerCase()}`,
      `tempo traveller on rent in ${city.toLowerCase()}`,
      `${city.toLowerCase()} tempo traveller hire`,
      `17 seater tempo traveller ${city.toLowerCase()}`,
    ],
    intro: (city) =>
      `Travelling in a group of 8 to 17 in ${city.name}? Our Tempo Traveller and Force Urbania vans give the whole group air-conditioned, pushback seating with an experienced driver for local sightseeing, airport transfers and outstation trips.`,
    benefits: [
      { title: "Groups of 8 to 17", text: "One vehicle for the whole family or team, in 12, 15 and 17 seat layouts." },
      { title: "Pushback seating", text: "Reclining seats and roof-mounted AC keep long drives comfortable." },
      { title: "Luggage space", text: "A dedicated luggage area for outstation trips and wedding travel." },
      { title: "Verified drivers", text: "Experienced drivers who know Rajasthan's city and highway routes." },
    ],
    priceFactors: commonPriceFactors,
    faqs: (city) => [
      {
        question: `What is the Tempo Traveller rent in ${city.name}?`,
        answer: `The rent depends on the seating (12, 15 or 17), distance, number of days and your dates. Share your plan and we will send a clear quote for ${city.name}, usually within a few hours.`,
      },
      {
        question: `Which Tempo Traveller sizes can I book in ${city.name}?`,
        answer: `12, 15 and 17 seater vans, including the Force Urbania, are available in ${city.name}. We will match the seats to your group and luggage.`,
      },
      {
        question: `Can I book a Tempo Traveller from ${city.name} to ${nearby(city, 0).name}?`,
        answer: `Yes. ${nearby(city, 0).name} is about ${nearby(city, 0).distanceKm} km from ${city.name}, and we run it as a day trip or as part of a multi-day tour.`,
      },
      {
        question: "What is the difference between a Tempo Traveller and a Force Urbania?",
        answer:
          "Both are group vans. The Force Urbania is the newer, more spacious model with more legroom on long routes. We can recommend the right one for your group and budget.",
      },
      {
        question: "Is the driver included?",
        answer: "Yes, every vehicle comes with an experienced, verified driver. We do not offer self-drive rentals.",
      },
    ],
  },
};

export const hireKinds: HireKind[] = ["bus", "taxi", "tempo"];

export function getHireAngle(kind: HireKind, citySlug: string): string {
  return angles[kind][citySlug] ?? "";
}

/** Resolves a URL slug such as "mini-bus-service-in-jaipur" back to its city slug. */
export function citySlugFromHireSlug(kind: HireKind, slug: string): string | undefined {
  const config = hireServices[kind];
  return HIRE_CITY_SLUGS.find((citySlug) => config.slugFor(citySlug) === slug);
}

export function hirePath(kind: HireKind, citySlug: string): string {
  return `${hireServices[kind].basePath}/${hireServices[kind].slugFor(citySlug)}`;
}
