import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CookieConsent } from '@/components/CookieConsent';

export default function App() {
  return (
    <Router>
      <SiteHeader />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:slug" element={<TemplatePage />} />
          <Route path="/builder" element={<TemplateBuilder />} />
          <Route path="/secao/:slug" element={<MenuPage />} />
          <Route path="/p/:slug" element={<MenuPage />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/conecte-se" element={<Connect />} />
          <Route path="/comecar" element={<Start />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/recursos/:slug" element={<ResourceItem />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/solucoes/:slug" element={<Solutions />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <SiteFooter />
      <CookieConsent />
    </Router>
  );
}
