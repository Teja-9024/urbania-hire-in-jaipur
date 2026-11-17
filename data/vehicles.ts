import { Vehicle, VehicleCategory } from "@/types";

/** Images live in public/images/fleet/<folder>/ as main.jpeg + interior-1/2.jpeg. */
const photos = (folder: string) => ({
  image: `/images/fleet/${folder}/main.jpeg`,
  gallery: [1, 2].map((n) => `/images/fleet/${folder}/interior-${n}.jpeg`),
});

const bus = (seats: number, name: string, description: string): Vehicle => ({
  slug: `${seats}-seater-bus`,
  name,
  category: "bus",
  seatingCapacity: seats,
  ...photos(`${seats}-seater`),
  description,
  features: [
    "Air-conditioned cabin with pushback seats",
    "Large luggage space for outstation trips",
    "Experienced, verified driver",
    "Ideal for weddings, school and corporate groups",
  ],
});

export const vehicles: Vehicle[] = [
  {
    slug: "force-urbania-12-seater",
    name: "Force Urbania 12-Seater",
    category: "van",
    seatingCapacity: 12,
    ...photos("12-seater"),
    description:
      "A premium-fit Urbania with extra legroom, used for VIP corporate movements and premium wedding guest transfers.",
    features: [
      "12 comfortable seats with extra legroom",
      "Roof-mounted air conditioning",
      "Large luggage boot for outstation trips",
      "Experienced, verified driver",
    ],
  },
  {
    slug: "force-urbania-15-seater",
    name: "Force Urbania 15-Seater",
    category: "van",
    seatingCapacity: 15,
    ...photos("15-seater"),
    description:
      "A mid-size Urbania for family groups and corporate teams that want more space than a standard Tempo Traveller.",
    features: [
      "15 pushback seats",
      "Roof-mounted air conditioning",
      "Space for luggage on long routes",
      "Experienced, verified driver",
    ],
  },
  {
    slug: "force-urbania-17-seater",
    name: "Force Urbania 17-Seater",
    category: "van",
    seatingCapacity: 17,
    ...photos("17-seater"),
    imagePosition: "50% 72%",
    description:
      "Our flagship Force Urbania configured with 17 pushback seats, ideal for family groups, wedding parties and corporate teams travelling together across Rajasthan.",
    features: [
      "17 reclining pushback seats",
      "Roof-mounted air conditioning",
      "Large luggage boot for outstation trips",
      "Charging points for phones and laptops",
    ],
  },
  bus(25, "25-Seater Mini Bus", "A compact bus for mid-size groups — family functions, small tour parties and corporate outings."),
  bus(30, "30-Seater Mini Bus", "Comfortable seating for 30 with room for luggage, a popular choice for wedding guests and pilgrimage groups."),
  bus(35, "35-Seater Bus", "A 35-seat bus for larger tour groups, school trips and baraat guest transport."),
  bus(40, "40-Seater Luxury Coach", "A full-size coach for big groups travelling across Rajasthan and beyond with everyone in one vehicle."),
  bus(45, "45-Seater Luxury Coach", "Spacious 45-seat coach for large weddings, college tours and corporate events."),
  bus(50, "50-Seater Luxury Coach", "Our largest coach, built for the biggest groups — pilgrimages, weddings and institutional tours."),
  {
    slug: "toyota-innova",
    name: "Toyota Innova",
    category: "car",
    seatingCapacity: 7,
    ...photos("innova"),
    description:
      "A comfortable SUV for small families, airport transfers and couples — also available decorated for weddings.",
    features: [
      "Comfortable SUV seating for the whole family",
      "Air-conditioned with ample luggage space",
      "Wedding decoration available on request",
      "Experienced, verified driver",
    ],
  },
];

export const vehicleGroups: { category: VehicleCategory; title: string; blurb: string }[] = [
  { category: "van", title: "Force Urbania", blurb: "12 to 17 seats — premium vans for families, corporates and wedding parties." },
  { category: "bus", title: "Mini Buses & Coaches", blurb: "25 to 50 seats — for large groups, baraats and institutional tours." },
  { category: "car", title: "Cars", blurb: "Comfortable SUVs for small families and airport transfers." },
];
