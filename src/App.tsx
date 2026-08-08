import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsGrid } from './components/ProductsGrid';
import { WhyUsSection } from './components/WhyUsSection';
import { AboutSection } from './components/AboutSection';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { Seo } from './components/Seo';
import { SITE, absoluteUrl } from './config/site';

const HifzProductPage = lazy(() => import('./components/HifzProductPage'));

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: SITE.name, url: absoluteUrl('/'), email: SITE.email },
    { '@type': 'WebSite', name: SITE.name, url: absoluteUrl('/'), inLanguage: 'tr-TR' },
  ],
};

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const currentView = location.pathname === '/hifz' ? 'hifz-detail' : 'home';

  const navigateHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHifz = () => {
    navigate('/hifz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1F1E1B] font-sans antialiased">
      <Navbar onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} onNavigateHome={navigateHome} currentView={currentView} />

      <Routes>
        <Route path="/" element={
          <>
            <Seo title="GÜL STUDIOS | Yazılımın Ötesinde, Fayda Üretiyoruz." schema={organizationSchema} />
            <main>
              <Hero onInspectHifz={openHifz} />
              <ProductsGrid onInspectHifz={openHifz} />
              <WhyUsSection />
              <AboutSection />
              <FaqAndContact />
            </main>
          </>
        } />
        <Route path="/hifz" element={
          <Suspense fallback={<main className="min-h-screen pt-32 text-center text-sm text-[#57534E]">Hıfz sayfası yükleniyor…</main>}>
            <HifzProductPage onBackToHome={navigateHome} onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />
          </Suspense>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} onNavigateHome={navigateHome} currentView={currentView} />
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>;
}
