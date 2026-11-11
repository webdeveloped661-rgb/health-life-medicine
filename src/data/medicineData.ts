import { MedicineProduct } from '../types';

export const MEDICINE_PRODUCTS: MedicineProduct[] = [
  {
    id: 'hlm-01',
    name: 'Healthy Life Specialized Health & Wellness Formula',
    urduName: 'ہیلدی لائف اسپیشل ہیلتھ میڈیسن (خواتین و مردانہ صحت)',
    genericName: 'Standardized Herbal Extract & Essential Bio-Nutritional Formula',
    category: 'womens_health',
    categoryLabel: "Specialized Healthcare (Women & Men Wellness)",
    shortDescription: 'مردوں کے جسمانی درد، پٹھوں کے کھنچاؤ، کمر درد، لیکوریا اور عمومی کمزوری کے لیے انتہائی مفید و مجرب فارمولا۔ Highly effective for men body pain and vitality.',
    fullDescription: 'Healthy Life Specialized Formula باقاعدہ قدرتی اجزاء اور نایاب بوٹیوں سے تیار کیا گیا ہے۔ یہ دوا خاص طور پر مردوں کے شدید جسمانی درد، کمر درد، کندھوں اور پٹھوں کے کھنچاؤ، سستی اور اعصابی کمزوری کے خاتمے کے لیے بہت لاجواب اور مجرب ہے۔ اس کے علاوہ خواتین کے نسوانی مسائل اور لیکوریا کے توازن میں بھی بھرپور فائدہ مند ہے۔',
    price: 500,
    currency: 'PKR',
    rating: 4.9,
    reviewCount: 385,
    packageSize: 'Standard Complete Pack (30 Capsules / Course)',
    inStock: true,
    prescriptionRequired: false,
    verifiedIngredients: [
      'Withania Somnifera (Ashwagandha - جسمانی درد و تھکن کے لیے)',
      'Purified Shilajit (سلاجیت - پٹھوں کی طاقت و توانائی)',
      'Saraca Asoca & Symplocos Racemosa (Lodhra Extract)',
      'Lactobacillus Probiotic Microflora Complex (5 Billion CFU)',
      'Zinc Bisglycinate Chelate & Active Folate (جسمانی مضبوطی)'
    ],
    approvedUses: [
      'مرد کے جسمانی درد، جوڑوں اور پٹھوں کے کھنچاؤ کا خاتمہ (Best for Men Body Pain)',
      'کمر کے درد، اعصابی کمزوری اور سستی میں فوری راحت',
      'جسمانی توانائی، مردانہ طاقت اور روزمرہ اسٹیمینا میں اضافہ',
      'خواتین کی صحت، لیکوریا اور اندرونی کمزوری کا توازن',
      'عام جسمانی نقاہت اور مدافعت کی بحالی'
    ],
    safetyInfo: 'خالص اور تصدیق شدہ نباتاتی اجزاء۔ طارق محمود (میاں چنوں - Mustahid Health Care Services) کے زیرِ انتظام معیاری پیکنگ میں دستیاب۔',
    contraindications: [
      'کسی بھی قدرتی جڑی بوٹی سے الرجی کی صورت میں احتیاط کریں'
    ],
    possibleSideEffects: [
      'کوئی مضر اثرات نہیں (خالی پیٹ لینے پر نیم گرم پانی یا دودھ کے ساتھ لیں)'
    ],
    dosageGuide: 'صبح اور شام ایک کیپسول کھانا کھانے کے بعد نیم گرم پانی یا دودھ کے ساتھ استعمال کریں۔',
    manufacturer: 'Healthy Life Medicine - Mustahid Health Care Services (Tariq Mehmood, Mian Channu)',
    drapRegNumber: 'DRAP-EN-089421 (Nutraceutical)',
    image: '/src/assets/images/featured_medicine_pack_1794389974150.jpg'
  }
];

export const CATEGORY_FILTERS = [
  { id: 'all', label: 'Featured Product (PKR 500)', count: 1 }
];

