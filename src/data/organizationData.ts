import { SocialInitiative, ImpactMetric, LinkedInPost, CoreValue, LeadershipMember, FAQItem } from '../types';

export const ORGANISATION_INFO = {
  name: "MicroGrow Social Foundation",
  shortName: "MicroGrow",
  tagline: "Where Every System Works for Every Child",
  linkedinUrl: "https://www.linkedin.com/company/microgrow-social-foundation-bangladesh/",
  established: "2025",
  location: "Dhaka, Bangladesh",
  contactEmail: "info@microgrowsocial.org",
  contactPhone: "+8801711232093",
  address: "House 11 Flat 2A, Road 13, PC Culture Housing, ShekherTek, Adabor, Dhaka 1207, Bangladesh",
  founder: "Engr. Imam Mahmud Riad",
  founderTitle: "Founder & WASH/Nutrition Specialist (26+ Years Experience)",
  companySize: "2-10 employees",
  specialties: "WASH, Nutrition, Agriculture, IWRM, and Climate Action",
  missionStatement: "To deliver affordable and sustainable health, nutrition, WASH, and livelihood services through community enterprises powered by circular economy, evidence, innovation, and market-based solutions.",
  visionStatement: "Healthy, resilient, and prosperous communities where every mother, child, and family can thrive free from preventable disease, malnutrition, and poverty.",
  aboutText: "Founded in Bangladesh in 2025, MicroGrow Social Foundation is a social enterprise dedicated to building healthy, resilient, and self-reliant communities. It integrates safe water, sanitation, nutrition, early childhood development, climate-smart agriculture, clean energy, waste management, and livelihood opportunities into community-owned business models. MicroGrow believes sustainable change occurs when women and youth become entrepreneurs, service providers, and local leaders rather than aid recipients."
};

export const CORE_VALUES: CoreValue[] = [
  {
    id: "val-1",
    title: "Healthy Village Approach (Riad et al. 2017)",
    description: "Integrating safe water, sanitation, early childhood development, and nutrition into community-owned enterprise models.",
    icon: "Heart"
  },
  {
    id: "val-2",
    title: "RAINBOWS SBCC Model (Riad et al. 2015)",
    description: "Evidence-based Social & Behavior Change Communication driving sustained hygiene adoption and child nutrition.",
    icon: "Sparkles"
  },
  {
    id: "val-3",
    title: "Valued Variable Social Approach (Riad et al. 2012)",
    description: "Market-based social framework turning aid recipients into local entrepreneurs and essential service providers.",
    icon: "Users"
  },
  {
    id: "val-4",
    title: "Circular Economy & Climate Action",
    description: "Advancing SDG 2 & SDG 6 through solid waste recycling, FSM, micro-water facilities, and clean energy.",
    icon: "Leaf"
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "met-1",
    label: "Communities Reached",
    value: 35,
    prefix: "",
    suffix: "+",
    description: "Rural and coastal villages equipped with healthy village systems in Bangladesh.",
    icon: "MapPin"
  },
  {
    id: "met-2",
    label: "WASH & Nutrition Units",
    value: 120,
    prefix: "",
    suffix: "+",
    description: "Micro water facilities, sanitation, and early childhood nutrition units operational.",
    icon: "UserCheck"
  },
  {
    id: "met-3",
    label: "Women & Youth Leaders",
    value: 250,
    prefix: "",
    suffix: "+",
    description: "Women and young community members leading local service enterprises.",
    icon: "Award"
  },
  {
    id: "met-4",
    label: "Years Experience",
    value: 26,
    prefix: "",
    suffix: "+",
    description: "Leadership background across government (DPHE), NGOs, and international programmes.",
    icon: "TrendingUp"
  }
];

export const SOCIAL_INITIATIVES: SocialInitiative[] = [
  {
    id: "init-1",
    title: "Micro Water Facilities & Safe Drinking Water (WASH)",
    category: "WASH & Water",
    tagline: "Decentralized, affordable micro water facilities protecting health and local ecosystems.",
    description: "Establishing community-owned micro water units and ecological management systems in rural and coastal Bangladesh, delivering safe drinking water through sustainable local business models.",
    impactSummary: "Clean, disease-free drinking water for rural families managed by local service providers.",
    targetAudience: "Mothers, children, and families in water-stressed rural and coastal unions",
    districtsCovered: ["Dhaka", "Satkhira", "Cox's Bazar", "Khulna", "Bhola"],
    beneficiariesCount: 15000,
    status: "Active",
    iconName: "Droplet",
    highlights: [
      "Decentralized micro water facility installation",
      "Community water quality testing & safety monitoring",
      "Ecological water source protection & IWRM integration",
      "Women-led water service provider enterprises"
    ],
    imagePlaceholderColor: "from-blue-600 to-indigo-700"
  },
  {
    id: "init-2",
    title: "Rural WASH, Solid Waste & Fecal Sludge Management (FSM)",
    category: "Waste & Sanitation",
    tagline: "Comprehensive solid waste recycling, plastic pollution mitigation, and safe FSM.",
    description: "Transforming environmental hazards into circular economic opportunities. We build community-operated solid waste collection and FSM systems to stop plastic pollution in water sources.",
    impactSummary: "Cleaner villages, plastic-free waterways, and safe fecal sludge treatment.",
    targetAudience: "Rural households, local bazaar committees, and municipal unions",
    districtsCovered: ["Adabor", "Dhaka", "Narsingdi", "Comilla", "Barisal"],
    beneficiariesCount: 12000,
    status: "Active",
    iconName: "Recycle",
    highlights: [
      "Community solid waste segregation & recycling hubs",
      "Fecal Sludge Management (FSM) pit emptying & treatment",
      "Plastic waste prevention in riverine and coastal water bodies",
      "Green jobs for youth waste entrepreneurs"
    ],
    imagePlaceholderColor: "from-blue-500 to-cyan-600"
  },
  {
    id: "init-3",
    title: "Healthy Village Approach & Child Nutrition Integration",
    category: "Nutrition & ECD",
    tagline: "Combining maternal nutrition, early childhood development, and hygiene (Riad et al. 2017).",
    description: "Implementing the Healthy Village Approach to combat preventable childhood diseases and stunting. We integrate nutrition education, clean water, and hygiene into daily village routines.",
    impactSummary: "Measurable drop in child malnutrition and waterborne illnesses across target villages.",
    targetAudience: "Mothers, infants, under-5 children, and community healthcare workers",
    districtsCovered: ["Dhaka", "Sirajganj", "Sunamganj", "Rangpur", "Jessore"],
    beneficiariesCount: 18000,
    status: "Active",
    iconName: "HeartPulse",
    highlights: [
      "RAINBOWS behavior change communication (SBCC) modules",
      "Maternal & child nutrition monitoring kits",
      "Early Childhood Development (ECD) learning centers",
      "Community health worker training & capacity building"
    ],
    imagePlaceholderColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "init-4",
    title: "Horijon Community Inclusive WASH & Dignified Waste Action",
    category: "Social Inclusion",
    tagline: "Ensuring no marginalized worker or family is left behind in sanitation and hygiene.",
    description: "Specialized WASH, waste management, and social inclusion initiatives directly supporting the marginalized Horijon community in Bangladesh with safe facilities and economic dignity.",
    impactSummary: "Improved health safety, dignified working tools, and clean water access.",
    targetAudience: "Horijon community workers, sanitation staff, and their families",
    districtsCovered: ["Dhaka", "Chittagong", "Mymensingh", "Sylhet"],
    beneficiariesCount: 4500,
    status: "Active",
    iconName: "Users",
    highlights: [
      "Dignified waste collection tools and protective equipment",
      "Sanitation and clean water access in Horijon colonies",
      "Healthcare awareness & children's education support",
      "Financial inclusion & micro-enterprise coaching"
    ],
    imagePlaceholderColor: "from-purple-600 to-blue-700"
  },
  {
    id: "init-5",
    title: "Climate-Smart Agriculture, Clean Energy & IWRM",
    category: "Climate & Agriculture",
    tagline: "Resilient farming, clean energy adoption, and integrated water resource management.",
    description: "Helping rural farmers adapt to climate change through saline-tolerant crops, micro-irrigation, clean solar energy units, and circular agricultural practices.",
    impactSummary: "Enhanced crop yield, reduced climate risk, and sustainable farmer income.",
    targetAudience: "Smallholder farmers, agricultural collectives, and coastal landholders",
    districtsCovered: ["Satkhira", "Bhola", "Kurigram", "Patakhali", "Cox's Bazar"],
    beneficiariesCount: 8500,
    status: "Active",
    iconName: "Sun",
    highlights: [
      "Climate-resilient & saline-tolerant seed distribution",
      "Micro-irrigation & solar water pumping systems",
      "Organic waste composting & bio-fertilizer units",
      "Integrated Water Resource Management (IWRM) training"
    ],
    imagePlaceholderColor: "from-amber-500 to-emerald-700"
  },
  {
    id: "init-6",
    title: "Women & Youth Community Enterprise Accelerator",
    category: "Livelihood & Business",
    tagline: "Empowering women and youth as local service providers and green entrepreneurs.",
    description: "Coaching local women and young people to launch and operate sustainable social enterprises—ranging from water selling and recycling services to nutritious food outlets.",
    impactSummary: "250+ sustainable micro-businesses established with self-directed income.",
    targetAudience: "Rural women, young graduates, and micro-entrepreneurs",
    districtsCovered: ["Dhaka", "Tangail", "Faridpur", "Comilla", "Bogra"],
    beneficiariesCount: 3200,
    status: "Active",
    iconName: "Store",
    highlights: [
      "Valued Variable Social Approach business coaching",
      "Bookkeeping, pricing, and customer service modules",
      "Micro-grant and interest-free startup equipment setup",
      "Peer mentorship network and local leadership forum"
    ],
    imagePlaceholderColor: "from-blue-600 to-sky-700"
  }
];

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "post-1",
    date: "2025 - Recent Dispatch",
    author: "MicroGrow Social Foundation",
    authorTitle: "Non-profit Organization • Dhaka, Bangladesh",
    content: "🌊 Transforming Rural WASH & Fecal Sludge Management (FSM)! At MicroGrow Social Foundation, we integrate solid waste management and safe sanitation into community-owned business models.\n\nBy turning environmental challenges into local enterprise opportunities, we build cleaner, healthier, and more resilient villages across Bangladesh. #RuralWASH #SolidWasteManagement #FSM",
    likesCount: 152,
    commentsCount: 18,
    sharesCount: 12,
    category: "Rural WASH & FSM",
    linkedInUrl: "https://www.linkedin.com/posts/microgrow-social-foundation-bangladesh_ruralwash-solidwastemanagement-fsm-activity-7484137560449916928-9KHB",
    tags: ["#RuralWASH", "#SolidWasteManagement", "#FSM", "#HealthyVillage", "#MicroGrow"]
  },
  {
    id: "post-2",
    date: "2025 - Recent Dispatch",
    author: "MicroGrow Social Foundation",
    authorTitle: "Non-profit Organization • Dhaka, Bangladesh",
    content: "💧 Tackling Plastic Pollution & Water System Integrity! Circular economy solutions are essential for protecting water resources in coastal and rural Bangladesh.\n\nOur community waste initiatives engage local youth and micro-entrepreneurs to prevent plastic waste from polluting drinking water sources. #Water #PlasticPollution #SolidWasteManagement",
    likesCount: 189,
    commentsCount: 24,
    sharesCount: 19,
    category: "Plastic Pollution & Water",
    linkedInUrl: "https://www.linkedin.com/posts/microgrow-social-foundation-bangladesh_water-plasticpollution-solidwastemanagement-activity-7481004129394282496-H6wL",
    tags: ["#Water", "#PlasticPollution", "#SolidWasteManagement", "#CircularEconomy"]
  },
  {
    id: "post-3",
    date: "2025 - Recent Dispatch",
    author: "MicroGrow Social Foundation",
    authorTitle: "Non-profit Organization • Dhaka, Bangladesh",
    content: "🚰 Micro Water Facilities & Ecological Resource Management! Safe drinking water is a fundamental right. MicroGrow establishes decentralized micro water facilities managed by local community enterprises.\n\nEnsuring reliable, affordable access while protecting fragile local ecosystems. #MicroWaterFacilities #EcologicalManagement #WASH",
    likesCount: 210,
    commentsCount: 31,
    sharesCount: 22,
    category: "Micro Water Facilities",
    linkedInUrl: "https://www.linkedin.com/posts/microgrow-social-foundation-bangladesh_microwaterfacilities-ecologicalabrmanagementabrfoundation-activity-7479534973671067648-4nn4",
    tags: ["#MicroWaterFacilities", "#EcologicalManagement", "#CleanWater", "#WASH"]
  },
  {
    id: "post-4",
    date: "2025 - Recent Dispatch",
    author: "MicroGrow Social Foundation",
    authorTitle: "Non-profit Organization • Dhaka, Bangladesh",
    content: "🤝 Dignity, Inclusion & WASH for the Horijon Community! Sustainable development leaves no one behind.\n\nWe work closely with marginalized Horijon communities in Bangladesh to implement tailored waste management systems and safe sanitation facilities that empower local families. #WasteManagement #HorijonCommunity #WASH #SocialInclusion",
    likesCount: 275,
    commentsCount: 42,
    sharesCount: 35,
    category: "Horijon Community WASH",
    linkedInUrl: "https://www.linkedin.com/posts/microgrow-social-foundation-bangladesh_wastemanagement-horijonabrcommunity-wash-activity-7485025908890718209-SMBH",
    tags: ["#WasteManagement", "#HorijonCommunity", "#WASH", "#SocialInclusion"]
  },
  {
    id: "post-5",
    date: "2025 - Recent Dispatch",
    author: "MicroGrow Social Foundation",
    authorTitle: "Non-profit Organization • Dhaka, Bangladesh",
    content: "🌱 Evidence-Based Social Impact in Action! Utilizing the Healthy Village Approach and the RAINBOWS behavior change model pioneered by Founder Engr. Imam Mahmud Riad.\n\nMicroGrow works directly with mothers, children, and youth to improve health, nutrition, and environmental safety across rural unions.",
    likesCount: 310,
    commentsCount: 52,
    sharesCount: 40,
    category: "Healthy Village & RAINBOWS",
    linkedInUrl: "https://www.linkedin.com/posts/microgrow-social-foundation-bangladesh_activity-7479129865904992257-Q3nT",
    tags: ["#HealthyVillage", "#RAINBOWSModel", "#ChildNutrition", "#MicroGrow"]
  },
  {
    id: "post-6",
    date: "2025 - Recent Dispatch",
    author: "MicroGrow Social Foundation",
    authorTitle: "Non-profit Organization • Dhaka, Bangladesh",
    content: "📊 The Valued Variable Social Approach (Riad et al. 2012)! Advancing SDG 2 (Zero Hunger) and SDG 6 (Clean Water & Sanitation) requires rigorous, market-driven social frameworks.\n\nMicroGrow transforms aid recipients into active service providers and entrepreneurs to ensure true sustainability.",
    likesCount: 380,
    commentsCount: 61,
    sharesCount: 48,
    category: "Valued Variable Approach",
    linkedInUrl: "https://www.linkedin.com/posts/microgrow-social-foundation-bangladesh_microgrow-social-approach-activity-7479123525241540609-4OEw",
    tags: ["#MicroGrowSocialApproach", "#ValuedVariableSocialApproach", "#SDG2", "#SDG6"]
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "lead-1",
    name: "Engr. Imam Mahmud Riad",
    role: "Founder & Executive Director",
    bio: "WASH and nutrition specialist with over 26 years of experience across government (DPHE), NGOs, multilateral programmes, and social enterprise development in Bangladesh and Nepal. Formerly with Max Foundation, he pioneered the Healthy Village Approach (2017), RAINBOWS model (2015), and Valued Variable Social Approach (2012).",
    linkedInUrl: "https://www.linkedin.com/company/microgrow-social-foundation-bangladesh/",
    imageBg: "bg-[#2563EB]"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "About",
    question: "What is MicroGrow Social Foundation?",
    answer: "Founded in Bangladesh in 2025, MicroGrow Social Foundation is a social enterprise dedicated to building healthy, resilient, and self-reliant communities. It integrates safe water, sanitation, nutrition, early childhood development, climate-smart agriculture, clean energy, waste management, and livelihood opportunities into community-owned business models under the tagline 'Where Every System Works for Every Child'."
  },
  {
    category: "Founder & Models",
    question: "Who founded MicroGrow and what are its core models?",
    answer: "MicroGrow was founded by Engr. Imam Mahmud Riad, a WASH and nutrition specialist with over 26 years of experience across DPHE and Max Foundation Bangladesh and Nepal. Its core operational frameworks include the Healthy Village Approach (Riad et al. 2017), RAINBOWS SBCC model (Riad et al. 2015), and Valued Variable Social Approach (Riad et al. 2012)."
  },
  {
    category: "SDG Goals",
    question: "Which Sustainable Development Goals does MicroGrow advance?",
    answer: "MicroGrow primarily advances SDG 2 (Zero Hunger & Child Nutrition) and SDG 6 (Clean Water & Sanitation), alongside climate action (SDG 13) and gender equality through women-led social enterprises."
  },
  {
    category: "Headquarters & Contact",
    question: "Where is MicroGrow Social Foundation located?",
    answer: "Our headquarters are at House 11 Flat 2A, Road 13, PC Culture Housing, ShekherTek, Adabor, Dhaka 1207, Bangladesh. Contact phone: +8801711232093, Email: info@microgrowsocial.org."
  }
];

