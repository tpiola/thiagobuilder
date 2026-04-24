import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import Projetos from '@/pages/Projetos';
import Contato from '@/pages/Contato';
import NotFound from '@/pages/NotFound';
import Politica from '@/pages/Politica';
import Termos from '@/pages/Termos';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CookieConsent } from '@/components/CookieConsent';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { initTracking, trackPageView } from '@/lib/analytics';

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
                                  <Route path="/projetos" element={<Projetos />} />
                                  <Route path="/contato" element={<Contato />} />
                                  <Route path="/politica" element={<Politica />} />
                                  <Route path="/termos" element={<Termos />} />
                                  <Route path="*" element={<NotFound />} />
                        </Routes>Routes>
                </div>div>
                <SiteFooter />
                <CookieConsent />
                <WhatsAppFab />
          </Router>Router>
        );
}</Router>
