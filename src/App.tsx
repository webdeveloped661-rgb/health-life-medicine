/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MEDICINE_PRODUCTS } from './data/medicineData';
import { HEALTH_ARTICLES } from './data/blogData';
import { MedicineProduct, HealthArticle, CartItem } from './types';
import { MessageSquare } from 'lucide-react';

import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { TopProductSpotlight } from './components/TopProductSpotlight';
import { ProductFullInformation } from './components/ProductFullInformation';
import { MedicalDisclaimerBanner } from './components/MedicalDisclaimerBanner';
import { Footer } from './components/Footer';

import { ProductDetailModal } from './components/ProductDetailModal';
import { PharmacistWorkflowModal } from './components/PharmacistWorkflowModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ArticleModal } from './components/ArticleModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';

export default function App() {
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter & Search State
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchFilterQuery, setSearchFilterQuery] = useState('');

  // Modals State
  const [selectedProduct, setSelectedProduct] = useState<MedicineProduct | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Active Navigation Spy
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-us', 'womens-health', 'mens-health', 'featured-medicine', 'health-blog', 'contact-us'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Handlers
  const handleAddToCart = (product: MedicineProduct, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Search Handler
  const handleSearch = (query: string, category: string) => {
    setSearchFilterQuery(query);
    if (category !== 'all') {
      setSelectedFilter(category);
    }
    const el = document.getElementById('featured-medicine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Nav Click Handler
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Feature selection routing
  const handleSelectFeature = (featureId: string) => {
    if (featureId === 'womens-health') {
      handleNavClick('#womens-health');
    } else if (featureId === 'mens-health') {
      handleNavClick('#mens-health');
    } else if (featureId === 'medical-guidance') {
      handleNavClick('#health-blog');
    } else if (featureId === 'product-info') {
      handleNavClick('#featured-medicine');
    }
  };

  // Promo selection routing
  const handleSelectPromo = (target: string) => {
    if (target === 'womens-health') {
      handleNavClick('#womens-health');
    } else if (target === 'mens-health') {
      handleNavClick('#mens-health');
    } else if (target === 'featured-medicine') {
      handleNavClick('#featured-medicine');
    } else if (target === 'pharmacist-workflow') {
      setIsPrescriptionModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9FA] text-[#263238] font-sans selection:bg-[#B9EDF3] selection:text-[#243746]">
      {/* 1. Slim Top Bar with Contact Info & Discreet Assurance */}
      <TopBar 
        onOpenConsultation={() => setIsConsultationModalOpen(true)} 
      />

      {/* 2. Main Sticky Navigation */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenPrescriptionWorkflow={() => setIsPrescriptionModalOpen(true)}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* 1. Sab se uper header k baad product spotlight */}
        <TopProductSpotlight
          product={MEDICINE_PRODUCTS[0]}
          onAddToCart={handleAddToCart}
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
        />

        {/* 2. Aur os k nicha is ka saari information (Benefits, Dosage, Ingredients, Practitioner, Order Form, FAQs) */}
        <ProductFullInformation
          product={MEDICINE_PRODUCTS[0]}
          onAddToCart={handleAddToCart}
        />

        {/* 3. Regulatory Compliance & Natural Health Guidance */}
        <MedicalDisclaimerBanner />
      </main>

      {/* 14. Premium Dark Navy Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        onOpenPrescriptionWorkflow={() => setIsPrescriptionModalOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        onOpenPrescriptionWorkflow={() => setIsPrescriptionModalOpen(true)}
      />

      {/* Pharmacist Prescription Verification & Purchase Workflow */}
      <PharmacistWorkflowModal
        isOpen={isPrescriptionModalOpen}
        onClose={() => setIsPrescriptionModalOpen(false)}
      />

      {/* Pharmacist Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      {/* Read Article Full Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onConsultationRequest={() => setIsConsultationModalOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onOpenPrescriptionWorkflow={() => setIsPrescriptionModalOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        products={MEDICINE_PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSearchSubmit={handleSearch}
      />

      {/* Persistent Floating WhatsApp Order Button (Styled as Requested) */}
      <a
        href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20order%20Healthy%20Life%20Medicine%20for%20men%20body%20pain%20(Rs.%20500)"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-green-custom fixed bottom-6 right-6 z-50 bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-2xl flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
        style={{
          backgroundColor: '#16a34a',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '18px',
          fontWeight: 'bold'
        }}
        title="WhatsApp: 0300 7006133"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        <span>WhatsApp: 0300 7006133</span>
      </a>
    </div>
  );
}
