import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Cookie, CheckCircle2 } from 'lucide-react';
import Logo from '../components/Logo';

export default function Legal() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab based on pathname or query
  const getInitialTab = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('terms')) return 'terms';
    if (path.includes('cookie')) return 'cookies';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    setActiveTab(getInitialTab());
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'privacy') navigate('/privacy-policy', { replace: true });
    else if (tab === 'terms') navigate('/terms-of-service', { replace: true });
    else if (tab === 'cookies') navigate('/cookie-policy', { replace: true });
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        {/* Navigation Breadcrumb / Back button */}
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link 
            to="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--primary-navy)', 
              fontWeight: 600, 
              fontSize: '0.95rem',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={18} /> Back to UrjaEdge Home
          </Link>
          <div style={{ fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            Effective Date: October 2026
          </div>
        </div>

        {/* Header Hero */}
        <div style={{ 
          backgroundColor: 'var(--dark-navy)', 
          borderRadius: '20px', 
          padding: '2.5rem 2rem', 
          color: '#ffffff',
          marginBottom: '2rem',
          backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(245, 130, 32, 0.15), transparent 40%)'
        }}>
          <span className="eyebrow" style={{ color: 'var(--energy-orange)', marginBottom: '0.5rem' }}>
            LEGAL, COMPLIANCE & GOVERNANCE
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', margin: '0.5rem 0 1rem', letterSpacing: '-0.02em' }}>
            UrjaEdge Governance & Policies
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '640px', lineHeight: 1.6, fontSize: '1rem', margin: 0 }}>
            Transparent guidelines protecting your enterprise solar plant data, contractual expectations, and operational confidentiality.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          backgroundColor: '#E2E8F0', 
          padding: '0.35rem', 
          borderRadius: '12px',
          marginBottom: '2.5rem',
          overflowX: 'auto'
        }}>
          <button
            onClick={() => handleTabChange('privacy')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '9px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'privacy' ? '#ffffff' : 'transparent',
              color: activeTab === 'privacy' ? 'var(--primary-navy)' : 'var(--secondary-text)',
              boxShadow: activeTab === 'privacy' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <Shield size={18} color={activeTab === 'privacy' ? 'var(--energy-orange)' : 'currentColor'} />
            Privacy Policy
          </button>

          <button
            onClick={() => handleTabChange('terms')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '9px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'terms' ? '#ffffff' : 'transparent',
              color: activeTab === 'terms' ? 'var(--primary-navy)' : 'var(--secondary-text)',
              boxShadow: activeTab === 'terms' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <FileText size={18} color={activeTab === 'terms' ? 'var(--energy-orange)' : 'currentColor'} />
            Terms of Service
          </button>

          <button
            onClick={() => handleTabChange('cookies')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '9px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
              backgroundColor: activeTab === 'cookies' ? '#ffffff' : 'transparent',
              color: activeTab === 'cookies' ? 'var(--primary-navy)' : 'var(--secondary-text)',
              boxShadow: activeTab === 'cookies' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <Cookie size={18} color={activeTab === 'cookies' ? 'var(--energy-orange)' : 'currentColor'} />
            Cookies & Disclaimers
          </button>
        </div>

        {/* Policy Content Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '3rem 2.5rem',
          boxShadow: '0 4px 25px rgba(0,0,0,0.04)',
          border: '1px solid #E2E8F0',
          lineHeight: 1.7,
          color: 'var(--primary-text)'
        }}>

          {/* ===================== 1. PRIVACY POLICY ===================== */}
          {activeTab === 'privacy' && (
            <div>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Privacy Policy
              </h2>
              <p style={{ color: 'var(--secondary-text)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Compliant with India's Digital Personal Data Protection (DPDP) Act, 2023 and International Privacy Principles.
              </p>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  1. Introduction & Overview
                </h3>
                <p>
                  UrjaEdge Energy Management (<strong>"UrjaEdge"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>), registered in Indore, Madhya Pradesh (GSTIN: 23AAJFU2362G1ZA), respects your privacy. We are dedicated to maintaining strict confidentiality regarding personal data, corporate asset data, and technical operational parameters provided to us through our website (<strong>urjaedge.com</strong>), software demonstrations, and proposal workflows.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  2. Categories of Information We Collect
                </h3>
                <p style={{ marginBottom: '0.75rem' }}>We collect only the minimum necessary information to provide expert solar O&M services and software evaluations:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>Contact & Identity Data:</strong> Your name, business designation, corporate entity name, official email address, and direct phone/mobile number.</li>
                  <li><strong>Solar Plant & Asset Details:</strong> Plant capacity (kWp/MWp rooftop or ground-mounted), geographic location (district, state, site coordinates), connection voltage, equipment manufacturer details, and existing maintenance scope.</li>
                  <li><strong>Operational Feedback & Requirements:</strong> Details regarding performance ratio (PR) goals, downtime issues, module soiling concerns, thermography needs, or digital maintenance requirements.</li>
                  <li><strong>Technical Telemetry:</strong> Anonymized server logs, browser type, device information, and interaction timestamps collected automatically to ensure web security and service stability.</li>
                </ul>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  3. Purpose and Legal Basis of Processing
                </h3>
                <p style={{ marginBottom: '0.75rem' }}>Your data is processed strictly under the following legitimate commercial and legal grounds:</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid var(--energy-orange)' }}>
                    <strong>Proposal Formulation</strong>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--secondary-text)' }}>
                      Evaluating site capacity, spares, manpower requirements, and drafting technical proposals.
                    </p>
                  </div>
                  <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid var(--primary-navy)' }}>
                    <strong>Software Demonstrations</strong>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--secondary-text)' }}>
                      Provisioning tailored sandbox environments of the UrjaEdge Solar O&M Platform.
                    </p>
                  </div>
                  <div style={{ padding: '1.25rem', backgroundColor: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid #10B981' }}>
                    <strong>Contractual Governance</strong>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--secondary-text)' }}>
                      Executing formal service agreements, compliance reports, and statutory invoicing.
                    </p>
                  </div>
                </div>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  4. Enterprise Data Confidentiality & Non-Disclosure
                </h3>
                <p>
                  <strong>We do not sell, rent, monetize, or disclose your corporate or asset data to any third-party advertisers or data brokers.</strong> Your solar plant generation benchmarks, maintenance schedules, and organizational details remain proprietary to your enterprise and are accessible only to authorized UrjaEdge engineering leads under strict non-disclosure obligations.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  5. Security Standards & Retention
                </h3>
                <p>
                  All network traffic is encrypted using Transport Layer Security (TLS 1.3 / HTTPS). Inquiries stored in our infrastructure are protected by multi-factor authentication and role-based access restrictions. We retain commercial enquiries for the duration of the evaluation or as required by applicable Indian tax and corporate laws.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  6. Your Rights as a Data Principal
                </h3>
                <p style={{ marginBottom: '0.75rem' }}>Under the DPDP Act 2023, you have the right to:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Request a summary of personal and business information held by UrjaEdge.</li>
                  <li>Request correction or updating of inaccurate contact or plant parameters.</li>
                  <li>Withdraw consent or request complete erasure of your contact record, subject to ongoing contractual or statutory obligations.</li>
                </ul>
              </section>

              <section style={{ padding: '1.5rem', backgroundColor: '#F1F5F9', borderRadius: '12px' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: 'var(--primary-navy)', fontSize: '1.1rem' }}>
                  7. Data Grievance Redressal Officer
                </h4>
                <p style={{ margin: '0 0 0.75rem', fontSize: '0.95rem' }}>
                  For privacy inquiries, rights enforcement, or statutory concerns, contact our designated Grievance Officer:
                </p>
                <div style={{ fontSize: '0.9rem', color: 'var(--secondary-text)' }}>
                  <div><strong>Entity:</strong> UrjaEdge Energy Management</div>
                  <div><strong>Address:</strong> 202, Jayshree Apartment, New Palasia, Indore - 452001, Madhya Pradesh, India</div>
                  <div><strong>Email:</strong> <a href="mailto:urjaedge@gmail.com" style={{ color: 'var(--energy-orange)' }}>urjaedge@gmail.com</a></div>
                  <div><strong>Phone:</strong> +91 78801 16970</div>
                </div>
              </section>
            </div>
          )}

          {/* ===================== 2. TERMS OF SERVICE ===================== */}
          {activeTab === 'terms' && (
            <div>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Terms of Service
              </h2>
              <p style={{ color: 'var(--secondary-text)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Standard Terms & Commercial Governance for UrjaEdge Energy Management.
              </p>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  1. Acceptance & Contractual Capacity
                </h3>
                <p>
                  By visiting our website, requesting proposals, or accessing software demos, you represent that you have the organizational authority to act on behalf of your entity and agree to comply with these Terms of Service. If you do not agree, please refrain from using this portal.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  2. Scope of Services & Non-Binding Enquiries
                </h3>
                <p>
                  UrjaEdge provides comprehensive on-ground Solar Operations & Maintenance (O&M) and digital Solar O&M Management Software solutions. Submissions made via the website contact forms constitute non-binding commercial inquiries. Formal service obligations, Service Level Agreements (SLAs), Plant Availability Guarantees, Performance Ratio (PR) commitments, and pricing structures become effective exclusively upon mutual execution of a formal Master Service Agreement (MSA).
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  3. Intellectual Property Rights
                </h3>
                <p>
                  All content, illustrations, graphic designs, architectural layouts, icons, documentation, algorithms, software workflows, and trademarks (including <strong>UrjaEdge</strong> and <em>"Where Energy Meets Innovation"</em>) are the exclusive intellectual property of UrjaEdge Energy Management. No materials may be copied, reproduced, reverse-engineered, or redistributed without prior written consent.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  4. Acceptable Portal Use
                </h3>
                <p style={{ marginBottom: '0.75rem' }}>You agree not to:</p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Submit false, fraudulent, or speculative solar plant data.</li>
                  <li>Use automated web crawlers, bots, or scrapers to extract site data without permission.</li>
                  <li>Attempt to compromise the security, integrity, or network availability of the UrjaEdge infrastructure.</li>
                  <li>Attempt unauthorized access to private demonstration accounts or client tenant databases.</li>
                </ul>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  5. Technical Disclaimers & Warranties
                </h3>
                <p>
                  Website materials and software previews are provided on an "as is" and "as available" basis. While we strive for absolute technical precision, solar plant generation and maintenance outcomes depend on ambient solar irradiance, historical degradation, equipment health, and environmental factors. Site evaluations are indicative pending formal on-site audit.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  6. Limitation of Liability
                </h3>
                <p>
                  In no event shall UrjaEdge, its partners, engineers, or directors be liable for indirect, punitive, or consequential damages resulting from website downtime, delay in email transmission, or business interruptions.
                </p>
              </section>

              <section style={{ padding: '1.5rem', backgroundColor: '#F1F5F9', borderRadius: '12px' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: 'var(--primary-navy)', fontSize: '1.1rem' }}>
                  7. Governing Law & Dispute Resolution
                </h4>
                <p style={{ margin: '0', fontSize: '0.95rem', color: 'var(--secondary-text)' }}>
                  These terms are governed by the laws of India. Any legal dispute, claim, or controversy arising out of or relating to these terms shall be submitted to the exclusive jurisdiction of the competent courts located in <strong>Indore, Madhya Pradesh, India</strong>.
                </p>
              </section>
            </div>
          )}

          {/* ===================== 3. COOKIES & DISCLAIMERS ===================== */}
          {activeTab === 'cookies' && (
            <div>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--primary-navy)', marginBottom: '0.5rem', fontWeight: 800 }}>
                Cookies Policy & Engineering Disclaimers
              </h2>
              <p style={{ color: 'var(--secondary-text)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Transparency regarding cookies, technical telemetry, and solar engineering calculations.
              </p>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  1. Cookie Usage Policy
                </h3>
                <p>
                  UrjaEdge uses only essential and functional cookies to ensure reliable web performance, maintain user session state, and remember your contact form preferences. We do not employ third-party behavioral advertising cookies or cross-site tracking pixels.
                </p>
                <div style={{ marginTop: '1rem', border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                    <thead style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                      <tr>
                        <th style={{ padding: '0.75rem 1rem', color: 'var(--primary-navy)' }}>Cookie Category</th>
                        <th style={{ padding: '0.75rem 1rem', color: 'var(--primary-navy)' }}>Purpose</th>
                        <th style={{ padding: '0.75rem 1rem', color: 'var(--primary-navy)' }}>Storage Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Essential / Technical</td>
                        <td style={{ padding: '0.75rem 1rem' }}>Enables secure navigation, UI rendering, and form submission resilience.</td>
                        <td style={{ padding: '0.75rem 1rem' }}>Session</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Preferences</td>
                        <td style={{ padding: '0.75rem 1rem' }}>Remembers chosen requirement dropdown and consent selection.</td>
                        <td style={{ padding: '0.75rem 1rem' }}>30 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  2. Solar Engineering & Performance Disclaimer
                </h3>
                <p>
                  Any generation benchmarks, uptime figures (e.g. 99.2%+), or maintenance efficiencies mentioned across our promotional materials are based on historical operating records of well-managed solar assets. Actual performance improvements for your facility depend upon:
                </p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                  <li>Local solar irradiance, shading profiles, and weather anomalies.</li>
                  <li>Original engineering and component quality (PV modules, inverters, transformers, HT switchgear).</li>
                  <li>Grid availability, evacuation stability, and DISCOM curtailment schedules.</li>
                  <li>Water availability, soiling rates, and site approach conditions.</li>
                </ul>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  3. Health, Safety & Environment (HSE) Compliance
                </h3>
                <p>
                  UrjaEdge adheres strictly to Indian CEA (Central Electricity Authority) safety regulations, OSHA standards, and high-voltage electrical safety protocols. On-site activities commence only after formal site safety inductions, Lockout/Tagout (LOTO) protocols, and authorized Work Permits are issued.
                </p>
              </section>

              <section style={{ padding: '1.5rem', backgroundColor: '#F1F5F9', borderRadius: '12px' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: 'var(--primary-navy)', fontSize: '1.1rem' }}>
                  4. Questions or Verification
                </h4>
                <p style={{ margin: '0', fontSize: '0.95rem', color: 'var(--secondary-text)' }}>
                  For technical compliance inquiries, write to <a href="mailto:urjaedge@gmail.com" style={{ color: 'var(--energy-orange)', fontWeight: 600 }}>urjaedge@gmail.com</a>.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Footer info within legal page */}
        <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--secondary-text)', fontSize: '0.85rem' }}>
          © 2026 UrjaEdge Energy Management. All rights reserved. Registered Office: Indore, Madhya Pradesh.
        </div>
      </div>
    </div>
  );
}
