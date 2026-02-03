'use client';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'dark' | 'light';
  className?: string;
}

export default function AnimatedBackground({ variant = 'hero', className = '' }: AnimatedBackgroundProps) {
  const isDark = variant === 'dark';
  
  // Colors based on variant
  const waveColor = isDark ? 'rgba(42, 170, 217, 0.08)' : 'rgba(42, 170, 217, 0.06)';
  const waveColor2 = isDark ? 'rgba(125, 211, 232, 0.06)' : 'rgba(27, 58, 75, 0.03)';
  const bgGradient = isDark 
    ? 'from-volentis-navy via-volentis-navy to-[#0a1929]'
    : 'from-[#f8fafc] via-[#f1f5f9] to-[#e8f4f8]';

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`} />
      
      {/* Animated wave layers - organic flowing shapes */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wave layer 1 - slowest, back */}
        <path 
          className="animate-wave-slow"
          fill={waveColor}
          d="M0,300 C150,250 350,200 500,250 C650,300 750,400 900,350 C1050,300 1200,200 1350,250 C1400,265 1420,280 1440,300 L1440,900 L0,900 Z"
        />
        
        {/* Wave layer 2 */}
        <path 
          className="animate-wave-medium"
          fill={waveColor2}
          d="M0,400 C200,350 300,450 500,400 C700,350 800,300 1000,350 C1200,400 1300,450 1440,400 L1440,900 L0,900 Z"
        />
        
        {/* Wave layer 3 */}
        <path 
          className="animate-wave-slow-reverse"
          fill={waveColor}
          d="M0,500 C180,450 320,550 500,500 C680,450 820,400 1000,450 C1180,500 1320,550 1440,500 L1440,900 L0,900 Z"
        />
        
        {/* Wave layer 4 - front */}
        <path 
          className="animate-wave-medium-reverse"
          fill={waveColor2}
          d="M0,600 C240,550 360,650 600,600 C840,550 960,500 1200,550 C1320,575 1380,600 1440,600 L1440,900 L0,900 Z"
        />

        {/* Curved line accents */}
        <path 
          className="animate-wave-slow"
          fill="none"
          stroke={isDark ? 'rgba(42, 170, 217, 0.15)' : 'rgba(42, 170, 217, 0.1)'}
          strokeWidth="2"
          d="M-100,350 C150,280 350,380 550,320 C750,260 950,360 1150,300 C1350,240 1450,320 1600,280"
        />
        
        <path 
          className="animate-wave-medium"
          fill="none"
          stroke={isDark ? 'rgba(42, 170, 217, 0.12)' : 'rgba(42, 170, 217, 0.08)'}
          strokeWidth="1.5"
          d="M-50,450 C200,400 350,500 550,450 C750,400 900,480 1100,430 C1300,380 1400,450 1550,420"
        />

        <path 
          className="animate-wave-slow-reverse"
          fill="none"
          stroke={isDark ? 'rgba(125, 211, 232, 0.1)' : 'rgba(27, 58, 75, 0.06)'}
          strokeWidth="1"
          d="M-80,550 C180,500 320,580 520,540 C720,500 880,560 1080,520 C1280,480 1400,540 1580,510"
        />
      </svg>

      {/* Subtle gradient overlay for depth */}
      <div 
        className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-t from-volentis-navy/50 via-transparent to-transparent'
            : 'bg-gradient-to-t from-white/30 via-transparent to-transparent'
        }`}
      />
    </div>
  );
}
