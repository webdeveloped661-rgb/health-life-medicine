import React, { useState } from 'react';
import { MedicineProduct } from '../types';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle, 
  Star, 
  Truck, 
  Package, 
  User, 
  Send,
  AlertCircle
} from 'lucide-react';

interface ProductFullInformationProps {
  product: MedicineProduct;
  onAddToCart: (product: MedicineProduct, quantity?: number) => void;
}

export const ProductFullInformation: React.FC<ProductFullInformationProps> = ({
  product,
  onAddToCart
}) => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'usage' | 'ingredients' | 'practitioner' | 'faqs'>('benefits');

  // Quick Inline Order Form state
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [city, setCity] = useState('میاں چنوں (Mian Channu)');
  const [address, setAddress] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNum || !address) {
      alert('برائے مہربانی اپنا نام، فون نمبر اور مکمل پتہ درج فرمائیں۔');
      return;
    }

    const text = encodeURIComponent(
      `*نیا آرڈر (کیش آن ڈیلیوری)*\n\n` +
      `👤 *خریدار کا نام:* ${fullName}\n` +
      `📞 *فون نمبر:* ${phoneNum}\n` +
      `🏙️ *شہر:* ${city}\n` +
      `📍 *پتہ:* ${address}\n` +
      `📦 *پروڈکٹ:* ہیلدی لائف میڈیسن (برائے مرد جسمانی درد)\n` +
      `🔢 *تعداد:* ${orderQuantity} پیک\n` +
      `💰 *کل رقم:* ${orderQuantity * 500} روپے (صرف 500 فی پیک)\n\n` +
      `محترم طارق محمود صاحب، برائے مہربانی میرا آرڈر جلد از جلد روانہ فرمائیں۔ شکریہ!`
    );

    // Open WhatsApp with populated order details
    window.open(`https://wa.me/923007006133?text=${text}`, '_blank');
    setOrderSubmitted(true);
  };

  return (
    <section id="product-details" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مکمل تفصیلی معلومات و طبی رہنمائی</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#243746] tracking-tight">
            دوا کی مکمل معلومات، فوائد اور طریقہ استعمال
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            محترم <strong className="text-[#16a34a]">طارق محمود (میاں چنوں)</strong> کے زیرِ نگرانی تیار کردہ خالص فارمولیشن کے تمام اجزاء، فوائد اور طریقہ استعمال کی مکمل تفصیلات۔
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200">
          <button
            type="button"
            onClick={() => setActiveTab('benefits')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'benefits'
                ? 'bg-[#16a34a] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            طبی فوائد اور اثرات
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('usage')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'usage'
                ? 'bg-[#16a34a] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            طریقہ استعمال اور پرہیز
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ingredients')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'ingredients'
                ? 'bg-[#16a34a] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            خالص قدرتی اجزاء
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('practitioner')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'practitioner'
                ? 'bg-[#16a34a] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            طارق محمود و پتہ (میاں چنوں)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('faqs')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'faqs'
                ? 'bg-[#16a34a] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            عام پوچھے جانے والے سوالات
          </button>
        </div>

        {/* Tab 1: Benefits */}
        {activeTab === 'benefits' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Special Highlight for Men's Body Pain */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-green-50 via-emerald-50 to-green-100 border-2 border-green-500 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#16a34a] text-white text-xs font-bold px-3 py-1 rounded-md">
                  خاص فائدہ
                </span>
                <span className="text-sm font-bold text-green-950">
                  مردوں کے لیے اکسیر نسخہ
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                یہ دوا مرد کے جسمانی درد، پٹھوں کے کھنچاؤ، جوڑوں اور کمر درد کے لیے بہت ہی بہترین ہے!
              </h3>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                اگر آپ روزمرہ محنت مزدوری، ملازمت، دفتری بیٹھک یا بڑھتی عمر کی وجہ سے جسم میں مسلسل درد، ہڈیوں میں اینٹھن، کمر کے کھنچاؤ اور تھکن محسوس کرتے ہیں تو یہ قدرتی نباتاتی فارمولا جسم کے ہر عضلہ کو سکون اور نئی طاقت فراہم کرتا ہے۔
              </p>
            </div>

            {/* 6 Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#16a34a] mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  1. مرد کے جسمانی درد کا مکمل خاتمہ
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  پنڈلیوں، بازوؤں، کندھوں اور پٹھوں کا درد پہلے 2 سے 3 دنوں کے اندر کم ہونا شروع ہو جاتا ہے اور چند دنوں میں مکمل راحت ملتی ہے۔
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#16a34a] mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  2. کمر درد اور پٹھوں کی جکڑن
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  جھکنے، وزن اٹھانے یا دیر تک بیٹھنے سے کمر میں پڑنے والی اینٹھن اور پٹھوں کے کھنچاؤ کو نرم کر کے فوری آرام بخشتی ہے۔
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#16a34a] mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  3. اعصابی سستی اور توانائی کی بحالی
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  صبح اٹھتے وقت بدن میں بوجھل پن، سستی اور نقاہت دور کر کے اعصاب کو چست اور توانا بناتی ہے۔
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#16a34a] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  4. جوڑوں اور گھٹنوں کی لچک
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  جوڑوں میں خشکی اور سوزش کو کم کرتی ہے، جس سے چلنے پھرنے اور نماز پڑھنے میں آسانی پیدا ہوتی ہے۔
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#16a34a] mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  5. مشقت کے بعد فوری ریکوری
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  سخت کام کے بعد جسم ٹوٹنے نہیں دیتی اور رات کو گہری اور پرسکون نیند لانے میں مددگار ثابت ہوتی ہے۔
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#16a34a] mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  6. کوئی سائیڈ ایفیکٹ نہیں
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  خالص جڑی بوٹیوں اور منرلز سے تیار کی گئی ہے، اس لیے معدے پر بوجھ نہیں ڈالتی اور گردوں کو نقصان نہیں پہنچاتی۔
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Usage & Dosage */}
        {activeTab === 'usage' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border-2 border-green-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#16a34a]" />
                <span>طریقہ استعمال (طبی ہدایات از طارق محمود)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-bold text-[#16a34a] bg-green-50 px-2.5 py-1 rounded">
                    صبح کی خوراک
                  </span>
                  <p className="text-base font-bold text-gray-800 mt-2">
                    ایک کیپسول (1 Capsule)
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    صبح ناشتے کے آدھے گھنٹے بعد نیم گرم دودھ یا تازہ پانی کے ساتھ استعمال کریں۔
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-bold text-[#16a34a] bg-green-50 px-2.5 py-1 rounded">
                    شام / رات کی خوراک
                  </span>
                  <p className="text-base font-bold text-gray-800 mt-2">
                    ایک کیپسول (1 Capsule)
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    رات کھانے کے آدھے گھنٹے بعد نیم گرم دودھ کے ساتھ لینا زیادہ مفید ہے۔
                  </p>
                </div>
              </div>

              {/* Precautions */}
              <div className="border-t border-gray-200 pt-5">
                <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>دورانِ علاج ضروری پرہیز و مشورے:</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>زیادہ ٹھنڈا پانی، تیز برف اور کولڈ ڈرنکس سے سخت پرہیز کریں۔</li>
                  <li>تیز مصالحے دار اور تلی ہوئی اشیاء کا استعمال کم سے کم رکھیں۔</li>
                  <li>پانی کا استعمال مناسب رکھیں اور روزانہ تھوڑی ہلکی پھلکی واک کریں۔</li>
                  <li>مستقل آرام کے لیے 10 سے 15 دن کا مکمل کورس ضرور مکمل کریں۔</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Ingredients */}
        {activeTab === 'ingredients' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border-2 border-green-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#16a34a]" />
                <span>قدرتی اجزائے ترکیبی (100% Herbal & Pure Formula)</span>
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                اس فارمولیشن میں صرف مستند اور آزمودہ قدرتی جڑی بوٹیاں شامل ہیں جن کا طبِ یونانی و جدید نیوٹراسیوٹیکل سائنس میں جسمانی درد دور کرنے کا واضح ثبوت موجود ہے:
              </p>

              <div className="space-y-3">
                {product.verifiedIngredients.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-[#16a34a] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        جسمانی پٹھوں کی سوزش کم کر کے اعصاب کو مضبوط بناتا ہے اور قدرتی توانائی فراہم کرتا ہے۔
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-300 text-xs text-green-900 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#16a34a] shrink-0" />
                <span>
                  یہ دوا کسی قسم کے سٹیرائڈز، نشہ آور مادوں یا مضر کیمیکلز سے بالکل پاک ہے اور ہر عمر کے افراد کے لیے محفوظ ہے۔
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Practitioner & Address */}
        {activeTab === 'practitioner' && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-green-300 shadow-md">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center text-white shrink-0 shadow-lg">
                  <User className="w-10 h-10" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  {/* Name in requested style: green color, 30px, bold */}
                  <h3 className="text-[30px] font-bold text-[#16a34a] leading-tight">
                    Tariq Mehmood (طارق محمود)
                  </h3>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1">
                    <span className="text-xs font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
                      Healthy Life Medicine
                    </span>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full border border-green-300">
                      Mustahid Health Care Services
                    </span>
                  </div>
                  
                  {/* Address: Mian Channu */}
                  <p className="text-base font-bold text-gray-800 mt-2 flex items-center justify-center sm:justify-start gap-1.5">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                    <span>میاں چنوں (Mian Channu)</span>
                  </p>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    طارق محمود صاحب ایک معتبر اور تجربہ کار معالج ہیں جو قدرتی نباتات اور مستند فارمولیشنز کے ذریعے مریضوں کی رہنمائی کرتے ہیں۔ ان کے زیرِ نگرانی تیار کردہ دوا خاص طور پر مردوں کے دیرینہ جسمانی درد، کمر درد اور پٹھوں کی کمزوری میں بے حد مؤثر ثابت ہوئی ہے۔
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <a
                      href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20Healthy%20Life%20Medicine%20for%20men%20body%20pain%20(Rs.%20500)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>واٹس ایپ رابطہ: 0300 7006133</span>
                    </a>

                    <a
                      href="tel:03007006133"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-bold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#16a34a]" />
                      <span>براہِ راست فون کال: 0300 7006133</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: FAQs */}
        {activeTab === 'faqs' && (
          <div className="space-y-4 animate-fadeIn max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200">
              <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#16a34a]" />
                <span>کیا یہ دوا واقعی مرد کے جسمانی درد کے لیے کام کرتی ہے؟</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                جی ہاں! یہ دوا خاص طور پر مردوں کے جسمانی درد، پٹھوں کے کھنچاؤ، جوڑوں اور کمر کے درد کے لیے انتہائی لاجواب اور آزمودہ نسخہ ہے۔ مریضوں کو پہلے چند دنوں میں ہی واضح سکون اور طاقت کا احساس ہوتا ہے۔
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200">
              <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#16a34a]" />
                <span>اس دوا کی قیمت کیا ہے؟</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                اس کی خصوصی رعایتی قیمت <strong className="text-red-600 font-bold">صرف 500 روپے (PKR 500)</strong> ہے۔ اس کے علاوہ کوئی چھپا ہوا خرچہ نہیں ہے۔
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200">
              <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#16a34a]" />
                <span>کیا پیسے پہلے دینے پڑیں گے یا ڈیلیوری پر؟</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                آپ کو پیشگی پیسے دینے کی کوئی ضرورت نہیں۔ پیسے صرف اس وقت دیں جب پارسل آپ کی دہلیز پر بحفاظت پہنچ جائے (کیش آن ڈیلیوری)۔
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200">
              <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#16a34a]" />
                <span>آرڈر کتنے دن میں پہنچے گا اور پیکنگ کیسی ہوگی؟</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                آرڈر کی تصدیق کے بعد 2 سے 3 ورکنگ دنوں میں پورے پاکستان میں ترسیل کر دی جاتی ہے۔ پیکنگ بالکل سادہ اور 100% رازدارانہ ہوتی ہے۔
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200">
              <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#16a34a]" />
                <span>کیا شوگر یا بلڈ پریشر کے مریض اسے لے سکتے ہیں؟</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                یہ خالص نباتاتی فارمولا ہے جس میں میٹھا یا کیمیکل شامل نہیں۔ تاہم مزید اطمینان کے لیے آپ طارق محمود صاحب سے فون یا واٹس ایپ نمبر 0300 7006133 پر براہ راست مشورہ کر سکتے ہیں۔
              </p>
            </div>
          </div>
        )}

        {/* Quick Instant Order Form Section (Immediately Accessible) */}
        <div id="quick-order-form" className="mt-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border-2 border-green-500 shadow-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-[#16a34a] bg-green-100 px-3 py-1 rounded-full uppercase">
              فوری آرڈر فارم · کیش آن ڈیلیوری
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">
              گھر بیٹھے دوا منگوائیں (صرف 500 روپے)
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              نیچے دیا گیا سادہ فارم پُر کریں یا براہ راست واٹس ایپ پر آرڈر بھیجیں۔
            </p>
          </div>

          {orderSubmitted ? (
            <div className="p-6 rounded-2xl bg-green-50 border border-green-300 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#16a34a] mx-auto" />
              <h4 className="text-xl font-bold text-gray-900">آپ کی معلومات موصول ہو گئی ہیں!</h4>
              <p className="text-sm text-gray-600">
                طارق محمود صاحب کی ٹیم آپ کے دیے گئے نمبر پر تصدیقی کال یا واٹس ایپ میسج کے ذریعے پارسل روانہ کرے گی۔
              </p>
              <button
                type="button"
                onClick={() => setOrderSubmitted(false)}
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold mt-2"
              >
                نیا آرڈر کریں
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickFormSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  آپ کا پورا نام (Full Name) *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="مثلاً: محمد اسلم"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    موبائل / واٹس ایپ نمبر (Mobile Number) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    placeholder="0300 0000000"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    شہر (City) *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="مثلاً: میاں چنوں، ملتان، لاہور"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  مکمل پتہ جہاں پارسل بھیجنا ہے (Full Delivery Address) *
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="مکان نمبر، گلی، محلہ، قریبی معروف جگہ..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-red-50 border border-red-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-700">تعداد پیک:</span>
                  <select
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Number(e.target.value))}
                    className="px-2 py-1 rounded-lg border border-gray-300 text-sm font-bold bg-white"
                  >
                    <option value={1}>1 پیک (500 روپے)</option>
                    <option value={2}>2 پیک (1,000 روپے)</option>
                    <option value={3}>3 پیک (1,500 روپے)</option>
                  </select>
                </div>

                <div className="text-right">
                  <span className="text-xs text-gray-500 block">کل رقم (کیش آن ڈیلیوری):</span>
                  {/* Price styling: red, 22px, bold */}
                  <span className="text-[22px] font-bold text-[#dc2626] font-mono">
                    {orderQuantity * 500} روپے
                  </span>
                </div>
              </div>

              {/* Submit Button styled per user constraints: green, padding 12px 20px, rounded 10px, border none, font size 18px */}
              <button
                type="submit"
                className="w-full btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-99"
              >
                <Send className="w-5 h-5" />
                <span>آرڈر تصدیق کریں (کیش آن ڈیلیوری - صرف 500 روپے)</span>
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-gray-500">
                  یا براہ راست کال کر کے آرڈر لکھوائیں: 
                  <a href="tel:03007006133" className="font-bold text-[#16a34a] hover:underline ml-1">
                    0300 7006133
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
