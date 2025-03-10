import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePage from './pages/services/ServicePage';
import ScanningService from './pages/services/ScanningService';
import IndexingService from './pages/services/IndexingService';
import DatabaseService from './pages/services/DatabaseService';
import ArchiveService from './pages/services/ArchiveService';
import DataEntryService from './pages/services/DataEntryService';
import LoyaltyService from './pages/services/LoyaltyService';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("ScanData - Професійні послуги з обробки документів");

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/scanning" element={<ScanningService />} />
          <Route path="/services/indexing" element={<IndexingService />} />
          <Route path="/services/databases" element={<DatabaseService />} />
          <Route path="/services/archive" element={<ArchiveService />} />
          <Route path="/services/data-entry" element={<DataEntryService />} />
          <Route path="/services/loyalty" element={<LoyaltyService />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
