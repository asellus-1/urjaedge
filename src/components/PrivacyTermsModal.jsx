import React from 'react';
import { X } from 'lucide-react';

export default function PrivacyTermsModal({ type, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {type === 'privacy' ? (
          <div>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
              Privacy Policy
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: '1.6', marginBottom: '1rem' }}>
              At UrjaEdge Energy Management, accessible from urjaedge.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by UrjaEdge and how we use it.
            </p>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', margin: '1rem 0 0.5rem 0' }}>
              Information We Collect
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: '1.6', marginBottom: '1rem' }}>
              When you fill out our contact form for O&M proposals, software demos, or general enquiries, we ask for personal information such as your Name, Company name, Email address, Mobile number, Plant/project location, and Solar plant capacity.
            </p>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', margin: '1rem 0 0.5rem 0' }}>
              How We Use Your Information
            </h3>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--secondary-text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <li>To evaluate your solar plant O&M requirement and prepare technical proposals.</li>
              <li>To schedule software demonstration sessions tailored to your asset profile.</li>
              <li>To communicate with you regarding your service enquiries.</li>
            </ul>
          </div>
        ) : (
          <div>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
              Terms of Service
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: '1.6', marginBottom: '1rem' }}>
              Welcome to UrjaEdge Energy Management. By accessing and using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', margin: '1rem 0 0.5rem 0' }}>
              Use of Website Content
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: '1.6', marginBottom: '1rem' }}>
              All information, graphics, branding, and specification details presented on this site are the property of UrjaEdge Energy Management. Unauthorized duplication or reproduction is strictly prohibited.
            </p>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', margin: '1rem 0 0.5rem 0' }}>
              Services & Proposals
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: '1.6' }}>
              Enquiries submitted through this site represent non-binding requests for proposals or software demonstrations. Formal operational contracts are executed separately under formal agreements.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
