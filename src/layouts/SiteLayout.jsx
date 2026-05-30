import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFab from '../components/WhatsAppFab';
import ScrollToTop from '../components/ScrollToTop';
import ScrollProgress from '../components/scroll/ScrollProgress';
import ScrollAmbient from '../components/scroll/ScrollAmbient';
import StickyMobileCta from '../components/StickyMobileCta';

export default function SiteLayout() {
  return (
    <div className="min-h-screen overflow-x-clip mesh-bg mesh-bg-scroll">
      <ScrollAmbient />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <StickyMobileCta />
      <WhatsAppFab />
    </div>
  );
}
