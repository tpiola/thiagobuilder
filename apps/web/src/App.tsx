import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
      <CookieConsent />
    </Router>
  );
}
