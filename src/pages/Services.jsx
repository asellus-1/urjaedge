import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const scopeItems = [
    "Preventive maintenance",
    "Corrective maintenance",
    "Testing and thermography",
    "Module cleaning",
    "Vegetation management",
    "Safety and compliance",
    "Inventory and spares",
    "Performance improvement"
  ];

  const fullServiceModules = [
    { num: "01", title: "Plant Operation & Monitoring" },
    { num: "02", title: "Preventive Maintenance" },
    { num: "03", title: "Corrective & Breakdown Maintenance" },
    { num: "04", title: "Module Cleaning" },
    { num: "05", title: "Vegetation Management" },
    { num: "06", title: "Testing & Thermography" },
    { num: "07", title: "Electrical Equipment Care (Inverters, Transformers, HT/LT)" },
    { num: "08", title: "Safety & Compliance Management" },
    { num: "09", title: "Inventory & Spares Management" },
    { num: "10", title: "Performance Reporting & Analytics" }
  ];

  return (
    <main>
      {/* Header Banner */}
      <section className="services-header-banner">
        <div className="container">
          <span className="eyebrow">SOLAR PLANT O&M SERVICES</span>
          <h1>Reliable operations. Stronger performance.</h1>
          <p>
            Comprehensive site execution focused on safety, availability, generation and asset life.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'start' }}>
            
            {/* Left Column: Scope & Services */}
            <div>
              <span className="eyebrow">OUR SCOPE</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
                Complete plant care
              </h2>

              {/* 8-Grid Scope Cards with Plus (+) Icons */}
              <div className="scope-grid">
                {scopeItems.map((item, idx) => (
                  <div key={idx} className="scope-item-card">
                    <div className="scope-item-icon">+</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Full Service Modules List */}
              <div style={{ marginTop: '3.5rem' }}>
                <span className="eyebrow">SERVICE COVERAGE</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
                  End-to-end solar site execution
                </h3>
                <div className="numbered-services-grid">
                  {fullServiceModules.map((service, idx) => (
                    <div key={idx} className="numbered-service-card">
                      <span className="numbered-service-num">{service.num}</span>
                      <span className="numbered-service-title">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Owner Outcomes */}
            <div className="outcomes-card" style={{ sticky: true, top: '120px' }}>
              <span className="eyebrow">OWNER OUTCOMES</span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-navy)', marginBottom: '2rem' }}>
                Value delivered to asset owners
              </h3>

              <div className="outcome-item">
                <div className="outcome-title">Higher availability</div>
                <div className="outcome-desc">
                  Structured maintenance, routine inspections and faster incident closure to minimize downtime.
                </div>
              </div>

              <div className="outcome-item">
                <div className="outcome-title">Better generation</div>
                <div className="outcome-desc">
                  Early loss identification, string monitoring and focused performance recovery action.
                </div>
              </div>

              <div className="outcome-item">
                <div className="outcome-title">Longer asset life</div>
                <div className="outcome-desc">
                  Condition monitoring, thermal testing and disciplined equipment care.
                </div>
              </div>

              <div className="outcome-item">
                <div className="outcome-title">Enhanced safety & compliance</div>
                <div className="outcome-desc">
                  Strict adherence to safety standards, PPE compliance and site hazard prevention.
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link 
                  to="/contact-us?type=Solar Plant O&M Services" 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                >
                  Request an O&M proposal <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
