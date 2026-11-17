import { Service } from "@/types";

/**
 * Keyword clustering: each service page owns one search intent cluster.
 * e.g. "wedding-transport" targets "urbania for wedding", "wedding car/bus
 * rental rajasthan", "baraat vehicle rental" — same intent, one page.
 * We do NOT split "urbania for wedding" and "urbania for baraat" into
 * separate pages since the intent and audience are identical.
 */
export const services: Service[] = [
  {
    slug: "wedding-transport",
    name: "Urbania for Wedding Transportation in Rajasthan",
    shortName: "Wedding Transport",
    icon: "Heart",
    heroImage: "/images/hero/desktop.png",
    shortDescription:
      "Force Urbania hire for baraat, guest transfers and wedding logistics across Rajasthan's destination wedding venues.",
    intro: [
      "Rajasthan hosts some of India's largest destination weddings, and moving guests between hotels, venues and airports is often the most stressful part of the event. Urbania Hire Jaipur supplies decorated, driver-led Force Urbania vehicles that keep wedding parties, baraatis and out-of-town guests moving on schedule.",
      "We work with wedding planners in Jaipur, Udaipur and Jodhpur on multi-day itineraries covering airport pickup, hotel shuttles, sangeet and baraat transport, and return drops — coordinated from a single point of contact.",
    ],
    highlights: [
      "Multiple Urbania vehicles coordinated for large guest lists",
      "Decorated vehicle option for baraat and doli routes",
      "Dedicated coordinator for multi-day wedding schedules",
      "Airport and railway station pickup for out-of-town guests",
      "Uniformed, verified drivers familiar with venue access",
    ],
    idealFor: [
      "Destination weddings in Jaipur, Udaipur and Jodhpur",
      "Baraat and guest shuttle services",
      "Multi-hotel guest pickup and drop coordination",
      "Sangeet and mehendi venue transfers",
    ],
    faqs: [
      {
        question: "How many Urbania vehicles do we need for a 150-guest wedding?",
        answer:
          "As a rough guide, one 17-seater Urbania comfortably covers 15 guests with luggage. For 150 guests we typically recommend 8-10 vehicles staggered across pickup windows, which we help you plan based on hotel locations and arrival times.",
      },
      {
        question: "Can the Urbania be decorated for baraat or doli routes?",
        answer:
          "Yes, we offer a decorated vehicle option with floral and fabric styling for baraat processions and the send-off route. Let us know at the time of booking so we can prepare the vehicle in advance.",
      },
      {
        question: "Do you provide multi-day packages for wedding events spread over 3-4 days?",
        answer:
          "Yes. Most destination weddings run pre-wedding, sangeet, wedding and departure days. We quote a single multi-day package covering all guest movements so you don't have to book separately each day.",
      },
    ],
    seo: {
      title: "Urbania for Wedding Transportation in Rajasthan | Baraat & Guest Hire",
      description:
        "Hire Force Urbania for wedding transport in Rajasthan — baraat vehicles, guest shuttles and multi-day wedding logistics in Jaipur, Udaipur and Jodhpur.",
      keywords: [
        "urbania for wedding",
        "wedding transport rajasthan",
        "baraat vehicle rental",
        "wedding guest shuttle udaipur",
      ],
    },
  },
  {
    slug: "corporate-travel",
    name: "Urbania for Corporate Travel in Rajasthan",
    shortName: "Corporate Travel",
    icon: "Briefcase",
    heroImage: "/images/hero/desktop.png",
    shortDescription:
      "Reliable Force Urbania hire for corporate offsites, employee transport and MICE movements across Rajasthan.",
    intro: [
      "Corporate teams travelling to Rajasthan for offsites, conferences and factory visits need punctual, professional transport that reflects on the company. Our Urbania fleet is used by travel desks and HR teams for airport-to-hotel transfers, multi-city offsites and event-day shuttle service.",
      "Vehicles come with uniformed drivers, GST-compliant invoicing and a single billing point for companies booking recurring or multi-city corporate travel.",
    ],
    highlights: [
      "GST invoicing for corporate bookings",
      "Uniformed, English-speaking drivers available on request",
      "Fixed-schedule shuttle service for multi-day conferences",
      "Priority booking for repeat corporate clients",
      "On-call support during the event window",
    ],
    idealFor: [
      "Corporate offsites and team outings",
      "Conference and MICE event shuttles",
      "Airport transfers for visiting executives",
      "Multi-city business itineraries",
    ],
    faqs: [
      {
        question: "Do you provide GST invoices for corporate bookings?",
        answer:
          "Yes, we issue GST-compliant invoices against your company's GSTIN for all corporate bookings, which can be consolidated for multi-vehicle or multi-day events.",
      },
      {
        question: "Can we book a fixed shuttle schedule for a 3-day conference?",
        answer:
          "Yes. We set up a recurring shuttle schedule between your conference venue and partner hotels, with the same driver and vehicle assigned for consistency across the event.",
      },
    ],
    seo: {
      title: "Urbania for Corporate Travel Rajasthan | Offsite & MICE Transport",
      description:
        "Force Urbania hire for corporate offsites, MICE events and employee transport across Rajasthan, with GST invoicing and dedicated event support.",
      keywords: [
        "urbania for corporate travel",
        "corporate transport rajasthan",
        "mice transport jaipur",
        "employee shuttle rajasthan",
      ],
    },
  },
  {
    slug: "airport-transfer",
    name: "Urbania Airport Transfer in Rajasthan",
    shortName: "Airport Transfer",
    icon: "Plane",
    heroImage: "/images/hero/desktop.png",
    shortDescription:
      "Group airport pickup and drop in a Force Urbania across Jaipur, Udaipur, Jodhpur and Jaisalmer airports.",
    intro: [
      "When a family, tour group or wedding party lands together, splitting into multiple cabs is expensive and hard to coordinate. A single Force Urbania seats up to 17 passengers with luggage, making it the most efficient airport transfer option for groups arriving at Jaipur, Udaipur, Jodhpur or Jaisalmer airport.",
      "We track flight schedules and adjust pickup time for delays, so your vehicle is waiting whether the flight lands early or late.",
    ],
    highlights: [
      "Live flight tracking to adjust pickup timing",
      "Meet-and-greet at arrivals with a name board",
      "Large luggage capacity for group travel",
      "Fixed, transparent airport transfer pricing",
    ],
    idealFor: [
      "Family and group arrivals",
      "Wedding guest airport pickup",
      "Tour groups starting a Rajasthan circuit",
      "Corporate executive airport transfers",
    ],
    faqs: [
      {
        question: "Do you track our flight if it is delayed?",
        answer:
          "Yes, we track the flight number you share at booking and adjust the driver's arrival time automatically, at no extra charge for reasonable delays.",
      },
      {
        question: "Is airport parking and waiting time included in the price?",
        answer:
          "Our quoted airport transfer price includes standard waiting time and parking charges. This is confirmed upfront in your quote with no hidden costs.",
      },
    ],
    seo: {
      title: "Urbania Airport Transfer Rajasthan | Group Pickup & Drop",
      description:
        "Book a Force Urbania for group airport transfer in Jaipur, Udaipur, Jodhpur and Jaisalmer. Flight tracking, meet-and-greet, fixed pricing.",
      keywords: [
        "urbania airport transfer",
        "jaipur airport group taxi",
        "udaipur airport urbania",
        "group airport pickup rajasthan",
      ],
    },
  },
  {
    slug: "outstation-travel",
    name: "Urbania for Outstation Travel Across Rajasthan",
    shortName: "Outstation Travel",
    icon: "MapPinned",
    heroImage: "/images/hero/desktop.png",
    shortDescription:
      "Multi-city Force Urbania hire for outstation trips, Rajasthan circuits and intercity family or group travel.",
    intro: [
      "Rajasthan's marquee circuit — Jaipur, Jodhpur, Udaipur, Jaisalmer and Bikaner — is best covered by road, and a Force Urbania gives a group the space to travel comfortably across long intercity distances without splitting into multiple cars.",
      "We quote outstation packages inclusive of driver allowance, toll, and parking, with the itinerary and per-day distance limits agreed upfront so there are no surprises on the final bill.",
    ],
    highlights: [
      "Multi-city circuit packages (5-10 day itineraries)",
      "Experienced drivers familiar with Rajasthan's highway routes",
      "Transparent per-km and per-day outstation pricing",
      "Driver accommodation and allowance included in quotes",
    ],
    idealFor: [
      "Multi-city Rajasthan tour circuits",
      "Family outstation vacations",
      "Group and friend-circle road trips",
      "Travel agency package tours",
    ],
    faqs: [
      {
        question: "What is included in an outstation Urbania package?",
        answer:
          "Our outstation quotes include the vehicle, driver allowance, and toll/parking estimates for the planned route. Driver accommodation for multi-day trips is arranged and billed transparently.",
      },
      {
        question: "Is there a minimum number of days for outstation hire?",
        answer:
          "Most outstation circuits are quoted for a minimum of 2 days given Rajasthan's intercity distances, but we can advise the right duration once you share your city list.",
      },
    ],
    seo: {
      title: "Urbania for Outstation Travel Rajasthan | Multi-City Circuit Hire",
      description:
        "Hire a Force Urbania for outstation and multi-city travel across Rajasthan. Transparent per-day pricing, experienced highway drivers.",
      keywords: [
        "urbania for outstation travel",
        "rajasthan circuit tour vehicle",
        "outstation urbania rental",
      ],
    },
  },
  {
    slug: "group-travel",
    name: "Urbania for Group Travel & Family Tours",
    shortName: "Group Travel",
    icon: "Users",
    heroImage: "/images/hero/desktop.png",
    shortDescription:
      "17-seater Urbania hire for families, school and college groups, and tour operators travelling together in Rajasthan.",
    intro: [
      "The Force Urbania's 17-seat layout was built for exactly this use case: a single group travelling together instead of splitting across cars. Families on a joint vacation, school and college educational trips, and travel agencies moving tour groups all use our Urbania fleet to keep everyone together with one driver and one itinerary.",
      "We help right-size the vehicle to your group — from a 12-seat Urbania for a smaller family trip up to multiple 17-seaters for larger school or agency groups.",
    ],
    highlights: [
      "Seats up to 17 passengers with luggage space",
      "Single itinerary and driver for the whole group",
      "Multiple vehicles coordinated for larger groups",
      "Popular for school, college and travel agency bookings",
    ],
    idealFor: [
      "Family group vacations",
      "School and college educational trips",
      "Travel agency tour groups",
      "Friend-circle and society group trips",
    ],
    faqs: [
      {
        question: "Can you arrange multiple Urbania vehicles for a 40-person group?",
        answer:
          "Yes, we regularly coordinate 3-4 Urbania vehicles for school, college and agency groups of 30-50 people, run to the same itinerary and pickup schedule.",
      },
      {
        question: "Do you offer discounted rates for school or college group bookings?",
        answer:
          "We offer volume pricing for multi-vehicle school and college bookings — share your group size and itinerary and we'll send a consolidated quote.",
      },
    ],
    seo: {
      title: "17 Seater Urbania for Group & Family Travel Rajasthan",
      description:
        "Book a 17-seater Force Urbania for family, school, college or travel-agency group trips across Rajasthan. Multi-vehicle coordination available.",
      keywords: [
        "17 seater urbania rental",
        "urbania for group travel",
        "family tour vehicle rajasthan",
      ],
    },
  },
];
