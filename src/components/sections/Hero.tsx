'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import ChatDemo from '@/components/ui/ChatDemo';

export default function Hero() {
  const t = useTranslations('hero');
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-8 md:pt-12 overflow-hidden">
      {/* Animated wave background */}
      <AnimatedBackground variant="hero" />

      <div className="section-container relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-6 md:py-8 lg:py-10 w-full">
          
          {/* Left Column - Text Content */}
          <div className="space-y-5 text-center lg:text-left">
            
            {/* EU Badge - Animated entrance */}
            <div 
              className={`inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-volentis-cyan/20 rounded-full shadow-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-lg">🇪🇺</span>
              <span className="text-sm font-semibold text-volentis-navy">{t('badge')}</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-success"></span>
              </span>
            </div>

            {/* Headlines - Staggered entrance */}
            <div className="space-y-4">
              {/* Main headline - Large & Bold */}
              <h1 
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-volentis-navy tracking-tight leading-[1.15] transition-all duration-700 delay-150 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('headline')}
              </h1>
              
              {/* Subheadline - Lighter weight, different color */}
              <p 
                className={`text-lg md:text-xl lg:text-2xl text-volentis-cyan font-medium leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {t('subheadline')}
              </p>
            </div>
            
            {/* Supporting text */}
            <p 
              className={`text-base md:text-lg text-text-body max-w-lg mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-450 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {t('description')}
            </p>

            {/* CTAs - Enhanced with icons and animations */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Primary CTA - Book a Demo */}
              <Link 
                href="/demo" 
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-volentis-cyan text-white text-base font-semibold rounded-xl shadow-lg shadow-volentis-cyan/25 hover:shadow-xl hover:shadow-volentis-cyan/30 hover:bg-volentis-cyan-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>{t('cta')}</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* Secondary CTA - See how it works */}
              <Link 
                href="/try/hr" 
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-volentis-navy text-base font-semibold rounded-xl border-2 border-volentis-navy/20 hover:border-volentis-cyan hover:text-volentis-cyan hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('secondaryCta')}</span>
              </Link>
            </div>

            {/* Key metrics - Redesigned cards */}
            <div 
              className={`grid grid-cols-3 gap-4 pt-4 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Metric 1 */}
              <div className="group relative p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="text-center lg:text-left">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-volentis-cyan to-accent-light bg-clip-text text-transparent">
                    50-70%
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 font-medium">{t('metrics.tickets')}</p>
                </div>
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-volentis-cyan to-accent-light rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Metric 2 */}
              <div className="group relative p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="text-center lg:text-left">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-volentis-cyan to-accent-light bg-clip-text text-transparent">
                    24/7
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 font-medium">{t('metrics.availability')}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-volentis-cyan to-accent-light rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Metric 3 */}
              <div className="group relative p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="text-center lg:text-left">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-volentis-cyan to-accent-light bg-clip-text text-transparent">
                    100%
                  </p>
                  <p className="text-xs text-text-muted mt-0.5 font-medium">{t('metrics.compliant')}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-volentis-cyan to-accent-light rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Right Column - Chat Demo with enhanced styling */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Glow effect behind chat */}
            <div className="absolute -inset-4 bg-gradient-to-r from-volentis-cyan/20 via-accent-light/20 to-volentis-cyan/20 rounded-3xl blur-2xl opacity-60 animate-pulse-slow" />
            
            {/* Floating decoration elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-volentis-cyan/10 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-light/10 rounded-full blur-xl animate-float animation-delay-2000" />
            
            {/* Chat demo container */}
            <div className="relative">
              <ChatDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - at bottom of section */}
      <div 
        className={`relative z-10 pb-16 pt-4 transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-1.5 text-text-muted">
          <span className="text-[10px] font-medium uppercase tracking-widest whitespace-nowrap">{t('scrollHint')}</span>
          <div className="w-4 h-7 border-2 border-text-muted/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-volentis-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
