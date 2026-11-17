import type { FAQItem, SeoMeta } from "@/types";

export interface TourDay {
  day: string;
  title: string;
  details: string;
}

export interface TourPackage {
  slug: string;
  citySlug: string;
  name: string;
  tagline: string;
  duration: string;
  bestTime: string;
  idealFor: string[];
  overview: string[];
  highlights: string[];
  itinerary: TourDay[];
  faqs: FAQItem[];
  seo: SeoMeta;
}

export const tourSlugFor = (citySlug: string) => `${citySlug}-tour`;

/**
 * Sightseeing tours by private vehicle with a driver. Every tour has its own
 * itinerary, best season and FAQs — they are the pages behind the
 * "Rajasthan Tours" navbar menu.
 */
export const tours: TourPackage[] = [
  {
    slug: "jaipur-tour",
    citySlug: "jaipur",
    name: "Jaipur Tour",
    tagline: "The Pink City's forts, palaces and bazaars in one or two days",
    duration: "1 to 2 days",
    bestTime: "October to March",
    idealFor: ["Families and first-time visitors", "Corporate and school groups", "Golden Triangle travellers"],
    overview: [
      "Jaipur is our home city, and it packs Rajasthan's royal history into a compact circuit: a hilltop fort, two palace complexes, an observatory and some of the country's best bazaars, all within a short drive of each other. A private vehicle lets you start early, beat the tour-bus crowds and pace the day to your group.",
      "Our Jaipur tour is planned around your time. Take it as a single long sightseeing day, or spread it over two days and add a stepwell or a sunset viewpoint.",
    ],
    highlights: ["Amer Fort", "City Palace & Jantar Mantar", "Hawa Mahal", "Jal Mahal photo stop", "Nahargarh Fort sunset", "Johari and Bapu bazaars"],
    itinerary: [
      {
        day: "Day 1",
        title: "Amer Fort, Jal Mahal and the old city",
        details:
          "Reach Amer Fort early, before the crowds, then stop at Jal Mahal on Man Sagar Lake. Continue to the old walled city for Hawa Mahal, the City Palace and the Jantar Mantar observatory, and finish with shopping in Johari or Bapu Bazaar.",
      },
      {
        day: "Day 2 (optional)",
        title: "Nahargarh, Albert Hall and Abhaneri",
        details:
          "Drive up to Nahargarh Fort for views over the city, see the Albert Hall Museum, and take a half-day trip to Abhaneri, about 95 km away, to see the deep Chand Baori stepwell.",
      },
    ],
    faqs: [
      {
        question: "How many days do I need for a Jaipur tour?",
        answer:
          "One full day covers Amer Fort, the City Palace, Hawa Mahal and Jal Mahal. A second day lets you add Nahargarh Fort, the Albert Hall Museum and a trip to Abhaneri.",
      },
      {
        question: "What is the best time to visit Jaipur?",
        answer:
          "October to March has the most comfortable weather. April to June is very hot, so we recommend early-morning starts if you travel then.",
      },
      {
        question: "Can the Jaipur tour start from Delhi?",
        answer:
          "Yes. Jaipur is about 280 km from Delhi, and many groups start from Delhi as part of the Golden Triangle. Tell us your dates and we will quote the full route.",
      },
    ],
    seo: {
      title: "Jaipur Tour Package with Car & Driver",
      description:
        "Plan a private Jaipur tour with driver: Amer Fort, City Palace, Hawa Mahal, Jal Mahal and Nahargarh in 1 or 2 days by car, Urbania or bus. Get a quote.",
      keywords: ["jaipur tour", "jaipur sightseeing tour", "jaipur tour package", "jaipur local sightseeing by car"],
    },
  },
  {
    slug: "udaipur-tour",
    citySlug: "udaipur",
    name: "Udaipur Tour",
    tagline: "Lakes, palaces and the Aravalli forts around the City of Lakes",
    duration: "1 to 2 days",
    bestTime: "September to March",
    idealFor: ["Couples and honeymooners", "Families", "Wedding guests with a free day"],
    overview: [
      "Udaipur is built around its lakes: the City Palace rises above Lake Pichola, boats run to the island palaces, and the old town's lanes are lined with havelis and viewpoints. It is the most romantic stop on a Rajasthan itinerary and a good base for fort and temple day trips.",
      "Our Udaipur tour covers the lakeside sights on day one and, if you have a second day, the fort of Kumbhalgarh and the Ranakpur Jain temples.",
    ],
    highlights: ["City Palace", "Lake Pichola boat ride", "Jagdish Temple", "Saheliyon Ki Bari", "Fateh Sagar Lake", "Kumbhalgarh & Ranakpur (day 2)"],
    itinerary: [
      {
        day: "Day 1",
        title: "City Palace, Pichola and the lakes",
        details:
          "Start at the City Palace complex and Jagdish Temple, walk to the Lake Pichola ghats for a boat ride, visit Saheliyon Ki Bari, and end the day at Fateh Sagar Lake for the evening light.",
      },
      {
        day: "Day 2 (optional)",
        title: "Kumbhalgarh and Ranakpur",
        details:
          "Drive to Kumbhalgarh, about 84 km away, to walk part of its long fort wall, then continue to the marble Jain temples of Ranakpur, about 96 km from Udaipur, before returning in the evening.",
      },
    ],
    faqs: [
      {
        question: "Is one day enough for Udaipur?",
        answer:
          "One day covers the City Palace, a boat ride and the main lakeside sights. Add a second day if you want Kumbhalgarh and Ranakpur, which are 84 and 96 km from the city.",
      },
      {
        question: "What is the best season for an Udaipur tour?",
        answer:
          "September to March is the most pleasant, and the lakes are fullest after the monsoon. Summer afternoons are hot, so sightseeing works best in the morning and evening.",
      },
      {
        question: "Can you combine Udaipur with Mount Abu or Jodhpur?",
        answer:
          "Yes. Mount Abu is about 165 km and Jodhpur a longer drive from Udaipur. Tell us the cities and we will quote one continuous trip.",
      },
    ],
    seo: {
      title: "Udaipur Tour Package with Car & Driver",
      description:
        "Book a private Udaipur tour with driver: City Palace, Lake Pichola, Saheliyon Ki Bari, plus Kumbhalgarh and Ranakpur day trips. 1 or 2 day plans by car.",
      keywords: ["udaipur tour", "udaipur sightseeing", "udaipur tour package", "udaipur to kumbhalgarh ranakpur"],
    },
  },
  {
    slug: "mount-abu-tour",
    citySlug: "mount-abu",
    name: "Mount Abu Tour",
    tagline: "Rajasthan's only hill station — lakes, viewpoints and marble temples",
    duration: "1 to 2 days",
    bestTime: "October to March, and monsoon for greenery",
    idealFor: ["Families and friend groups", "Honeymoon couples", "Summer escape from the plains"],
    overview: [
      "Mount Abu sits on a plateau in the Aravalli hills, cooler than the rest of Rajasthan for most of the year. The town is built around Nakki Lake, with sunset viewpoints, the Dilwara Jain temples and the state's highest peak nearby.",
      "The road up from Abu Road is a winding ghat climb, so a driver who runs it regularly makes the trip noticeably easier. Our tour covers the main sights in a day and gives you time to slow down on a second one.",
    ],
    highlights: ["Nakki Lake", "Dilwara Temples", "Sunset Point", "Guru Shikhar", "Achalgarh Fort and temple", "Toad Rock viewpoint"],
    itinerary: [
      {
        day: "Day 1",
        title: "Ascent, Nakki Lake and Sunset Point",
        details:
          "Drive up from Abu Road (about 28 km, 45 to 60 minutes), check in, walk around Nakki Lake and take the evening to Sunset Point for the view over the Aravalli range.",
      },
      {
        day: "Day 2",
        title: "Dilwara Temples, Achalgarh and Guru Shikhar",
        details:
          "Visit the Dilwara Jain temples in the morning, when they are quietest, then continue to Achalgarh for its fort and temple and to Guru Shikhar, the highest peak in the Aravalli range, before the descent.",
      },
    ],
    faqs: [
      {
        question: "How far is Mount Abu from Abu Road station?",
        answer: "About 28 km, roughly 45 to 60 minutes by road. Our drivers run this ghat route regularly.",
      },
      {
        question: "Can I do Mount Abu as a day trip from Udaipur?",
        answer:
          "Mount Abu is about 165 km from Udaipur, around four hours each way, so most groups stay one night rather than doing a same-day return.",
      },
      {
        question: "When is the best time to visit Mount Abu?",
        answer:
          "October to March is comfortable and clear, while the monsoon turns the hills green. It is also a popular summer break because it is cooler than the plains.",
      },
    ],
    seo: {
      title: "Mount Abu Tour Package with Car & Driver",
      description:
        "Plan a private Mount Abu tour with driver: Nakki Lake, Dilwara Temples, Sunset Point, Guru Shikhar and Achalgarh. 1 or 2 day trips from Abu Road or Udaipur.",
      keywords: ["mount abu tour", "mount abu sightseeing", "mount abu tour package", "abu road to mount abu taxi"],
    },
  },
  {
    slug: "jodhpur-tour",
    citySlug: "jodhpur",
    name: "Jodhpur Tour",
    tagline: "The Blue City, Mehrangarh Fort and the desert villages beyond",
    duration: "1 to 2 days",
    bestTime: "October to March",
    idealFor: ["Heritage and photography groups", "Families", "Travellers heading on to Jaisalmer"],
    overview: [
      "Jodhpur is dominated by Mehrangarh, one of India's largest forts, above a maze of blue-washed houses. Around it are a marble cenotaph, an Art Deco palace, busy old-city markets and, a short drive out, gardens and desert villages.",
      "Our Jodhpur tour covers the city sights in a day and adds Osian and village experiences if you have longer, making it a natural first leg before Jaisalmer.",
    ],
    highlights: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Clock Tower & Sardar Market", "Mandore Gardens", "Osian temples (day 2)"],
    itinerary: [
      {
        day: "Day 1",
        title: "Mehrangarh, Jaswant Thada and the old city",
        details:
          "Start at Mehrangarh Fort when it opens, walk down to Jaswant Thada, pass Umaid Bhawan Palace, and finish at the Clock Tower and Sardar Market for local sweets and spices.",
      },
      {
        day: "Day 2 (optional)",
        title: "Mandore, Rohet and Osian",
        details:
          "See Mandore Gardens (about 9 km), visit a Bishnoi village near Rohet (about 40 km) and continue to the temple town of Osian, about 65 km from Jodhpur, which also sits on the road to Jaisalmer.",
      },
    ],
    faqs: [
      {
        question: "How long does a Jodhpur city tour take?",
        answer: "A full day covers Mehrangarh, Jaswant Thada, Umaid Bhawan Palace and the old-city markets. A second day adds Mandore, Rohet and Osian.",
      },
      {
        question: "How far is Jaisalmer from Jodhpur?",
        answer: "About 285 km, a drive of around 5 hours. Many groups do Jodhpur on day one and travel to Jaisalmer the next morning, stopping at Osian.",
      },
      {
        question: "What is the best time for Jodhpur sightseeing?",
        answer: "October to March. In summer, start early and plan indoor stops such as the fort museum for the afternoon.",
      },
    ],
    seo: {
      title: "Jodhpur Tour Package with Car & Driver",
      description:
        "Private Jodhpur tour with driver: Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, old city and Osian. 1 or 2 day plans by car, Urbania or mini bus.",
      keywords: ["jodhpur tour", "jodhpur sightseeing", "jodhpur tour package", "jodhpur to osian jaisalmer tour"],
    },
  },
  {
    slug: "jaisalmer-tour",
    citySlug: "jaisalmer",
    name: "Jaisalmer Tour",
    tagline: "The Golden City, its living fort and a night among the Thar dunes",
    duration: "2 days / 1 night",
    bestTime: "October to February",
    idealFor: ["Desert-camp seekers and photographers", "Families and friend groups", "Tour groups on the western circuit"],
    overview: [
      "Jaisalmer rises out of the Thar desert in honey-coloured sandstone. Its fort is one of the few in India still lived in, its havelis are covered in carving, and the dunes at Sam are a short drive away for sunset and an overnight camp.",
      "Because the roads in are long, most visitors give Jaisalmer two days. Our tour covers the fort and havelis by day and the desert in the evening, so you see both the city and the sand.",
    ],
    highlights: ["Jaisalmer Fort (Sonar Qila)", "Patwon Ki Haveli", "Gadisar Lake", "Bada Bagh cenotaphs", "Sam sand dunes", "Kuldhara village"],
    itinerary: [
      {
        day: "Day 1",
        title: "Fort, havelis and Gadisar Lake",
        details:
          "Explore the lanes of Jaisalmer Fort, then visit Patwon Ki Haveli and the smaller carved havelis. Stop at Gadisar Lake and take in the cenotaphs at Bada Bagh in the late-afternoon light.",
      },
      {
        day: "Day 1 evening to Day 2",
        title: "Sam sand dunes and Kuldhara",
        details:
          "Drive about 42 km to the Sam sand dunes for sunset and a desert camp evening. Next morning, stop at Kuldhara, about 18 km from the city, or Khuri dunes, about 48 km away, before you leave.",
      },
    ],
    faqs: [
      {
        question: "How many days should I plan in Jaisalmer?",
        answer: "Two days, one night works well: the fort and havelis on day one, and the Sam dunes for sunset and an overnight camp.",
      },
      {
        question: "How far are the Sam sand dunes from Jaisalmer?",
        answer: "About 42 km. The road is fully paved and our vehicles run it daily for camp drop-offs and pickups.",
      },
      {
        question: "When is the best time to visit Jaisalmer?",
        answer: "October to February is cool enough for the dunes. Summer days are extremely hot, so plan sightseeing very early or late if you travel then.",
      },
    ],
    seo: {
      title: "Jaisalmer Tour Package with Car & Driver",
      description:
        "Book a private Jaisalmer tour with driver: Sonar Qila, Patwon Ki Haveli, Gadisar Lake, Sam sand dunes and Kuldhara. 2 day plans by car, Urbania or mini bus.",
      keywords: ["jaisalmer tour", "jaisalmer sightseeing", "jaisalmer tour package", "jaisalmer sam sand dunes tour"],
    },
  },
  {
    slug: "bikaner-tour",
    citySlug: "bikaner",
    name: "Bikaner Tour",
    tagline: "Junagarh Fort, havelis, camels and the Karni Mata Temple",
    duration: "1 day",
    bestTime: "October to March",
    idealFor: ["Heritage travellers", "Pilgrimage groups", "Groups linking Jaipur or Delhi with Jaisalmer"],
    overview: [
      "Bikaner is one of Rajasthan's least crowded heritage cities. Junagarh Fort is unusual for being built on flat ground, the old city is full of carved havelis, and the Karni Mata Temple at Deshnoke is known worldwide for its resident rats.",
      "Our Bikaner tour fits the fort, palace and havelis into a single day, with the Deshnoke temple and the camel breeding farm as add-ons for a fuller schedule.",
    ],
    highlights: ["Junagarh Fort", "Lalgarh Palace", "Old city havelis", "Karni Mata Temple, Deshnoke", "National Camel Research Centre", "Gajner Palace area"],
    itinerary: [
      {
        day: "Day 1 morning",
        title: "Junagarh Fort and the old city",
        details:
          "Begin at Junagarh Fort, then walk the old city to see the carved sandstone havelis in the narrow lanes around Rampuria.",
      },
      {
        day: "Day 1 afternoon",
        title: "Lalgarh Palace and Deshnoke",
        details:
          "Visit Lalgarh Palace and its museum, then drive about 30 km to the Karni Mata Temple at Deshnoke. On the way back, stop at the camel breeding farm or the Gajner area outside town.",
      },
    ],
    faqs: [
      {
        question: "Is one day enough for Bikaner?",
        answer: "Yes. Junagarh Fort, the havelis, Lalgarh Palace and Deshnoke fit into one day. Add the camel farm or Gajner if you have extra time.",
      },
      {
        question: "How far is Bikaner from Jaisalmer?",
        answer: "About 330 km, roughly 5.5 hours by road. Many groups treat it as the transfer day between the two cities.",
      },
      {
        question: "How far is the Karni Mata Temple from Bikaner?",
        answer: "About 30 km, or under an hour, so it is easy to combine with a half day of city sightseeing.",
      },
    ],
    seo: {
      title: "Bikaner Tour Package with Car & Driver",
      description:
        "Private Bikaner tour with driver: Junagarh Fort, Lalgarh Palace, old-city havelis and the Karni Mata Temple at Deshnoke. One-day plan by car or Urbania.",
      keywords: ["bikaner tour", "bikaner sightseeing", "bikaner tour package", "bikaner to deshnoke karni mata"],
    },
  },
  {
    slug: "delhi-tour",
    citySlug: "delhi",
    name: "Delhi Tour",
    tagline: "Old Delhi, Lutyens' Delhi and the Mughal monuments in a day",
    duration: "1 to 2 days",
    bestTime: "October to March",
    idealFor: ["First-time visitors and school groups", "Corporate teams with a spare day", "Golden Triangle and Rajasthan tour starters"],
    overview: [
      "Delhi layers several capitals in one city. Old Delhi has the Red Fort, Jama Masjid and the crowded lanes of Chandni Chowk; Lutyens' Delhi has India Gate and the wide avenues of the government quarter; and the south holds Humayun's Tomb, Qutub Minar and the Lotus Temple.",
      "Traffic makes a private vehicle with a local driver worthwhile here. Our Delhi tour is sequenced to avoid backtracking, and can start at the airport or your hotel and finish as the first leg of a Rajasthan or Agra trip.",
    ],
    highlights: ["Red Fort", "Jama Masjid & Chandni Chowk", "India Gate", "Humayun's Tomb", "Qutub Minar", "Lotus Temple"],
    itinerary: [
      {
        day: "Day 1 morning",
        title: "Old Delhi",
        details: "See the Red Fort and Jama Masjid, and walk through Chandni Chowk's lanes for street food and old-city atmosphere.",
      },
      {
        day: "Day 1 afternoon",
        title: "India Gate, Humayun's Tomb and Qutub Minar",
        details:
          "Drive past the government quarter to India Gate, visit Humayun's Tomb, and finish at the Qutub Minar complex in South Delhi.",
      },
      {
        day: "Day 2 (optional)",
        title: "Temples and museums, or onward to Agra",
        details: "Add the Lotus Temple and a museum in the morning, or leave early for Agra, about 230 km away, for the Taj Mahal.",
      },
    ],
    faqs: [
      {
        question: "How long does a Delhi sightseeing tour take?",
        answer: "One full day covers Old Delhi, India Gate, Humayun's Tomb and Qutub Minar. Add a second day for the Lotus Temple, museums and shopping.",
      },
      {
        question: "Can you arrange a Delhi to Agra to Jaipur tour?",
        answer: "Yes. The Golden Triangle is one of our most requested trips. Tell us your dates and how many days you have and we will quote the complete route.",
      },
      {
        question: "Do you provide airport pickup for the tour start?",
        answer: "Yes. We can meet you at IGI Airport or any Delhi NCR hotel to begin the tour, with the driver tracking your flight.",
      },
    ],
    seo: {
      title: "Delhi Tour Package with Car & Driver",
      description:
        "Private Delhi tour with driver: Red Fort, Jama Masjid, India Gate, Humayun's Tomb and Qutub Minar. Airport pickup, 1 or 2 day plans by car or Urbania.",
      keywords: ["delhi tour", "delhi sightseeing tour", "delhi tour package", "delhi local sightseeing by car"],
    },
  },
  {
    slug: "agra-tour",
    citySlug: "agra",
    name: "Agra Tour",
    tagline: "The Taj Mahal, Agra Fort and Fatehpur Sikri",
    duration: "1 to 2 days",
    bestTime: "October to March",
    idealFor: ["Delhi-Agra day trippers", "Golden Triangle travellers", "Families and school groups"],
    overview: [
      "Agra is home to the Taj Mahal, and around it stand the red-sandstone Agra Fort, the inlaid marble tomb of Itmad-ud-Daulah and, a short drive away, the abandoned Mughal capital of Fatehpur Sikri.",
      "Our Agra tour is timed around the Taj Mahal's opening hours and closure on Fridays. Take it as a single day from Delhi or stay overnight to see the Taj at sunrise and add Fatehpur Sikri.",
    ],
    highlights: ["Taj Mahal", "Agra Fort", "Itmad-ud-Daulah's Tomb", "Mehtab Bagh sunset view", "Fatehpur Sikri", "Sikandra"],
    itinerary: [
      {
        day: "Day 1",
        title: "Taj Mahal, Agra Fort and Mehtab Bagh",
        details:
          "Reach the Taj Mahal early, then visit Agra Fort and Itmad-ud-Daulah's Tomb. In the evening, cross the river to Mehtab Bagh for the Taj at sunset. The Taj Mahal is closed on Fridays.",
      },
      {
        day: "Day 2 (optional)",
        title: "Fatehpur Sikri and onward",
        details: "Drive about 40 km to Fatehpur Sikri, then continue to Bharatpur (about 55 km) or on to Jaipur, or return to Delhi.",
      },
    ],
    faqs: [
      {
        question: "Can I see the Taj Mahal in a day trip from Delhi?",
        answer: "Yes. Leave Delhi early, take the Yamuna Expressway (about 4 hours, 230 km), see the Taj Mahal and Agra Fort, and return the same evening.",
      },
      {
        question: "Which day is the Taj Mahal closed?",
        answer: "The Taj Mahal is closed to visitors on Fridays, so plan your Agra day around that.",
      },
      {
        question: "How far is Fatehpur Sikri from Agra?",
        answer: "About 40 km, roughly an hour. It is easy to visit on the way to Jaipur or as a second-day add-on.",
      },
    ],
    seo: {
      title: "Agra Tour Package with Car & Driver",
      description:
        "Book a private Agra tour with driver: Taj Mahal, Agra Fort, Itmad-ud-Daulah, Mehtab Bagh and Fatehpur Sikri. Delhi-Agra day trips and Golden Triangle plans.",
      keywords: ["agra tour", "agra sightseeing", "agra tour package", "delhi to agra day trip by car"],
    },
  },
  {
    slug: "pushkar-tour",
    citySlug: "pushkar",
    name: "Pushkar Tour",
    tagline: "The sacred lake, Brahma Temple and Ajmer Sharif",
    duration: "1 day",
    bestTime: "October to March, and Kartik Purnima (November) for the fair",
    idealFor: ["Pilgrimage groups", "Families", "Travellers between Jaipur and Jodhpur or Udaipur"],
    overview: [
      "Pushkar is a small pilgrimage town around a sacred lake ringed by bathing ghats, with one of India's very few temples to Brahma. It is a quiet, atmospheric stop, and each November the Camel Fair fills it with visitors.",
      "Ajmer and its Dargah Sharif are only about 15 km away, so most visitors combine both in a single day. Our Pushkar tour does exactly that, and slots easily between Jaipur and Jodhpur or Udaipur.",
    ],
    highlights: ["Brahma Temple", "Pushkar Lake ghats", "Savitri Temple", "Pushkar bazaar", "Ajmer Sharif Dargah", "Ana Sagar Lake"],
    itinerary: [
      {
        day: "Day 1 morning",
        title: "Pushkar Lake and Brahma Temple",
        details:
          "Walk the ghats of Pushkar Lake, visit the Brahma Temple, and browse the main bazaar. Optionally ride up to the Savitri Temple for a view over the lake.",
      },
      {
        day: "Day 1 afternoon",
        title: "Ajmer Sharif and Ana Sagar",
        details:
          "Drive the 15 km to Ajmer for the Dargah Sharif, guided to the designated parking near the narrow lanes, and finish at Ana Sagar Lake before leaving for your next city.",
      },
    ],
    faqs: [
      {
        question: "Can I visit Pushkar and Ajmer on the same day?",
        answer: "Yes. Ajmer is about 15 km from Pushkar, and a combined trip usually takes 4 to 6 hours including both stops.",
      },
      {
        question: "When is the Pushkar Camel Fair?",
        answer: "It is held around Kartik Purnima in November. Demand for vehicles peaks in those days, so book early.",
      },
      {
        question: "Is Pushkar on the way between Jaipur and Jodhpur?",
        answer: "Yes. It is a short detour from the Jaipur-Jodhpur route, and many groups break the journey at Pushkar and Ajmer.",
      },
    ],
    seo: {
      title: "Pushkar Tour Package with Car & Driver",
      description:
        "Private Pushkar tour with driver: Brahma Temple, Pushkar Lake, Savitri Temple and Ajmer Sharif Dargah in one day. Camel Fair transport and Jaipur transfers.",
      keywords: ["pushkar tour", "pushkar sightseeing", "pushkar ajmer tour package", "jaipur to pushkar taxi"],
    },
  },
];

export function getTourBySlug(slug: string): TourPackage | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getTourForCity(citySlug: string): TourPackage | undefined {
  return tours.find((tour) => tour.citySlug === citySlug);
}

export const tourHub = {
  basePath: "/rajasthan-tours",
  h1: "Rajasthan Tour Packages",
  title: "Rajasthan Tour Packages with Driver",
  description:
    "Plan a private Rajasthan tour with driver: Jaipur, Udaipur, Jodhpur, Jaisalmer, Bikaner, Mount Abu, Pushkar, Delhi and Agra by car, Force Urbania or mini bus.",
  keywords: ["rajasthan tour package", "rajasthan tour by car", "rajasthan sightseeing tour with driver", "golden triangle tour"],
  intro: [
    "Rajasthan is best seen by road, and a private vehicle with a driver gives you the freedom to start early, stop where you like and keep the whole group together. Each tour below covers a city's main sights, with a suggested itinerary that you can shorten, extend or link to the next city.",
    "Choose a destination for its itinerary, best season and FAQs, or tell us your cities and dates and we will plan and quote a multi-city trip from one vehicle and one driver.",
  ],
  faqs: [
    {
      question: "Can you plan a multi-city Rajasthan tour?",
      answer:
        "Yes. Send us the cities you want, your dates and your group size, and we will plan the route, suggest the right vehicle and quote the whole trip.",
    },
    {
      question: "Which vehicle should I choose for my tour?",
      answer:
        "An Innova suits couples and families of up to seven. A 12 to 17 seater Force Urbania or Tempo Traveller suits larger families and friend groups, and a 25 to 50 seater bus suits school, college and wedding groups.",
    },
    {
      question: "Are hotels and monument tickets included?",
      answer:
        "Our quotes cover the vehicle and driver. Hotel stays, monument entry tickets and meals are usually booked separately, and we are happy to help you plan the timings around them.",
    },
    {
      question: "What is the best time for a Rajasthan tour?",
      answer:
        "October to March is the most comfortable season. Summer is very hot in most of the state, though Mount Abu stays cooler.",
    },
  ] as FAQItem[],
};
