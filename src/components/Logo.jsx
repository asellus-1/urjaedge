import React from 'react';

export default function Logo({ className = '', style = {} }) {
  return (
    <div 
      className={`logo-container ${className}`} 
      style={{ 
        display: 'inline-flex',
        alignItems: 'center',
        ...style 
      }}
    >
      <img 
        src="/logo.svg" 
        alt="UrjaEdge Energy Management - Where Energy Meets Innovation" 
        width="200"
        height="48"
        fetchPriority="high"
        decoding="async"
        style={{ 
          height: '48px', 
          width: 'auto', 
          display: 'block', 
          objectFit: 'contain' 
        }} 
      />
    </div>
  );
}
