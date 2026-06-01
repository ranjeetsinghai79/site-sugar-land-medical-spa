import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "SugarLandMedSpa",
    tagline: "Rejuvenate Your Look Today",
    phone: "(281) 277-7721",
    phoneHref: "tel:+12812777721",
    email: "info@sugarlandmedspa.com",
    address: "123 Main St, Sugar Land, TX 77478",
    city: "Sugar Land",
    serviceAreas: ["Sugar Land", "Houston"],
    license: "Licensed Medical Professionals",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox & Fillers", desc: "Smooth wrinkles and restore volume for a youthful appearance.", urgent: false },
    { icon: "heart", title: "Skin Tightening", desc: "Achieve firmer, more radiant skin with advanced non-surgical treatments.", urgent: false },
    { icon: "scissors", title: "Laser Hair Removal", desc: "Permanently reduce unwanted hair for silky-smooth skin.", urgent: false },
    { icon: "droplets", title: "HydraFacials", desc: "Deeply cleanse, extract, and hydrate for an instant glow.", urgent: false },
    { icon: "thermometer", title: "Hormone Therapy", desc: "Balance hormones to improve energy, mood, and overall well-being.", urgent: false },
    { icon: "star", title: "Body Sculpting", desc: "Contour your body and build muscle with our innovative treatments.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Sugar Land", stars: 5, text: "I had Botox with Dr. Smith last month and the results are incredible! My forehead lines are gone, and I look so much more refreshed. The staff was super friendly and made me feel completely at ease. Highly recommend SugarLandMedSpa!" },
    { name: "Mark T.", location: "Houston", stars: 5, text: "The team at SugarLandMedSpa is fantastic. I came in for laser hair removal and after just a few sessions, I've seen a huge difference. The process was comfortable, and they explained everything clearly. Worth every penny!" },
    { name: "Jessica R.", location: "Sugar Land", stars: 5, text: "My HydraFacial was an absolute dream! My skin has never felt so clean and looked so radiant. The esthetician was very knowledgeable and tailored the treatment to my specific needs. I've already booked my next appointment!" }
  ],

  trustBadges: [
    "Board-Certified Physicians", "Personalized Treatment Plans", "Advanced Technology", "5-Star Rated", "Award-Winning Clinic"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Practitioners", desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "shield-check", title: "Safe & Effective", desc: "We prioritize your safety and deliver proven, effective treatments." },
    { icon: "sparkles", title: "Personalized Care", desc: "Each treatment plan is tailored to your unique aesthetic goals." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "We are dedicated to ensuring you love your results." },
    { icon: "home", title: "Luxurious Environment", desc: "Relax and rejuvenate in our state-of-the-art facility." },
    { icon: "clock", title: "Flexible Scheduling", desc: "We offer convenient appointment times to fit your busy life." }
  ],

  formServiceOptions: ["Botox & Fillers", "Skin Tightening", "Laser Hair Removal", "HydraFacials", "Hormone Therapy", "Body Sculpting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!