import { Link } from '@/i18n/navigation';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline-light' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'group inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-volentis-cyan text-white hover:bg-volentis-cyan-hover focus:ring-volentis-cyan shadow-lg shadow-volentis-cyan/25 hover:shadow-xl hover:shadow-volentis-cyan/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white/80 backdrop-blur-sm text-volentis-navy border-2 border-volentis-navy/20 hover:border-volentis-cyan hover:text-volentis-cyan hover:-translate-y-0.5 active:translate-y-0 focus:ring-volentis-cyan',
    'outline-light': 'bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-volentis-navy hover:-translate-y-0.5 active:translate-y-0 focus:ring-white shadow-lg shadow-white/10',
    'white': 'bg-white text-volentis-navy hover:bg-gray-50 focus:ring-white shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
