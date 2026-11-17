import { City } from "@/types";
import { extraCities } from "./cities-extra";

/**
 * Each city carries genuinely unique content — distinct attractions, use
 * cases, nearby destinations and FAQs — so pages are never a find/replace
 * of the same template. New cities can be added here without touching the
 * page component in app/urbania-hire/[city]/page.tsx.
 */
const rajasthanCities: City[] = [
  {
    slug: "jaipur",
    name: "Jaipur",
    region: "East Rajasthan",
    heroImage: "/images/cities/jaipur.jpg",
    shortDescription:
      "Force Urbania hire in Jaipur for airport transfers, city sightseeing, weddings and outstation trips across Rajasthan.",
    intro: [
      "Jaipur is Rajasthan's largest hub for group travel — most wedding parties, corporate offsites and multi-city tour circuits start or end here. As the state capital with the busiest airport in Rajasthan, Jaipur sees the highest demand for group vehicles that can handle both city sightseeing and long outstation legs.",
      "Urbania Hire Jodhpur keeps a dedicated fleet available for Jaipur, with drivers who know the city's palace routes, the airport terminals, and the highway corridors toward Jodhpur, Udaipur, Jaisalmer and Delhi.",
    ],
    localPickupInfo:
      "We offer pickup from Jaipur International Airport, Jaipur Junction railway station, and any hotel or residential address across the city, including Malviya Nagar, C-Scheme, Vaishali Nagar and Mansarovar.",
    useCases: [
      "Jaipur airport group pickup for tourists and wedding guests",
      "Full-day Jaipur city sightseeing (Amer Fort, City Palace, Hawa Mahal)",
      "Destination wedding guest transport across Jaipur's hotel belt",
      "Corporate offsites and conference shuttle service",
      "Starting point for multi-city Rajasthan circuit tours",
    ],
    attractions: [
      { name: "Amer Fort", description: "Hilltop fort and palace complex, the most-visited monument near Jaipur city." },
      { name: "Hawa Mahal", description: "The iconic honeycomb-facade palace in the old walled city." },
      { name: "City Palace", description: "Royal residence complex combining Rajput and Mughal architecture." },
      { name: "Jal Mahal", description: "Palace set in the middle of Man Sagar Lake, popular photo stop." },
      { name: "Nahargarh Fort", description: "Hilltop fort with panoramic sunset views over Jaipur." },
    ],
    nearbyDestinations: [
      { name: "Samode", distanceKm: 42, description: "Heritage village known for Samode Palace, a popular day-trip and wedding venue." },
      { name: "Abhaneri", distanceKm: 95, description: "Home to Chand Baori, one of India's largest and deepest stepwells." },
      { name: "Bassi Fort", distanceKm: 115, description: "Lesser-visited fort en route toward Chittorgarh." },
    ],
    popularRouteSlugs: ["jaipur-to-jodhpur", "jaipur-to-udaipur", "jaipur-to-jaisalmer"],
    faqs: [
      {
        question: "What is the Urbania hire price for Jaipur city sightseeing?",
        answer:
          "A full-day Jaipur city tour (8-10 hours, covering Amer Fort, City Palace, Hawa Mahal and Jal Mahal) is quoted based on your group size and exact itinerary. Share your dates on WhatsApp for a same-day quote.",
      },
      {
        question: "Can you arrange airport pickup for a wedding group landing in Jaipur?",
        answer:
          "Yes, we regularly handle multi-vehicle airport pickups for wedding parties landing at Jaipur International Airport, coordinated with your wedding planner's arrival schedule.",
      },
      {
        question: "Do you provide Urbania for Jaipur to Jodhpur or Udaipur outstation trips?",
        answer:
          "Yes, Jaipur is one of our busiest outstation routes, with departures toward Jodhpur, Udaipur, Jaisalmer, Bikaner and Delhi. See our route pages for distance and duration details.",
      },
    ],
    seo: {
      title: "Urbania Hire Jaipur | Force Urbania Rental for Groups & Weddings",
      description:
        "Hire a Force Urbania in Jaipur for airport transfers, city sightseeing, weddings and outstation trips. 17-seater vehicles, verified drivers, transparent pricing.",
      keywords: ["urbania hire jaipur", "urbania rental jaipur", "force urbania on rent jaipur"],
    },
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    region: "West Rajasthan",
    heroImage: "/images/cities/mehrangarh-fort.jpg",
    shortDescription:
      "Force Urbania hire in Jodhpur, the Blue City, for weddings, sightseeing and outstation trips toward Jaisalmer and Udaipur.",
    intro: [
      "Jodhpur's blue-washed old city and Mehrangarh Fort make it one of Rajasthan's most photographed destination-wedding venues, and its airport is a common entry point for the western Rajasthan circuit. Group transport demand here skews heavily toward weddings and onward trips to Jaisalmer.",
      "Our Jodhpur-based Urbania fleet handles everything from a single airport transfer to full multi-day wedding logistics across the city's heritage hotel circuit.",
    ],
    localPickupInfo:
      "Pickup available at Jodhpur Airport, Jodhpur Junction, and hotels across the Blue City, Ratanada and Umaid Bhawan areas.",
    useCases: [
      "Jodhpur airport and railway station group pickup",
      "Destination wedding transport around Mehrangarh and Umaid Bhawan hotel belt",
      "Blue City heritage sightseeing tours",
      "Outstation departure point toward Jaisalmer and Udaipur",
    ],
    attractions: [
      { name: "Mehrangarh Fort", description: "One of India's largest forts, overlooking the Blue City." },
      { name: "Umaid Bhawan Palace", description: "Iconic Art Deco palace, part royal residence, part heritage hotel." },
      { name: "Jaswant Thada", description: "Marble cenotaph with landscaped gardens near Mehrangarh." },
      { name: "Clock Tower & Sardar Market", description: "The old city's bustling bazaar hub." },
    ],
    nearbyDestinations: [
      { name: "Osian", distanceKm: 65, description: "Desert temple town, a popular stop en route to Jaisalmer." },
      { name: "Mandore Gardens", distanceKm: 9, description: "Historic gardens and cenotaphs on Jodhpur's outskirts." },
      { name: "Rohet", distanceKm: 40, description: "Village known for heritage stays and Bishnoi village safaris." },
    ],
    popularRouteSlugs: ["jaipur-to-jodhpur", "jodhpur-to-jaisalmer"],
    faqs: [
      {
        question: "Is Urbania a good option for a Jodhpur destination wedding?",
        answer:
          "Yes — Jodhpur's heritage hotels are spread across the Blue City and Ratanada, and a 17-seater Urbania efficiently shuttles guests between venues without the coordination overhead of multiple cabs.",
      },
      {
        question: "How far is Jaisalmer from Jodhpur by Urbania?",
        answer:
          "Jodhpur to Jaisalmer is roughly 285 km, about a 5-hour drive. See our dedicated Jodhpur to Jaisalmer route page for stop options and pricing.",
      },
    ],
    seo: {
      title: "Urbania Hire Jodhpur | Force Urbania Rental in the Blue City",
      description:
        "Book a Force Urbania in Jodhpur for weddings, sightseeing and outstation trips toward Jaisalmer and Udaipur. Verified drivers, transparent pricing.",
      keywords: ["urbania hire jodhpur", "urbania rental jodhpur", "force urbania jodhpur wedding"],
    },
    lat: 26.2389,
    lng: 73.0243,
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    region: "South Rajasthan",
    heroImage: "/images/cities/udaipur-city-palace.jpg",
    shortDescription:
      "Force Urbania hire in Udaipur, the City of Lakes, for destination weddings, corporate offsites and lake-circuit sightseeing.",
    intro: [
      "Udaipur is Rajasthan's premier destination-wedding city, with lakeside palaces and five-star resorts hosting events almost every wedding season. It's also a favourite for corporate offsites given its resort infrastructure around Lake Pichola and Fateh Sagar.",
      "We supply Urbania vehicles for guest shuttles between the airport, city hotels and lakeside venues, along with day-long sightseeing circuits.",
    ],
    localPickupInfo:
      "Pickup from Maharana Pratap Airport (Dabok), Udaipur City railway station, and hotels around Lake Pichola, Fateh Sagar and the Ambrai Ghat area.",
    useCases: [
      "Destination wedding guest transport across lakeside resorts",
      "Udaipur airport pickup and drop for tourists and guests",
      "Corporate offsite shuttle service between resort venues",
      "City Palace, Pichola and Fateh Sagar sightseeing circuit",
    ],
    attractions: [
      { name: "City Palace", description: "Sprawling palace complex overlooking Lake Pichola." },
      { name: "Lake Pichola", description: "Udaipur's signature lake, with boat rides to Jag Mandir." },
      { name: "Fateh Sagar Lake", description: "Second major lake, popular for evening drives and viewpoints." },
      { name: "Saheliyon Ki Bari", description: "Garden of the maidens, known for fountains and marble kiosks." },
    ],
    nearbyDestinations: [
      { name: "Kumbhalgarh", distanceKm: 84, description: "Fort with the second-longest wall in the world after the Great Wall of China." },
      { name: "Ranakpur", distanceKm: 96, description: "Renowned Jain marble temple complex, often combined with Kumbhalgarh." },
      { name: "Chittorgarh", distanceKm: 115, description: "India's largest fort complex, rich in Rajput history." },
    ],
    popularRouteSlugs: ["jaipur-to-udaipur"],
    faqs: [
      {
        question: "Can Urbania handle guest transfers between Udaipur's lakeside resorts?",
        answer:
          "Yes, many Udaipur wedding venues are 20-40 minutes apart by road around the lakes. We run scheduled shuttles between resorts and the airport across the wedding dates.",
      },
      {
        question: "Do you offer a combined Kumbhalgarh and Ranakpur day trip from Udaipur?",
        answer:
          "Yes, this is one of our most requested day tours — both sites are on the same route and comfortably covered in a single day by Urbania.",
      },
    ],
    seo: {
      title: "Urbania Hire Udaipur | Force Urbania for Weddings & Sightseeing",
      description:
        "Hire a Force Urbania in Udaipur for destination weddings, corporate offsites and lake-circuit sightseeing. Transparent pricing, verified drivers.",
      keywords: ["urbania hire udaipur", "urbania rental udaipur", "urbania udaipur wedding"],
    },
    lat: 24.5854,
    lng: 73.7125,
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    region: "West Rajasthan",
    heroImage: "/images/cities/jaisalmer-fort.jpg",
    shortDescription:
      "Force Urbania hire in Jaisalmer for desert sightseeing, Sam sand dunes trips and outstation travel from Jodhpur and Bikaner.",
    intro: [
      "Jaisalmer is usually the farthest and final leg of a Rajasthan circuit, best known for the living Sonar Qila fort and the Sam sand dunes desert safaris. Because of the long approach roads from Jodhpur and Bikaner, most Jaisalmer bookings are multi-day outstation trips rather than single-day local hires.",
      "Our Jaisalmer Urbania service covers arrival transfers, in-city sightseeing and the desert-camp run to Sam and Khuri dunes.",
    ],
    localPickupInfo:
      "Pickup from Jaisalmer Airport, Jaisalmer railway station, and hotels in and around the fort and Gadisar Lake area.",
    useCases: [
      "Sam sand dunes and desert safari camp transfers",
      "Jaisalmer Fort and Patwon Ki Haveli sightseeing",
      "Multi-city outstation arrival from Jodhpur or Bikaner",
      "Tour group and travel agency desert circuit packages",
    ],
    attractions: [
      { name: "Jaisalmer Fort (Sonar Qila)", description: "A living fort with residents, shops and havelis inside its walls." },
      { name: "Patwon Ki Haveli", description: "Cluster of ornately carved havelis in the old city." },
      { name: "Gadisar Lake", description: "Historic reservoir with ghats and a carved entrance gateway." },
      { name: "Sam Sand Dunes", description: "The classic Thar desert dune field, about 42 km from the city." },
    ],
    nearbyDestinations: [
      { name: "Khuri Dunes", distanceKm: 48, description: "A quieter alternative to Sam, popular for desert camps." },
      { name: "Kuldhara", distanceKm: 18, description: "Abandoned village with a well-known local legend." },
    ],
    popularRouteSlugs: ["jaipur-to-jaisalmer", "jodhpur-to-jaisalmer", "bikaner-to-jaisalmer"],
    faqs: [
      {
        question: "Can Urbania drive up to the Sam sand dunes desert camp?",
        answer:
          "Yes, the road to Sam Dunes is fully paved and our Urbania vehicles run this route daily for desert camp drop-offs and pickups.",
      },
      {
        question: "How long is the drive from Jodhpur to Jaisalmer?",
        answer:
          "Around 5 hours covering roughly 285 km. Most groups treat this as a single travel day with a stop at Osian along the way.",
      },
    ],
    seo: {
      title: "Urbania Hire Jaisalmer | Force Urbania for Desert Tours",
      description:
        "Book a Force Urbania in Jaisalmer for Sam sand dunes safaris, fort sightseeing and outstation trips from Jodhpur and Bikaner.",
      keywords: ["urbania hire jaisalmer", "urbania rental jaisalmer", "sam dunes urbania"],
    },
    lat: 26.9157,
    lng: 70.9083,
  },
  {
    slug: "bikaner",
    name: "Bikaner",
    region: "North Rajasthan",
    heroImage: "/images/cities/junagarh-fort.jpg",
    shortDescription:
      "Force Urbania hire in Bikaner for Junagarh Fort sightseeing, Karni Mata temple trips and desert circuit connections.",
    intro: [
      "Bikaner sits on the northern leg of the Rajasthan desert circuit, connecting travellers heading between Jaisalmer and destinations like Pushkar or Delhi. Its fort, havelis and the famous Karni Mata rat temple at nearby Deshnoke draw both leisure tourists and pilgrimage groups.",
      "We run Urbania vehicles for city sightseeing, the Deshnoke day trip, and outstation legs onward to Jaisalmer.",
    ],
    localPickupInfo:
      "Pickup from Bikaner railway station, Nal Airport, and hotels around Junagarh Fort and the old city.",
    useCases: [
      "Junagarh Fort and old city havelis sightseeing",
      "Karni Mata Temple (Deshnoke) day trips",
      "Outstation departure toward Jaisalmer",
      "Camel safari and desert village tours",
    ],
    attractions: [
      { name: "Junagarh Fort", description: "Well-preserved fort complex built without a hilltop, unusual among Rajasthan forts." },
      { name: "Karni Mata Temple, Deshnoke", description: "Famous temple 30 km from Bikaner, known for its resident rats." },
      { name: "Lalgarh Palace", description: "Red sandstone palace, part heritage hotel and museum." },
      { name: "Camel Breeding Farm", description: "One of the few government camel research farms in Asia." },
    ],
    nearbyDestinations: [
      { name: "Deshnoke", distanceKm: 30, description: "Home to the Karni Mata Temple." },
      { name: "Kolayat", distanceKm: 50, description: "Sacred lake town known for its ghats and annual fair." },
    ],
    popularRouteSlugs: ["bikaner-to-jaisalmer"],
    faqs: [
      {
        question: "Do you offer a same-day Karni Mata Temple trip from Bikaner?",
        answer:
          "Yes, Deshnoke is about 30 km from Bikaner and easily combined with city sightseeing in a single day.",
      },
      {
        question: "What is the distance from Bikaner to Jaisalmer?",
        answer:
          "About 330 km, roughly a 5.5-hour drive. See our Bikaner to Jaisalmer route page for full details.",
      },
    ],
    seo: {
      title: "Urbania Hire Bikaner | Force Urbania Rental for Desert Tours",
      description:
        "Hire a Force Urbania in Bikaner for Junagarh Fort sightseeing, Karni Mata temple trips and outstation travel to Jaisalmer.",
      keywords: ["urbania hire bikaner", "urbania rental bikaner"],
    },
    lat: 28.0229,
    lng: 73.3119,
  },
  {
    slug: "ajmer",
    name: "Ajmer",
    region: "East Rajasthan",
    heroImage: "/images/cities/ajmer.jpg",
    shortDescription:
      "Force Urbania hire in Ajmer for Dargah Sharif pilgrimage groups and combined Ajmer-Pushkar trips.",
    intro: [
      "Ajmer's Dargah Sharif draws large pilgrimage groups year-round, and its proximity to Pushkar means most bookings combine both towns in a single itinerary. Group vehicles here need to navigate narrow lanes near the Dargah as well as handle the short hop to Pushkar.",
      "Our Ajmer Urbania service is built around pilgrimage group logistics and combined Ajmer-Pushkar day tours.",
    ],
    localPickupInfo:
      "Pickup from Ajmer railway station and hotels near the Dargah and Ana Sagar Lake.",
    useCases: [
      "Dargah Sharif pilgrimage group transport",
      "Combined Ajmer-Pushkar day tours",
      "Ana Sagar Lake and Mayo College sightseeing",
      "Onward connection to Jaipur or Udaipur",
    ],
    attractions: [
      { name: "Ajmer Sharif Dargah", description: "Revered Sufi shrine of Khwaja Moinuddin Chishti, drawing pilgrims nationwide." },
      { name: "Ana Sagar Lake", description: "Artificial lake with the Daulat Bagh gardens along its banks." },
      { name: "Taragarh Fort", description: "Hilltop fort overlooking the city, one of India's oldest hill forts." },
    ],
    nearbyDestinations: [
      { name: "Pushkar", distanceKm: 15, description: "Sacred lake town and the most common Ajmer add-on trip." },
      { name: "Kishangarh", distanceKm: 27, description: "Known for miniature paintings and marble processing units." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Can we combine Ajmer Dargah visit and Pushkar in one day?",
        answer:
          "Yes, Pushkar is just 15 km from Ajmer and this is our most common combined itinerary, typically taking 4-6 hours including both stops.",
      },
      {
        question: "Is parking available near the Dargah for group vehicles?",
        answer:
          "Our drivers know the designated parking areas near the Dargah lanes and will guide your group through the walk-in access point.",
      },
    ],
    seo: {
      title: "Urbania Hire Ajmer | Force Urbania for Dargah & Pushkar Trips",
      description:
        "Book a Force Urbania in Ajmer for Dargah Sharif pilgrimage groups and combined Ajmer-Pushkar sightseeing trips.",
      keywords: ["urbania hire ajmer", "urbania rental ajmer", "ajmer dargah group travel"],
    },
    lat: 26.4499,
    lng: 74.6399,
  },
  {
    slug: "pushkar",
    name: "Pushkar",
    region: "East Rajasthan",
    heroImage: "/images/cities/pushkar.jpg",
    shortDescription:
      "Force Urbania hire in Pushkar for the Brahma Temple circuit, lakeside stays and Pushkar Camel Fair group travel.",
    intro: [
      "Pushkar's sacred lake and the world's only major Brahma Temple make it a fixture on both pilgrimage and backpacker circuits, and its annual Camel Fair pulls large tour groups in the November-December season. Most visitors combine Pushkar with a same-day Ajmer visit.",
      "We provide Urbania hire for lake-circuit sightseeing, Camel Fair season group transport, and onward travel toward Jaipur or Udaipur.",
    ],
    localPickupInfo:
      "Pickup from hotels around Pushkar Lake and the main bazaar; nearest railhead and airport connections route through Ajmer.",
    useCases: [
      "Brahma Temple and Pushkar Lake ghat circuit",
      "Pushkar Camel Fair (Kartik Mela) group transport",
      "Combined Ajmer-Pushkar day trips",
      "Backpacker and yoga-retreat group transfers",
    ],
    attractions: [
      { name: "Brahma Temple", description: "One of the only temples in India dedicated to Lord Brahma." },
      { name: "Pushkar Lake", description: "Sacred lake ringed by 52 bathing ghats." },
      { name: "Savitri Temple", description: "Hilltop temple reached by cable car or trek, with lake views." },
    ],
    nearbyDestinations: [
      { name: "Ajmer", distanceKm: 15, description: "Home to the Dargah Sharif, typically visited same-day." },
      { name: "Merta City", distanceKm: 55, description: "Historic town linked to the poet-saint Meera Bai." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Do you provide extra vehicles during the Pushkar Camel Fair?",
        answer:
          "Yes, we scale up our Pushkar fleet during the Kartik Mela season — book early since demand peaks in the days around the fair.",
      },
      {
        question: "Is Pushkar walkable, or do we need a vehicle inside town?",
        answer:
          "The core lake and temple area is walkable. Your Urbania is best used for the Ajmer connection and hotel-to-town transfers, with the driver on standby for onward travel.",
      },
    ],
    seo: {
      title: "Urbania Hire Pushkar | Force Urbania for Lake & Camel Fair Trips",
      description:
        "Hire a Force Urbania in Pushkar for Brahma Temple sightseeing, lakeside stays and Camel Fair group travel.",
      keywords: ["urbania hire pushkar", "urbania rental pushkar", "pushkar camel fair transport"],
    },
    lat: 26.4899,
    lng: 74.5511,
  },
  {
    slug: "kota",
    name: "Kota",
    region: "Hadoti (South-East Rajasthan)",
    heroImage: "/images/cities/kota.jpg",
    shortDescription:
      "Force Urbania hire in Kota for student group transport, Chambal riverfront sightseeing and family visit trips.",
    intro: [
      "Kota is India's largest coaching-institute hub, and a significant share of our Kota bookings are parents and family groups visiting students, plus institute-arranged group transport for orientation days and exam travel. The city also has an underrated riverfront and garden circuit along the Chambal.",
      "We serve Kota with student-family visit transfers, coaching-institute group bookings, and Chambal Garden sightseeing trips.",
    ],
    localPickupInfo:
      "Pickup from Kota Junction railway station and hotels across Talwandi, Vigyan Nagar and the coaching-hub areas.",
    useCases: [
      "Family visits to students at Kota's coaching institutes",
      "Coaching institute group transport and orientation-day shuttles",
      "Chambal Garden and Kota Barrage sightseeing",
      "Onward travel toward Bundi and Jhalawar",
    ],
    attractions: [
      { name: "Chambal Garden", description: "Riverside garden with boating on the Chambal River." },
      { name: "Kota Barrage", description: "Major irrigation barrage on the Chambal, popular local viewpoint." },
      { name: "Seven Wonders Park", description: "Park with replica models of world landmarks." },
    ],
    nearbyDestinations: [
      { name: "Bundi", distanceKm: 38, description: "Well-preserved fort town known for its stepwells and murals." },
      { name: "Jhalawar", distanceKm: 90, description: "Lesser-visited town with forts and fossil park." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Do you offer group transport for coaching institute orientation days?",
        answer:
          "Yes, several Kota coaching institutes book our Urbania fleet for hostel-to-campus shuttles during orientation and exam periods.",
      },
      {
        question: "Can we book a same-day Kota to Bundi sightseeing trip?",
        answer:
          "Yes, Bundi is about 38 km from Kota and easily covered as a half-day or full-day trip depending on how much of the fort and stepwells you want to see.",
      },
    ],
    seo: {
      title: "Urbania Hire Kota | Force Urbania for Family & Group Travel",
      description:
        "Book a Force Urbania in Kota for family visits, coaching institute group transport and Chambal riverfront sightseeing.",
      keywords: ["urbania hire kota", "urbania rental kota"],
    },
    lat: 25.2138,
    lng: 75.8648,
  },
  {
    slug: "mount-abu",
    name: "Mount Abu",
    region: "Aravalli Hills (South Rajasthan)",
    heroImage: "/images/cities/mount-abu.jpg",
    shortDescription:
      "Force Urbania hire in Mount Abu for hill-station sightseeing, Dilwara Temples and honeymoon or family group trips.",
    intro: [
      "As Rajasthan's only hill station, Mount Abu draws summer holiday families, honeymoon couples and weekend groups from Gujarat and southern Rajasthan. The ghat roads climbing to Mount Abu need drivers experienced with hill driving, which our regular Mount Abu route drivers are.",
      "We cover Nakki Lake and Sunset Point sightseeing, the Dilwara Temples circuit, and group transfers from Udaipur or the Abu Road railway station at the base of the hill.",
    ],
    localPickupInfo:
      "Pickup from Abu Road railway station (base of the hill) and hotels around Nakki Lake in Mount Abu town.",
    useCases: [
      "Abu Road station to Mount Abu hill transfers",
      "Nakki Lake, Sunset Point and Dilwara Temples sightseeing",
      "Family and honeymoon group getaways",
      "Onward connection toward Udaipur",
    ],
    attractions: [
      { name: "Dilwara Temples", description: "Renowned Jain temples famed for intricate marble carving." },
      { name: "Nakki Lake", description: "The town's central lake, popular for boating and evening strolls." },
      { name: "Sunset Point", description: "Scenic viewpoint over the Aravalli range, busiest at dusk." },
      { name: "Guru Shikhar", description: "The highest peak in the Aravalli range, near Mount Abu." },
    ],
    nearbyDestinations: [
      { name: "Abu Road", distanceKm: 28, description: "Base town with the nearest railway station." },
      { name: "Ambaji", distanceKm: 45, description: "Well-known temple town just across the Gujarat border." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Is the road from Abu Road to Mount Abu safe for a 17-seater Urbania?",
        answer:
          "Yes, our drivers regularly run this ghat route and are experienced with the hill climb. The drive takes about 45-60 minutes covering roughly 28 km.",
      },
      {
        question: "Can we hire Urbania for a Udaipur to Mount Abu day trip?",
        answer:
          "Mount Abu is about 165 km from Udaipur (roughly 4 hours), so most groups treat it as an overnight trip rather than a single-day return.",
      },
    ],
    seo: {
      title: "Urbania Hire Mount Abu | Force Urbania for Hill Station Trips",
      description:
        "Hire a Force Urbania in Mount Abu for Nakki Lake and Dilwara Temples sightseeing, family and honeymoon group trips.",
      keywords: ["urbania hire mount abu", "urbania rental mount abu"],
    },
    lat: 24.5926,
    lng: 72.7156,
  },
  {
    slug: "alwar",
    name: "Alwar",
    region: "East Rajasthan (Shekhawati/NCR belt)",
    heroImage: "/images/cities/alwar.jpg",
    shortDescription:
      "Force Urbania hire in Alwar for Sariska Tiger Reserve trips, Bala Quila sightseeing and NCR-Rajasthan group travel.",
    intro: [
      "Alwar's proximity to Delhi-NCR makes it a common weekend-trip and corporate offsite destination, anchored by the Sariska Tiger Reserve and Bala Quila fort. Groups travelling from NCR often start their Rajasthan circuit here.",
      "We serve Alwar with Sariska safari transfers, fort sightseeing, and connections onward to Jaipur.",
    ],
    localPickupInfo:
      "Pickup from Alwar railway station and hotels across the city and near Sariska.",
    useCases: [
      "Sariska Tiger Reserve safari group transfers",
      "Bala Quila and City Palace sightseeing",
      "NCR-Rajasthan weekend group trips",
      "Onward connection to Jaipur",
    ],
    attractions: [
      { name: "Sariska Tiger Reserve", description: "Well-known tiger reserve about an hour from Alwar city." },
      { name: "Bala Quila", description: "Hilltop fort overlooking Alwar city." },
      { name: "City Palace, Alwar", description: "Palace complex with a museum of royal artefacts." },
      { name: "Siliserh Lake", description: "Scenic lake with a lakeside palace, popular day trip." },
    ],
    nearbyDestinations: [
      { name: "Sariska", distanceKm: 37, description: "Tiger reserve and wildlife sanctuary." },
      { name: "Bhangarh Fort", distanceKm: 84, description: "Ruined fort popularly known for local folklore." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "How far is Sariska from Alwar city?",
        answer:
          "About 37 km, roughly an hour's drive. We coordinate the transfer timing with your safari slot booking.",
      },
      {
        question: "Is Alwar a good base for a weekend group trip from Delhi?",
        answer:
          "Yes, Alwar is one of the closest Rajasthan destinations to Delhi-NCR, making it popular for short weekend group getaways combining Sariska and the city's forts.",
      },
    ],
    seo: {
      title: "Urbania Hire Alwar | Force Urbania for Sariska & Fort Tours",
      description:
        "Book a Force Urbania in Alwar for Sariska Tiger Reserve trips, Bala Quila sightseeing and NCR-Rajasthan group travel.",
      keywords: ["urbania hire alwar", "urbania rental alwar", "sariska group transport"],
    },
    lat: 27.5530,
    lng: 76.6346,
  },
  {
    slug: "bharatpur",
    name: "Bharatpur",
    region: "East Rajasthan",
    heroImage: "/images/cities/bharatpur.jpg",
    shortDescription:
      "Force Urbania hire in Bharatpur for Keoladeo National Park birdwatching groups and Agra-Rajasthan circuit connections.",
    intro: [
      "Bharatpur's Keoladeo National Park (a UNESCO World Heritage bird sanctuary) makes it a magnet for birdwatching tour groups, often combined with an Agra-Rajasthan circuit given its short distance from the Taj Mahal.",
      "We provide Urbania transfers for birdwatching groups, park-gate transport, and Agra-Bharatpur-Jaipur circuit connections.",
    ],
    localPickupInfo:
      "Pickup from Bharatpur railway station and hotels near Keoladeo National Park.",
    useCases: [
      "Keoladeo National Park birdwatching group transfers",
      "Agra-Bharatpur-Jaipur circuit connections",
      "Lohagarh Fort sightseeing",
      "Wildlife and nature tour operator bookings",
    ],
    attractions: [
      { name: "Keoladeo National Park", description: "UNESCO-listed bird sanctuary, one of the world's finest birdwatching sites." },
      { name: "Lohagarh Fort", description: "Fort known for never having been captured, hence 'Iron Fort'." },
      { name: "Deeg Palace", description: "Water-garden palace complex about 32 km from Bharatpur." },
    ],
    nearbyDestinations: [
      { name: "Agra", distanceKm: 55, description: "Home of the Taj Mahal, a common circuit add-on." },
      { name: "Deeg", distanceKm: 32, description: "Known for its 18th-century water palace." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Can Urbania take us from Bharatpur to Agra to see the Taj Mahal?",
        answer:
          "Yes, Agra is about 55 km from Bharatpur, roughly an hour's drive, and many groups combine both in one circuit.",
      },
      {
        question: "Is vehicle access allowed inside Keoladeo National Park?",
        answer:
          "Private vehicles are not permitted inside the core park zone — your Urbania drops the group at the entrance, where cycle-rickshaws or park vehicles take over for the sanctuary tour.",
      },
    ],
    seo: {
      title: "Urbania Hire Bharatpur | Force Urbania for Bird Sanctuary Tours",
      description:
        "Hire a Force Urbania in Bharatpur for Keoladeo National Park birdwatching trips and Agra-Rajasthan circuit travel.",
      keywords: ["urbania hire bharatpur", "urbania rental bharatpur", "keoladeo group transport"],
    },
    lat: 27.2173,
    lng: 77.4901,
  },
  {
    slug: "sikar",
    name: "Sikar",
    region: "Shekhawati",
    heroImage: "/images/cities/sikar.jpg",
    shortDescription:
      "Force Urbania hire in Sikar for Khatu Shyam pilgrimage groups and Shekhawati fresco-haveli sightseeing circuits.",
    intro: [
      "Sikar is the gateway to the Shekhawati region, famous for its painted havelis, and hosts the hugely popular Khatu Shyam Temple nearby, which draws large pilgrimage groups especially during the annual fair.",
      "We serve Sikar with Khatu Shyam group transport and Shekhawati haveli circuit sightseeing tours.",
    ],
    localPickupInfo:
      "Pickup from Sikar railway station and hotels across the city, with easy access to the Khatu Shyam route.",
    useCases: [
      "Khatu Shyam Temple pilgrimage group transport",
      "Shekhawati painted-haveli sightseeing circuit",
      "Fatehpur and Mandawa fresco town day trips",
      "Onward connection toward Jaipur or Bikaner",
    ],
    attractions: [
      { name: "Khatu Shyam Temple", description: "Major pilgrimage temple in nearby Khatu village, especially busy during its annual fair." },
      { name: "Shekhawati Havelis", description: "Painted merchant mansions spread across Sikar, Fatehpur and Mandawa." },
      { name: "Jeen Mata Temple", description: "Hilltop temple popular with regional pilgrims." },
    ],
    nearbyDestinations: [
      { name: "Khatu", distanceKm: 42, description: "Home to the Khatu Shyam Temple." },
      { name: "Fatehpur", distanceKm: 42, description: "Shekhawati town known for restored painted havelis." },
      { name: "Mandawa", distanceKm: 60, description: "The most visited Shekhawati fresco town." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "Do you provide extra vehicles during the Khatu Shyam fair season?",
        answer:
          "Yes, we scale up capacity around the Falgun Mela and other peak pilgrimage dates — advance booking is recommended during these periods.",
      },
      {
        question: "Can we cover Fatehpur and Mandawa havelis in a single day from Sikar?",
        answer:
          "Yes, both towns are within an hour of Sikar and are commonly combined into a single-day Shekhawati haveli circuit.",
      },
    ],
    seo: {
      title: "Urbania Hire Sikar | Force Urbania for Khatu Shyam & Shekhawati",
      description:
        "Book a Force Urbania in Sikar for Khatu Shyam pilgrimage groups and Shekhawati painted-haveli sightseeing tours.",
      keywords: ["urbania hire sikar", "urbania rental sikar", "khatu shyam group transport"],
    },
    lat: 27.6094,
    lng: 75.1399,
  },
  {
    slug: "churu",
    name: "Churu",
    region: "Shekhawati (North Rajasthan)",
    heroImage: "/images/cities/churu.jpg",
    shortDescription:
      "Force Urbania hire in Churu for Shekhawati haveli tourism, Tal Chhapar Sanctuary trips and Thar desert-edge travel.",
    intro: [
      "Churu sits at the edge of the Thar desert and anchors the northern Shekhawati haveli circuit, with the Tal Chhapar Blackbuck Sanctuary as its standout wildlife draw. Tourism here is smaller-scale and more specialised than Jaipur or Udaipur, mostly heritage and wildlife photography groups.",
      "We provide Urbania hire for haveli-circuit sightseeing and Tal Chhapar Sanctuary group transfers.",
    ],
    localPickupInfo:
      "Pickup from Churu railway station and hotels/heritage havelis across the town.",
    useCases: [
      "Tal Chhapar Blackbuck Sanctuary group safaris",
      "Churu and Ratangarh haveli photography circuits",
      "Heritage and wildlife tour operator bookings",
      "Onward connection toward Bikaner",
    ],
    attractions: [
      { name: "Tal Chhapar Sanctuary", description: "Grassland sanctuary known for blackbuck herds, about 90 minutes from Churu." },
      { name: "Churu Havelis", description: "Painted merchant havelis including the well-known Kanhaiya Lal Bagla Haveli." },
      { name: "Sethani Ka Johara", description: "Historic step-well water reservoir in the town." },
    ],
    nearbyDestinations: [
      { name: "Tal Chhapar", distanceKm: 85, description: "Blackbuck wildlife sanctuary." },
      { name: "Ratangarh", distanceKm: 30, description: "Nearby Shekhawati town with additional havelis." },
    ],
    popularRouteSlugs: [],
    faqs: [
      {
        question: "How far is Tal Chhapar Sanctuary from Churu town?",
        answer:
          "About 85 km, roughly 1.5-2 hours by road. We time pickups for early-morning safari slots when wildlife activity is highest.",
      },
      {
        question: "Is Churu suitable for a wildlife photography group tour?",
        answer:
          "Yes, Tal Chhapar is a well-regarded blackbuck photography location, and we've supported several dedicated photography tour groups on this route.",
      },
    ],
    seo: {
      title: "Urbania Hire Churu | Force Urbania for Tal Chhapar & Shekhawati",
      description:
        "Hire a Force Urbania in Churu for Tal Chhapar Blackbuck Sanctuary trips and Shekhawati haveli sightseeing tours.",
      keywords: ["urbania hire churu", "urbania rental churu", "tal chhapar group transport"],
    },
    lat: 28.2969,
    lng: 74.9668,
  },
];

export const cities: City[] = [...rajasthanCities, ...extraCities];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
