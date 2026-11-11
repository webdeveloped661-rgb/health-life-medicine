import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Search, 
  ShoppingBag, 
  FileCheck2, 
  Menu, 
  X,
  PhoneCall,
  UserCheck,
  MessageSquare
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenPrescriptionWorkflow: () => void;
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenPrescriptionWorkflow,
  onOpenConsultation,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'دوا و قیمت (PKR 500)', href: '#product-spotlight', id: 'product-spotlight' },
    { name: 'طبی فوائد و اثرات', href: '#product-details', id: 'product-details' },
    { name: 'طارق محمود (میاں چنوں)', href: '#product-details', id: 'practitioner' },
    { name: 'فوری آرڈر فارم', href: '#quick-order-form', id: 'quick-order-form' },
    { name: 'رابطہ و واٹس ایپ', href: '#contact-us', id: 'contact-us' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
      isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-4">
          {/* Brand Logo & Name: Tariq Mehmood in green 30px bold */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center text-white shadow-sm shadow-green-500/20 group-hover:scale-105 transition-transform shrink-0">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-[30px] font-bold text-[#16a34a] leading-none tracking-tight">
                Tariq Mehmood
              </span>
              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                <span className="text-xs font-bold text-gray-900">Healthy Life Medicine</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-semibold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">
                  Mustahid Health Care Services
                </span>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-bold text-gray-700">📍 میاں چنوں (Mian Channu)</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-sm font-medium text-[#263238]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors py-2 relative hover:text-[#20B9D2] ${
                    isActive ? 'text-[#20B9D2] font-semibold' : 'text-[#546E7A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#20B9D2] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Prescription Button */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg text-[#263238] hover:text-[#20B9D2] hover:bg-[#F5F9FA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
              title="Search medicines and health guidance"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Cart Icon with Count */}
            <button
              type="button"
              onClick={onOpenCart}
              className="p-2.5 rounded-lg text-[#263238] hover:text-[#20B9D2] hover:bg-[#F5F9FA] transition-colors relative focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
              title="View your medicine bag"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#20B9D2] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Direct Order Button (User Styled) */}
            <a
              href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20the%20medicine%20(Rs.%20500)"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green-custom hidden sm:inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-sm"
              title="Chat on WhatsApp: 0300 7006133"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>WhatsApp: 0300 7006133</span>
            </a>

            {/* Pharmacist Consultation Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#16a34a] hover:bg-[#15803d] rounded-[10px] border-none transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>مشورہ / رہنمائی</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg text-[#263238] hover:bg-[#F5F9FA] focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#263238] hover:bg-[#F5F9FA] hover:text-[#20B9D2] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrescriptionWorkflow();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#243746] bg-[#B9EDF3] rounded-lg"
            >
              <FileCheck2 className="w-4 h-4 text-[#20B9D2]" />
              <span>Upload & Verify Prescription</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#20B9D2] rounded-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Speak with a Clinical Pharmacist</span>
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:03007006133"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#243746] bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#20B9D2]" />
                <span>0300 7006133</span>
              </a>
              <a
                href="https://wa.me/923007006133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#25D366] rounded-lg hover:bg-[#20bd5a]"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
