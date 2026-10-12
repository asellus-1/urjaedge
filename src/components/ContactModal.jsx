import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Phone, Mail, Navigation, PhoneCall, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const addressText = "202, Jayshree Apartment, New Palasia, Indore - 452001, Madhya Pradesh, India";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("202, Jayshree Apartment, New Palasia, Indore, Madhya Pradesh 452001")}`;
  const phoneNumber = "+917880116970";
  const formattedPhone = "+91 78801 16970";
  const emailAddress = "urjaedge@gmail.com";

  return createPortal(
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(6, 29, 48, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'fadeIn 0.2s ease-out'
      }}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '520px',
          width: '100%',
          maxHeight: 'calc(100vh - 2rem)',
          boxShadow: '0 25px 60px -15px rgba(6, 29, 48, 0.35)',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(220, 229, 234, 0.9)',
          animation: 'fadeInUp 0.25s ease'
        }}
      >
        {/* Header with warm solar accent bar */}
        <div style={{
          height: '5px',
          background: 'linear-gradient(90deg, var(--energy-orange), #ff9f43)'
        }} />

        <div style={{
          padding: '1.75rem 2rem 1.25rem',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          borderBottom: '1px solid #EEF2F6',
          backgroundColor: '#FAFCFD'
        }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: '0.35rem', fontSize: '0.78rem' }}>
              GET IN TOUCH DIRECTLY
            </span>
            <h3 id="contact-modal-title" style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--primary-navy)',
              margin: 0,
              lineHeight: 1.2
            }}>
              Contact UrjaEdge
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--secondary-text)',
              marginTop: '0.35rem',
              marginBottom: 0
            }}>
              Connect with our team for plant operations, inspections, and software demos.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close contact popup"
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--primary-text)',
              transition: 'background 0.2s ease, transform 0.2s ease',
              flexShrink: 0,
              marginLeft: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E2E8F0';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Contact Info Cards */}
        <div style={{
          padding: '1.25rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}>

          {/* 1. Address Card */}
          <div style={{
            padding: '1.15rem',
            borderRadius: '16px',
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 130, 32, 0.12)',
                color: 'var(--energy-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Registered Office
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.15rem' }}>
                  UrjaEdge Energy Management
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary-text)', lineHeight: 1.5, marginTop: '0.2rem' }}>
                  202, Jayshree Apartment, New Palasia,<br />
                  Indore - 452001, Madhya Pradesh
                </div>
              </div>
            </div>
            
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--primary-navy)',
                border: '1px solid #CBD5E1',
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--energy-orange)';
                e.currentTarget.style.color = 'var(--energy-orange)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.color = 'var(--primary-navy)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Navigation size={15} />
              Visit Us on Google Maps
            </a>
          </div>

          {/* 2. Phone Card */}
          <div style={{
            padding: '1.15rem',
            borderRadius: '16px',
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: 'rgba(12, 45, 72, 0.08)',
                color: 'var(--primary-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Direct Phone / WhatsApp
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.15rem' }}>
                  {formattedPhone}
                </div>
              </div>
            </div>

            <a 
              href={`tel:${phoneNumber}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--energy-orange)',
                color: '#FFFFFF',
                padding: '0.65rem 1.35rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(245, 130, 32, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--energy-orange-hover)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--energy-orange)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <PhoneCall size={15} />
              Call Us
            </a>
          </div>

          {/* 3. Email Card */}
          <div style={{
            padding: '1.15rem',
            borderRadius: '16px',
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: 'rgba(12, 45, 72, 0.08)',
                color: 'var(--primary-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Official Email
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.15rem' }}>
                  {emailAddress}
                </div>
              </div>
            </div>

            <a 
              href={`mailto:${emailAddress}?subject=Enquiry%20regarding%20UrjaEdge%20Solar%20Solutions`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--primary-navy)',
                color: '#FFFFFF',
                padding: '0.65rem 1.35rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(12, 45, 72, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--dark-navy)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-navy)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Send size={15} />
              Email Us
            </a>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}
