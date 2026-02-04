'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

// Microsoft Bookings URL with UTM tracking
const BOOKING_URL = 'https://outlook.office.com/bookwithme/user/e24fb78dcb5249b0ad5bdb243afdf606@bestpractice.company/meetingtype/yKbah1Aiw0-vtABEXfovSQ2?anonymous&ep=mlink&utm_source=website&utm_medium=landing_page&utm_campaign=hr-partners-lp';

// Animation hook for scroll-triggered animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Animated counter component
function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const { ref, isInView } = useInView();
  
  useEffect(() => {
    if (!isInView) return;
    
    // Extract number from string like "15+" or "€2500+"
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetNum = parseInt(numericMatch[0]);
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const suffix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    
    let start = 0;
    const step = targetNum / (duration / 16);
    
    const timer = setInterval(() => {
      start += step;
      if (start >= targetNum) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(`${prefix}${Math.floor(start)}${suffix}`);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

// Partner Header Component (specific for this landing page)
function PartnerHeader({ ctaText, ctaHref = '#cta' }: { ctaText?: string; ctaHref?: string }) {
  const t = useTranslations('landingHRPartners');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/volentis_logo.png"
              alt="Volentis.ai"
              width={160}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* CTA Button */}
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-volentis-cyan text-white text-sm font-semibold rounded-lg hover:bg-volentis-cyan-hover transition-all shadow-sm hover:shadow-md"
          >
            {ctaText || t('hero.cta')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

// Process Step Component
function ProcessStep({ 
  number, 
  title, 
  description, 
  isLast = false 
}: { 
  number: number; 
  title: string; 
  description: string; 
  isLast?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step number */}
      <div className="w-16 h-16 rounded-full bg-volentis-cyan text-white text-2xl font-bold flex items-center justify-center mb-4 shadow-lg shadow-volentis-cyan/25 z-10">
        {number}
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-bold text-volentis-navy mb-2">{title}</h3>
      <p className="text-sm text-text-body max-w-[200px]">{description}</p>
      
      {/* Connector line (hidden on mobile, visible on desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-volentis-cyan to-accent-light" />
      )}
    </div>
  );
}

// Partner Tier Card Component
function TierCard({ 
  name, 
  clients, 
  discount, 
  support, 
  featured = false 
}: { 
  name: string; 
  clients: string; 
  discount: string; 
  support: string; 
  featured?: boolean;
}) {
  return (
    <div className={`relative p-6 rounded-2xl transition-all hover:-translate-y-1 ${
      featured 
        ? 'bg-volentis-navy text-white shadow-xl scale-105' 
        : 'bg-white border border-border-gray/20 shadow-card hover:shadow-card-hover'
    }`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-volentis-cyan text-white text-xs font-semibold rounded-full">
          Populair
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-4 ${featured ? 'text-white' : 'text-volentis-navy'}`}>
        {name}
      </h3>
      
      <ul className="space-y-3">
        <li className={`flex items-center gap-3 text-sm ${featured ? 'text-white/80' : 'text-text-body'}`}>
          <svg className={`w-5 h-5 flex-shrink-0 ${featured ? 'text-volentis-cyan' : 'text-accent-success'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {clients}
        </li>
        <li className={`flex items-center gap-3 text-sm ${featured ? 'text-white/80' : 'text-text-body'}`}>
          <svg className={`w-5 h-5 flex-shrink-0 ${featured ? 'text-volentis-cyan' : 'text-accent-success'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {discount}
        </li>
        <li className={`flex items-center gap-3 text-sm ${featured ? 'text-white/80' : 'text-text-body'}`}>
          <svg className={`w-5 h-5 flex-shrink-0 ${featured ? 'text-volentis-cyan' : 'text-accent-success'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {support}
        </li>
      </ul>
    </div>
  );
}

// Use Case Card Component
function UseCaseCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-border-gray/10 hover:border-volentis-cyan/20">
      <div className="w-12 h-12 bg-volentis-cyan/10 rounded-xl flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-volentis-navy mb-2">{title}</h3>
      <p className="text-sm text-text-body">{description}</p>
    </div>
  );
}

// Security Point Component
function SecurityPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-4">
      <div className="w-10 h-10 bg-accent-success/10 rounded-full flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-volentis-navy mb-1">{title}</h3>
        <p className="text-sm text-text-body">{description}</p>
      </div>
    </div>
  );
}

export default function HRPartnersLandingPage() {
  const t = useTranslations('landingHRPartners');

  // Animation refs
  const heroRef = useInView(0.2);
  const benefitsRef = useInView(0.2);
  const processRef = useInView(0.2);
  const useCasesRef = useInView(0.2);
  const tiersRef = useInView(0.2);
  const securityRef = useInView(0.2);

  return (
    <>
      <PartnerHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Animated background with particles */}
        <AnimatedBackground variant="hero" />

        <div 
          ref={heroRef.ref}
          className={`section-container relative transition-all duration-1000 ${
            heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 md:py-20">
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-volentis-navy/5 border border-volentis-navy/10 rounded-full text-sm font-medium text-volentis-navy animate-fade-in">
                <span className="w-2 h-2 bg-accent-success rounded-full animate-pulse" />
                {t('hero.badge')}
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-volentis-navy tracking-tight leading-[1.1]">
                  {t('hero.headline')}
                </h1>
                <p className="text-xl md:text-2xl text-text-body leading-relaxed">
                  {t('hero.subheadline')}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-volentis-cyan text-white text-lg font-semibold rounded-xl hover:bg-volentis-cyan-hover transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  {t('hero.cta')}
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-volentis-navy/20 text-volentis-navy text-lg font-semibold rounded-xl hover:border-volentis-cyan hover:text-volentis-cyan transition-all"
                >
                  {t('hero.secondaryCta')}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  {t('hero.trust.whitelabel')}
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="text-lg">🇪🇺</span>
                  {t('hero.trust.euHosted')}
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('hero.trust.revenueShare')}
                </div>
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {['partners', 'clients', 'revenue', 'nps'].map((stat, index) => (
                  <div 
                    key={stat}
                    className="p-6 bg-white rounded-2xl shadow-card border border-border-gray/10 hover:shadow-card-hover transition-all hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-3xl md:text-4xl font-bold text-volentis-cyan mb-1">
                      <AnimatedCounter value={t(`stats.${stat}.value`)} />
                    </p>
                    <p className="text-sm text-text-muted">{t(`stats.${stat}.label`)}</p>
                  </div>
                ))}
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-volentis-navy text-white text-sm font-medium rounded-full shadow-lg animate-bounce-slow">
                {t('hero.floatingBadge')}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section 
        id="benefits"
        ref={benefitsRef.ref}
        className={`py-20 md:py-32 bg-white transition-all duration-1000 ${
          benefitsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num}
                className="group p-6 bg-bg-light rounded-2xl hover:bg-volentis-cyan/5 transition-all border-2 border-transparent hover:border-volentis-cyan/20"
              >
                <div className="w-14 h-14 bg-volentis-cyan/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-volentis-cyan/20 transition-colors">
                  {num === 1 && (
                    <svg className="w-7 h-7 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {num === 2 && (
                    <svg className="w-7 h-7 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {num === 3 && (
                    <svg className="w-7 h-7 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {num === 4 && (
                    <svg className="w-7 h-7 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-volentis-navy mb-2">
                  {t(`benefits.items.${num}.title`)}
                </h3>
                <p className="text-sm text-text-body">
                  {t(`benefits.items.${num}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - How Partnership Works */}
      <section 
        ref={processRef.ref}
        className={`py-20 md:py-32 bg-volentis-navy relative overflow-hidden transition-all duration-1000 ${
          processRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-volentis-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-light/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('process.title')}
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-volentis-cyan text-white text-2xl font-bold flex items-center justify-center mb-4 shadow-lg shadow-volentis-cyan/25 z-10">
                  {num}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{t(`process.steps.${num}.title`)}</h3>
                <p className="text-sm text-white/70 max-w-[200px]">{t(`process.steps.${num}.description`)}</p>
                
                {/* Connector line */}
                {num < 4 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-volentis-cyan to-accent-light" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - What their clients get */}
      <section 
        ref={useCasesRef.ref}
        className={`py-20 md:py-32 bg-bg-light transition-all duration-1000 ${
          useCasesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('useCases.title')}
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('useCases.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <UseCaseCard 
              icon="🙋"
              title={t('useCases.items.1.title')}
              description={t('useCases.items.1.description')}
            />
            <UseCaseCard 
              icon="⏰"
              title={t('useCases.items.2.title')}
              description={t('useCases.items.2.description')}
            />
            <UseCaseCard 
              icon="🌙"
              title={t('useCases.items.3.title')}
              description={t('useCases.items.3.description')}
            />
            <UseCaseCard 
              icon="🌍"
              title={t('useCases.items.4.title')}
              description={t('useCases.items.4.description')}
            />
          </div>
        </div>
      </section>

      {/* Partner Tiers Section */}
      <section 
        ref={tiersRef.ref}
        className={`py-20 md:py-32 bg-white transition-all duration-1000 ${
          tiersRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('tiers.title')}
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('tiers.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto items-center">
            <TierCard 
              name={t('tiers.silver.name')}
              clients={t('tiers.silver.clients')}
              discount={t('tiers.silver.discount')}
              support={t('tiers.silver.support')}
            />
            <TierCard 
              name={t('tiers.gold.name')}
              clients={t('tiers.gold.clients')}
              discount={t('tiers.gold.discount')}
              support={t('tiers.gold.support')}
              featured={true}
            />
            <TierCard 
              name={t('tiers.platinum.name')}
              clients={t('tiers.platinum.clients')}
              discount={t('tiers.platinum.discount')}
              support={t('tiers.platinum.support')}
            />
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section 
        ref={securityRef.ref}
        className={`py-20 md:py-32 bg-bg-light transition-all duration-1000 ${
          securityRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('security.title')}
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('security.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[1, 2, 3, 4].map((num) => (
              <SecurityPoint 
                key={num}
                title={t(`security.points.${num}.title`)}
                description={t(`security.points.${num}.description`)}
              />
            ))}
          </div>

          {/* Security badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {['gdpr', 'euAiAct', 'euHosted', 'dataIsolation'].map((badge) => (
              <div key={badge} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-volentis-navy shadow-sm">
                {t(`security.badges.${badge}`)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-volentis-navy via-volentis-navy to-volentis-navy/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-volentis-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-light/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {t('cta.subtitle')}
              </p>

              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className="flex items-center gap-3 text-white/80 lg:justify-start justify-center">
                    <svg className="w-5 h-5 text-volentis-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(`cta.benefits.${num}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Booking Widget */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-border-gray/20">
                <h3 className="text-xl font-bold text-volentis-navy mb-1">
                  {t('cta.booking.title')}
                </h3>
                <p className="text-sm text-text-body">
                  {t('cta.booking.subtitle')}
                </p>
              </div>

              {/* Microsoft Bookings Link */}
              <div className="p-6 text-center">
                <div className="bg-bg-light rounded-xl p-8 mb-4">
                  <div className="w-16 h-16 bg-volentis-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-volentis-cyan text-white text-lg font-semibold rounded-xl shadow-lg shadow-volentis-cyan/25 hover:shadow-xl hover:shadow-volentis-cyan/30 hover:bg-volentis-cyan-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t('cta.booking.button')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p className="text-xs text-text-muted">
                  {t('cta.booking.fallback')}{' '}
                  <a href="mailto:partners@volentis.ai" className="text-volentis-cyan hover:underline">
                    partners@volentis.ai
                  </a>
                </p>
              </div>

              {/* Trust badges in booking card */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap justify-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('cta.booking.trust.free')}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('cta.booking.trust.duration')}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('cta.booking.trust.noCommitment')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-volentis-navy border-t border-white/10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/volentis_logo.png"
                alt="Volentis.ai"
                width={24}
                height={24}
              />
              <span className="text-white/60 text-sm">{t('footer.copyright')}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                {t('footer.links.privacy')}
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                {t('footer.links.terms')}
              </Link>
              <Link href="/product/security" className="text-white/60 hover:text-white transition-colors">
                {t('footer.links.security')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
