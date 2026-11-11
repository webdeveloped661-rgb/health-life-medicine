import React, { useState } from 'react';
import { MedicineProduct } from '../types';
import { 
  ShieldCheck, 
  ShoppingBag, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Truck, 
  Clock, 
  Sparkles,
  Minus,
  Plus,
  Flame,
  Check
} from 'lucide-react';

interface TopProductSpotlightProps {
  product: MedicineProduct;
  onAddToCart: (product: MedicineProduct, quantity: number) => void;
  onOpenConsultation: () => void;
}

export const TopProductSpotlight: React.FC<TopProductSpotlightProps> = ({
  product,
  onAddToCart,
  onOpenConsultation
}) => {
  const [quantity, setQuantity] = useState(1);
  const [orderAdded, setOrderAdded] = useState(false);

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleBuyNow = () => {
    onAddToCart(product, quantity);
    setOrderAdded(true);
    setTimeout(() => setOrderAdded(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `السلام علیکم طارق محمود صاحب!\nمیں ہیلدی لائف میڈیسن برائے "مرد کے جسمانی درد کا علاج" کا آرڈر دینا چاہتا ہوں۔\nتعداد: ${quantity} پیک\nقیمت: ${quantity * 500} روپے\nبرائے مہربانی ڈیلیوری کی معلومات فراہم کریں۔`
  );

  return (
    <section id="product-spotlight" className="relative bg-gradient-to-b from-[#DCFCE7]/40 via-white to-[#F5F9FA] pt-6 pb-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Practitioner & Clinic Banner */}
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white border-2 border-green-300 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Mustahid Health Care Services
                </span>
                <span className="text-xs font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded">
                  Healthy Life Medicine
                </span>
              </div>
              
              {/* Tariq Mehmood Name: color green (#16a34a), size 30px, bold font-weight */}
              <h1 className="text-[30px] font-bold text-[#16a34a] leading-tight tracking-tight mt-1">
                Tariq Mehmood (طارق محمود)
              </h1>
              
              {/* Address: Mian Channu strictly */}
              <p className="text-sm font-semibold text-gray-700 flex items-center gap-1.5 mt-1">
                <span className="text-red-500">📍 پتہ:</span>
                <span className="font-bold text-gray-900">میاں چنوں (Mian Channu)</span>
              </p>
            </div>

            {/* Quick Contact & WhatsApp Pill */}
            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
              <a
                href={`https://wa.me/923007006133?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-sm inline-flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>واٹس ایپ: 0300 7006133</span>
              </a>

              <a
                href="tel:03007006133"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#16a34a]" />
                <span>کال کریں: 0300 7006133</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Product Spotlight Card */}
        <div className="bg-white rounded-3xl border-2 border-green-400 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Product Image & Authentic Badges */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between items-center border-b lg:border-b-0 lg:border-r border-gray-100">
            <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlaid Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                <span className="inline-flex items-center gap-1.5 bg-[#16a34a] text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                  <Flame className="w-3.5 h-3.5 text-yellow-300" />
                  <span>مرد کے جسمانی درد کا خاص علاج</span>
                </span>
                <span className="text-[11px] font-bold text-gray-800 bg-white/95 px-2.5 py-1 rounded-md border border-gray-200 shadow-xs">
                  طارق محمود · میاں چنوں
                </span>
              </div>

              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg border border-gray-200 shadow-xs text-xs font-bold text-green-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% خالص قدرتی فارمولا</span>
              </div>
            </div>

            {/* Quick Guarantees Grid */}
            <div className="mt-5 w-full grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                <Truck className="w-4 h-4 text-[#16a34a] mx-auto mb-1" />
                <span className="font-bold text-gray-800 block">کیش آن ڈیلیوری</span>
                <span className="text-[10px] text-gray-500">پیسے وصولی پر</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] mx-auto mb-1" />
                <span className="font-bold text-gray-800 block">خفیہ پیکنگ</span>
                <span className="text-[10px] text-gray-500">مکمل رازداری</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-xs">
                <Clock className="w-4 h-4 text-[#16a34a] mx-auto mb-1" />
                <span className="font-bold text-gray-800 block">فوری ترسیل</span>
                <span className="text-[10px] text-gray-500">2 سے 3 دن</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Men's Body Pain Highlight, Price, & Action Buttons */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* In-Stock & Category Tag */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-green-800 bg-green-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  موجود ہے (In Stock) · فوری دستیابی
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  پیکنگ: مکمل کورس پیک (30 کیپسول)
                </span>
              </div>

              {/* Product Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#243746] leading-tight">
                Healthy Life Specialized Health & Pain Relief Formula
              </h2>
              <p className="text-sm font-bold text-gray-600 mt-1">
                ہیلدی لائف اسپیشل نباتاتی فارمولا — برائے طارق محمود (میاں چنوں)
              </p>

              {/* USER'S SPECIAL INDICATION: "ye mard ka gismani dard k liyabuhat best ha" */}
              <div className="my-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-green-50 via-emerald-50 to-green-100 border-2 border-green-500 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-[#16a34a] text-white text-xs font-extrabold px-2.5 py-0.5 rounded">
                    خاص طبی فائدہ
                  </span>
                  <span className="text-xs font-bold text-green-950 uppercase">
                    Proven Natural Formula
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
                  یہ دوا مرد کے جسمانی درد، پٹھوں کے کھنچاؤ، کمر درد اور جوڑوں کی تکلیف کے لیے بہت ہی بہترین ہے!
                </h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  دن بھر کی سخت محنت، مشقت، کمپیوٹر یا دفتری کام کے بعد پیدا ہونے والی شدید جسمانی تھکن، کندھوں اور پٹھوں کی جکڑن، پنڈلیوں اور ہڈیوں کے درد کو ختم کر کے جسم کو نئی طاقت، چستی اور توانائی بخشتی ہے۔
                </p>
              </div>

              {/* Key Bullet Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm font-semibold text-gray-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>مرد کے ہر قسم کے جسمانی درد کا مکمل علاج</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>کمر اور پٹھوں کا کھنچاؤ جڑ سے ختم</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>اعصابی سستی اور نقاہت دور کرے</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span>100% بے ضرر قدرتی جڑی بوٹیوں سے تیار</span>
                </div>
              </div>
            </div>

            {/* Price & Purchase Actions */}
            <div className="pt-5 border-t border-gray-200">
              
              {/* Price Box: Color Red (#dc2626), Size 22px, Font Weight Bold */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-red-50/80 border-2 border-red-200 mb-5">
                <div>
                  <span className="text-xs text-gray-600 font-bold block mb-0.5">
                    رعایتی و حتمی قیمت:
                  </span>
                  <div className="flex items-baseline gap-2.5">
                    {/* User requirement: color red, 22px, font-weight bold */}
                    <span className="text-[22px] font-bold text-[#dc2626] font-mono leading-none">
                      صرف 500 روپے (PKR 500)
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      1,500 روپے
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-green-700 bg-green-100 border border-green-300 px-2.5 py-1 rounded-lg">
                    66% بچت رعایت
                  </span>
                  <span className="text-xs font-bold text-gray-700 bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                    کیش آن ڈیلیوری
                  </span>
                </div>
              </div>

              {/* Quantity Selector & Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
                {/* Quantity Control */}
                <div className="flex items-center justify-between border-2 border-gray-300 rounded-[10px] px-3 py-1.5 bg-white shrink-0 sm:w-36">
                  <span className="text-xs font-bold text-gray-500">تعداد:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleDecrease}
                      className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-lg text-gray-900 w-5 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={handleIncrease}
                      className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Subtotal preview */}
                <div className="text-xs text-gray-600 font-semibold sm:text-left text-center">
                  کل رقم: <strong className="text-base text-red-600 font-bold">{quantity * 500} روپے</strong> (ڈیلیوری پر ادا کریں)
                </div>
              </div>

              {/* ACTION BUTTONS (User Styled: green #16a34a, padding 12px 20px, rounded 10px, border none, font-size 18px, font-weight bold) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/923007006133?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>واٹس ایپ پر آرڈر کریں</span>
                </a>

                {/* Add to Cart / Fast Order Button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md inline-flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                >
                  {orderAdded ? (
                    <>
                      <Check className="w-5 h-5 text-white" />
                      <span>آرڈر شامل ہو گیا!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>آن لائن آرڈر کریں (کیش آن ڈیلیوری)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bottom Quick Call & Consultation Note */}
              <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
                <span className="flex items-center gap-1 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
                  براہ راست فون پر بات کرنے کے لیے: 
                  <a href="tel:03007006133" className="font-bold text-[#16a34a] hover:underline ml-1">
                    0300 7006133
                  </a>
                </span>
                
                <a 
                  href="#product-details" 
                  className="text-[#16a34a] font-bold hover:underline flex items-center gap-1"
                >
                  <span>مکمل معلومات اور اجزاء نیچے دیکھیں ↓</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
