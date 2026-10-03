import React, { useState } from 'react';
import { X, Shield, FileText, Cookie, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyTermsModal({ type = 'privacy', onClose }) {
  const [activeTab, setActiveTab] = useState(type);

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(6, 29, 48, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          position: 'relative',
          animation: 'fadeInUp 0.25s ease'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#F8FAFC'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="eyebrow" style={{ margin: 0, fontSize: '0.8rem' }}>URJAEDGE COMPLIANCE</span>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close modal"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--secondary-text)',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background-color 0.15s ease'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF',
          padding: '0 1rem'
        }}>
          <button
            onClick={() => setActiveTab('privacy')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.85rem 0.5rem',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: activeTab === 'privacy' ? 'var(--energy-orange)' : 'var(--secondary-text)',
              borderBottom: activeTab === 'privacy' ? '3px solid var(--energy-orange)' : '3px solid transparent',
              transition: 'all 0.15s ease'
            }}
          >
            <Shield size={16} /> Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.85rem 0.5rem',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: activeTab === 'terms' ? 'var(--energy-orange)' : 'var(--secondary-text)',
              borderBottom: activeTab === 'terms' ? '3px solid var(--energy-orange)' : '3px solid transparent',
              transition: 'all 0.15s ease'
            }}
          >
            <FileText size={16} /> Terms of Service
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              padding: '0.85rem 0.5rem',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: activeTab === 'cookies' ? 'var(--energy-orange)' : 'var(--secondary-text)',
              borderBottom: activeTab === 'cookies' ? '3px solid var(--energy-orange)' : '3px solid transparent',
              transition: 'all 0.15s ease'
            }}
          >
            <Cookie size={16} /> Cookies & Disclaimer
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div style={{
          padding: '1.75rem',
          overflowY: 'auto',
          fontSize: '0.925rem',
          lineHeight: '1.65',
          color: 'var(--primary-text)'
        }}>
          {activeTab === 'privacy' && (
            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Privacy Policy & Data Protection
              </h2>
              <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Governed under India's Digital Personal Data Protection (DPDP) Act, 2023.
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1rem 0 0.35rem', fontSize: '1rem' }}>
                1. Data Collection & Confidentiality
              </h4>
              <p>
                When submitting enquiries on urjaedge.com, we collect your name, business email, mobile number, company entity, and technical solar plant parameters (capacity in MWp/kWp, location, and requirement specifications). <strong>All solar asset and operational metrics are treated under strict enterprise confidentiality.</strong>
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.35rem', fontSize: '1rem' }}>
                2. Zero Third-Party Monetization
              </h4>
              <p>
                UrjaEdge does not sell, lease, or distribute your personal or commercial contact information to third-party advertisers or lead brokers. Information is utilized exclusively by authorized UrjaEdge engineers to formulate technical proposals and conduct software demonstration sessions.
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.35rem', fontSize: '1rem' }}>
                3. Data Security & Storage
              </h4>
              <p>
                All communications are secured through modern cryptographic protocols (TLS/HTTPS). Internal database access is restricted by multi-factor authentication and role-based clearance.
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.35rem', fontSize: '1rem' }}>
                4. Grievance Officer & Contact
              </h4>
              <div style={{ backgroundColor: '#F8FAFC', padding: '0.85rem 1rem', borderRadius: '10px', fontSize: '0.85rem', border: '1px solid #E2E8F0' }}>
                <div><strong>Data Protection Officer:</strong> UrjaEdge Energy Management</div>
                <div><strong>Address:</strong> 202, Jayshree Apartment, New Palasia, Indore - 452001, MP, India</div>
                <div><strong>Email:</strong> urjaedge@gmail.com | <strong>Mobile:</strong> +91 87703 37731</div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Terms of Service
              </h2>
              <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Commercial Governance & Intellectual Property Standards.
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1rem 0 0.35rem', fontSize: '1rem' }}>
                1. Scope of Offerings & Non-Binding Inquiries
              </h4>
              <p>
                Website forms, proposal calculators, and demo request submissions represent non-binding exploratory requests. Guaranteed uptime commitments, Performance Ratios (PR), and formal operations protocols are governed exclusively by executed Master Service Agreements (MSAs).
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.35rem', fontSize: '1rem' }}>
                2. Intellectual Property
              </h4>
              <p>
                All software interfaces, workflows, graphic trademarks, visual layouts, and content on urjaedge.com remain the exclusive intellectual property of UrjaEdge Energy Management. Unauthorized duplication, reverse engineering, or scraping is strictly prohibited.
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.35rem', fontSize: '1rem' }}>
                3. Limitation of Liability & Jurisdiction
              </h4>
              <p>
                UrjaEdge provides website information on an "as is" basis without warranty of fitness for a specific solar installation prior to an on-site engineering audit. All legal disputes are subject to the exclusive jurisdiction of the competent courts in <strong>Indore, Madhya Pradesh, India</strong>.
              </p>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Cookie Policy & Engineering Disclaimers
              </h2>
              <p style={{ color: 'var(--secondary-text)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                Technical telemetry and solar performance caveats.
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1rem 0 0.35rem', fontSize: '1rem' }}>
                1. Cookies & Storage
              </h4>
              <p>
                UrjaEdge utilizes only essential functional cookies required for responsive navigation, session security, and contact form state preservation. We do not implement intrusive third-party cross-site behavioral tracking cookies.
              </p>

              <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.35rem', fontSize: '1rem' }}>
                2. Solar Plant Performance Disclaimer
              </h4>
              <p>
                Operational metrics, generation figures, and uptime estimations cited in case studies reflect properly maintained solar facilities. Actual performance for any specific installation is dependent on solar irradiance, historical degradation, inverter topology, grid curtailment, and local weather patterns.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1rem 1.75rem',
          borderTop: '1px solid #E2E8F0',
          backgroundColor: '#F8FAFC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link
            to={activeTab === 'privacy' ? '/privacy-policy' : activeTab === 'terms' ? '/terms-of-service' : '/cookie-policy'}
            onClick={onClose}
            style={{
              fontSize: '0.85rem',
              color: 'var(--primary-navy)',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              textDecoration: 'none'
            }}
          >
            <span>View full legal document</span>
            <ExternalLink size={14} />
          </Link>

          <button 
            onClick={onClose} 
            className="btn-primary"
            style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', borderRadius: '50px' }}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
