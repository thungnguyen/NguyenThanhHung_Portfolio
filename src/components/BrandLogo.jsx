import React from 'react';

const BrandLogo = ({ className = 'w-10 h-10', showBg = true }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="brand-logo-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {showBg && (
        <rect
          width="100"
          height="100"
          rx="28"
          fill="url(#brand-logo-grad)"
        />
      )}
      {/* T Top Bar */}
      <path
        d="M 18 30 L 42 30"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* T Stem */}
      <path
        d="M 30 30 L 30 70"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* H Left Stem */}
      <path
        d="M 58 30 L 58 70"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* H Crossbar */}
      <path
        d="M 58 50 L 82 50"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* H Right Stem */}
      <path
        d="M 82 30 L 82 70"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};


export default BrandLogo;

