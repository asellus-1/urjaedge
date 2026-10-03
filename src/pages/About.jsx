import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  const physicalBullets = [
    "Site manpower & experienced engineers",
    "Maintenance planning & schedule execution",
    "Testing & thermography inspection",
    "Module cleaning & vegetation control",
    "Safety standards & regulatory compliance",
    "Performance improvement & generation recovery"
  ];

  const digitalBullets = [
    "Paperless site operational processes",
    "Centralized visibility for asset owners",
    "Manpower & spare inventory control",
    "Safety audit & alarm monitoring",
    "Plant generation & loss analytics",
    "Management reporting & exportable MIS"
  ];

  return (
    <main>
      {/* Header Banner */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--warm-white)' }}>
        <div className="container">
          <span className="eyebrow">ABOUT URJAEDGE</span>
          <h1 style={{ fontSize: '3.25rem', color: 'var(--primary-navy)', marginBottom: '1.5rem', maxWidth: '850px' }}>
            Where energy meets innovation.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-text)', maxWidth: '780px', lineHeight: '1.6', marginBottom: '1rem' }}>
            UrjaEdge Energy Management combines experienced solar plant operations with purpose-built digital management to help asset owners operate with clarity and control.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--primary-text)', maxWidth: '780px' }}>
            UrjaEdge helps solar asset owners operate with clarity, accountability and control - from daily site execution to management-level visibility.
          </p>
        </div>
      </section>

      {/* Two Capabilities Section */}
      <section style={{ padding: '2rem 0 5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow">TWO CAPABILITIES. ONE ENERGY PARTNER.</span>
            <h2 style={{ fontSize: '2.25rem', color: 'var(--primary-navy)' }}>
              Dual strength for total plant assurance
            </h2>
          </div>

          <div className="capability-grid">
            {/* Card 1: Physical Capability */}
            <div className="capability-card-dark">
              <span className="eyebrow">PHYSICAL CAPABILITY</span>
              <h3>O&M Services</h3>
              <p>
                People, processes and engineering support for safe and reliable plant operations.
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--white)', fontSize: '1.1rem', marginBottom: '1rem' }}>ON-GROUND O&M</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {physicalBullets.map((bullet, idx) => (
                    <li key={idx} style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{ color: 'var(--energy-orange)', fontWeight: 'bold' }}>•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-tags">
                Maintenance | Testing | Performance
              </div>
            </div>

            {/* Card 2: Digital Capability */}
            <div className="capability-card-light">
              <span className="eyebrow">DIGITAL CAPABILITY</span>
              <h3>O&M Software</h3>
              <p>
                Paperless workflows and central visibility for site teams, managers and asset owners.
              </p>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--primary-navy)', fontSize: '1.1rem', marginBottom: '1rem' }}>DIGITAL MANAGEMENT</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {digitalBullets.map((bullet, idx) => (
                    <li key={idx} style={{ color: 'var(--primary-text)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{ color: 'var(--energy-orange)', fontWeight: 'bold' }}>•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-tags">
                Execution | Control | Analytics
              </div>
            </div>
          </div>

          {/* Positioning summary box & CTA */}
          <div style={{ marginTop: '3.5rem', textAlign: 'center', backgroundColor: 'var(--soft-grey-blue)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem 2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
              Ready to elevate your solar plant operations?
            </h3>
            <p style={{ color: 'var(--secondary-text)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Whether you need turnkey on-ground site maintenance, paperless digital software, or a combined integrated model.
            </p>
            <Link to="/contact-us" className="btn-primary">
              Talk to UrjaEdge <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
