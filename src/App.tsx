import React, { useState, useEffect } from 'react';
import { LaptopProduct } from './types';
import { INITIAL_LAPTOPS } from './data/initialLaptops';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LaptopCatalog } from './components/LaptopCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductEditorModal } from './components/ProductEditorModal';

const STORAGE_KEY = 'laptop_hub_pk_products_v1';

export default function App() {
  const [laptops, setLaptops] = useState<LaptopProduct[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading stored products', e);
    }
    return INITIAL_LAPTOPS;
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLaptop, setSelectedLaptop] = useState<LaptopProduct | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [laptopToEdit, setLaptopToEdit] = useState<LaptopProduct | null>(null);

  // Sync to localStorage
  const handleSaveLaptops = (updated: LaptopProduct[]) => {
    setLaptops(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving products', e);
    }
  };

  const handleResetToDefaults = () => {
    setLaptops(INITIAL_LAPTOPS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error resetting products', e);
    }
  };

  const handleOpenEditor = (laptop?: LaptopProduct) => {
    setLaptopToEdit(laptop || null);
    setIsEditorOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenEditor={() => handleOpenEditor()}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onShopNowClick={() => scrollToSection('laptops')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 4. Featured Laptops & Catalog */}
        <LaptopCatalog
          laptops={laptops}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onQuickView={(laptop) => setSelectedLaptop(laptop)}
          onOpenEditor={() => handleOpenEditor()}
          onEditLaptop={(laptop) => handleOpenEditor(laptop)}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. About Us */}
        <AboutUs />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Laptop Detail Modal */}
      {selectedLaptop && (
        <ProductDetailModal
          laptop={selectedLaptop}
          onClose={() => setSelectedLaptop(null)}
        />
      )}

      {/* Product & Catalog Editor Modal */}
      <ProductEditorModal
        isOpen={isEditorOpen}
        onClose={() => {
          setIsEditorOpen(false);
          setLaptopToEdit(null);
        }}
        laptops={laptops}
        onSaveLaptops={handleSaveLaptops}
        onResetToDefaults={handleResetToDefaults}
        initialEditLaptop={laptopToEdit}
      />
    </div>
  );
}
