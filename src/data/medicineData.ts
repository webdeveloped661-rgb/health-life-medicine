import { MedicineProduct } from '../types';

export const MEDICINE_PRODUCTS: MedicineProduct[] = [
  {
    id: 'fem-01',
    name: 'FeminaCura Vaginal Flora Balance',
    urduName: 'فیمینا کیور ویجائنل فلورا بیلنس',
    genericName: 'Lactobacillus Rhamnosus GR-1 & Reuteri RC-14 + Cranberry PAC',
    category: 'womens_health',
    categoryLabel: "Women's Health (Leukorrhea Care)",
    shortDescription: 'Targeted probiotic and botanical supplement formulated to support healthy vaginal microflora and natural pH balance.',
    fullDescription: 'FeminaCura contains clinically researched probiotic strains designed to colonize the vaginal tract, maintaining an optimal acidic environment (pH 3.8-4.5) that prevents pathogenic overgrowth associated with physiological white discharge (leukorrhea). Formulated with standardized PAC Cranberry extract to support urinary tract wellness.',
    price: 1850,
    currency: 'PKR',
    rating: 4.8,
    reviewCount: 124,
    packageSize: '30 Delayed-Release Vegetarian Capsules',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'Lactobacillus Rhamnosus GR-1 (5 Billion CFU)',
      'Lactobacillus Reuteri RC-14 (5 Billion CFU)',
      'Vaccinium Macrocarpon (Cranberry) Standardized Extract (36mg PACs)',
      'Zinc Bisglycinate (10mg elemental zinc)',
      'Prebiotic Fructooligosaccharides (FOS)'
    ],
    approvedUses: [
      'Nutritional support for healthy vaginal flora maintenance',
      'Helps maintain natural acidic pH balance',
      'Dietary adjuvant during or following antibiotic therapy',
      'General pelvic and urinary tract wellness support'
    ],
    safetyInfo: 'Does not treat active acute pelvic inflammatory disease or sexually transmitted infections. If discharge exhibits unusual green or curd-like consistency with intense itching, consult a physician promptly.',
    contraindications: [
      'Known hypersensitivity to probiotics or cranberry extract',
      'Severely immunocompromised patients without oncologist approval'
    ],
    possibleSideEffects: [
      'Mild temporary gastrointestinal gas or bloating during the first 3 days of probiotic adaptation'
    ],
    dosageGuide: 'Take 1 capsule daily with water after meals, or as directed by your licensed healthcare provider.',
    manufacturer: 'CuraBio Laboratories Ltd.',
    drapRegNumber: 'DRAP-EN-089421 (Nutraceutical)',
    image: '/src/assets/images/womens_health_care_1794389972955.jpg'
  },
  {
    id: 'fem-02',
    name: 'GynaeCalm Pelvic Harmony Herbal Elixir',
    urduName: 'گائنی کام پیلوک ہارمونی الیکسر',
    genericName: 'Saraca Asoca & Symplocos Racemosa Herbal Standardized Extract',
    category: 'womens_health',
    categoryLabel: "Women's Health (Leukorrhea Care)",
    shortDescription: 'Traditional botanical tonic supporting uterine tone, hormonal comfort, and management of excessive physiological discharge.',
    fullDescription: 'GynaeCalm combines potent botanical extracts traditionally documented in herbal pharmacopoeias. Formulated with Bark of Saraca Asoca (Ashoka) and Symplocos Racemosa (Lodhra) known for their natural astringent (kashaya) properties, aiding in uterine mucosal comfort and physiological balance.',
    price: 1450,
    currency: 'PKR',
    rating: 4.7,
    reviewCount: 98,
    packageSize: '200ml Amber Glass Bottle with Measuring Cup',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'Saraca Asoca (Ashoka Bark extract 250mg)',
      'Symplocos Racemosa (Lodhra extract 200mg)',
      'Asparagus Racemosus (Shatavari extract 150mg)',
      'Ficus Religiosa (Peepal bark extract 100mg)',
      'Emblica Officinalis (Amla 100mg)'
    ],
    approvedUses: [
      'Supports uterine muscular comfort and tone',
      'Astringent herbal support for excessive physiological discharge',
      'Assists menstrual cycle comfort and relief from lower back ache'
    ],
    safetyInfo: 'Not recommended during pregnancy without clinical gynecologist consultation. Store below 25°C in a dry place away from direct sunlight.',
    contraindications: [
      'First trimester of pregnancy',
      'Unexplained acute uterine bleeding'
    ],
    possibleSideEffects: [
      'Occasional mild gastric heaviness if taken on an empty stomach'
    ],
    dosageGuide: '10ml (2 teaspoonfuls) twice daily after meals with equal quantity of warm water.',
    manufacturer: 'HerbaMedica Natural Health Labs',
    drapRegNumber: 'DRAP-HERB-041235',
    image: '/src/assets/images/featured_medicine_pack_1794389974150.jpg'
  },
  {
    id: 'fem-03',
    name: 'FloraGuard Intimate Foam Wash (pH 3.8)',
    urduName: 'فلورا گارڈ انٹیمیٹ فوم واش',
    genericName: 'Lactic Acid, Tea Tree Oil & Chamomile Extract Foam',
    category: 'womens_health',
    categoryLabel: "Women's Health (Leukorrhea Care)",
    shortDescription: 'Gentle, soap-free cleansing foam designed specifically for sensitive external intimate skin to maintain natural defense barriers.',
    fullDescription: 'Ordinary alkaline soaps disrupt the delicate vulvovaginal barrier, exacerbating irritation and abnormal discharge. FloraGuard is formulated at pH 3.8 with pure L-Lactic acid, bisabolol, and micro-refined Australian tea tree extract to soothe external irritation without stripping protective lipids.',
    price: 1100,
    currency: 'PKR',
    rating: 4.9,
    reviewCount: 215,
    packageSize: '150ml Gentle Foaming Pump Dispenser',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'L-Lactic Acid (buffered to pH 3.8)',
      'Melaleuca Alternifolia (Tea Tree Essential Oil 0.2%)',
      'Chamomilla Recutita (Matricaria Flower Extract)',
      'Aloe Barbadensis Leaf Juice (Cold Pressed)',
      'Decyl Glucoside (Ultra-mild surfactant)'
    ],
    approvedUses: [
      'Daily external intimate hygiene during menstrual cycle and humid weather',
      'Soothes external burning and odor sensation',
      'Maintains external dermal barrier integrity'
    ],
    safetyInfo: 'For external use only. Do not use for vaginal douching. Douching disrupts natural flora and increases the risk of infection.',
    contraindications: [
      'Allergy to tea tree oil or daisy family plants'
    ],
    possibleSideEffects: [
      'Transient mild tingling on abraded skin'
    ],
    dosageGuide: 'Pump 1-2 measures into palm, gently cleanse external intimate area, and rinse thoroughly with clean lukewarm water.',
    manufacturer: 'DermaHealth Pharms',
    drapRegNumber: 'DRAP-COS-11928',
    image: '/src/assets/images/hero_medical_composition_1794389971908.jpg'
  },
  {
    id: 'men-01',
    name: 'VigorPro KSM-66 Ashwagandha & Shilajit Blend',
    urduName: 'ویگر پرو اشوگندھا اور سلاجیت بلینڈ',
    genericName: 'Withania Somnifera (KSM-66) & Purified Asphaltum (Shilajit 50% Fulvic Acid)',
    category: 'mens_health',
    categoryLabel: "Men's Health (Mardana Sehat)",
    shortDescription: 'Standardized adaptogenic and mineral formula designed to combat mental fatigue, support hormonal vigor, and male stamina.',
    fullDescription: 'Formulated with certified gold-standard KSM-66 Ashwagandha root extract and purified Himalayan Shilajit standardized to 50% fulvic acid. Clinical literature supports its role in reducing cortisol (stress hormone), supporting healthy serum testosterone levels within normal physiological range, and improving cellular stamina.',
    price: 2400,
    currency: 'PKR',
    rating: 4.9,
    reviewCount: 312,
    packageSize: '60 Standardized Vegetarian Capsules',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'KSM-66 Ashwagandha Extract (300mg, 5% withanolides)',
      'Purified Shilajit Extract (250mg, 50% fulvic acid)',
      'Tribulus Terrestris Extract (150mg, 45% saponins)',
      'Mucuna Pruriens Seed Extract (100mg, 15% L-DOPA)',
      'BioPerine Black Pepper Extract (5mg for enhanced bioavailability)'
    ],
    approvedUses: [
      'Support for physical vitality, endurance, and stamina',
      'Assists healthy response to daily stress and performance anxiety',
      'Nutritional support for male reproductive hormone balance',
      'Antioxidant cellular protection for sperm vitality'
    ],
    safetyInfo: 'Not intended as an immediate pharmacological cure for erectile dysfunction. Results develop gradually over 4 to 8 weeks alongside balanced nutrition and sleep.',
    contraindications: [
      'Severe untreated hypertension without physician clearance',
      'Kidney stone patients with high uric acid levels'
    ],
    possibleSideEffects: [
      'Mild stomach warmth if taken without sufficient food'
    ],
    dosageGuide: 'Take 1 capsule twice daily with warm milk or water after meals.',
    manufacturer: 'Apex Nutraceuticals Ltd.',
    drapRegNumber: 'DRAP-EN-076124 (Nutraceutical)',
    image: '/src/assets/images/mens_health_care_1794389973036.jpg'
  },
  {
    id: 'men-02',
    name: 'TestoPure Zinc Bisglycinate & Maca Vitality',
    urduName: 'ٹیسٹو پیور زنک اور ماکا وائٹیلٹی',
    genericName: 'Chelated Zinc Bisglycinate 30mg + Lepidium Meyenii (Maca 500mg)',
    category: 'mens_health',
    categoryLabel: "Men's Health (Mardana Sehat)",
    shortDescription: 'High-absorption chelated zinc with Peruvian black maca to promote spermatogenesis, testosterone synthesis, and metabolic vitality.',
    fullDescription: 'Zinc is an indispensable cofactor for androgen synthesis and sperm cellular motility. TestoPure utilizes Albion-grade Zinc Bisglycinate for superior bioavailability without gastrointestinal distress, paired with gelatinized Black Maca root and Vitamin B6 to aid male metabolic resilience.',
    price: 1950,
    currency: 'PKR',
    rating: 4.8,
    reviewCount: 167,
    packageSize: '60 Easy-to-Swallow Coated Tablets',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'Zinc Bisglycinate Chelate (30mg elemental zinc)',
      'Lepidium Meyenii (Black Maca Root 4:1 Extract, 500mg)',
      'Pyridoxal-5-Phosphate (Active Vitamin B6, 10mg)',
      'Copper Glycinate (1.5mg to maintain mineral balance)',
      'Selenium (as L-Selenomethionine 100mcg)'
    ],
    approvedUses: [
      'Maintenance of healthy testosterone levels within physiological ranges',
      'Nutritional cofactor support for healthy sperm count and motility',
      'Immune defense and muscular recovery support'
    ],
    safetyInfo: 'Do not exceed the recommended dose. Excessive zinc intake without copper balance can cause copper deficiency.',
    contraindications: [
      'Wilson disease or zinc storage disorders'
    ],
    possibleSideEffects: [
      'Transient metallic taste or mild nausea if taken on an empty stomach'
    ],
    dosageGuide: '1 tablet daily after the main meal with a full glass of water.',
    manufacturer: 'PrimeHealth Biochemicals',
    drapRegNumber: 'DRAP-NUTRA-092110',
    image: '/src/assets/images/featured_medicine_pack_1794389974150.jpg'
  },
  {
    id: 'men-03',
    name: 'ProstaVital Saw Palmetto & Beta-Sitosterol',
    urduName: 'پروسٹا وائٹل سا پامیٹو کمپلیکس',
    genericName: 'Serenoa Repens (Saw Palmetto 320mg) & Phytosterols',
    category: 'mens_health',
    categoryLabel: "Men's Health (Mardana Sehat)",
    shortDescription: 'Clinically standardized lipidosterolic extract supporting prostate health, smooth urinary flow, and male pelvic comfort.',
    fullDescription: 'Prostate enlargement (BPH) and pelvic floor congestion directly influence male urinary function, nocturnal frequency, and sexual comfort. ProstaVital provides European pharmacopoeia-standard 320mg Saw Palmetto fatty acid extract to inhibit excessive DHT conversion in prostate tissue.',
    price: 2600,
    currency: 'PKR',
    rating: 4.8,
    reviewCount: 89,
    packageSize: '30 Lipid Softgels',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'Saw Palmetto Berry Extract (320mg standardized to 85-95% fatty acids)',
      'Beta-Sitosterol (60mg)',
      'Pygeum Africanum Bark Extract (50mg)',
      'Cold-Pressed Pumpkin Seed Oil (Cucurbita Pepo, 200mg)',
      'Lycopene (Natural tomato extract, 5mg)'
    ],
    approvedUses: [
      'Supports healthy urinary stream flow and bladder emptying',
      'Helps decrease nocturnal urination frequency in men over 40',
      'Promotes cellular health of the prostate gland'
    ],
    safetyInfo: 'Does not replace regular prostate exams (PSA testing). Men experiencing painful urination or hematuria must see a urologist.',
    contraindications: [
      'Pre-scheduled surgery within 2 weeks due to mild antiplatelet effects'
    ],
    possibleSideEffects: [
      'Mild digestive upset (mitigated by taking with food)'
    ],
    dosageGuide: 'Take 1 softgel daily with lunch or dinner.',
    manufacturer: 'UroCare Therapeutics Ltd.',
    drapRegNumber: 'DRAP-EN-055319',
    image: '/src/assets/images/hero_medical_composition_1794389971908.jpg'
  },
  {
    id: 'rep-01',
    name: 'ReproVital Couple Fertility & Cellular Support',
    urduName: 'ریپرو وائٹل فرٹیلیٹی اور سیلولر سپورٹ',
    genericName: 'CoQ10 (Ubiquinone 100mg) + Myo-Inositol + L-Carnitine Complex',
    category: 'reproductive',
    categoryLabel: 'Reproductive Health',
    shortDescription: 'Advanced mitochondrial antioxidant blend for egg cellular quality in women and sperm oxidative defense in men.',
    fullDescription: 'Cellular energy (ATP) is the critical determinant of reproductive gamete health. ReproVital provides pharmaceutical-grade Coenzyme Q10, Myo-Inositol, and L-Carnitine to protect delicate reproductive cells from oxidative stress during preconception planning.',
    price: 3200,
    currency: 'PKR',
    rating: 4.9,
    reviewCount: 142,
    packageSize: '60 High-Absorption Softgels',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'Coenzyme Q10 (Ubiquinone 100mg)',
      'Myo-Inositol (500mg)',
      'L-Carnitine L-Tartrate (500mg)',
      'Methylfolate (Quatrefolic active folate 400mcg)',
      'Vitamin E (d-alpha tocopherol 50 IU)'
    ],
    approvedUses: [
      'Nutritional preconception support for both partners',
      'Assists ovarian egg quality and mitochondrial energy',
      'Protects sperm DNA integrity against reactive oxygen species (ROS)'
    ],
    safetyInfo: 'Designed as a nutritional supplement; not a guaranteed treatment for clinical infertility. Both partners should undergo clinical fertility workup.',
    contraindications: [
      'Known hypersensitivity to ubiquinone'
    ],
    possibleSideEffects: [
      'Very rarely mild sleeplessness if taken late at night'
    ],
    dosageGuide: 'Take 1 softgel twice daily with morning and afternoon meals.',
    manufacturer: 'FertilCare Global Laboratories',
    drapRegNumber: 'DRAP-EN-083419',
    image: '/src/assets/images/womens_health_care_1794389972955.jpg'
  },
  {
    id: 'rx-01',
    name: 'Fluconazole Clinical Single-Dose Capsule (150mg)',
    urduName: 'فلوکونازول 150 ملی گرام کیپسول',
    genericName: 'Fluconazole IP / BP 150mg',
    category: 'womens_health',
    categoryLabel: "Women's Health (Prescription Only)",
    shortDescription: 'Targeted oral antifungal treatment for confirmed acute candidiasis (vaginal yeast infection). Prescription verification strictly required.',
    fullDescription: 'Prescription antifungal indicated specifically for vulvovaginal candidiasis (yeast overgrowth) characterized by thick, white, odorless curd-like discharge, intense itching, and vulvar erythema. Requires pharmacist review and valid medical prescription before dispatch.',
    price: 350,
    currency: 'PKR',
    rating: 4.9,
    reviewCount: 88,
    packageSize: '1 Sealed Blister Capsule',
    inStock: true,
    prescriptionRequired: true,
    verifiedIngredients: [
      'Fluconazole IP 150mg',
      'Lactose Monohydrate',
      'Microcrystalline Cellulose'
    ],
    approvedUses: [
      'Treatment of laboratory- or physician-confirmed vaginal candidiasis',
      'Recurrent candidal vaginitis under gynecologist supervision'
    ],
    safetyInfo: 'PRESCRIPTION MEDICINE. Pharmacist verification mandatory. Do not take during pregnancy. Inappropriate use for non-fungal bacterial vaginosis can delay effective treatment.',
    contraindications: [
      'Pregnancy and breastfeeding',
      'Coadministration with terfenadine, cisapride, or astemizole',
      'Severe hepatic impairment'
    ],
    possibleSideEffects: [
      'Mild headache, abdominal discomfort, nausea'
    ],
    dosageGuide: 'Strictly as prescribed by a licensed doctor (typically a single 150mg oral dose).',
    manufacturer: 'Searle Pharmaceutical Industries Ltd.',
    drapRegNumber: 'DRAP-AL-004512 (Schedule G)',
    image: '/src/assets/images/featured_medicine_pack_1794389974150.jpg'
  }
];

export const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Products', count: 8 },
  { id: 'womens_health', label: "Women's Health (Leukorrhea)", count: 4 },
  { id: 'mens_health', label: "Men's Health (Mardana Sehat)", count: 3 },
  { id: 'reproductive', label: 'Reproductive & Cellular', count: 1 }
];
