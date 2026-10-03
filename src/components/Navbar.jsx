import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const progressRef = useRef(null);
  const activeSectionRef = useRef('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docEl = document.documentElement;
          const totalScroll = docEl.scrollHeight - window.innerHeight;
          if (totalScroll > 0 && progressRef.current) {
            const currentProgress = window.scrollY / totalScroll;
            progressRef.current.style.transform = `scaleX(${Math.min(Math.max(currentProgress, 0), 1)})`;
          }

          // Track active section for ScrollSpy efficiently without layout thrashing
          const scrollPos = window.scrollY + 220;
          const sections = ['contact-us', 'about-us', 'solar-om-software', 'solar-om-services', 'home'];
          for (const id of sections) {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollPos) {
              if (activeSectionRef.current !== id) {
                activeSectionRef.current = id;
                setActiveSection(id);
              }
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    activeSectionRef.current = id;
    setActiveSection(id);
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`, { offset: -70, duration: 1.2 });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="site-header" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* GPU Accelerated Scroll Progress Bar */}
      <div 
        ref={progressRef}
        className="scroll-progress-indicator" 
        style={{ 
          height: '3px',
          backgroundColor: 'var(--energy-orange)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          zIndex: 1001,
          boxShadow: '0 0 8px rgba(245, 130, 32, 0.6)',
          pointerEvents: 'none',
          willChange: 'transform'
        }}
      />
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="UrjaEdge Home"
          >
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solar-om-services')} 
                  className={`nav-link ${activeSection === 'solar-om-services' ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  O&M Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solar-om-software')} 
                  className={`nav-link ${activeSection === 'solar-om-software' ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  O&M Software
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about-us')} 
                  className={`nav-link ${activeSection === 'about-us' ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-us')} 
                  className="btn-contact-nav"
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <nav className="mobile-nav-list">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
            >
              <span>Home</span>
              <span className="mobile-nav-arrow">→</span>
            </button>
            <button 
              onClick={() => scrollToSection('solar-om-services')} 
              className={`mobile-nav-item ${activeSection === 'solar-om-services' ? 'active' : ''}`}
            >
              <span>O&M Services</span>
              <span className="mobile-nav-arrow">→</span>
            </button>
            <button 
              onClick={() => scrollToSection('solar-om-software')} 
              className={`mobile-nav-item ${activeSection === 'solar-om-software' ? 'active' : ''}`}
            >
              <span>O&M Software</span>
              <span className="mobile-nav-arrow">→</span>
            </button>
            <button 
              onClick={() => scrollToSection('about-us')} 
              className={`mobile-nav-item ${activeSection === 'about-us' ? 'active' : ''}`}
            >
              <span>About Us</span>
              <span className="mobile-nav-arrow">→</span>
            </button>
            
            <div className="mobile-menu-cta">
              <button 
                onClick={() => scrollToSection('contact-us')} 
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '0.95rem', borderRadius: '50px' }}
              >
                Contact us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
