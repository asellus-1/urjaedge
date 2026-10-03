import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle, Send, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    requirement: 'Solar Plant O&M Services',
    briefDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle URL query parameter pre-selection
  useEffect(() => {
    if (typeParam) {
      const lower = typeParam.toLowerCase();
      if (lower.includes('service') || lower.includes('proposal')) {
        setFormData(prev => ({ ...prev, requirement: 'Solar Plant O&M Services' }));
      } else if (lower.includes('software') || lower.includes('demo')) {
        setFormData(prev => ({ ...prev, requirement: 'Solar O&M Management Software' }));
      } else if (lower.includes('integrated')) {
        setFormData(prev => ({ ...prev, requirement: 'Integrated O&M Services and Software' }));
      }
    }
  }, [typeParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your Name.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMsg('Please enter your Company name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid Email address.');
      return;
    }
    if (!formData.mobile.trim()) {
      setErrorMsg('Please enter your Mobile number.');
      return;
    }

    const existingEnquiries = JSON.parse(localStorage.getItem('urjaedge_enquiries') || '[]');
    existingEnquiries.push({
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('urjaedge_enquiries', JSON.stringify(existingEnquiries));

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      mobile: '',
      requirement: 'Solar Plant O&M Services',
      briefDetails: ''
    });
  };

  return (
    <main style={{ padding: '0', backgroundColor: 'var(--warm-white)' }}>
      <section id="contact-us" style={{ padding: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '460px 1fr', minHeight: '650px' }}>
          
          {/* Left Column: Dark Navy Info Box (Screen 05 exact match) */}
          <div className="contact-info-card" style={{ padding: '5.5rem 4rem' }}>
            <span className="eyebrow" style={{ color: 'var(--energy-orange)' }}>START A CONVERSATION</span>
            <h1 style={{ fontSize: '2.75rem', color: 'var(--white)', marginBottom: '1.75rem', fontWeight: '800', lineHeight: '1.18', letterSpacing: '-0.01em' }}>
              Let us discuss your<br />
              solar O&M requirement.
            </h1>
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
              <div style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '0.65rem', fontWeight: '500' }}>
                urjaedge@gmail.com
              </div>
              <div style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: '500' }}>
                +91 87703 37731
              </div>
            </div>
          </div>

          {/* Right Column: White Form Box (Screen 05 exact match) */}
          <div className="contact-form-card" style={{ padding: '5.5rem 4.5rem' }}>
            <h2 style={{ fontSize: '2.75rem', color: 'var(--primary-navy)', marginBottom: '2.75rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
              Tell us what you need.
            </h2>

            {submitted ? (
              <div style={{ padding: '3.5rem 1rem' }}>
                <div style={{ color: '#10B981', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <CheckCircle size={56} />
                </div>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary-navy)', marginBottom: '1.25rem', fontWeight: '700' }}>
                  Thank you!
                </h3>
                <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem', marginBottom: '2.25rem', lineHeight: '1.6' }}>
                  Your enquiry has been submitted successfully. We will get back to you shortly.
                </p>
                <button onClick={handleReset} className="btn-primary">
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #F87171', color: '#991B1B', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                    {errorMsg}
                  </div>
                )}

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
      </section>
    </main>
  );
}
