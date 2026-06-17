import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "SugarLand MedSpa",
    tagline: "Rejuvenate Your Beauty, Elevate Wellness",
    phone: "(281) 277-7721",
    phoneHref: "tel:+12812777721",
    email: "info@sugarlandmedspa.com",
    address: "16500 W Airport Blvd Suite 100",
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
    { icon: "sparkles", title: "Botox & Fillers", desc: "Smooth wrinkles and restore volume for a youthful, refreshed appearance.", urgent: false },
    { icon: "heart", title: "Skin Rejuvenation", desc: "Advanced treatments like microneedling and chemical peels for radiant, healthy skin.", urgent: false },
    { icon: "scissors", title: "Laser Hair Removal", desc: "Achieve long-lasting smooth skin with our safe and effective laser hair removal.", urgent: false },
    { icon: "home", title: "Body Sculpting", desc: "Contour your body and build muscle with non-invasive, cutting-edge technologies.", urgent: false },
    { icon: "shield-check", title: "Sexual Wellness", desc: "Specialized treatments to enhance intimate health and overall well-being.", urgent: false },
    { icon: "thermometer", title: "Hormone & Wellness", desc: "Personalized programs including HRT and weight loss for optimal health.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Sugar Land", stars: 5, text: "I had a fantastic experience with their Botox treatment. Dr. Evans was incredibly gentle and knowledgeable, explaining every step. My wrinkles are visibly reduced, and I feel so much more confident. The results were natural and exactly what I hoped for, all within my budget." },
    { name: "Michael R.", location: "Houston", stars: 5, text: "The team at SugarLand MedSpa is truly exceptional. I tried the EMSCULPT NEO, and after just a few sessions, I can already see a significant difference in my core strength and definition. The staff made me feel comfortable and answered all my questions. Highly recommend for body sculpting!" },
    { name: "Emily K.", location: "Sugar Land", stars: 5, text: "My skin has never looked better since starting microneedling here. The estheticians are professional and attentive, customizing the treatment to my specific concerns. My acne scars have faded, and my skin texture is so much smoother. It's been a truly transformative experience." }
  ],

  trustBadges: [
    "Board-Certified Physicians", "Personalized Treatment Plans", "Advanced Technology", "Experienced & Caring Staff", "Comprehensive MedSpa Services"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 5000, label: "Happy Clients", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Medical Team", desc: "Our treatments are performed by board-certified physicians and highly trained professionals." },
    { icon: "sparkles", title: "Personalized Care", desc: "We create custom treatment plans tailored to your unique aesthetic goals and needs." },
    { icon: "shield-check", title: "Safe & Effective", desc: "Utilizing only the latest, FDA-approved technologies and techniques for optimal results." },
    { icon: "heart", title: "Comprehensive Services", desc: "From injectables to body contouring, we offer a full spectrum of medspa and wellness treatments." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "Dedicated to ensuring every client achieves their desired outcomes in a comfortable environment." },
    { icon: "clock", title: "Flexible Scheduling", desc: "We offer convenient appointment times to fit your busy lifestyle." }
  ],

  formServiceOptions: ["Botox", "Juvéderm", "Wrinkle Treatment", "Skin Tightening", "Facial Balancing", "Facelift & Neck Lift", "Laser Hair Removal", "Microneedling", "Exion Fractional RF", "Acne Scar Treatment", "Chemical Peels", "HydroDerm Facial with RF", "Facials", "Regenerative Aesthetics", "ExoMind", "Body Sculpting & Muscle Building", "Exilis Ultra 360", "Cellutone", "Vanquish", "EMTONE", "EMSCULPT NEO", "Core Club Membership", "O-Shot", "P-Shot", "Wing Lift", "Vaginal Rejuvenation", "EMSELLA®", "EMFEMME 360™", "Vagilangelo®", "Hormone Replacement Therapy", "GLP-1/NAD+ Weight Loss Program", "GLP-1/Levocarnitine Weight Loss Program", "IV Therapy", "Labiaplasty", "Vaginoplasty", "Hymenoplasty", "Perineoplasty", "Gynecology Care", "Pelvic Floor Therapy", "Female Incontinence Treatment", "Well Woman Exam", "Ultrasound Services", "Abnormal Bleeding / Fibroids / Polyps", "Endosee (Hysteroscopy)", "NovaSure Endometrial Ablation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!