// ============================================================
// CENTRAL WEDDING CONFIGURATION
// Edit this file to customize the entire site.
// ============================================================

export const weddingConfig = {
  couple: {
    brideName: "Somiya",
    brideFullName: "Somiya Akter",
    brideNameBn: "সুমাইয়া",
    groomName: "Habibur",
    groomFullName: "Habibur Rahman",
    groomNameBn: "হাবিবুর",
    bridePhoto: "/images/bride.jpg",
    groomPhoto: "/images/groom.jpg",
    coupleHashtag: "#Habibur & Somiya",
  },

  wedding: {
    title: "Habibur  &  Somiya",
    dateISO: "2026-09-04T17:00:00+06:00",
    dateDisplay: "Friday, 04 September 2026",
    timeDisplay: "2:00 PM onwards",
    venueLat: 23.611454,
    venueLng: 90.977287,

    brideHouse: {
      houseName: "Bhuiyan Bari",
      village: "Hetipur",
      postOffice: "Khalilpur",
      upazila: "Debidwar",
      district: "Cumilla",
    },

    groomHouse: {
      houseName: "Baram Bari",
      village: "Baror",
      postOffice: "Charbakor",
      upazila: "Debidwar",
      district: "Cumilla",
    },
  },

  ourStory: [
    {
      year: "2026",
      date: "26 July 2026",
      title: "First Meeting",
      description:
        "Our journey began when the bride's family visited the groom's home. It was the first step toward a beautiful future together.",
    },
    {
      year: "2026",
      date: "27 July 2026",
      title: "Bride Seeing Ceremony",
      description:
        "The groom, accompanied by his father and family members, visited the bride's home. Two families came together, sharing warmth, smiles, and blessings.",
    },
    {
      year: "2026",
      date: "31 July 2026",
      title: "Engagement",
      description:
        "With the blessings of our families, we exchanged our promises and officially began our journey toward a lifetime of love and togetherness.",
    },
    {
      year: "2026",
      date: "05 September 2026",
      title: "Wedding Day",
      description:
        "The day we've been dreaming of has finally arrived. Join us as we celebrate our love, exchange vows, and begin our forever together.",
    },
  ],

  eventTimeline: [
    {
      time: "1:30 PM",
      title: "Guest Arrival",
      description: "Guests arrive, welcome drinks & seating"
    },
    {
      time: "2:00 PM",
      title: "Jumu'ah Prayer",
      description: "Congregational Friday prayer"
    },
    {
      time: "2:45 PM",
      title: "Wedding Lunch",
      description: "Enjoy a delicious celebratory feast"
    },
    {
      time: "3:30 PM",
      title: "Nikah Ceremony",
      description: "The sacred marriage contract and Khutbah"
    },
    {
      time: "4:15 PM",
      title: "Photography Session",
      description: "Capture memorable moments with family and friends"
    },
    {
      time: "5:00 PM",
      title: "Dua & Farewell",
      description: "Closing prayers, blessings, and heartfelt thanks"
    }
  ],

  gallery: [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
  ],

  contacts: {
    groom: { name: "Habibur Rahman", phone: "+8801768238762" },
    coordinator: { name: "Wedding Coordinator", phone: "+8801768238762" },
    emergency: { name: "Emergency Contact", phone: "+8801768238762" },
  },

  aboutCumilla: {
    // ============================================================
    // BASIC INFORMATION
    // ============================================================

    title: "About Cumilla",
    titleBn: "কুমিল্লা সম্পর্কে",

    description:
      "কুমিল্লা বাংলাদেশের অন্যতম প্রাচীন, ঐতিহাসিক ও সাংস্কৃতিকভাবে সমৃদ্ধ জেলা। প্রাচীন সভ্যতা, প্রত্নতাত্ত্বিক নিদর্শন, ধর্মীয় স্থাপনা, শিক্ষা, সংস্কৃতি, নদী, প্রকৃতি এবং ঐতিহ্যবাহী স্থানের জন্য কুমিল্লা বিশেষভাবে পরিচিত।",

    overview: `
  কুমিল্লা বাংলাদেশের চট্টগ্রাম বিভাগের একটি ঐতিহাসিক জেলা। প্রাচীন সমতট
  অঞ্চলের ইতিহাস, ময়নামতি-লালমাইয়ের প্রত্নতাত্ত্বিক নিদর্শন, ঐতিহাসিক
  মসজিদ-মন্দির, জমিদার বাড়ি, যুদ্ধ সমাধিক্ষেত্র এবং বিভিন্ন সাংস্কৃতিক
  ঐতিহ্যের কারণে কুমিল্লার রয়েছে একটি সমৃদ্ধ ঐতিহাসিক পরিচয়।
  
  কুমিল্লা শুধু ইতিহাসের জন্য নয়, শিক্ষা, কৃষি, ব্যবসা-বাণিজ্য, সংস্কৃতি,
  প্রকৃতি এবং মানুষের বৈচিত্র্যময় জীবনযাত্রার জন্যও পরিচিত।
  `,

    // ============================================================
    // HISTORY OF CUMILLA
    // ============================================================

    history: {
      title: "History of Cumilla",
      titleBn: "কুমিল্লার ইতিহাস",

      description: `
  কুমিল্লার ইতিহাস বহু প্রাচীন। বর্তমান কুমিল্লা অঞ্চল প্রাচীন সমতট
  জনপদের গুরুত্বপূর্ণ অংশ ছিল। ময়নামতি-লালমাই অঞ্চলে পাওয়া প্রত্নতাত্ত্বিক
  নিদর্শন থেকে এই অঞ্চলে প্রাচীন বৌদ্ধ সভ্যতা ও শিক্ষাকেন্দ্রের অস্তিত্বের
  প্রমাণ পাওয়া যায়।
  
  শালবন বিহার, কুটিলা মুড়া এবং ময়নামতি অঞ্চলের অন্যান্য প্রত্নস্থল
  কুমিল্লার প্রাচীন ইতিহাসের গুরুত্বপূর্ণ নিদর্শন।
  
  পরবর্তী সময়ে ত্রিপুরা রাজ্য, মুঘল ও ব্রিটিশ শাসনসহ বিভিন্ন ঐতিহাসিক
  পর্যায় অতিক্রম করে কুমিল্লা বর্তমান প্রশাসনিক পরিচয় লাভ করে।
  
  মুক্তিযুদ্ধের ইতিহাসেও কুমিল্লার গুরুত্বপূর্ণ ভূমিকা রয়েছে।
  কুমিল্লা ক্যান্টনমেন্ট, ময়নামতি যুদ্ধ সমাধিক্ষেত্র এবং বিভিন্ন
  ঐতিহাসিক স্থাপনা জেলার দীর্ঘ ইতিহাসের সাক্ষ্য বহন করে।
  `,

      keyPeriods: [
        {
          period: "প্রাচীন সমতট",
          description:
            "কুমিল্লা প্রাচীন সমতট জনপদের গুরুত্বপূর্ণ অংশ ছিল।",
        },
        {
          period: "দেব রাজবংশ",
          description:
            "ময়নামতি অঞ্চলে বৌদ্ধ শিক্ষা ও ধর্মীয় স্থাপনার বিকাশ ঘটে।",
        },
        {
          period: "ত্রিপুরা রাজ্য",
          description:
            "কুমিল্লা ও পার্শ্ববর্তী অঞ্চল ত্রিপুরা রাজ্যের ইতিহাসের সঙ্গে যুক্ত ছিল।",
        },
        {
          period: "মুঘল ও ঔপনিবেশিক সময়",
          description:
            "প্রশাসন, বাণিজ্য ও যোগাযোগ ব্যবস্থার বিকাশ ঘটে।",
        },
        {
          period: "মুক্তিযুদ্ধ",
          description:
            "১৯৭১ সালের মুক্তিযুদ্ধে কুমিল্লা গুরুত্বপূর্ণ ভূমিকা পালন করে।",
        },
        {
          period: "আধুনিক কুমিল্লা",
          description:
            "বর্তমানে কুমিল্লা শিক্ষা, ব্যবসা, কৃষি, সংস্কৃতি ও পর্যটনের গুরুত্বপূর্ণ কেন্দ্র।",
        },
      ],
    },

    // ============================================================
    // NAMING HISTORY
    // ============================================================

    namingHistory: {
      title: "Naming History of Cumilla",
      titleBn: "কুমিল্লার নামকরণের ইতিহাস",

      description: `
  কুমিল্লা নামের উৎপত্তি নিয়ে বিভিন্ন ঐতিহাসিক মত ও ব্যাখ্যা প্রচলিত রয়েছে।
  সময়ের পরিবর্তনের সঙ্গে সঙ্গে এই অঞ্চলের নাম ও প্রশাসনিক পরিচয়ও
  বিভিন্ন পর্যায় অতিক্রম করেছে।
  
  ঐতিহাসিকভাবে অঞ্চলটি সমতট, ত্রিপুরা এবং টিপ্পেরা/তিপ্পেরা অঞ্চলের
  সঙ্গে সম্পর্কিত ছিল। ব্রিটিশ আমলে Comilla নামটি প্রশাসনিকভাবে ব্যবহৃত
  হতে থাকে।
  
  পরবর্তীতে সরকারি ব্যবহারে জেলার নাম Cumilla হিসেবে প্রতিষ্ঠিত হয়।
  `,

      historicalNames: [
        {
          name: "সমতট",
          description:
            "প্রাচীনকালে বর্তমান কুমিল্লা অঞ্চল সমতট জনপদের গুরুত্বপূর্ণ অংশ ছিল।",
        },
        {
          name: "ত্রিপুরা",
          description:
            "দীর্ঘ সময় এই অঞ্চল ত্রিপুরা রাজ্যের প্রশাসনিক ও রাজনৈতিক ইতিহাসের সঙ্গে যুক্ত ছিল।",
        },
        {
          name: "টিপ্পেরা / Tippera",
          description:
            "ব্রিটিশ আমলে বৃহত্তর প্রশাসনিক অঞ্চলের ক্ষেত্রে Tippera নাম ব্যবহৃত হয়েছে।",
        },
        {
          name: "Comilla",
          description:
            "ঔপনিবেশিক ও পরবর্তী প্রশাসনিক ব্যবহারে Comilla নামটি ব্যাপকভাবে ব্যবহৃত হয়।",
        },
        {
          name: "Cumilla",
          description:
            "বর্তমান সরকারি ইংরেজি নাম Cumilla।",
        },
      ],
    },

    // ============================================================
    // ADMINISTRATION
    // ============================================================

    administration: {
      title: "Administration of Cumilla",
      titleBn: "কুমিল্লার প্রশাসনিক তথ্য",

      division: "Chattogram Division",
      divisionBn: "চট্টগ্রাম বিভাগ",

      district: "Cumilla",
      districtBn: "কুমিল্লা",

      areaSqKm: 3146.30,

      population2022: 6212216,

      literacyRate2022: 76.68,

      totalUpazilas: 17,

      description:
        "কুমিল্লা জেলা বর্তমানে ১৭টি উপজেলা নিয়ে গঠিত। প্রতিটি উপজেলার নিজস্ব ভৌগোলিক বৈশিষ্ট্য, জনসংখ্যা, শিক্ষা, কৃষি, সংস্কৃতি ও ঐতিহাসিক পরিচয় রয়েছে।",

      upazilas: [
        {
          id: 1,
          name: "Cumilla Adarsha Sadar",
          nameBn: "কুমিল্লা আদর্শ সদর",
          population2022: 388414,
          literacyRate2022: 81.07,
          unionCount: 7,

          unions: [
            "Amratoli",
            "Uttar Durgapur",
            "Dakshin Durgapur",
            "Jagannathpur",
            "Kalir Bazar",
            "Panchthubi",
            "Cumilla Cantonment",
          ],

          description:
            "কুমিল্লা জেলার প্রশাসনিক ও নগরকেন্দ্রিক গুরুত্বপূর্ণ উপজেলা। কুমিল্লা শহর, শিক্ষা প্রতিষ্ঠান, ব্যবসা-বাণিজ্য ও বিভিন্ন সরকারি প্রতিষ্ঠান এই অঞ্চলের গুরুত্বপূর্ণ বৈশিষ্ট্য।",
        },

        {
          id: 2,
          name: "Barura",
          nameBn: "বরুড়া",
          population2022: 456328,
          literacyRate2022: 74.83,
          unionCount: 15,

          unions: [
            "Aganagar",
            "Bhabanipur",
            "Uttar Khoshbas",
            "Dakshin Khoshbas",
            "Chitodda",
            "Jhalam",
            "Uttar Shilmuri",
            "Dakshin Shilmuri",
            "Adda",
            "Adra",
            "Shakpur",
            "Galimpur",
            "Vauksar",
            "Laxmipur",
            "Payalgacha",
          ],

          description:
            "বরুড়া কৃষি, গ্রামীণ জনপদ, ঐতিহাসিক স্থাপনা ও স্থানীয় সংস্কৃতির জন্য পরিচিত।",
        },

        {
          id: 3,
          name: "Brahmanpara",
          nameBn: "ব্রাহ্মণপাড়া",
          population2022: 232626,
          literacyRate2022: 77.31,
          unionCount: 8,

          unions: [
            "Brahmanpara",
            "Chandla",
            "Dulalpur",
            "Madhabpur",
            "Malapara",
            "Shahebabad",
            "Shashidal",
            "Shidli",
          ],

          description:
            "ব্রাহ্মণপাড়া কুমিল্লার একটি গুরুত্বপূর্ণ সীমান্তবর্তী ও কৃষিনির্ভর উপজেলা।",
        },

        {
          id: 4,
          name: "Burichang",
          nameBn: "বুড়িচং",
          population2022: 349628,
          literacyRate2022: 79.63,
          unionCount: 8,

          unions: [
            "Rajapur",
            "Bakshimul",
            "Sholonal",
            "Pirjatrapur",
            "Moynamoti",
            "Mokam",
            "Bharella North",
            "Bharella South",
          ],

          description:
            "বুড়িচং ময়নামতি অঞ্চল, প্রাকৃতিক পরিবেশ, কৃষি এবং ঐতিহাসিক নিদর্শনের সঙ্গে ঘনিষ্ঠভাবে সম্পর্কিত।",
        },

        {
          id: 5,
          name: "Chandina",
          nameBn: "চান্দিনা",
          population2022: 394860,
          literacyRate2022: 74.24,
          unionCount: 13,

          unions: [
            "Barera",
            "Batagashi",
            "Borkoroi",
            "Barkait",
            "Dollai Nawabpur",
            "Etberpur",
            "Gollai",
            "Joag",
            "Keronkhal",
            "Madhaiya",
            "Maijkhar",
            "Mohichail",
            "Shuhilpur",
          ],

          description:
            "চান্দিনা ঢাকা-চট্টগ্রাম মহাসড়ক ও গুরুত্বপূর্ণ যোগাযোগ ব্যবস্থার কারণে বাণিজ্যিকভাবে গুরুত্বপূর্ণ।",
        },

        {
          id: 6,
          name: "Chauddagram",
          nameBn: "চৌদ্দগ্রাম",
          population2022: 501803,
          literacyRate2022: 79.29,
          unionCount: 13,

          unions: [
            "Alkara",
            "Batisha",
            "Cheora",
            "Ghulpasha",
            "Gunabati",
            "Jagannathdighi",
            "Kalikapur",
            "Kankapait",
            "Kashinagar",
            "Moonshirhat",
            "Shuvapur",
            "Sreepur",
            "Ujirpur",
          ],

          description:
            "চৌদ্দগ্রাম কুমিল্লার দক্ষিণাঞ্চলের একটি বৃহৎ উপজেলা এবং ঢাকা-চট্টগ্রাম যোগাযোগ ব্যবস্থার গুরুত্বপূর্ণ অংশ।",
        },

        {
          id: 7,
          name: "Cumilla Sadar Dakshin",
          nameBn: "কুমিল্লা সদর দক্ষিণ",
          population2022: 184314,
          literacyRate2022: 76.69,
          unionCount: 6,

          unions: [
            "Barapara",
            "Bijoypur",
            "Chouara",
            "Galiara",
            "Paschim Jorekaran",
            "Purba Jorekaran",
          ],

          description:
            "কুমিল্লা শহরের দক্ষিণাঞ্চলকে ঘিরে গড়ে ওঠা গুরুত্বপূর্ণ উপজেলা।",
        },

        {
          id: 8,
          name: "Daudkandi",
          nameBn: "দাউদকান্দি",
          population2022: 406394,
          literacyRate2022: 75.85,
          unionCount: 16,

          unions: [
            "Baropara",
            "Betessor",
            "Dakshin Eliotgonj",
            "Doulotpur",
            "Goalmari",
            "Gouripur",
            "Maruka",
            "Mohammadpur Paschim",
            "Maligaon",
            "Mohammadpur Purbo",
            "Passgacia Pachim",
            "Podua",
            "Sundolpur",
            "Uttar Daudkandi",
            "Uttar Eliotgonj",
            "Zinglatoli",
          ],

          description:
            "দাউদকান্দি মেঘনা ও গোমতী নদী, মহাসড়ক এবং বাণিজ্যিক যোগাযোগের জন্য গুরুত্বপূর্ণ।",
        },

        {
          id: 9,
          name: "Debidwar",
          nameBn: "দেবিদ্বার",
          population2022: 471917,
          literacyRate2022: 76.56,
          unionCount: 15,

          unions: [
            "Barkamta",
            "Boroshalghor",
            "Dakshin Gunaighor",
            "Dhamti",
            "Elahabad",
            "Fatehabad",
            "Jafargonj",
            "Mohanpur",
            "Rajameher",
            "Rasulpur",
            "Subil",
            "Sultanpur",
            "Uttar Gunaighor",
            "Vani",
            "Yousufpur",
          ],

          description:
            "দেবিদ্বার কুমিল্লার উত্তর-পূর্বাঞ্চলের একটি গুরুত্বপূর্ণ উপজেলা। ঐতিহাসিক মসজিদ, মাজার ও গ্রামীণ ঐতিহ্যের জন্য এই অঞ্চল পরিচিত।",
        },

        {
          id: 10,
          name: "Homna",
          nameBn: "হোমনা",
          population2022: 227529,
          literacyRate2022: 68.82,
          unionCount: 9,

          unions: [
            "Asadpur",
            "Bhasania",
            "Dulalpur",
            "Joypur",
            "Chander Char",
            "Ghagutia",
            "Garmora",
            "Mathabanga",
            "Nilakhi",
          ],

          description:
            "হোমনা মেঘনা নদী ও নদীভিত্তিক জীবনযাত্রার জন্য পরিচিত।",
        },

        {
          id: 11,
          name: "Laksam",
          nameBn: "লাকসাম",
          population2022: 333706,
          literacyRate2022: 77.34,
          unionCount: 7,

          unions: [
            "Bakai",
            "Gobindapur",
            "Laksam",
            "Mudafarganj",
            "Kandirpar",
            "Ajgara",
            "Uttardah",
          ],

          description:
            "লাকসাম কুমিল্লার অন্যতম গুরুত্বপূর্ণ রেল ও বাণিজ্যিক যোগাযোগ কেন্দ্র।",
        },

        {
          id: 12,
          name: "Lalmai",
          nameBn: "লালমাই",
          population2022: 214999,
          literacyRate2022: 76.08,
          unionCount: 9,

          unions: [
            "Bagmara North",
            "Bagmara South",
            "Bholain North",
            "Bholain South",
            "Perul North",
            "Perul South",
            "Belghar North",
            "Belghar South",
            "Bakai North",
          ],

          description:
            "লালমাই কুমিল্লার নবগঠিত উপজেলা এবং লালমাই পাহাড়, প্রত্নতাত্ত্বিক স্থান ও প্রাকৃতিক পরিবেশের জন্য পরিচিত।",
        },

        {
          id: 13,
          name: "Manoharganj",
          nameBn: "মনোহরগঞ্জ",
          population2022: 275688,
          literacyRate2022: 79.06,
          unionCount: 11,

          unions: [
            "Baishgaon",
            "Bipulasar",
            "Hasnabad",
            "Jhalam North",
            "Jhalam South",
            "Khila",
            "Lakshmanpur",
            "Maisatua",
            "Nather Petua",
            "Sarashpur",
            "Hawla North",
          ],

          description:
            "মনোহরগঞ্জ কুমিল্লার দক্ষিণাঞ্চলের একটি কৃষিনির্ভর উপজেলা।",
        },

        {
          id: 14,
          name: "Meghna",
          nameBn: "মেঘনা",
          population2022: 118801,
          literacyRate2022: 69.16,
          unionCount: 7,

          unions: [
            "Barakanda",
            "Chandanpur",
            "Chalibhanga",
            "Gobindapur",
            "Luter Char",
            "Maniker Char",
            "Radhanagar",
          ],

          description:
            "মেঘনা উপজেলা নদী, চরাঞ্চল এবং নদীকেন্দ্রিক জীবনযাত্রার জন্য পরিচিত।",
        },

        {
          id: 15,
          name: "Muradnagar",
          nameBn: "মুরাদনগর",
          population2022: 582934,
          literacyRate2022: 72.36,
          unionCount: 22,

          unions: [
            "Akubpur",
            "Andikot",
            "Bangara East",
            "Bangara West",
            "Chapitala",
            "Darora",
            "Chhaliakandi",
            "Dhamghar",
            "Jahapur",
            "Jatrapur",
            "Kamalla",
            "Muradnagar",
            "Nabipur East",
            "Nabipur West",
            "Paharpur",
            "Babuti Para",
            "Purbadhair East",
            "Purbadhair West",
            "Ramchandrapur North",
            "Ramchandrapur South",
            "Tanki",
            "Sreekail",
          ],

          description:
            "মুরাদনগর কুমিল্লার বৃহৎ উপজেলা এবং এর বিস্তৃত গ্রামীণ জনপদ, কৃষি ও ঐতিহ্যবাহী স্থাপনার জন্য পরিচিত।",
        },

        {
          id: 16,
          name: "Nangalkot",
          nameBn: "নাঙ্গলকোট",
          population2022: 427876,
          literacyRate2022: 76.47,
          unionCount: 12,

          unions: [
            "Adra",
            "Bangodda",
            "Bakshaganj",
            "Dhalua",
            "Daulkhar",
            "Hesakhal",
            "Jodda",
            "Mokara",
            "Mokrabpur",
            "Peria",
            "Roykot",
            "Satbaria",
          ],

          description:
            "নাঙ্গলকোট কুমিল্লার দক্ষিণাঞ্চলের গুরুত্বপূর্ণ উপজেলা এবং কৃষি ও যোগাযোগের জন্য পরিচিত।",
        },

        {
          id: 17,
          name: "Titas",
          nameBn: "তিতাস",
          population2022: 203953,
          literacyRate2022: 65.17,
          unionCount: 9,

          unions: [
            "Balarampur",
            "Jagatpur",
            "Kalakandi",
            "Karikandi",
            "Majidpur",
            "Narayandia",
            "Satani",
            "Vitikandi",
            "Zearkandi",
          ],

          description:
            "তিতাস উপজেলা গোমতী-তিতাস নদী ও নদীভিত্তিক জীবনযাত্রার সঙ্গে ঘনিষ্ঠভাবে সম্পর্কিত।",
        },
      ],
    },

    // ============================================================
    // HISTORICAL & TOURIST PLACES
    // ============================================================

    historicalPlacesTitle: "Historical & Tourist Places of Cumilla",

    historicalPlacesTitleBn:
      "কুমিল্লার ঐতিহাসিক ও দর্শনীয় স্থান",

    historicalPlacesDescription:
      "কুমিল্লার বিভিন্ন প্রান্তে ছড়িয়ে থাকা প্রত্নতাত্ত্বিক স্থান, ঐতিহাসিক স্থাপনা, ধর্মীয় স্থান, প্রাকৃতিক আকর্ষণ এবং সাংস্কৃতিক ঐতিহ্যের সঙ্গে পরিচিত হোন।",

    historicalPlaces: [
      // ==========================================================
      // 1. SHALBAN VIHARA
      // ==========================================================

      {
        name: "Shalban Vihara",
        banglaName: "শালবন বিহার",
        category: "Archaeological Site",

        description:
          "সপ্তম শতাব্দীর বৌদ্ধ বিহার, ১১৫টি কক্ষ বিশিষ্ট প্রাচীন বৌদ্ধ মঠ। লালমাই-ময়নামতি পাহাড়ের মধ্যবর্তী অংশে অবস্থিত এই বিহার বাংলাদেশের অন্যতম গুরুত্বপূর্ণ প্রত্নস্থল।",

        history:
          "শালবন বিহার ময়নামতি এলাকায় অবস্থিত একটি প্রাচীন বৌদ্ধ বিহার। প্রদত্ত তথ্য অনুযায়ী এটি সপ্তম শতাব্দীতে প্রতিষ্ঠিত হয় এবং দ্বাদশ শতাব্দী পর্যন্ত সক্রিয় ছিল। প্রত্নতাত্ত্বিক খননে টেরাকোটা সীল ও তাম্রলিপি পাওয়া গেছে। ভব দেবের সঙ্গে এর প্রতিষ্ঠার সম্পর্ক উল্লেখ করা হয়েছে।",

        location:
          "কোটবাড়ি, ময়নামতি, কুমিল্লা",

        upazila: "Burichang",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.426234,
        longitude: 91.1372098,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ৮ কিমি পশ্চিমে",

        bestTimeToVisit:
          "নভেম্বর থেকে ফেব্রুয়ারি",

        transportation:
          "কুমিল্লা শহর থেকে কোটবাড়ি এলাকায় সড়কপথে যাওয়া যায়। নির্দিষ্ট গণপরিবহন তথ্য Not verified.",

        entryFee:
          "বাংলাদেশি নাগরিক: ৳৩০; বিদেশি: ৳১০০",

        openingHours:
          "সূর্যোদয় থেকে সূর্যাস্ত পর্যন্ত — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Photography",
          "Nearby food facilities",
          "Visitor access"
        ],

        importance: [
          "বাংলাদেশের গুরুত্বপূর্ণ বৌদ্ধ প্রত্নস্থল",
          "ময়নামতি প্রত্নতাত্ত্বিক অঞ্চলের গুরুত্বপূর্ণ নিদর্শন",
          "প্রাচীন বৌদ্ধ স্থাপত্যের নিদর্শন"
        ],

        source: "Wikipedia / Bangladesh National Portal information provided",

        sourceUrl:
          "https://en.wikipedia.org/wiki/Shalban_Vihara",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 2. MAINAMATI MUSEUM
      // ==========================================================

      {
        name: "Mainamati Museum",
        banglaName: "ময়নামতি জাদুঘর",
        category: "Museum",

        description:
          "ময়নামতি-লালমাই অঞ্চলের প্রত্নবস্তু সমৃদ্ধ জাদুঘর। ১৯৬৫ সালে প্রতিষ্ঠিত এই জাদুঘরে ৭ম-১২শ শতাব্দীর বৌদ্ধ ও হিন্দু নিদর্শন সংরক্ষিত আছে।",

        history:
          "১৯৫০-এর দশকে ময়নামতি অঞ্চলে প্রত্নতাত্ত্বিক খনন শুরু হলে প্রচুর প্রত্নবস্তু পাওয়া যায়। এসব নিদর্শন সংরক্ষণ ও প্রদর্শনের জন্য ১৯৬৫ সালে শালবন বিহারের পাশে ময়নামতি জাদুঘর প্রতিষ্ঠিত হয়।",

        location:
          "শালবন বিহারের পাশে, কোটবাড়ি, ময়নামতি, কুমিল্লা",

        upazila: "Burichang",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.458,
        longitude: 91.1208,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ১৪ কিমি",

        bestTimeToVisit:
          "নভেম্বর থেকে ফেব্রুয়ারি",

        transportation:
          "কুমিল্লা শহর থেকে কোটবাড়ি এলাকায় সড়কপথে যাওয়া যায়।",

        entryFee:
          "বাংলাদেশি: ৳৩০; সার্ক দেশ: ৳১০০; অন্যান্য বিদেশি: ৳২০০",

        openingHours:
          "শীতকাল: মঙ্গল-শনি সকাল ৯টা-৫টা; সোমবার দুপুর ২টা-৫টা; রবিবার বন্ধ",

        facilities: [
          "Museum galleries",
          "Guide service",
          "Photography without flash"
        ],

        importance: [
          "ময়নামতি-লালমাই অঞ্চলের প্রত্নবস্তু সংরক্ষণ কেন্দ্র",
          "প্রাচীন বৌদ্ধ ও হিন্দু নিদর্শনের সংগ্রহশালা",
          "কুমিল্লার গুরুত্বপূর্ণ জাদুঘর"
        ],

        source: "Wikipedia / information provided",

        sourceUrl:
          "https://en.wikipedia.org/wiki/Mainamati",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 3. COMILLA JAGANNATH TEMPLE
      // ==========================================================

      {
        name: "Comilla Jagannath Temple",
        banglaName: "কুমিল্লা জগন্নাথ মন্দির",
        category: "Temple",

        description:
          "১৭৬১ সালে নির্মিত সতেরো রত্নের মন্দির, বাংলাদেশের অন্যতম উঁচু ও প্রাচীন হিন্দু মন্দির।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী মন্দিরটি ত্রিপুরার রাজা রত্ন মাণিক্য দ্বিতীয় দ্বারা শুরু করা হয় এবং কৃষ্ণ কিশোর মাণিক্য দ্বারা ১৭৬১ সালে সম্পন্ন করা হয়।",

        location:
          "কুমিল্লা শহরের দক্ষিণ-পূর্বাঞ্চল",

        upazila: "Cumilla Adarsha Sadar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.4623,
        longitude: 91.21095,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ২ কিমি দক্ষিণ-পূর্বে",

        bestTimeToVisit:
          "অক্টোবর থেকে মার্চ; রথযাত্রার সময় বিশেষ আকর্ষণীয়",

        transportation:
          "কুমিল্লা শহর থেকে স্থানীয় সড়কপথে যাওয়া যায়। নির্দিষ্ট পরিবহন তথ্য Not verified.",

        entryFee: "বিনামূল্যে",

        openingHours:
          "সকাল ৬টা থেকে রাত ৮টা — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Religious visitor access",
          "Photography subject to local rules"
        ],

        importance: [
          "বাংলাদেশের প্রাচীন হিন্দু মন্দিরগুলোর একটি",
          "সতেরো রত্ন মন্দির হিসেবে পরিচিত",
          "কুমিল্লার ঐতিহাসিক ধর্মীয় স্থাপনা"
        ],

        source: "Wikipedia / information provided",

        sourceUrl:
          "https://en.wikipedia.org/wiki/Comilla_Jagannath_Temple",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 4. KUTILA MURA
      // ==========================================================

      {
        name: "Kutila Mura",
        banglaName: "কুটিলা মুড়া",
        category: "Archaeological Site",

        description:
          "৭ম শতাব্দীর বৌদ্ধ প্রত্নস্থল, তিনটি স্তূপ বিশিষ্ট অনন্য বৌদ্ধ স্থাপনা।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী কুটিলা মুড়া ৭ম শতাব্দীতে নির্মিত হয় এবং ১৩শ শতাব্দী পর্যন্ত ব্যবহৃত হয়। এটি ময়নামতি এলাকার লালমাই পাহাড়ের একটি গুরুত্বপূর্ণ প্রত্নস্থল।",

        location:
          "ময়নামতি, লালমাই পাহাড়",

        upazila: "Burichang",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.4580222,
        longitude: 91.1208778,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ১১ কিমি উত্তর-পশ্চিমে",

        bestTimeToVisit:
          "নভেম্বর থেকে ফেব্রুয়ারি",

        transportation:
          "ময়নামতি-কোটবাড়ি এলাকায় সড়কপথে পৌঁছে স্থানীয়ভাবে যাওয়া যায়।",

        entryFee: "বিনামূল্যে",

        openingHours:
          "সূর্যোদয় থেকে সূর্যাস্ত পর্যন্ত — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Photography",
          "Visitor access"
        ],

        importance: [
          "প্রাচীন বৌদ্ধ প্রত্নস্থল",
          "তিনটি স্তূপের জন্য পরিচিত",
          "ময়নামতি প্রত্নতাত্ত্বিক অঞ্চলের অংশ"
        ],

        source: "Wikipedia / information provided",

        sourceUrl:
          "https://en.wikipedia.org/wiki/Kutila_Mura",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 5. DHARMASAGAR
      // ==========================================================

      {
        name: "Dharmasagar",
        banglaName: "ধর্মসাগর",
        category: "Historic Waterbody / Park",

        description:
          "১৪৫৮ সালে ত্রিপুরা রাজা ধর্ম মাণিক্য প্রথম কর্তৃক খননকৃত প্রাচীন কৃত্রিম জলাধার।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী ১৪৫৮ সালে ত্রিপুরার রাজা ধর্ম মাণিক্য প্রথম স্থানীয় মানুষের পানির চাহিদা মেটাতে এই দীঘি খনন করেন।",

        location:
          "কান্দিরপাড়, কুমিল্লা শহর",

        upazila: "Cumilla Adarsha Sadar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.46444,
        longitude: 91.17944,

        distanceFromCumillaCity:
          "কুমিল্লা শহরের কেন্দ্রে",

        bestTimeToVisit:
          "শীতকাল, বিশেষ করে সকাল ও সন্ধ্যা",

        transportation:
          "কুমিল্লা শহরের কেন্দ্রে হওয়ায় স্থানীয় সড়কপথে যাওয়া যায়।",

        entryFee: "বিনামূল্যে",

        openingHours: "২৪ ঘণ্টা — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Parking",
          "Nearby food shops",
          "Possible boat facility"
        ],

        importance: [
          "কুমিল্লা শহরের ঐতিহাসিক জলাধার",
          "রাজা ধর্ম মাণিক্যের ঐতিহাসিক নিদর্শন",
          "কুমিল্লার পরিচিত দর্শনীয় স্থান"
        ],

        source: "Wikipedia / information provided",

        sourceUrl:
          "https://en.wikipedia.org/wiki/Dharmasagar_(pond)",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 6. MAINAMATI WAR CEMETERY
      // ==========================================================

      {
        name: "Mainamati War Cemetery",
        banglaName: "ময়নামতি যুদ্ধ সমাধিক্ষেত্র",
        category: "War Cemetery",

        description:
          "দ্বিতীয় বিশ্বযুদ্ধের শহীদ স্মারক, ৭৩৬টি কমনওয়েলথ সমাধি।",

        history:
          "ময়নামতি যুদ্ধ সমাধিক্ষেত্র দ্বিতীয় বিশ্বযুদ্ধের সঙ্গে সম্পর্কিত। প্রদত্ত তথ্য অনুযায়ী ১৯৪৭ সালে Commonwealth War Graves Commission সমাধিক্ষেত্রটি প্রতিষ্ঠা করে।",

        location:
          "কুমিল্লা ক্যান্টনমেন্ট, ময়নামতি, কুমিল্লা",

        upazila: "Cumilla Adarsha Sadar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.48703,
        longitude: 91.11293,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ৯ কিমি",

        bestTimeToVisit:
          "নভেম্বর মাসে বার্ষিক প্রার্থনা সভার সময় বিশেষভাবে গুরুত্বপূর্ণ",

        transportation:
          "কুমিল্লা শহর থেকে সড়কপথে কুমিল্লা ক্যান্টনমেন্ট এলাকায় যাওয়া যায়।",

        entryFee: "বিনামূল্যে",

        openingHours:
          "প্রতিদিন সকাল ৮টা-১২টা এবং বিকেল ২টা-৫টা — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Visitor access",
          "Memorial grounds"
        ],

        importance: [
          "দ্বিতীয় বিশ্বযুদ্ধের গুরুত্বপূর্ণ স্মারক",
          "কমনওয়েলথ যুদ্ধ সমাধিক্ষেত্র",
          "৭৩৬টি কমনওয়েলথ সমাধির স্থান — প্রদত্ত তথ্য অনুযায়ী"
        ],

        source: "Commonwealth War Graves Commission",

        sourceUrl: "https://www.cwgc.org",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 7. NAWAB FAIZUNNESA ZAMINDAR BARI
      // ==========================================================

      {
        name: "Nawab Faizunnesa Zamindar Bari",
        banglaName: "নবাব ফয়জুন্নেসা জমিদার বাড়ি",
        category: "Palace / Zamindar House",

        description:
          "উপমহাদেশের উল্লেখযোগ্য নারী নবাব ফয়জুন্নেসা চৌধুরানির ঐতিহাসিক জমিদার বাড়ি।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী নবাব ফয়জুন্নেসা চৌধুরানি ১৮৭১ সালে লাকসামের পশ্চিমগাঁওয়ে এই জমিদার বাড়ি প্রতিষ্ঠা করেন। তিনি নারী শিক্ষা ও সমাজসংস্কারের জন্য পরিচিত ছিলেন।",

        location:
          "পশ্চিমগাঁও, লাকসাম, কুমিল্লা",

        upazila: "Laksam",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.35,
        longitude: 91.1,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ৩৫ কিমি",

        bestTimeToVisit:
          "নভেম্বর থেকে ফেব্রুয়ারি",

        transportation:
          "লাকসাম থেকে CNG/অটোরিকশায় যাওয়া যায় — প্রদত্ত তথ্য অনুযায়ী",

        entryFee: "বিনামূল্যে",

        openingHours:
          "সকাল ১০টা-বিকাল ৫টা — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Photography",
          "Possible guide service"
        ],

        importance: [
          "নবাব ফয়জুন্নেসা চৌধুরানির ঐতিহাসিক স্থাপনা",
          "নারী শিক্ষা ও সমাজসংস্কারের ইতিহাসের সঙ্গে সম্পর্কিত",
          "লাকসামের গুরুত্বপূর্ণ ঐতিহ্যবাহী স্থান"
        ],

        source: "Wikipedia / information provided",

        sourceUrl:
          "https://en.wikipedia.org/wiki/Nawab_Faizunnesa",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 8. CUMILLA TOWN HALL
      // ==========================================================

      {
        name: "Cumilla Town Hall",
        banglaName: "কুমিল্লা টাউন হল",
        category: "Historic Building",

        description:
          "১৮৫৫ সালে প্রতিষ্ঠিত ঐতিহাসিক পাবলিক লাইব্রেরি ও সিটি অডিটোরিয়াম।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী ১৮৫৫ সালের ৬ মে কুমিল্লা টাউন হল প্রতিষ্ঠিত হয়। তৎকালীন ডেপুটি কমিশনার এফ.এইচ. স্ক্রিন ত্রিপুরার জমিদারদের কাছে লাইব্রেরি নির্মাণের জন্য জমি চান।",

        location:
          "কান্দিরপাড়, কুমিল্লা শহর",

        upazila: "Cumilla Adarsha Sadar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.461,
        longitude: 91.18,

        distanceFromCumillaCity:
          "কুমিল্লা শহরের কেন্দ্রে",

        bestTimeToVisit:
          "সকাল ১০টা-বিকাল ৫টা — প্রদত্ত তথ্য অনুযায়ী",

        transportation:
          "কুমিল্লা শহরের কেন্দ্রে অবস্থিত হওয়ায় স্থানীয় সড়কপথে সহজে যাওয়া যায়।",

        entryFee: "বিনামূল্যে",

        openingHours:
          "সোমবার বন্ধ — অন্যান্য সময় Not verified",

        facilities: [
          "Public library",
          "Auditorium"
        ],

        importance: [
          "কুমিল্লার ঐতিহাসিক ও সাংস্কৃতিক কেন্দ্র",
          "ঐতিহাসিক পাবলিক লাইব্রেরির সঙ্গে সম্পর্কিত",
          "কান্দিরপাড়ের গুরুত্বপূর্ণ স্থাপনা"
        ],

        source: "Information provided",

        sourceUrl: null,

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 9. BARD
      // ==========================================================

      {
        name: "Bangladesh Academy for Rural Development (BARD)",
        banglaName: "বাংলাদেশ পল্লী উন্নয়ন একাডেমি (BARD)",
        category: "Education and Research Institution",

        description:
          "১৯৫৫ সালে প্রতিষ্ঠিত পল্লী উন্নয়ন গবেষণা ও প্রশিক্ষণ প্রতিষ্ঠান।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী ১৯৫৫ সালে ড. আখতার হামিদ খানের নেতৃত্বে প্রতিষ্ঠানটি প্রতিষ্ঠিত হয়। ১৯৬০-এর দশকে 'কুমিল্লা মডেল' এখানে বাস্তবায়িত হয়।",

        location:
          "কোটবাড়ি, কুমিল্লা",

        upazila: "Cumilla Adarsha Sadar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.455,
        longitude: 91.115,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ১০ কিমি",

        bestTimeToVisit:
          "নভেম্বর থেকে ফেব্রুয়ারি",

        transportation:
          "কুমিল্লা শহর থেকে কোটবাড়ি এলাকায় সড়কপথে যাওয়া যায়।",

        entryFee:
          "অনুমতি প্রয়োজন — প্রদত্ত তথ্য অনুযায়ী",

        openingHours:
          "সকাল ৯টা-বিকাল ৫টা — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Research facilities",
          "Educational facilities",
          "Campus"
        ],

        importance: [
          "পল্লী উন্নয়ন গবেষণার গুরুত্বপূর্ণ প্রতিষ্ঠান",
          "কুমিল্লা মডেলের সঙ্গে সম্পর্কিত",
          "আন্তর্জাতিকভাবে পরিচিত পল্লী উন্নয়ন গবেষণা প্রতিষ্ঠান"
        ],

        source: "Bangladesh Academy for Rural Development",

        sourceUrl: "https://www.bard.gov.bd",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 10. LALMAI BOTANICAL GARDEN
      // ==========================================================

      {
        name: "Lalmai Botanical Garden",
        banglaName: "লালমাই উদ্ভিদ উদ্যান",
        category: "Natural Attraction / Botanical Garden",

        description:
          "১৭ একর জায়গা জুড়ে বিস্তৃত উদ্ভিদ উদ্যান, যেখানে বিভিন্ন বিরল ও বিপন্ন প্রজাতির উদ্ভিদ সংরক্ষণ করা হয়।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী ২০১৫ সালে কুমিল্লা সামাজিক বন বিভাগের তত্ত্বাবধানে উদ্যান প্রতিষ্ঠার কাজ শুরু হয় এবং ২০২০ সালের ৭ নভেম্বর এটি সাধারণের জন্য উন্মুক্ত করা হয়।",

        location:
          "লালমাই পাহাড়, কোটবাড়ি, কুমিল্লা",

        upazila: "Lalmai",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.456,
        longitude: 91.116,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ১০ কিমি",

        bestTimeToVisit:
          "নভেম্বর থেকে ফেব্রুয়ারি",

        transportation:
          "কুমিল্লা শহর থেকে কোটবাড়ি ও লালমাই এলাকায় সড়কপথে যাওয়া যায়।",

        entryFee:
          "সাধারণ: ৳২০; শিক্ষার্থী: ৳৫; বিদেশি: ৳৪০০",

        openingHours:
          "প্রতিদিন সকাল ৯টা-বিকাল ৫টা — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Botanical collection",
          "Cactus section",
          "Orchid section"
        ],

        importance: [
          "বিরল ও বিপন্ন উদ্ভিদ সংরক্ষণ",
          "লালমাই পাহাড়ের প্রাকৃতিক পরিবেশের অংশ",
          "কুমিল্লার উল্লেখযোগ্য উদ্ভিদ উদ্যান"
        ],

        source: "Information provided",

        sourceUrl: null,

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 11. CHANDIMURA TEMPLE
      // ==========================================================

      {
        name: "Chandimura Temple",
        banglaName: "চণ্ডীমুড়া মন্দির",
        category: "Temple",

        description:
          "লালমাই পাহাড়ের চূড়ায় অবস্থিত প্রাচীন শিব-দুর্গা মন্দির।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী সপ্তম শতাব্দীতে বৌদ্ধ রাজা দেব খড়গ তার হিন্দু রাণী প্রভাবতী দেবীর অনুরোধে এই মন্দির নির্মাণ করেন।",

        location:
          "লালমাই পাহাড়ের চূড়া, কুমিল্লা",

        upazila: "Lalmai",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.44,
        longitude: 91.11,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ১২ কিমি",

        bestTimeToVisit:
          "চৈত্র সংক্রান্তি, শিবরাত্রি এবং শীতকাল",

        transportation:
          "লালমাই পাহাড় এলাকায় সড়কপথে পৌঁছে পাহাড়ে উঠতে হয়।",

        entryFee: "বিনামূল্যে",

        openingHours:
          "সকাল ৬টা-রাত ৮টা — প্রদত্ত তথ্য অনুযায়ী",

        facilities: [
          "Religious visitor access"
        ],

        importance: [
          "প্রাচীন ধর্মীয় স্থাপনা",
          "লালমাই পাহাড়ের গুরুত্বপূর্ণ ধর্মীয় স্থান",
          "শিব-দুর্গা মন্দির"
        ],

        source: "Information provided",

        sourceUrl: null,

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 12. UTKHARA MAZAR
      // ==========================================================

      {
        name: "Utkhara Mazar",
        banglaName: "উটখাড়া মাজার",
        category: "Historical and Religious Site",

        description:
          "উটখাড়া মাজার দেবিদ্বার উপজেলার এলাহাবাদ গ্রামে অবস্থিত একটি ঐতিহাসিক ধর্মীয় স্থান।",

        history:
          "স্থানীয় ঐতিহ্য ও প্রচলিত বর্ণনা অনুযায়ী, এলাহাবাদ গ্রামের যে স্থানে বালিতে উটের পা গেঁথে গিয়ে উট থেমে গিয়েছিল বলে লোককথা প্রচলিত আছে, সেই স্থানটি পরবর্তীতে উটখাড়া নামে পরিচিত হয়। স্থানীয় ঐতিহ্য অনুযায়ী মাজারটি ইসলাম প্রচার ও সুফি-সাধকদের আগমনের ইতিহাসের সঙ্গে সম্পর্কিত।",

        location:
          "এলাহাবাদ গ্রাম, দেবিদ্বার, কুমিল্লা",

        upazila: "Debidwar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.557,
        longitude: 90.999,

        distanceFromCumillaCity:
          "কুমিল্লা শহর থেকে প্রায় ২৯ কিমি উত্তর-পশ্চিমে",

        bestTimeToVisit:
          "শীতকাল ও শুকনো মৌসুম",

        transportation:
          "দেবিদ্বার হয়ে এলাহাবাদ এলাকায় সড়কপথে যাওয়া যায়। নির্দিষ্ট গণপরিবহন তথ্য Not verified.",

        entryFee: "সাধারণত বিনামূল্যে — প্রদত্ত তথ্য অনুযায়ী",

        openingHours:
          "Not verified",

        facilities: [
          "Religious visitor access",
          "Historic graves"
        ],

        importance: [
          "দেবিদ্বারের পরিচিত ধর্মীয় ও ঐতিহ্যবাহী স্থান",
          "স্থানীয় লোককথার সঙ্গে সম্পর্কিত",
          "এলাহাবাদ গ্রামের ঐতিহ্যের সঙ্গে যুক্ত"
        ],

        source: "Debidwar Upazila official tourism page",

        sourceUrl:
          "https://debidwar.comilla.gov.bd/pages/tourist-spot/%E0%A6%89%E0%A6%9F%E0%A6%96%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BE-%E0%A6%AE%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-4f930d-6990be2535ce18e1c070794e",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 13. NOOR MANIKCHAR JAME MOSQUE
      // ==========================================================

      {
        name: "Noor Manikchar Jame Mosque",
        banglaName: "নূর মানিকচর জামে মসজিদ",
        category: "Historic Mosque",

        description:
          "নূর মানিকচর জামে মসজিদ দেবিদ্বারের একটি প্রাচীন ঐতিহাসিক মসজিদ। প্রদত্ত সরকারি পর্যটন তথ্য অনুযায়ী মসজিদটির বয়স প্রায় ৫০০ বছর বলে উল্লেখ করা হয়েছে।",

        history:
          "প্রদত্ত তথ্য অনুযায়ী মসজিদটি প্রায় পাঁচশত বছরের পুরনো। প্রচলিত তথ্য অনুযায়ী সৈয়দ নূর আহমেদ কাদেরী পীর সাহেব মসজিদটি নির্মাণ করেন।",

        location:
          "নুরমানিকচর গ্রাম, দেবিদ্বার, কুমিল্লা",

        upazila: "Debidwar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.604,
        longitude: 90.953,

        distanceFromCumillaCity:
          "নূরমানিকচর বাসস্টেশন থেকে প্রায় আধা কিমি উত্তরে; কুমিল্লা শহর থেকে নির্দিষ্ট দূরত্ব Not verified",

        bestTimeToVisit:
          "শীতকাল ও শুকনো মৌসুম",

        transportation:
          "ঢাকা-চট্টগ্রাম মহাসড়কের নূরমানিকচর বাসস্টেশন থেকে স্থানীয়ভাবে যাওয়া যায়।",

        entryFee: "বিনামূল্যে",

        openingHours:
          "Not verified",

        facilities: [
          "Religious visitor access"
        ],

        importance: [
          "দেবিদ্বারের প্রাচীন মসজিদগুলোর একটি",
          "প্রায় ৫০০ বছরের পুরনো বলে সরকারি পর্যটন তথ্যে উল্লেখ",
          "নুরমানিকচর গ্রামের ঐতিহাসিক পরিচয়ের সঙ্গে যুক্ত"
        ],

        source: "Debidwar Upazila official tourism page",

        sourceUrl:
          "https://debidwar.comilla.gov.bd/pages/tourist-spot/%E0%A6%A8%E0%A7%82%E0%A6%B0-%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%95%E0%A6%9A%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87-%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6-5e6b03-6990be2735ce18e1c0707aac",

        lastVerified: "Not verified",
      },

      // ==========================================================
      // 14. BAITUL AZGAR SAT GOMBUJ JAME MOSQUE
      // ==========================================================

      {
        name: "Baitul Azgar Sat Gombuj Jame Mosque",
        banglaName: "বায়তুল আজগর সাত গম্বুজ জামে মসজিদ",
        category: "Historic Mosque",

        description:
          "গুনাইঘর বায়তুল আজগর সাত গম্বুজ জামে মসজিদ দেবিদ্বারের অন্যতম পরিচিত ঐতিহাসিক ও স্থাপত্যিক নিদর্শন।",

        history:
          "মসজিদটি দেবিদ্বার উপজেলার গুনাইঘর গ্রামে অবস্থিত। সাতটি গম্বুজের নকশা এবং বৈশিষ্ট্যপূর্ণ নির্মাণশৈলীর কারণে এটি স্থানীয়ভাবে বিশেষ পরিচিত।",

        location:
          "গুনাইঘর গ্রাম, দেবিদ্বার, কুমিল্লা",

        upazila: "Debidwar",

        district: "Cumilla",
        division: "Chattogram",

        latitude: 23.6015,
        longitude: 90.9685,

        distanceFromCumillaCity:
          "দেবিদ্বার সদর থেকে প্রায় ২ কিমি পশ্চিম-দক্ষিণে; কুমিল্লা শহর থেকে নির্দিষ্ট দূরত্ব Not verified",

        bestTimeToVisit:
          "শীতকাল ও শুকনো মৌসুম",

        transportation:
          "দেবিদ্বার সদর থেকে স্থানীয় সড়কপথে যাওয়া যায়।",

        entryFee: "বিনামূল্যে",

        openingHours:
          "নামাজের সময় ও স্থানীয় ব্যবস্থাপনা অনুযায়ী — নির্দিষ্ট সময় Not verified",

        facilities: [
          "Religious visitor access"
        ],

        importance: [
          "সাত গম্বুজের ঐতিহাসিক মসজিদ",
          "দেবিদ্বারের গুরুত্বপূর্ণ ধর্মীয় ও স্থাপত্যিক নিদর্শন",
          "গুনাইঘর গ্রামের ঐতিহ্যের অংশ"
        ],

        source: "Debidwar Upazila official tourism page",

        sourceUrl:
          "https://debidwar.comilla.gov.bd/pages/tourist-spot/%E0%A6%AC%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%A4%E0%A7%81%E0%A6%B2-%E0%A6%86%E0%A6%9C%E0%A6%97%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87-%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6-11f3c6-6990be1b35ce18e1c07073cc",

        lastVerified: "Not verified",
      },
    ],
  },

  // Google Apps Script Web App URL used for RSVP + Wishes (see README for setup)
  googleAppsScriptUrl: process.env.NEXT_PUBLIC_GAS_URL || "",

  socialShare: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://wedding-invite-ra7q-sigma.vercel.app/",
    title: "You're Invited — Somiya & Habibur's Wedding",
  },
};

export type WeddingConfig = typeof weddingConfig;