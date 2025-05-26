export const serviceCategories = [
  { id: "consultation", name: "CONSULTATION", icon: "Lightbulb" },
  { id: "measure", name: "MEASURE", icon: "Ruler" },
  { id: "hair", name: "HAIR", icon: "Scissors" },
  { id: "skin", name: "SKIN", icon: "Sparkles" },
  { id: "makeup", name: "MAKEUP", icon: "Heart" },
  { id: "spa", name: "SPA", icon: "CakeSlice" },
  { id: "booking", name: "BOOKING", icon: "Calendar" },
];

export const allServices = {
  consultation: {
    title: "Consultation",
    description:
      "Professional beauty consultations with our expert team to guide you through the best treatments for your specific needs.",
    categories: [
      {
        category: "Beauty Consultation",
        services: [
          {
            name: "Hair Assessment",
            description:
              "One-on-one session with our hair expert to evaluate hair type, condition, and styling options.",
            price: "$45",
          },
          {
            name: "Skin Analysis",
            description:
              "Detailed skin assessment to determine skin type and recommended treatments.",
            price: "$50",
          },
          {
            name: "Makeup Consultation",
            description:
              "Personalized makeup recommendations based on skin tone and facial features.",
            price: "$40",
          },
          {
            name: "Nail Health Evaluation",
            description:
              "Assessment of nail condition with recommendations for treatments and care.",
            price: "$35",
          },
        ],
      },
      {
        category: "Style Consultation",
        services: [
          {
            name: "Personal Style",
            description:
              "Comprehensive style consultation including color analysis and style recommendations.",
            price: "$65",
          },
          {
            name: "Bridal Consultation",
            description:
              "Planning session for bridal hair, makeup, and beauty treatments.",
            price: "$75",
          },
          {
            name: "Special Event Styling",
            description:
              "Complete look planning for important events with product recommendations.",
            price: "$60",
          },
        ],
      },
    ],
  },
  measure: {
    title: "Measure",
    description: "Precise measurements and analysis to ensure perfect fit and application of our beauty treatments and products.",
    categories: [
      {
        category: "Hair Measurements",
        services: [
          {
            name: "Hair Analysis",
            description: "Detailed analysis of hair porosity, density and elasticity for customized treatments.",
            price: "$40"
          },
          {
            name: "Extension Fitting",
            description: "Precise measurements for perfect extension fitting and application.",
            price: "$55"
          },
          {
            name: "Hair Growth Tracking",
            description: "Baseline measurement and tracking program for hair growth progress.",
            price: "$35"
          },
        ],
      },
      {
        category: "Treatment Planning",
        services: [
          {
            name: "Customized Plan",
            description: "Detailed treatment plan based on measurements and analysis.",
            price: "$75"
          },
          {
            name: "Progress Tracking",
            description: "Regular measurement updates and plan adjustments.",
            price: "$45"
          },
        ],
      },
    ],
  },
  hair: {
    title: "Hair",
    description:
      "Book for cut, organize styling, incredible color services and tips for beautiful, healthy hair maintenance.",
    categories: [
      {
        category: "Haircut",
        services: [
          {
            name: "Classic Cut",
            description:
              "A beautiful haircut with an in-house wash and blow dry for all hair types.",
            price: "$90+"
          },
          {
            name: "Trim",
            description: "Quick trim to maintain your current style and hair health.",
            price: "$45+"
          },
        ],
      },
      {
        category: "Color",
        services: [
          {
            name: "Full Color",
            description: "Complete hair coloring service with premium products.",
            price: "$120+"
          },
          {
            name: "Highlights",
            description: "Partial or full highlights for dimensional color.",
            price: "$150+"
          },
        ],
      },
    ],
  },
  skin: {
    title: "Skin",
    description: "Revitalize and nourish your skin with our comprehensive range of facials and treatments.",
    categories: [
      {
        category: "Facial",
        services: [
          {
            name: "Classic Facial",
            description: "Deep cleansing facial with customized treatment.",
            price: "$85"
          },
          {
            name: "Anti-Aging Facial",
            description: "Advanced treatment targeting fine lines and wrinkles.",
            price: "$120"
          },
        ],
      },
      {
        category: "Body Treatments",
        services: [
          {
            name: "Body Scrub",
            description: "Full body exfoliation and moisturizing treatment.",
            price: "$95"
          },
          {
            name: "Skin Brightening",
            description: "Advanced treatment for even skin tone.",
            price: "$110"
          },
        ],
      },
    ],
  },
  makeup: {
    title: "Makeup",
    description: "Professional makeup services for any occasion, from natural looks to glamorous styles.",
    categories: [
      {
        category: "Makeup",
        services: [
          {
            name: "Natural Look",
            description: "Everyday makeup for a fresh, natural appearance.",
            price: "$65"
          },
          {
            name: "Glam Look",
            description: "Full glam makeup for special occasions.",
            price: "$85"
          },
        ],
      },
      {
        category: "Bridal",
        services: [
          {
            name: "Bridal Trial",
            description: "Wedding makeup trial and consultation.",
            price: "$95"
          },
          {
            name: "Wedding Day",
            description: "Complete bridal makeup with touch-ups.",
            price: "$150"
          },
        ],
      },
    ],
  },
  spa: {
    title: "Spa",
    description: "Luxurious spa treatments for complete relaxation and rejuvenation.",
    categories: [
      {
        category: "Massage",
        services: [
          {
            name: "Swedish Massage",
            description: "Classic relaxation massage.",
            price: "$90"
          },
          {
            name: "Deep Tissue",
            description: "Therapeutic deep tissue massage.",
            price: "$110"
          },
        ],
      },
      {
        category: "Body Treatments",
        services: [
          {
            name: "Body Wrap",
            description: "Detoxifying and hydrating body wrap.",
            price: "$120"
          },
          {
            name: "Hot Stone Therapy",
            description: "Relaxing hot stone treatment.",
            price: "$130"
          },
        ],
      },
    ],
  },
  booking: {
    title: "Booking",
    description: "Easy appointment booking for all our services.",
    categories: [
      {
        category: "Booking",
        services: [
          {
            name: "Standard Booking",
            description: "Book any individual service.",
            price: "Varies"
          },
          {
            name: "Package Booking",
            description: "Special rates for service packages.",
            price: "Varies"
          },
        ],
      },
    ],
  },
}; 