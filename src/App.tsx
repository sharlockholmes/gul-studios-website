import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsGrid } from './components/ProductsGrid';
import { WhyUsSection } from './components/WhyUsSection';
import { AboutSection } from './components/AboutSection';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { HifzProductPage } from './components/HifzProductPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'hifz-detail'>('home');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleInspectHifz = () => {
    setCurrentView('hifz-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1F1E1B] font-sans antialiased">
      
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onNavigateHome={handleNavigateHome}
        currentView={currentView}
      />

      {currentView === 'home' ? (
        /* Main Home Vitrine View */
        <main>
          {/* 1. Hero Section (Brand Focused, No Phone Mockup) */}
          <Hero onInspectHifz={handleInspectHifz} />

          {/* 2. Products Vitrine (Hıfz with 'İncele' + 'Kur'an Kursu Yönetim Sistemi' with 'Yakında') */}
          <ProductsGrid onInspectHifz={handleInspectHifz} />

          {/* 3. Neden GÜL STUDIOS? (4 Clean Principles) */}
          <WhyUsSection />

          {/* 4. Hakkımızda (Manifesto: Neden GÜL STUDIOS Var?) */}
          <AboutSection />

          {/* 5. İletişim & FAQ */}
          <FaqAndContact />
        </main>
      ) : (
        /* Dedicated Apple-Style Hıfz Product Page View */
        <HifzProductPage
          onBackToHome={handleNavigateHome}
          onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        />
      )}

      {/* Footer */}
      <Footer onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />

      {/* Google Play Compliant Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

    </div>
  );
}
