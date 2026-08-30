import { Suspense, useState } from 'react';
import type { ComponentType } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AboutSection } from './components/AboutSection';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { GlobalDecorativeBackground } from './components/GlobalDecorativeBackground';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { ProductsGrid } from './components/ProductsGrid';
import { ScrollRevealController } from './components/ScrollRevealController';
import { Seo } from './components/Seo';
import { WhyUsSection } from './components/WhyUsSection';
import { HOME_SEO } from './config/seo';

interface HifzPageProps {
  onBackToHome: () => void;
  onOpenPrivacyModal: () => void;
}

interface AppContentProps {
  HifzPage: ComponentType<HifzPageProps>;
}

export function AppContent({ HifzPage }: AppContentProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const currentView = normalizedPath === '/hifz' ? 'hifz-detail' : 'home';

  const navigateHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHifz = () => {
    navigate('/hifz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Ana içeriğe geç</a>
      <ScrollRevealController />
      <Navbar onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} onNavigateHome={navigateHome} currentView={currentView} />

      <Routes>
        <Route path="/" element={
          <>
            <Seo {...HOME_SEO} />
            <main id="main-content" className="home-page-canvas" tabIndex={-1}>
              <GlobalDecorativeBackground />
              <Hero onInspectHifz={openHifz} />
              <ProductsGrid onInspectHifz={openHifz} />
              <WhyUsSection />
              <AboutSection />
              <FaqAndContact />
            </main>
          </>
        } />
        <Route path="/hifz" element={
          <Suspense fallback={<main id="main-content" className="min-h-screen pt-32 text-center text-sm text-[#57534E]" tabIndex={-1}>HIFZ sayfası yükleniyor…</main>}>
            <HifzPage onBackToHome={navigateHome} onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />
          </Suspense>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} onNavigateHome={navigateHome} currentView={currentView} />
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </div>
  );
}
