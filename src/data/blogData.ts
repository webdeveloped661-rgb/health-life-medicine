import { HealthArticle } from '../types';

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'art-01',
    title: 'Understanding Leukorrhea and Vaginal Discharge: Normal vs. When to Seek Care',
    urduTitle: 'لیکوریا (سفید پانی) کی حقیقت: کب نارمل ہے اور کب ڈاکٹر کو دکھانا ضروری ہے؟',
    category: "Women's Health",
    readTime: '4 min read',
    publishDate: 'Updated Oct 2026',
    authorDoctor: 'Dr. Ayesha Siddiqui, MBBS, FCPS',
    authorRole: 'Consultant Obstetrician & Gynecologist',
    summary: 'Vaginal discharge is a healthy, self-cleaning physiological function. Learn how to differentiate normal hormonal leukorrhea from infections requiring medical intervention.',
    sections: [
      {
        heading: '1. What is Normal Physiological Leukorrhea?',
        content: 'Normal vaginal discharge is an essential physiological process produced by the cervix and vaginal walls. It sloughs off dead cells, transports beneficial lactobacilli, and maintains an acidic barrier (pH 3.8 to 4.5) against harmful microbes. Normal discharge varies from clear and watery to creamy white, and changes consistency throughout the menstrual cycle (becoming stretchy like egg whites around ovulation).'
      },
      {
        heading: '2. Pathological vs. Physiological Discharge',
        content: 'Discharge becomes a medical concern (pathological leukorrhea) when there are noticeable changes in odor, color, consistency, or when accompanied by physical discomfort. For instance, fishy-smelling grayish-thin discharge often indicates Bacterial Vaginosis (BV), while thick white curd-like discharge with severe itching points toward a yeast infection (Candidiasis).'
      },
      {
        heading: '3. Red Flags That Require Immediate Medical Evaluation',
        content: 'Seek prompt consultation if you experience: foul or fishy odor, persistent greenish-yellow discharge, burning during urination or intimacy, pelvic or lower abdominal pain, sores, or bleeding between menstrual cycles.'
      }
    ],
    keyTakeaways: [
      'Normal discharge is odorless or has a mild scent and clear-to-milky appearance.',
      'Douching disrupts beneficial lactobacilli and should strictly be avoided.',
      'Unusual odor, color changes, or itching always warrant clinical evaluation rather than self-treatment.'
    ],
    clinicalWarning: 'Never self-prescribe antibiotics or antifungals without a clinical diagnosis. Different causes require fundamentally different medical treatments.',
    image: '/src/assets/images/womens_health_care_1794389972955.jpg'
  },
  {
    id: 'art-02',
    title: 'Common Reasons for Changes in Vaginal Discharge: Flora Balance, Hygiene & Stress',
    urduTitle: 'خواتین کے ڈسچارج میں اچانک تبدیلی کی وجوہات اور درست حفاظتی تدابیر',
    category: "Women's Health",
    readTime: '5 min read',
    publishDate: 'Updated Oct 2026',
    authorDoctor: 'PharmD S. Farooq',
    authorRole: 'Clinical Pharmacist & Women\'s Health Specialist',
    summary: 'A detailed exploration of how hormonal surges, antibiotic use, synthetic underwear, and stress alter the delicate vaginal microbiome.',
    sections: [
      {
        heading: '1. The Impact of Antibiotics on Vaginal Flora',
        content: 'Broad-spectrum antibiotics taken for throat or urinary infections frequently eliminate protective Lactobacillus bacteria along with target pathogens. Without lactobacilli producing lactic acid and hydrogen peroxide, opportunistic Candida albicans yeast proliferates rapidly.'
      },
      {
        heading: '2. Personal Hygiene Mistakes: Soaps and Fragrances',
        content: 'The internal vaginal canal is self-cleansing. Using scented body washes, antiseptic liquids, or vaginal douches strips the mucous membrane, alters natural pH, and creates micro-abrasions that predispose to persistent inflammation.'
      },
      {
        heading: '3. Evidence-Based Daily Habits',
        content: 'Wear breathable cotton underwear, wash only the external vulva with lukewarm water or a buffered pH 3.8 cleanser, change damp clothing promptly after workouts, and consume probiotic-rich dietary foods or verified lactobacillus supplements.'
      }
    ],
    keyTakeaways: [
      'External cleansing with gentle pH-balanced water is adequate.',
      'Probiotic supplementation post-antibiotics helps restore protective microflora.',
      'Breathable natural cotton clothing prevents excessive localized humidity.'
    ],
    clinicalWarning: 'If symptoms persist past 5 days of improved hygiene, a vaginal swab culture is recommended.',
    image: '/src/assets/images/featured_medicine_pack_1794389974150.jpg'
  },
  {
    id: 'art-03',
    title: "Understanding Men's Reproductive Health: Hormones, Circulation & Stamina",
    urduTitle: 'مردانہ تولیدی صحت اور ہارمونز: کمزوری کا خوف، سچائی اور سائنسی حقائق',
    category: "Men's Health",
    readTime: '6 min read',
    publishDate: 'Updated Nov 2026',
    authorDoctor: 'Dr. Tariq Mahmood, MBBS, MS Urology',
    authorRole: 'Consultant Urologist & Andrologist',
    summary: 'De-stigmatizing male sexual health issues. Exploring the complex interplay of cardiovascular circulation, hormonal balance, psychological anxiety, and lifestyle factors.',
    sections: [
      {
        heading: '1. The Mind-Body Connection in Male Vitality',
        content: 'Men often internalize reproductive wellness concerns as personal shortcomings, leading to high levels of performance anxiety. The autonomic nervous system regulates erectile mechanics: the parasympathetic branch facilitates healthy vascular filling, whereas high adrenaline and stress activate the sympathetic "fight-or-flight" response, inhibiting normal blood flow.'
      },
      {
        heading: '2. Underlying Metabolic Risk Factors',
        content: 'Vascular health and reproductive health are deeply intertwined. Undiagnosed early diabetes, elevated triglycerides, high blood pressure, and lack of restorative REM sleep are primary contributors to fatigue and diminished stamina in adult men.'
      },
      {
        heading: '3. Scientifically Verified Nutritional Support',
        content: 'Standardized adaptogens such as KSM-66 Ashwagandha have been clinically demonstrated to reduce serum cortisol by up to 27%, indirectly supporting natural androgen synthesis. Micronutrients like Zinc Bisglycinate and active Folate are vital cofactors for sperm morphology and DNA integrity.'
      }
    ],
    keyTakeaways: [
      'Male sexual performance is a vascular and neurological process, not a measure of masculinity.',
      'Chronic unmanaged stress and lack of sleep directly impair testosterone production.',
      'Lifestyle modifications (regular cardiovascular exercise, smoking cessation) show substantial clinical benefits.'
    ],
    clinicalWarning: 'Beware of unregistered street remedies containing adulterated chemicals or undeclared prescription PDE5 inhibitors.',
    image: '/src/assets/images/mens_health_care_1794389973036.jpg'
  },
  {
    id: 'art-04',
    title: 'When to Consult a Healthcare Professional: Red Flags & Clinical Triage',
    urduTitle: 'ڈاکٹر سے کب رجوع کریں؟ اہم علامات اور طبی رہنمائی کا اصول',
    category: 'Medical Guidance',
    readTime: '4 min read',
    publishDate: 'Updated Oct 2026',
    authorDoctor: 'Medical Advisory Board',
    authorRole: 'Healthy Life Clinical Standards Panel',
    summary: 'A step-by-step decision guide on when home wellness measures are sufficient and when specialist clinical investigation is required.',
    sections: [
      {
        heading: '1. Why Early Professional Consultation Protects Fertility',
        content: 'Mild symptoms can sometimes conceal silent infections, such as Chlamydia, Mycoplasma, or Pelvic Inflammatory Disease (PID) in women, or epididymo-orchitis or varicoceles in men. Early medical assessment prevents chronic complications and preserves reproductive health.'
      },
      {
        heading: '2. Preparation for Your Clinical Visit',
        content: 'When scheduling an appointment with your gynecologist, urologist, or general physician, document: duration of symptoms, association with menstrual cycle, any medications or herbal tonics currently used, and previous lab tests.'
      }
    ],
    keyTakeaways: [
      'Do not let embarrassment delay consulting a licensed doctor.',
      'Routine annual pelvic and reproductive screenings provide peace of mind.',
      'Our clinical pharmacists can review your prescription to ensure safe dosing.'
    ],
    image: '/src/assets/images/pharmacist_consultation_1794389974423.jpg'
  },
  {
    id: 'art-05',
    title: 'Importance of Responsible Medicine Use: Dangers of Unsupervised Self-Medication',
    urduTitle: 'خود علاجی کے خطرات: بغیر تصدیق شدہ دواؤں کے نقصانات',
    category: 'Medicine Safety',
    readTime: '5 min read',
    publishDate: 'Updated Oct 2026',
    authorDoctor: 'PharmD R. Baig',
    authorRole: 'Head of Pharmacovigilance',
    summary: 'Understanding antimicrobial resistance, drug-drug interactions, and why prescription oversight is essential for long-term health.',
    sections: [
      {
        heading: '1. The Threat of Antifungal & Antibiotic Resistance',
        content: 'Using over-the-counter antimicrobial creams or partial doses of fluconazole without a clear diagnosis breeds drug-resistant fungal strains (such as Candida glabrata). Once resistant strains emerge, standard first-line therapies fail.'
      },
      {
        heading: '2. Safe Storage and Expiration Integrity',
        content: 'Liquid tonics and softgels degrade under excessive heat and humidity. Keep all medicines stored below 25°C in their original blister packs, away from direct sunlight.'
      }
    ],
    keyTakeaways: [
      'Complete the full course of any prescribed antimicrobial medicine.',
      'Never share prescription medicines with friends or family.',
      'Verify DRAP registration numbers on pharmaceutical cartons.'
    ],
    image: '/src/assets/images/hero_medical_composition_1794389971908.jpg'
  },
  {
    id: 'art-06',
    title: 'Understanding Medicine Ingredients: How to Read Formulation Labels',
    urduTitle: 'دوا کے اجزاء اور فارمولیشن کو سمجھنے کا طریقہ',
    category: 'Product Information',
    readTime: '4 min read',
    publishDate: 'Updated Nov 2026',
    authorDoctor: 'Regulatory Affairs Team',
    authorRole: 'DRAP Compliance Department',
    summary: 'A consumer guide to active pharmaceutical ingredients (APIs), excipients, standardization percentages, and contraindications.',
    sections: [
      {
        heading: '1. Active Ingredients vs. Excipients',
        content: 'The active pharmaceutical ingredient (API) is the biologically active chemical or standardized plant extract responsible for therapeutic action. Excipients are inactive substances used as carriers, binders, or stabilizers.'
      },
      {
        heading: '2. Standardized Botanical Extracts',
        content: 'Crude plant powder varies wildly in potency. Standardized extracts ensure a guaranteed percentage of active bio-compounds, such as 5% withanolides in KSM-66 Ashwagandha or 50% fulvic acid in purified Shilajit.'
      }
    ],
    keyTakeaways: [
      'Always check the active generic name rather than marketing brand names alone.',
      'Look for standardized percentages on nutraceutical products.',
      'Read contraindications carefully if you have preexisting cardiovascular or renal conditions.'
    ],
    image: '/src/assets/images/featured_medicine_pack_1794389974150.jpg'
  }
];
