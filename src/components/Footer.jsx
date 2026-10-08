import React, { useState } from 'react';
import Logo from './Logo';
import PrivacyTermsModal from './PrivacyTermsModal';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('privacy');

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand">
            <button 
              onClick={() => scrollToSection('home')} 
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
            >
              <div style={{ backgroundColor: 'var(--white)', padding: '0.4rem 0.75rem', borderRadius: '8px', display: 'inline-block' }}>
                <Logo />
              </div>
            </button>
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: 'var(--energy-orange)', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Registered Office</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                202, Jayshree Apartment, New Palasia,<br />
                Indore - 452001, Madhya Pradesh
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--white)' }}>Email:</strong> urjaedge@gmail.com
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem' }}>
                <strong style={{ color: 'var(--white)' }}>Mobile:</strong> +91 87703 37731
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('home')}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solar-om-services')}>
                  O&M Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solar-om-software')}>
                  O&M Software
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about-us')}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact-us')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="footer-col-title">Services & Solutions</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('solar-om-services')}>
                  Solar Plant O&M Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solar-om-software')}>
                  Solar O&M Management Software
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact-us')}>
                  Request Proposal
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact-us')}>
                  Book Software Demo
                </button>
              </li>
            </ul>
          </div>


        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} UrjaEdge Energy Management. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <button onClick={() => openModal('privacy')}>Privacy Policy</button>
            <span className="footer-divider"></span>
            <button onClick={() => openModal('terms')}>Terms of Service</button>
            <span className="footer-divider"></span>
            <button onClick={() => openModal('cookies')}>Cookies & Disclaimers</button>
          </div>
        </div>
      </div>

      {/* Privacy & Terms Modal */}
      {modalOpen && (
        <PrivacyTermsModal type={modalType} onClose={() => setModalOpen(false)} />
      )}
    </footer>
  );
}
