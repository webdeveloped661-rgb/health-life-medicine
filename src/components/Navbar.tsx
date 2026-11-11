import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Search, 
  ShoppingBag, 
  FileCheck2, 
  Menu, 
  X,
  PhoneCall,
  UserCheck
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
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about-us', id: 'about-us' },
    { name: "Women's Health", href: '#womens-health', id: 'womens-health' },
    { name: "Men's Health", href: '#mens-health', id: 'mens-health' },
    { name: 'Our Medicine', href: '#featured-medicine', id: 'featured-medicine' },
    { name: 'Health Information', href: '#health-blog', id: 'health-blog' },
    { name: 'Contact Us', href: '#contact-us', id: 'contact-us' },
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
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20B9D2] rounded-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#20B9D2] to-[#128a9e] flex items-center justify-center text-white shadow-sm shadow-[#20B9D2]/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#243746] leading-none">
                Healthy Life
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#20B9D2] mt-0.5">
                Medicine & Care
              </span>
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

            {/* Prescription Verification CTA */}
            <button
              type="button"
              onClick={onOpenPrescriptionWorkflow}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#243746] bg-[#B9EDF3]/60 hover:bg-[#B9EDF3] border border-[#20B9D2]/40 rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
            >
              <FileCheck2 className="w-4 h-4 text-[#20B9D2]" />
              <span>Verify Prescription</span>
            </button>

            {/* Pharmacist Consultation Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#20B9D2] hover:bg-[#1aa4bb] rounded-lg transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
            >
              <UserCheck className="w-4 h-4" />
              <span>Consult Pharmacist</span>
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
          </div>
        </div>
      )}
    </header>
  );
};
