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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import News from './pages/News';
import NewsItem from './pages/NewsItem';
import ServicePage from './pages/services/ServicePage';
import ScanningService from './pages/services/ScanningService';
import IndexingService from './pages/services/IndexingService';
import DatabaseService from './pages/services/DatabaseService';
import ArchiveService from './pages/services/ArchiveService';
import DataEntryService from './pages/services/DataEntryService';
import LoyaltyService from './pages/services/LoyaltyService';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
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
