import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import Home from '@/pages/Home';
import Templates from '@/pages/Templates';
import TemplatePage from '@/pages/TemplatePage';
import TemplateBuilder from '@/pages/TemplateBuilder';
import MenuPage from '@/pages/MenuPage';
import Contato from '@/pages/Contato';
import Connect from '@/pages/Connect';
import Start from '@/pages/Start';
import Resources from '@/pages/Resources';
import ResourceItem from '@/pages/ResourceItem';
import Solutions from '@/pages/Solutions';
import NotFound from '@/pages/NotFound';
import Politica from '@/pages/Politica';
import Termos from '@/pages/Termos';
import Platform from '@/pages/Platform';
import PlatformItem from '@/pages/PlatformItem';
import Services from '@/pages/Services';
import ServicesItem from '@/pages/ServicesItem';
import About from '@/pages/About';
import AboutItem from '@/pages/AboutItem';
import Insights from '@/pages/Insights';
import InsightsCategory from '@/pages/InsightsCategory';
import Work from '@/pages/Work';
import WorkItem from '@/pages/WorkItem';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CookieConsent } from '@/components/CookieConsent';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { ChatWidget } from '@/components/ChatWidget';
import { VoiceAssistant } from '@/components/VoiceAssistant';
import { initTracking, trackPageView } from '@/lib/analytics';

function LegacySectionRedirect() {
  const { slug } = useParams();
  return <Navigate to={slug ? `/secao/${slug}` : '/'} replace />;
}

function RouteTracking() {
  const location = useLocation();

  useEffect(() => {
    initTracking();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}

export default function App() {
  return (
    <Router>
      <SiteHeader />
      <RouteTracking />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:slug" element={<TemplatePage />} />
          <Route path="/builder" element={<TemplateBuilder />} />

          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/:slug" element={<PlatformItem />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicesItem />} />
          <Route path="/secao/:slug" element={<MenuPage />} />
          <Route path="/p/:slug" element={<LegacySectionRedirect />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/contact" element={<Navigate to="/contato" replace />} />
          <Route path="/conecte-se" element={<Connect />} />
          <Route path="/comecar" element={<Start />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/recursos/:slug" element={<ResourceItem />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/solucoes/:slug" element={<Solutions />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/:slug" element={<AboutItem />} />

          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightsCategory />} />

          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkItem />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <SiteFooter />
      <CookieConsent />
      <WhatsAppFab />
      <ChatWidget />
      <VoiceAssistant />
    </Router>
  );
}
