import React, { createContext, useContext, useState, useEffect } from 'react';
import ContactModal from '../components/ContactModal';

const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState(null);

  const openContactModal = (type = null) => {
    setInquiryType(type);
    setIsOpen(true);
  };

  const closeContactModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.openContactModal = openContactModal;
    return () => {
      delete window.openContactModal;
    };
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, openContactModal, closeContactModal }}>
      {children}
      <ContactModal 
        isOpen={isOpen} 
        onClose={closeContactModal} 
        inquiryType={inquiryType} 
      />
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
