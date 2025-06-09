
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 32 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      
      {/* Brain outline */}
      <path
        d="M20 25 C20 15, 30 10, 40 15 C45 10, 55 10, 60 15 C70 10, 80 15, 80 25 C85 30, 85 40, 80 45 C85 50, 85 60, 80 65 C80 75, 70 80, 60 75 C55 80, 45 80, 40 75 C30 80, 20 75, 20 65 C15 60, 15 50, 20 45 C15 40, 15 30, 20 25 Z"
        fill="url(#brain-gradient)"
        stroke="url(#brain-gradient)"
        strokeWidth="2"
      />
      
      {/* Left brain (organic side) */}
      <path
        d="M25 30 C30 25, 35 30, 32 35 C38 32, 42 38, 38 42 C35 40, 30 45, 28 40 C25 42, 22 38, 25 35 C20 32, 22 28, 25 30 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 50 C35 45, 40 50, 37 55 C43 52, 47 58, 43 62 C40 60, 35 65, 33 60 C30 62, 27 58, 30 55 C25 52, 27 48, 30 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Right brain (circuit side) */}
      {/* Vertical lines */}
      <line x1="55" y1="25" x2="55" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="65" y1="30" x2="65" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="75" y1="35" x2="75" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Horizontal lines */}
      <line x1="50" y1="45" x2="70" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="55" y1="55" x2="75" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="50" y1="65" x2="65" y2="65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Circuit nodes */}
      <circle cx="55" cy="35" r="2" fill="currentColor"/>
      <circle cx="65" cy="40" r="2" fill="currentColor"/>
      <circle cx="75" cy="45" r="2" fill="currentColor"/>
      <circle cx="70" cy="45" r="2" fill="currentColor"/>
      <circle cx="55" cy="55" r="2" fill="currentColor"/>
      <circle cx="75" cy="55" r="2" fill="currentColor"/>
      <circle cx="65" cy="65" r="2" fill="currentColor"/>
      
      {/* Connection lines */}
      <line x1="55" y1="35" x2="65" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="65" y1="40" x2="70" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="55" y1="55" x2="65" y2="65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

export default Logo;
