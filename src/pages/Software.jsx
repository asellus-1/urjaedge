import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function Software() {
  const primaryModules = [
    {
      title: "Daily Inspection & PM",
      desc: "Mobile-first site activities, scheduled preventive maintenance routines, and real-time task completion."
    },
    {
      title: "Attendance & Manpower",
      desc: "Deployment visibility, shift tracking, manpower productivity, and site team management."
    },
    {
      title: "Inventory & Critical Spares",
      desc: "Stock levels monitoring, spare parts issuance, material movement tracking, and reorder alerts."
    },
    {
      title: "Safety & Incidents",
      desc: "Hazard reporting, safety audit logs, corrective action tracking, and closure verification."
    },
    {
      title: "Alarms & Breakdowns",
      desc: "Instant issue logging, breakdown resolution tracking, equipment downtime tracking, and response visibility."
    },
    {
      title: "Performance Analytics",
      desc: "Generation tracking, plant PR, degradation analysis, loss identification, and trend reporting."
    },
    {
      title: "Documents & Compliance",
      desc: "Controlled records storage, statutory permit tracking, compliance due dates, and audit readiness."
    },
    {
      title: "Cleaning & Vegetation",
      desc: "Cycle planning, execution tracking, cleaning quality verification, and vegetation control logs."
    }
  ];

  const fullSoftwareModules = [
    { no: "1", title: "Asset Registry" },
    { no: "2", title: "Attendance & Manpower" },
    { no: "3", title: "Daily Inspection" },
    { no: "4", title: "Preventive Maintenance" },
    { no: "5", title: "Breakdown Management" },
    { no: "6", title: "Module Cleaning" },
    { no: "7", title: "Vegetation Management" },
    { no: "8", title: "Inventory & Critical Spares" },
    { no: "9", title: "Safety & Incident Management" },
    { no: "10", title: "Alarm Management" },
    { no: "11", title: "Generation Reporting" },
    { no: "12", title: "Performance Analytics" },
    { no: "13", title: "Power-Loss Analysis" },
    { no: "14", title: "Documents & Compliance Management" },
    { no: "15", title: "Owner Dashboard" },
    { no: "16", title: "Mobile Application" }
  ];

  const businessBenefits = [
    "Paperless operations and real-time visibility across all plants",
    "Standardized maintenance and manpower accountability",
    "Safety monitoring and centralized compliance records",
    "Faster identification of performance loss and inverter outages",
    "Owner and management level executive dashboards",
    "Multi-plant scalability for growing portfolios",
    "Exportable MIS and customized management reports"
  ];

  return (
    <main>
      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--soft-grey-blue)', padding: '4.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <span className="eyebrow">SOLAR O&M MANAGEMENT SOFTWARE</span>
          <h1 style={{ fontSize: '3rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
            Every activity. One connected system.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-text)', maxWidth: '750px' }}>
            Paperless management for plant operations, manpower, safety, inventory and performance.
          </p>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow">CORE MODULES</span>
            <h2 style={{ fontSize: '2.25rem', color: 'var(--primary-navy)' }}>
              Purpose-built for solar site teams & asset managers
            </h2>
          </div>

          <div className="software-modules-grid">
            {primaryModules.map((module, idx) => (
              <div key={idx} className="software-module-card">
                <div className="software-module-title">{module.title}</div>
                <div className="software-module-desc">{module.desc}</div>
              </div>
            ))}
          </div>

          {/* Complete Software Modules List */}
          <div style={{ marginTop: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="eyebrow">COMPLETE PLATFORM MODULES</span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)' }}>
                Comprehensive digital operational suite
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {fullSoftwareModules.map((item) => (
                <div 
                  key={item.no} 
                  style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{ 
                    color: 'var(--energy-orange)', 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: '700',
                    fontSize: '1rem',
                    width: '24px'
                  }}>
                    {item.no}
                  </span>
                  <span style={{ fontWeight: '600', color: 'var(--primary-navy)', fontSize: '0.95rem' }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div style={{ marginTop: '5rem', backgroundColor: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
            <span className="eyebrow">BUSINESS BENEFITS</span>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
              Why solar asset owners choose UrjaEdge Software
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {businessBenefits.map((benefit, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ color: 'var(--energy-orange)', marginTop: '2px', flexShrink: 0 }}>
                    <Check size={20} />
                  </div>
                  <span style={{ color: 'var(--primary-text)', fontSize: '0.95rem', fontWeight: '500' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dark CTA Box */}
          <div className="why-software-box">
            <h3>WHY URJAEDGE SOFTWARE?</h3>
            <p>Paperless • Real-time • Scalable • Exportable MIS</p>
            <Link to="/contact-us?type=Solar O&M Management Software" className="btn-primary" style={{ padding: '0.9rem 2.25rem' }}>
              Book a software demo <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
