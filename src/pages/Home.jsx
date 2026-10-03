import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');

  // Initial Contact Form State
  const initialFormState = {
    name: '',
    company: '',
    email: '',
    mobile: '',
    location: '',
    capacity: '',
    requirement: 'Solar Plant O&M Services',
    briefDetails: '',
    privacyConsent: false
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  useEffect(() => {
    if (typeParam) {
      const lower = typeParam.toLowerCase();
      if (lower.includes('service') || lower.includes('proposal')) {
        setFormData(prev => ({ ...prev, requirement: 'Solar Plant O&M Services' }));
      } else if (lower.includes('software') || lower.includes('demo')) {
        setFormData(prev => ({ ...prev, requirement: 'Solar O&M Management Software' }));
      }
    }
  }, [typeParam]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingEnquiries = JSON.parse(localStorage.getItem('urjaedge_enquiries') || '[]');
    existingEnquiries.push({
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('urjaedge_enquiries', JSON.stringify(existingEnquiries));
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData(initialFormState);
    setSubmitted(false);
  };

  useEffect(() => {
    const observerCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.05,
      rootMargin: '50px 0px 50px 0px'
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id, requirementType = null) => {
    if (requirementType) {
      setFormData(prev => ({ ...prev, requirement: requirementType }));
    }
    if (window.lenis) {
      window.lenis.scrollTo(`#${id}`, { offset: -70, duration: 1.2 });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const mobileServiceCoverage = [
    { num: "01", title: "Operation & Monitoring" },
    { num: "02", title: "Preventive Maintenance" },
    { num: "03", title: "Corrective Maintenance" },
    { num: "04", title: "Module Cleaning" },
    { num: "05", title: "Vegetation Management" },
    { num: "06", title: "Testing & Thermography" },
    { num: "07", title: "Electrical Equipment Care" },
    { num: "08", title: "Safety & Compliance" },
    { num: "09", title: "Inventory & Spares" },
    { num: "10", title: "Performance Reporting" }
  ];

  const mobileCoreModules = [
    { no: "1", title: "Asset Registry" },
    { no: "2", title: "Attendance & Manpower" },
    { no: "3", title: "Daily Inspection" },
    { no: "4", title: "Preventive Maintenance" },
    { no: "5", title: "Breakdown Management" },
    { no: "6", title: "Module Cleaning" },
    { no: "7", title: "Vegetation Management" },
    { no: "8", title: "Inventory & Spares" },
    { no: "9", title: "Safety & Incidents" },
    { no: "10", title: "Alarm Management" },
    { no: "11", title: "Generation Reporting" },
    { no: "12", title: "Performance Analytics" },
    { no: "13", title: "Power-Loss Analysis" },
    { no: "14", title: "Documents & Compliance" },
    { no: "15", title: "Owner Dashboard" },
    { no: "16", title: "Mobile Application" }
  ];

  return (
    <main style={{ width: '100%' }}>
      
      {/* ========================================================
          SCREEN 01 / HOME
          ======================================================== */}
      <section id="home">
        {/* DESKTOP VIEW (100% UNTOUCHED) */}
        <div className="desktop-only" style={{ padding: '5.5rem 0 0 0', backgroundColor: 'var(--warm-white)' }}>
          <div className="container">
            {/* Hero Main Grid */}
            <div className="hero-grid" style={{ paddingBottom: '5.5rem' }}>
              <div>
                <span className="eyebrow load-fade-1">SOLAR OPERATIONS REDEFINED</span>
                <h1 className="hero-heading load-fade-2">
                  On-ground excellence.
                  <span className="orange-text">Digital visibility.</span>
                </h1>
                <p className="hero-subtext load-fade-3">
                  Two focused UrjaEdge solutions working independently or together to improve the way solar plants are operated and managed.
                </p>
                <div className="hero-ctas load-fade-4">
                  <button 
                    onClick={() => scrollToSection('contact-us', 'Solar Plant O&M Services')} 
                    className="btn-primary"
                  >
                    Request O&M proposal
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact-us', 'Solar O&M Management Software')} 
                    className="btn-outline"
                  >
                    Book software demo
                  </button>
                </div>
              </div>

              {/* Right Hero Card */}
              <div className="hero-right-card load-fade-card">
                <svg className="hero-arch-graphic" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="hero-arch-path" d="M 20 110 A 100 100 0 0 1 220 110" stroke="#F58220" strokeWidth="18" strokeLinecap="round" />
                </svg>
                <h2 className="hero-card-title">
                  Operate better.<br />
                  <span style={{ color: 'var(--energy-orange)' }}>Manage smarter.</span>
                </h2>
                <p className="hero-card-subtext">
                  Expert plant operations and intelligent digital management.
                </p>
              </div>
            </div>

            {/* Bottom Split Bar: Two Solution Cards */}
            <div className="load-fade-split" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              backgroundColor: 'var(--soft-grey-blue)',
              borderTop: '1px solid var(--border-color)',
              borderBottom: '1px solid var(--border-color)',
              margin: '0 -2.5rem'
            }}>
              <div 
                style={{
                  padding: '2.75rem 3.5rem',
                  borderRight: '1px solid var(--border-color)',
                  cursor: 'pointer'
                }}
                onClick={() => scrollToSection('solar-om-services')}
              >
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', fontWeight: '700', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  SOLAR PLANT O&M
                </h3>
                <p style={{ color: 'var(--secondary-text)', fontSize: '1.05rem', fontWeight: '500' }}>
                  Maintenance | Testing | Cleaning | Safety
                </p>
              </div>

              <div 
                style={{
                  padding: '2.75rem 3.5rem',
                  cursor: 'pointer'
                }}
                onClick={() => scrollToSection('solar-om-software')}
              >
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', fontWeight: '700', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  O&M MANAGEMENT SOFTWARE
                </h3>
                <p style={{ color: 'var(--secondary-text)', fontSize: '1.05rem', fontWeight: '500' }}>
                  Inspections | Manpower | Spares | Analytics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (MATCHING IMAGE 1) */}
        <div className="mobile-only" style={{ padding: '2.25rem 1.25rem 2.5rem', backgroundColor: 'var(--warm-white)' }}>
          <span className="eyebrow load-fade-1" style={{ letterSpacing: '0.08em', fontSize: '0.825rem' }}>SOLAR OPERATIONS REDEFINED</span>
          <h1 className="load-fade-2" style={{ fontSize: '2.15rem', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1.15, margin: '0.65rem 0 0.85rem', letterSpacing: '-0.02em' }}>
            On-ground excellence.<br />
            Digital visibility.
          </h1>
          <p className="load-fade-3" style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.55, marginBottom: '1.75rem' }}>
            Two focused solutions for reliable solar operations and paperless management.
          </p>

          <div className="load-fade-4" style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.75rem' }}>
            <button 
              onClick={() => scrollToSection('contact-us', 'Solar Plant O&M Services')} 
              className="btn-primary" 
              style={{ flex: 1, padding: '0.75rem 0.5rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', borderRadius: '50px' }}
            >
              O&M PROPOSAL
            </button>
            <button 
              onClick={() => scrollToSection('contact-us', 'Solar O&M Management Software')} 
              className="btn-dark" 
              style={{ flex: 1, padding: '0.75rem 0.5rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', borderRadius: '50px' }}
            >
              SOFTWARE DEMO
            </button>
          </div>

          <span className="eyebrow load-fade-split" style={{ letterSpacing: '0.08em', fontSize: '0.825rem', marginBottom: '1.25rem', display: 'block' }}>
            TWO SOLUTIONS. EQUAL FOCUS.
          </span>

          {/* Solution Card 1: Services */}
          <div className="reveal-on-scroll" style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
            borderLeft: '8px solid var(--energy-orange)',
            borderRadius: '16px',
            padding: '1.75rem 1.25rem',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
              Solar Plant O&M Services
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Complete on-site operation, maintenance, testing, cleaning, safety and performance improvement.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Preventive & corrective maintenance
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Testing, cleaning & vegetation
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Safety, spares & performance
              </li>
            </ul>
            <div>
              <button 
                onClick={() => scrollToSection('solar-om-services')} 
                className="btn-primary" 
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', borderRadius: '50px' }}
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>

          {/* Solution Card 2: Software */}
          <div className="reveal-on-scroll stagger-1" style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
            borderLeft: '8px solid var(--dark-navy)',
            borderRadius: '16px',
            padding: '1.75rem 1.25rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
              Solar O&M Management Software
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--secondary-text)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              One connected system for inspections, manpower, spares, safety, alarms, documents and analytics.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Paperless daily operations
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Inventory, safety & compliance
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Generation & performance analytics
              </li>
            </ul>
            <div>
              <button 
                onClick={() => scrollToSection('solar-om-software')} 
                className="btn-dark" 
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', borderRadius: '50px' }}
              >
                EXPLORE SOFTWARE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SCREEN 02 / O&M SERVICES
          ======================================================== */}
      <section id="solar-om-services">
        {/* DESKTOP VIEW (100% UNTOUCHED) */}
        <div className="desktop-only">
          {/* Dark Navy Header Banner */}
          <div style={{ backgroundColor: 'var(--dark-navy)', color: 'var(--white)', padding: '6.5rem 0' }}>
            <div className="container reveal-on-scroll">
              <span className="eyebrow" style={{ color: 'var(--energy-orange)' }}>SOLAR PLANT O&M SERVICES</span>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--white)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: '1.12', letterSpacing: '-0.02em' }}>
                Reliable operations. Stronger performance.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '780px', lineHeight: '1.6' }}>
                Comprehensive site execution focused on safety, availability, generation and asset life.
              </p>
            </div>
          </div>

          {/* Scope & Owner Outcomes Body */}
          <div style={{ padding: '6.5rem 0', backgroundColor: 'var(--warm-white)' }}>
            <div className="container">
              <div className="reveal-on-scroll" style={{ marginBottom: '2.5rem' }}>
                <span className="eyebrow" style={{ marginBottom: '0.85rem', display: 'inline-block' }}>OUR SCOPE</span>
                <h3 style={{ fontSize: '2.75rem', color: 'var(--primary-navy)', fontWeight: '800', letterSpacing: '-0.01em', lineHeight: '1.15' }}>
                  Complete plant care
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'stretch' }}>
                {/* Left 2x4 Scope Grid */}
                <div className="scope-grid" style={{ marginTop: 0 }}>
                  <div className="scope-item-card reveal-on-scroll stagger-1">
                    <div className="scope-item-icon">+</div>
                    <span>Preventive maintenance</span>
                  </div>
                  <div className="scope-item-card reveal-on-scroll stagger-2">
                    <div className="scope-item-icon">+</div>
                    <span>Corrective maintenance</span>
                  </div>
                  <div className="scope-item-card reveal-on-scroll stagger-3">
                    <div className="scope-item-icon">+</div>
                    <span>Testing and thermography</span>
                  </div>
                  <div className="scope-item-card reveal-on-scroll stagger-4">
                    <div className="scope-item-icon">+</div>
                    <span>Module cleaning</span>
                  </div>
                  <div className="scope-item-card reveal-on-scroll stagger-5">
                    <div className="scope-item-icon">+</div>
                    <span>Vegetation management</span>
                  </div>
                  <div className="scope-item-card reveal-on-scroll stagger-6">
                    <div className="scope-item-icon">+</div>
                    <span>Safety and compliance</span>
                  </div>
                  <div className="scope-item-card reveal-on-scroll stagger-7">
                    <div className="scope-item-icon">+</div>
                    <span>Inventory and spares</span>
                  </div>
                  <div className="scope-item-card reveal-on-scroll stagger-8">
                    <div className="scope-item-icon">+</div>
                    <span>Performance improvement</span>
                  </div>
                </div>

                {/* Right Column: Owner Outcomes Card */}
                <div className="outcomes-card reveal-on-scroll stagger-2" style={{ padding: '2.25rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: '1.75rem', display: 'block' }}>OWNER OUTCOMES</span>

                    <div className="outcome-item" style={{ marginBottom: '2rem' }}>
                      <div className="outcome-title">Higher availability</div>
                      <div className="outcome-desc">
                        Structured maintenance and faster closure
                      </div>
                    </div>

                    <div className="outcome-item" style={{ marginBottom: '2rem' }}>
                      <div className="outcome-title">Better generation</div>
                      <div className="outcome-desc">
                        Loss identification and focused action
                      </div>
                    </div>

                    <div className="outcome-item" style={{ marginBottom: 0 }}>
                      <div className="outcome-title">Longer asset life</div>
                      <div className="outcome-desc">
                        Condition monitoring and disciplined care
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (MATCHING IMAGE 5) */}
        <div className="mobile-only">
          {/* Dark Navy Header Section */}
          <div className="reveal-on-scroll" style={{ backgroundColor: 'var(--dark-navy)', color: 'var(--white)', padding: '2.5rem 1.25rem' }}>
            <span className="eyebrow" style={{ color: 'var(--energy-orange)', fontSize: '0.825rem', letterSpacing: '0.08em' }}>SOLAR PLANT O&M SERVICES</span>
            <h2 style={{ fontSize: '2.15rem', color: 'var(--white)', margin: '0.65rem 0 0.85rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Reliable operations.<br />Stronger performance.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: 1.55 }}>
              Comprehensive site execution focused on safety, availability and long-term asset health.
            </p>
          </div>

          {/* Service Coverage & Outcomes */}
          <div style={{ padding: '2.25rem 1.25rem 2.5rem', backgroundColor: 'var(--warm-white)' }}>
            <span className="eyebrow reveal-on-scroll" style={{ fontSize: '0.825rem', letterSpacing: '0.08em', marginBottom: '1.25rem', display: 'block' }}>SERVICE COVERAGE</span>

            {/* 10 Service Coverage Pills in 2-Column Grid */}
            <div className="reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '2rem' }}>
              {mobileServiceCoverage.map((item) => (
                <div key={item.num} style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '0.85rem 0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}>
                  <span style={{ color: 'var(--energy-orange)', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                    {item.num}
                  </span>
                  <span style={{ color: 'var(--primary-navy)', fontWeight: 700, fontSize: '0.785rem', lineHeight: 1.25 }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Outcomes for Asset Owners Box */}
            <div className="reveal-on-scroll stagger-1" style={{
              backgroundColor: 'var(--dark-navy)',
              color: 'var(--white)',
              borderRadius: '16px',
              padding: '2rem 1.25rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <span className="eyebrow" style={{ color: 'var(--energy-orange)', fontSize: '0.825rem', letterSpacing: '0.08em', marginBottom: '1.25rem', display: 'block' }}>
                OUTCOMES FOR ASSET OWNERS
              </span>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>
                  <span style={{ color: 'var(--white)', fontWeight: 800 }}>✓</span> Higher availability
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>
                  <span style={{ color: 'var(--white)', fontWeight: 800 }}>✓</span> Improved generation
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>
                  <span style={{ color: 'var(--white)', fontWeight: 800 }}>✓</span> Faster breakdown response
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>
                  <span style={{ color: 'var(--white)', fontWeight: 800 }}>✓</span> Better safety & reporting
                </div>
              </div>

              <div>
                <button 
                  onClick={() => scrollToSection('contact-us', 'Solar Plant O&M Services')} 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', borderRadius: '50px' }}
                >
                  REQUEST AN O&M PROPOSAL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SCREEN 03 / O&M SOFTWARE
          ======================================================== */}
      <section id="solar-om-software">
        {/* DESKTOP VIEW (100% UNTOUCHED) */}
        <div className="desktop-only" style={{ backgroundColor: 'var(--soft-grey-blue)', padding: '6.5rem 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <div className="reveal-on-scroll" style={{ marginBottom: '4.5rem' }}>
              <span className="eyebrow">SOLAR O&M MANAGEMENT SOFTWARE</span>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--primary-navy)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: '1.12', letterSpacing: '-0.02em' }}>
                Every activity. One connected system.
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--secondary-text)', maxWidth: '780px', lineHeight: '1.6' }}>
                Paperless management for plant operations, manpower, safety, inventory and performance.
              </p>
            </div>

            {/* 8 Module Cards Grid (4x2) */}
            <div className="software-modules-grid">
              <div className="software-module-card reveal-on-scroll stagger-1">
                <div className="software-module-title">Daily Inspection & PM</div>
                <div className="software-module-desc">Mobile-first site activities</div>
              </div>

              <div className="software-module-card reveal-on-scroll stagger-2">
                <div className="software-module-title">Attendance & Manpower</div>
                <div className="software-module-desc">Deployment and productivity visibility</div>
              </div>

              <div className="software-module-card reveal-on-scroll stagger-3">
                <div className="software-module-title">Inventory & Critical Spares</div>
                <div className="software-module-desc">Stock levels and material movement</div>
              </div>

              <div className="software-module-card reveal-on-scroll stagger-4">
                <div className="software-module-title">Safety & Incidents</div>
                <div className="software-module-desc">Reporting, action and closure</div>
              </div>

              <div className="software-module-card reveal-on-scroll stagger-5">
                <div className="software-module-title">Alarms & Breakdowns</div>
                <div className="software-module-desc">Issue tracking and response visibility</div>
              </div>

              <div className="software-module-card reveal-on-scroll stagger-6">
                <div className="software-module-title">Performance Analytics</div>
                <div className="software-module-desc">Generation, losses and trends</div>
              </div>

              <div className="software-module-card reveal-on-scroll stagger-7">
                <div className="software-module-title">Documents & Compliance</div>
                <div className="software-module-desc">Controlled records and due dates</div>
              </div>

              <div className="software-module-card reveal-on-scroll stagger-8">
                <div className="software-module-title">Cleaning & Vegetation</div>
                <div className="software-module-desc">Planning, tracking and verification</div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (MATCHING IMAGE 4) */}
        <div className="mobile-only" style={{ backgroundColor: 'var(--soft-grey-blue)', padding: '2.5rem 1.25rem 2.5rem', borderTop: '1px solid var(--border-color)' }}>
          <div className="reveal-on-scroll">
            <span className="eyebrow" style={{ fontSize: '0.825rem', letterSpacing: '0.08em' }}>SOLAR O&M MANAGEMENT SOFTWARE</span>
            <h2 style={{ fontSize: '2.15rem', color: 'var(--primary-navy)', margin: '0.65rem 0 0.85rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Every activity.<br />One connected system.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.55, marginBottom: '2rem' }}>
              Paperless control of maintenance, manpower, safety, inventory and performance.
            </p>
          </div>

          <span className="eyebrow reveal-on-scroll" style={{ fontSize: '0.825rem', letterSpacing: '0.08em', marginBottom: '1.25rem', display: 'block' }}>CORE MODULES</span>

          {/* 16 Module Pills in 2-Column Grid */}
          <div className="reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '2rem' }}>
            {mobileCoreModules.map((item, index) => (
              <div key={item.no} style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '0.85rem 0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}>
                <span className="pulsing-dot" style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: index < 8 ? 'var(--energy-orange)' : 'var(--primary-navy)', 
                  display: 'inline-block', 
                  flexShrink: 0 
                }}></span>
                <span style={{ color: 'var(--primary-navy)', fontWeight: 700, fontSize: '0.785rem', lineHeight: 1.25 }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Why UrjaEdge Software Box */}
          <div className="reveal-on-scroll stagger-1" style={{
            backgroundColor: 'var(--dark-navy)',
            color: 'var(--white)',
            borderRadius: '16px',
            padding: '2rem 1.25rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <span className="eyebrow" style={{ color: 'var(--energy-orange)', fontSize: '0.825rem', letterSpacing: '0.08em', marginBottom: '0.75rem', display: 'block' }}>
              WHY URJAEDGE SOFTWARE?
            </span>
            <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', margin: '0.5rem 0 1.5rem' }}>
              Paperless • Real-time • Scalable • Exportable MIS
            </p>
            <button 
              onClick={() => scrollToSection('contact-us', 'Solar O&M Management Software')} 
              className="btn-primary" 
              style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', borderRadius: '50px' }}
            >
              BOOK A SOFTWARE DEMO
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SCREEN 04 / ABOUT
          ======================================================== */}
      <section id="about-us">
        {/* DESKTOP VIEW (100% UNTOUCHED) */}
        <div className="desktop-only" style={{ padding: '6.5rem 0', backgroundColor: 'var(--warm-white)' }}>
          <div className="container">
            <div className="reveal-on-scroll" style={{ marginBottom: '4.5rem' }}>
              <span className="eyebrow">ABOUT URJAEDGE</span>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--primary-navy)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: '1.12', letterSpacing: '-0.02em' }}>
                Where energy meets innovation.
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--secondary-text)', maxWidth: '820px', lineHeight: '1.65' }}>
                UrjaEdge Energy Management combines experienced solar plant operations with purpose-built digital management to help asset owners operate with clarity and control.
              </p>
            </div>

            <div className="capability-grid">
              {/* Physical Capability Box (Dark Navy) */}
              <div className="capability-card-dark reveal-on-scroll stagger-1">
                <div>
                  <span className="eyebrow" style={{ color: 'var(--energy-orange)' }}>PHYSICAL CAPABILITY</span>
                  <h3 style={{ fontSize: '2.75rem', color: 'var(--white)', marginBottom: '1.5rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
                    O&M Services
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.15rem', lineHeight: '1.65', marginBottom: '3.5rem' }}>
                    People, processes and engineering support for safe and reliable plant operations.
                  </p>
                </div>
                <div className="footer-tags" style={{ color: 'var(--energy-orange)', fontWeight: '600', fontSize: '1.05rem', letterSpacing: '0.02em' }}>
                  Maintenance | Testing | Performance
                </div>
              </div>

              {/* Digital Capability Box (Soft Grey-Blue) */}
              <div className="capability-card-light reveal-on-scroll stagger-2">
                <div>
                  <span className="eyebrow">DIGITAL CAPABILITY</span>
                  <h3 style={{ fontSize: '2.75rem', color: 'var(--primary-navy)', marginBottom: '1.5rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
                    O&M Software
                  </h3>
                  <p style={{ color: 'var(--secondary-text)', fontSize: '1.15rem', lineHeight: '1.65', marginBottom: '3.5rem' }}>
                    Paperless workflows and central visibility for site teams, managers and asset owners.
                  </p>
                </div>
                <div className="footer-tags" style={{ color: 'var(--energy-orange)', fontWeight: '600', fontSize: '1.05rem', letterSpacing: '0.02em' }}>
                  Execution | Control | Analytics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (MATCHING IMAGE 3) */}
        <div className="mobile-only" style={{ padding: '2.5rem 1.25rem', backgroundColor: 'var(--warm-white)' }}>
          {/* Dark Navy Header Card */}
          <div className="reveal-on-scroll" style={{
            backgroundColor: 'var(--dark-navy)',
            color: 'var(--white)',
            borderRadius: '16px',
            padding: '2.25rem 1.5rem',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 20px rgba(6,29,48,0.12)'
          }}>
            <span className="eyebrow" style={{ color: 'var(--energy-orange)', fontSize: '0.825rem', letterSpacing: '0.08em' }}>ABOUT URJAEDGE</span>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--white)', margin: '0.65rem 0 0.85rem', fontWeight: 800, lineHeight: 1.15 }}>
              Where Energy Meets<br />Innovation.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55 }}>
              We combine experienced solar plant operations with purpose-built digital management.
            </p>
          </div>

          <p className="reveal-on-scroll stagger-1" style={{ fontSize: '0.95rem', color: 'var(--primary-text)', lineHeight: 1.6, marginBottom: '2.25rem' }}>
            UrjaEdge helps solar asset owners operate with clarity, accountability and control - from daily site execution to management-level visibility.
          </p>

          <span className="eyebrow reveal-on-scroll stagger-1" style={{ fontSize: '0.825rem', letterSpacing: '0.08em', marginBottom: '1.25rem', display: 'block' }}>
            TWO CAPABILITIES. ONE ENERGY PARTNER.
          </span>

          {/* On-Ground O&M Card */}
          <div className="reveal-on-scroll stagger-1" style={{
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '1.75rem 1.25rem',
            marginBottom: '1.25rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              ON-GROUND O&M
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Site manpower
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Maintenance planning
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Testing & inspection
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Cleaning & vegetation
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Safety & compliance
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Performance improvement
              </li>
            </ul>
          </div>

          {/* Digital Management Card */}
          <div className="reveal-on-scroll stagger-2" style={{
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '1.75rem 1.25rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              DIGITAL MANAGEMENT
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Paperless processes
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Centralized visibility
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Manpower & inventory control
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Safety & alarm monitoring
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Plant analytics
              </li>
              <li style={{ fontSize: '0.875rem', color: 'var(--primary-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--energy-orange)', fontSize: '1.1rem', lineHeight: 1 }}>•</span> Management reporting
              </li>
            </ul>
            <div>
              <button 
                onClick={() => scrollToSection('contact-us')} 
                className="btn-primary" 
                style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', borderRadius: '50px' }}
              >
                TALK TO URJAEDGE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SCREEN 05 / CONTACT
          ======================================================== */}
      <section id="contact-us" style={{ borderTop: '1px solid var(--border-color)' }}>
        {/* DESKTOP VIEW (100% UNTOUCHED) */}
        <div className="desktop-only" style={{ padding: '0', backgroundColor: 'var(--warm-white)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '460px 1fr', minHeight: '650px' }}>
            
            {/* Left Column: Dark Navy Info Box */}
            <div className="contact-info-card reveal-on-scroll stagger-1" style={{ padding: '5.5rem 4rem' }}>
              <span className="eyebrow" style={{ color: 'var(--energy-orange)' }}>START A CONVERSATION</span>
              <h2 style={{ fontSize: '2.75rem', color: 'var(--white)', marginBottom: '1.75rem', fontWeight: '800', lineHeight: '1.18', letterSpacing: '-0.01em' }}>
                Let us discuss your<br />
                solar O&M requirement.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.1rem', marginBottom: '4rem', lineHeight: '1.65' }}>
                Choose expert O&M services, management software, or an integrated model.
              </p>

              <div style={{ marginTop: 'auto' }}>
                <div className="contact-info-company" style={{ color: 'var(--energy-orange)', fontWeight: '700', fontSize: '1.05rem', letterSpacing: '0.03em', marginBottom: '1.15rem' }}>
                  URJAEDGE ENERGY MANAGEMENT
                </div>
                <div className="contact-info-address" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  202, Jayshree Apartment, New Palasia,<br />
                  Indore - 452001, Madhya Pradesh
                </div>
                <div style={{ marginBottom: '0.65rem' }}>
                  <a 
                    href="mailto:urjaedge@gmail.com" 
                    style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: '500', transition: 'color 0.2s ease', display: 'inline-block' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--energy-orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--white)'}
                  >
                    urjaedge@gmail.com
                  </a>
                </div>
                <div>
                  <a 
                    href="tel:+918770337731" 
                    style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: '500', transition: 'color 0.2s ease', display: 'inline-block' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--energy-orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--white)'}
                  >
                    +91 87703 37731
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: White Form Box */}
            <div className="contact-form-card reveal-on-scroll stagger-2" style={{ padding: '5.5rem 4.5rem' }}>
              <h2 style={{ fontSize: '2.75rem', color: 'var(--primary-navy)', marginBottom: '2.75rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
                Tell us what you need.
              </h2>

              {submitted ? (
                <div style={{ padding: '3.5rem 1rem' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary-navy)', marginBottom: '1.25rem', fontWeight: '700' }}>
                    Thank you!
                  </h3>
                  <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem', marginBottom: '2.25rem', lineHeight: '1.6' }}>
                    Your enquiry has been submitted successfully. We will get back to you shortly.
                  </p>
                  <button onClick={handleResetForm} className="btn-primary">
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    
                    {/* Name & Company */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="form-control" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        className="form-control" 
                        value={formData.company} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>

                    {/* Email & Mobile */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-control" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="mobile">Mobile</label>
                      <input 
                        type="tel" 
                        id="mobile" 
                        name="mobile" 
                        className="form-control" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>

                    {/* Requirement Dropdown */}
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="requirement">Requirement</label>
                      <select 
                        id="requirement" 
                        name="requirement" 
                        className="form-control" 
                        value={formData.requirement} 
                        onChange={handleChange} 
                        required
                      >
                        <option value="Solar Plant O&M Services">Solar Plant O&M Services</option>
                        <option value="Solar O&M Management Software">Solar O&M Management Software</option>
                        <option value="Integrated O&M Services and Software">Integrated O&M Services and Software</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    {/* Brief Details Textarea */}
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="briefDetails">Brief details</label>
                      <textarea 
                        id="briefDetails" 
                        name="briefDetails" 
                        className="form-control" 
                        rows="4" 
                        value={formData.briefDetails} 
                        onChange={handleChange} 
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="form-group full-width" style={{ marginTop: '1.25rem' }}>
                      <button type="submit" className="btn-primary" style={{ padding: '1rem 2.75rem', width: 'auto' }}>
                        Submit enquiry
                      </button>
                    </div>

                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* MOBILE VIEW (MATCHING IMAGE 2) */}
        <div className="mobile-only" style={{ padding: '2.5rem 1.25rem 3rem', backgroundColor: 'var(--warm-white)' }}>
          <div className="reveal-on-scroll">
            <span className="eyebrow" style={{ fontSize: '0.825rem', letterSpacing: '0.08em' }}>START A CONVERSATION</span>
            <h2 style={{ fontSize: '2.15rem', color: 'var(--primary-navy)', margin: '0.65rem 0 0.85rem', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              How can we help?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--secondary-text)', lineHeight: 1.55, marginBottom: '2rem' }}>
              Request an O&M proposal, book a software demo or send a general enquiry.
            </p>
          </div>

          {/* Form Card */}
          <div className="reveal-on-scroll stagger-1" style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '1.75rem 1.25rem',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
          }}>
            {submitted ? (
              <div style={{ padding: '2rem 0.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)', marginBottom: '1rem', fontWeight: 800 }}>
                  Thank you!
                </h3>
                <p style={{ color: 'var(--secondary-text)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                  Your enquiry has been submitted successfully. We will get back to you shortly.
                </p>
                <button onClick={handleResetForm} className="btn-primary" style={{ width: '100%', borderRadius: '50px' }}>
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 0.75rem' }}>
                  
                  {/* Row 1: Name * | Company name * */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="mob-name" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Name *</label>
                    <input 
                      type="text" 
                      id="mob-name" 
                      name="name" 
                      className="form-control" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="mob-company" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Company name *</label>
                    <input 
                      type="text" 
                      id="mob-company" 
                      name="company" 
                      className="form-control" 
                      value={formData.company} 
                      onChange={handleChange} 
                      required 
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    />
                  </div>

                  {/* Row 2: Email * | Mobile * */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="mob-email" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Email *</label>
                    <input 
                      type="email" 
                      id="mob-email" 
                      name="email" 
                      className="form-control" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="mob-mobile" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Mobile *</label>
                    <input 
                      type="tel" 
                      id="mob-mobile" 
                      name="mobile" 
                      className="form-control" 
                      value={formData.mobile} 
                      onChange={handleChange} 
                      required 
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    />
                  </div>

                  {/* Row 3: Plant / project location | Solar plant capacity */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="mob-location" style={{ fontSize: '0.75rem', fontWeight: 600 }}>Plant / project location</label>
                    <input 
                      type="text" 
                      id="mob-location" 
                      name="location" 
                      className="form-control" 
                      value={formData.location} 
                      onChange={handleChange} 
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="mob-capacity" style={{ fontSize: '0.75rem', fontWeight: 600 }}>Solar plant capacity</label>
                    <input 
                      type="text" 
                      id="mob-capacity" 
                      name="capacity" 
                      className="form-control" 
                      value={formData.capacity} 
                      onChange={handleChange} 
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    />
                  </div>

                  {/* Row 4: Requirement type * (Full Width) */}
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label" htmlFor="mob-requirement" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Requirement type *</label>
                    <select 
                      id="mob-requirement" 
                      name="requirement" 
                      className="form-control" 
                      value={formData.requirement} 
                      onChange={handleChange} 
                      required
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    >
                      <option value="Solar Plant O&M Services">Solar Plant O&M Services</option>
                      <option value="Solar O&M Management Software">Solar O&M Management Software</option>
                      <option value="Integrated O&M Services and Software">Integrated O&M Services and Software</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {/* Row 5: Brief requirement * (Full Width) */}
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label" htmlFor="mob-briefDetails" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Brief requirement *</label>
                    <textarea 
                      id="mob-briefDetails" 
                      name="briefDetails" 
                      className="form-control" 
                      rows="4" 
                      value={formData.briefDetails} 
                      onChange={handleChange} 
                      required
                      style={{ fontSize: '16px', padding: '0.75rem 0.85rem', borderRadius: '8px' }}
                    />
                  </div>

                  {/* Row 6: Consent Checkbox (Full Width) */}
                  <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '0.65rem', marginTop: '0.25rem' }}>
                    <input 
                      type="checkbox" 
                      id="mob-privacyConsent" 
                      name="privacyConsent" 
                      checked={formData.privacyConsent} 
                      onChange={handleChange} 
                      required 
                      style={{ width: '18px', height: '18px', accentColor: 'var(--energy-orange)' }}
                    />
                    <label htmlFor="mob-privacyConsent" style={{ fontSize: '0.8rem', color: 'var(--secondary-text)', cursor: 'pointer' }}>
                      I agree to the{' '}
                      <span 
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPrivacyModalOpen(true); }}
                        style={{ color: 'var(--energy-orange)', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}
                      >
                        privacy policy
                      </span>{' '}
                      and contact consent.
                    </label>
                  </div>

                  {/* Row 7: Submit Button (Full Width) */}
                  <div style={{ gridColumn: '1 / -1', marginTop: '0.75rem' }}>
                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.9rem 1.5rem', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', borderRadius: '50px' }}>
                      SUBMIT ENQUIRY
                    </button>
                  </div>

                </div>
              </form>
            )}
          </div>

          {/* Dark Navy Info Card */}
          <div className="reveal-on-scroll stagger-2" style={{
            backgroundColor: 'var(--dark-navy)',
            color: 'var(--white)',
            borderRadius: '16px',
            padding: '2rem 1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ color: 'var(--white)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              URJAEDGE ENERGY MANAGEMENT
            </div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              202, Jayshree Apartment, New Palasia, Indore - 452001, Madhya Pradesh
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <a 
                href="mailto:urjaedge@gmail.com" 
                style={{ color: 'var(--white)', fontSize: '0.95rem', fontWeight: 600, display: 'inline-block' }}
              >
                urjaedge@gmail.com
              </a>
            </div>
            <div>
              <a 
                href="tel:+918770337731" 
                style={{ color: 'var(--white)', fontSize: '0.95rem', fontWeight: 600, display: 'inline-block' }}
              >
                +91 87703 37731
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div 
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
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div 
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '100%',
              padding: '2rem 1.75rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span className="eyebrow" style={{ marginBottom: 0 }}>URJAEDGE POLICY</span>
              <button 
                onClick={() => setPrivacyModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.4rem',
                  lineHeight: 1,
                  color: 'var(--secondary-text)',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Privacy & Contact Consent
            </h3>

            <div style={{ fontSize: '0.9rem', color: 'var(--primary-text)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
              <p>
                <strong>1. Data Confidentiality:</strong> Any solar plant details, capacities, locations, and contact information you submit are treated with strict corporate confidentiality.
              </p>
              <p>
                <strong>2. Zero Third-Party Sharing:</strong> Your personal and company data is never sold, shared, or distributed to third-party vendors or advertisers.
              </p>
              <p>
                <strong>3. Contact Permission:</strong> By submitting an enquiry, you consent to UrjaEdge contacting you via email or phone exclusively regarding your requested O&M proposal, software demo, or related solar advisory.
              </p>
            </div>

            <button 
              onClick={() => setPrivacyModalOpen(false)} 
              className="btn-primary"
              style={{ width: '100%', borderRadius: '50px', padding: '0.85rem' }}
            >
              Understood
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
