// Mock Data for AuraPic Platform

export const MOCK_EVENT = {
  id: "evt_wedding_sarah_john_2026",
  name: "Sarah & John's Wedding",
  subtitle: "Summer Solstice Celebration",
  date: "July 9, 2026",
  isoDate: "2026-07-09T16:00:00Z",
  location: "Komorebi Glasshouse, Sonoma Valley, CA",
  photographer: "Elena Vance (Vance Fine Art Studios)",
  photographerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  status: "LIVE",
  tier: "Standard",
  stats: {
    totalPhotos: 1420,
    maxPhotos: 2500,
    enrolledGuests: 187,
    maxGuests: 200,
    aiMatchesFound: 3842,
    totalDownloads: 642,
    engagementRate: 78.4,
    facesDetected: 3872,
    avgMatchConfidence: 98.7,
    storageUsedGb: 18.4,
    storageQuotaGb: 50.0
  },
  qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://aurapic.ai/guest?event=evt_wedding_sarah_john_2026&color=40-78-59",
  pipelineStatus: {
    stage: "Optimized & Live",
    percent: 100,
    rawUploaded: 1420,
    thumbnailsGenerated: 1420,
    vectorsIndexed: 3872
  }
};

export const MOCK_PHOTOS = [
  {
    id: "img_01",
    title: "Vows at the Botanical Pavilion",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    category: "Solo",
    matchConfidence: 98.7,
    isMatched: true,
    isFavorite: true,
    facesCount: 2,
    dimensions: "6000 x 4000",
    fileSize: "14.2 MB",
    time: "4:15 PM",
    faces: [
      { id: "f1", name: "Guest Match (You)", confidence: 98.7, bbox: { top: 22, left: 42, width: 14, height: 18 } },
      { id: "f2", name: "Sarah (Bride)", confidence: 99.4, bbox: { top: 25, left: 58, width: 13, height: 17 } }
    ]
  },
  {
    id: "img_02",
    title: "Champagne Toast with Table 4",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    category: "With Friends",
    matchConfidence: 97.4,
    isMatched: true,
    isFavorite: false,
    facesCount: 4,
    dimensions: "5820 x 3880",
    fileSize: "13.8 MB",
    time: "5:30 PM",
    faces: [
      { id: "f3", name: "Guest Match (You)", confidence: 97.4, bbox: { top: 30, left: 24, width: 15, height: 20 } },
      { id: "f4", name: "Guest (Michael)", confidence: 94.2, bbox: { top: 28, left: 48, width: 14, height: 19 } },
      { id: "f5", name: "Guest (Chloe)", confidence: 93.8, bbox: { top: 32, left: 68, width: 13, height: 18 } }
    ]
  },
  {
    id: "img_03",
    title: "Golden Hour Garden Promenade",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    category: "Solo",
    matchConfidence: 99.1,
    isMatched: true,
    isFavorite: true,
    facesCount: 1,
    dimensions: "6240 x 4160",
    fileSize: "16.1 MB",
    time: "6:45 PM",
    faces: [
      { id: "f6", name: "Guest Match (You)", confidence: 99.1, bbox: { top: 24, left: 44, width: 16, height: 22 } }
    ]
  },
  {
    id: "img_04",
    title: "First Dance under Edison Chandeliers",
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    category: "With Family",
    matchConfidence: 96.2,
    isMatched: true,
    isFavorite: false,
    facesCount: 3,
    dimensions: "5980 x 3980",
    fileSize: "14.9 MB",
    time: "7:20 PM",
    faces: [
      { id: "f7", name: "Guest Match (You)", confidence: 96.2, bbox: { top: 34, left: 18, width: 12, height: 16 } },
      { id: "f8", name: "John (Groom)", confidence: 99.6, bbox: { top: 28, left: 52, width: 15, height: 21 } }
    ]
  },
  {
    id: "img_05",
    title: "Reception Laughs & Speeches",
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    category: "With Friends",
    matchConfidence: 98.4,
    isMatched: true,
    isFavorite: true,
    facesCount: 5,
    dimensions: "6120 x 4080",
    fileSize: "15.4 MB",
    time: "8:10 PM",
    faces: [
      { id: "f9", name: "Guest Match (You)", confidence: 98.4, bbox: { top: 26, left: 38, width: 14, height: 19 } },
      { id: "f10", name: "Guest (David)", confidence: 95.1, bbox: { top: 29, left: 62, width: 13, height: 18 } }
    ]
  },
  {
    id: "img_06",
    title: "Evening Sparkler Send-off",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    category: "With Family",
    matchConfidence: 95.8,
    isMatched: true,
    isFavorite: false,
    facesCount: 6,
    dimensions: "6000 x 4000",
    fileSize: "17.0 MB",
    time: "9:45 PM",
    faces: [
      { id: "f11", name: "Guest Match (You)", confidence: 95.8, bbox: { top: 32, left: 54, width: 12, height: 17 } }
    ]
  },
  {
    id: "img_07",
    title: "Intimate Portrait by Glasshouse Arches",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
    category: "Solo",
    matchConfidence: 99.4,
    isMatched: true,
    isFavorite: true,
    facesCount: 1,
    dimensions: "5900 x 3930",
    fileSize: "14.5 MB",
    time: "5:10 PM",
    faces: [
      { id: "f12", name: "Guest Match (You)", confidence: 99.4, bbox: { top: 20, left: 45, width: 18, height: 24 } }
    ]
  },
  {
    id: "img_08",
    title: "Cake Cutting Ceremony",
    url: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=80",
    category: "With Friends",
    matchConfidence: 94.7,
    isMatched: true,
    isFavorite: false,
    facesCount: 3,
    dimensions: "5800 x 3860",
    fileSize: "13.9 MB",
    time: "8:50 PM",
    faces: [
      { id: "f13", name: "Guest Match (You)", confidence: 94.7, bbox: { top: 35, left: 30, width: 13, height: 18 } }
    ]
  }
];

export const MOCK_PHOTOGRAPHER_EVENTS = [
  {
    id: "evt_wedding_sarah_john_2026",
    name: "Sarah & John's Wedding",
    date: "July 9, 2026",
    location: "Sonoma Valley, CA",
    status: "LIVE",
    tier: "Standard",
    photosCount: 1420,
    maxPhotos: 2500,
    guestsCount: 187,
    aiMatches: 3842,
    downloads: 642,
    progress: 100
  },
  {
    id: "evt_wedding_maya_liam_2026",
    name: "Maya & Liam's Coastal Vows",
    date: "August 22, 2026",
    location: "Big Sur, CA",
    status: "PROCESSING",
    tier: "Grand",
    photosCount: 3890,
    maxPhotos: 6000,
    guestsCount: 240,
    aiMatches: 5120,
    downloads: 810,
    progress: 74
  },
  {
    id: "evt_wedding_emily_clark_2026",
    name: "Emily & Clark's Vineyard Soirée",
    date: "May 14, 2026",
    location: "Napa Valley, CA",
    status: "COMPLETED",
    tier: "Standard",
    photosCount: 2150,
    maxPhotos: 2500,
    guestsCount: 195,
    aiMatches: 4210,
    downloads: 1420,
    progress: 100
  }
];

export const PRICING_TIERS = [
  {
    id: "micro",
    name: "Micro",
    badge: "Intimate Elopements",
    price: 19,
    priceNote: "/ Event",
    guests: 50,
    photos: 600,
    storageDays: 30,
    features: [
      "50 Guest Facial Profiles",
      "Up to 600 High-Res Photos",
      "Instant Dynamic QR Code",
      "Fast AI Face Vector Matching",
      "Web-Optimized 200KB Previews",
      "Automated Zero-Retention Selfie Deletion",
      "Standard Resolution Downloads"
    ],
    popular: false,
    ctaText: "Choose Micro"
  },
  {
    id: "standard",
    name: "Standard",
    badge: "Most Popular",
    price: 49,
    priceNote: "/ Event",
    guests: 200,
    photos: 2500,
    storageDays: 60,
    features: [
      "200 Guest Facial Profiles",
      "Up to 2,500 High-Res Photos",
      "Instant Dynamic & Printable QR Codes",
      "99.2% Facial Cosine Accuracy",
      "Dual-Tier AWS S3 + Cloudflare CDN",
      "Uncompressed 6000x4000 RAW/HD Downloads",
      "Photographer Live Analytics Suite",
      "Priority AI Celery Vector Pipeline"
    ],
    popular: true,
    ctaText: "Choose Standard"
  },
  {
    id: "grand",
    name: "Grand",
    badge: "Luxury Celebrations",
    price: 99,
    priceNote: "/ Event",
    guests: 500,
    photos: 6000,
    storageDays: 90,
    features: [
      "500 Guest Facial Profiles",
      "Up to 6,000 High-Res Photos",
      "Custom Co-Branded Guest UI",
      "Ultra-Fast GPU Vector Matching (InsightFace)",
      "Multi-Day Event Support",
      "Bulk ZIP Archival for Wedding Couple",
      "Dedicated S3 Cold Glacier Lifecycle (90 days)",
      "VIP Priority Photographer Concierge"
    ],
    popular: false,
    ctaText: "Choose Grand"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Studios & Festivals",
    price: "Custom",
    priceNote: "Volume Licensing",
    guests: "Unlimited",
    photos: "Unlimited",
    storageDays: 365,
    features: [
      "Unlimited Guests & Multi-Camera Uploads",
      "Unlimited Raw Master Storage",
      "White-Label Custom Domain & Branding",
      "Dedicated GPU Instance & Private Milvus Cluster",
      "Live Tethered Camera Auto-Sync (FTP/Lightroom)",
      "Custom Biometric SLA & GDPR Agreements",
      "24/7 Phone & On-Site Event Support"
    ],
    popular: false,
    ctaText: "Contact Sales"
  }
];

export const AURA_AI_KNOWLEDGE = [
  {
    triggers: ["find", "photos", "my photo", "match"],
    answer: "To find your wedding photos, simply scan the event QR code, take a quick 3-second selfie with our face guide, and Aura AI will match you against thousands of photos in less than 2 seconds!"
  },
  {
    triggers: ["how", "ai matching", "technology", "insightface", "vector"],
    answer: "AuraPic runs an InsightFace 512-dimensional embedding pipeline. When a photo is uploaded, faces are detected and translated into irreversible mathematical vectors. Cosine similarity matching connects guest selfies to their moments instantly with 98.7% average accuracy."
  },
  {
    triggers: ["privacy", "selfie", "store", "delete", "security", "gdpr"],
    answer: "Your privacy is paramount. Guest selfies are automatically destroyed within 60 seconds after the mathematical vector is extracted. We never sell biometric data, cross-profile between events, or retain raw facial images."
  },
  {
    triggers: ["storage", "dual-tier", "cost", "reduce", "s3", "glacier"],
    answer: "AuraPic utilizes a smart Dual-Tier Storage Architecture: high-res 15MB RAW originals are placed in cold/Glacier storage, while fast 200KB WebP thumbnails are cached on Cloudflare CDN. You save up to 68% on AWS egress while guests enjoy blazing-fast scrolling."
  },
  {
    triggers: ["create event", "pricing", "cost", "tier"],
    answer: "Photographers can launch an event in 60 seconds. Choose Micro ($19 for 50 guests), Standard ($49 for 200 guests — most popular), or Grand ($99 for 500 guests). Each includes dynamic printable QR codes and instant guest galleries."
  },
  {
    triggers: ["processed", "stats", "status", "sarah"],
    answer: "For Sarah & John's Wedding: 1,420 out of 2,500 photos have been analyzed, detecting 3,872 faces with 3,842 guest matches generated. 187 guests have enrolled with an engagement rate of 78.4%!"
  }
];
