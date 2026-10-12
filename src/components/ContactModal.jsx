import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Phone, Mail, PhoneCall, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, inquiryType = null }) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setIsClosing(false);
    } else if (isRendered) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsRendered(false);
        setIsClosing(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    if (!isRendered) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRendered, isClosing]);

  if (!isRendered) return null;

  const phoneNumber = "+917880116970";
  const formattedPhone = "+91 78801 16970";
  const emailAddress = "urjaedge@gmail.com";

  return createPortal(
    <div 
      className="modal-overlay"
      onClick={handleClose}
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
        animation: isClosing 
          ? 'modalOverlayFadeOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' 
          : 'modalOverlayFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: 'calc(100vh - 2.5rem)',
          boxShadow: '0 25px 60px -15px rgba(6, 29, 48, 0.35)',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(220, 229, 234, 0.9)',
          animation: isClosing
            ? 'modalPopOut 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            : 'modalPopIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Subtle Brand Solar Top Bar */}
        <div style={{
          height: '4px',
          background: 'linear-gradient(90deg, var(--energy-orange), #ff9f43)'
        }} />

        {/* Minimal Header */}
        <div style={{
          padding: '1.5rem 1.75rem 1rem',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          borderBottom: '1px solid #EEF2F6',
          backgroundColor: '#FAFCFD'
        }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: '0.25rem', fontSize: '0.75rem' }}>
              DIRECT CONTACT
            </span>
            <h3 id="contact-modal-title" style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--primary-navy)',
              margin: 0,
              lineHeight: 1.2
            }}>
              Contact UrjaEdge
            </h3>
            {inquiryType && (
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--energy-orange)',
                fontWeight: 600,
                margin: '0.3rem 0 0',
                letterSpacing: '0.01em'
              }}>
                Regarding: {inquiryType}
              </p>
            )}
          </div>

          <button
            onClick={handleClose}
            aria-label="Close contact popup"
            style={{
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--primary-text)',
              transition: 'background 0.2s ease, transform 0.2s ease',
              flexShrink: 0
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
            <X size={17} />
          </button>
        </div>

        {/* Minimal Content Body */}
        <div style={{
          padding: '1.25rem 1.75rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}>

          {/* 1. Static Office Address */}
          <div style={{
            padding: '1.15rem 1.25rem',
            borderRadius: '16px',
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.9rem'
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'rgba(245, 130, 32, 0.12)',
              color: 'var(--energy-orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '0.1rem'
            }}>
              <MapPin size={19} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Registered Office
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.15rem' }}>
                UrjaEdge Energy Management
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--primary-text)', lineHeight: 1.55, marginTop: '0.25rem' }}>
                202, Jayshree Apartment, New Palasia,<br />
                Indore - 452001, Madhya Pradesh
              </div>
            </div>
          </div>

          {/* 2. Direct Phone / Call Us */}
          <div style={{
            padding: '1.15rem 1.25rem',
            borderRadius: '16px',
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(12, 45, 72, 0.08)',
                color: 'var(--primary-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={19} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Direct Phone / WhatsApp
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.15rem' }}>
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
                gap: '0.45rem',
                backgroundColor: 'var(--energy-orange)',
                color: '#FFFFFF',
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.86rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(245, 130, 32, 0.28)'
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
              Call us
            </a>
          </div>

          {/* 3. Official Email / Email Us */}
          <div style={{
            padding: '1.15rem 1.25rem',
            borderRadius: '16px',
            backgroundColor: 'var(--soft-grey-blue)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(12, 45, 72, 0.08)',
                color: 'var(--primary-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={19} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Official Email
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '0.15rem' }}>
                  {emailAddress}
                </div>
              </div>
            </div>

            <a 
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                inquiryType ? `Enquiry regarding UrjaEdge ${inquiryType}` : 'Enquiry regarding UrjaEdge Solar Solutions'
              )}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                backgroundColor: 'var(--primary-navy)',
                color: '#FFFFFF',
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.86rem',
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
              Email us
            </a>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}
