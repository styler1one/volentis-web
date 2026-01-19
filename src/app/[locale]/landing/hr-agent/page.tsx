'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import LandingHeader from '@/components/landing/LandingHeader';
import InteractiveDemo from '@/components/ui/InteractiveDemo';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

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
    
    // Extract number from string like "50-70%" or "24/7"
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

export default function HRAgentLandingPage() {
  const t = useTranslations('landingHR');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculator state
  const [calcEmployees, setCalcEmployees] = useState('');
  const [calcTickets, setCalcTickets] = useState('');

  const calculateSavings = () => {
    const employees = parseInt(calcEmployees) || 0;
    const tickets = parseInt(calcTickets) || 0;
    const deflectionRate = 0.6; // 60% average
    const costPerTicket = 25;
    const hoursPerTicket = 0.5;
    
    const ticketsDeflected = Math.round(tickets * deflectionRate);
    const hoursSaved = Math.round(ticketsDeflected * hoursPerTicket * 52);
    const costSaved = ticketsDeflected * costPerTicket * 52;
    
    return { ticketsDeflected, hoursSaved, costSaved };
  };

  const savings = calculateSavings();

  // Animation refs
  const heroRef = useInView(0.2);
  const problemRef = useInView(0.2);
  const solutionRef = useInView(0.2);
  const resultsRef = useInView(0.2);
  const securityRef = useInView(0.2);


  return (
    <>
      <LandingHeader />
      
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
                <span className="w-2 h-2 bg-volentis-cyan rounded-full animate-pulse" />
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
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-volentis-navy/20 text-volentis-navy text-lg font-semibold rounded-xl hover:border-volentis-cyan hover:text-volentis-cyan transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('hero.secondaryCta')}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="text-lg">🇪🇺</span>
                  EU Hosted
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  GDPR Compliant
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No Hallucinations
                </div>
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {['tickets', 'availability', 'satisfaction', 'compliance'].map((stat, index) => (
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
                {t('hero.trustedBy')}
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

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-volentis-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-volentis-cyan/10 rounded-full blur-3xl" />
        </div>
        
        <div 
          ref={problemRef.ref}
          className={`section-container relative transition-all duration-1000 ${
            problemRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('problem.title')}
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              {t('problem.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t(`problem.points.${num}.title`)}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {t(`problem.points.${num}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistic highlight */}
          <div className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-volentis-cyan/20 to-accent-light/20 rounded-2xl border border-volentis-cyan/30">
            <p className="text-6xl md:text-7xl font-bold text-volentis-cyan mb-2">
              {t('problem.statistic.value')}
            </p>
            <p className="text-xl text-white mb-1">
              {t('problem.statistic.label')}
            </p>
            <p className="text-sm text-white/50">
              {t('problem.statistic.source')}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section 
        ref={solutionRef.ref}
        className={`py-20 md:py-32 bg-white transition-all duration-1000 ${
          solutionRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('solution.title')}
            </h2>
            <p className="text-xl text-text-body max-w-3xl mx-auto">
              {t('solution.subtitle')}
            </p>
          </div>

          {/* Capabilities grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num}
                className="group p-6 bg-bg-light rounded-2xl hover:bg-volentis-cyan/5 transition-all border-2 border-transparent hover:border-volentis-cyan/20"
              >
                <div className="w-12 h-12 bg-volentis-cyan/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-volentis-cyan/20 transition-colors">
                  {num === 1 && <span className="text-2xl">⚡</span>}
                  {num === 2 && <span className="text-2xl">📄</span>}
                  {num === 3 && <span className="text-2xl">🎯</span>}
                  {num === 4 && <span className="text-2xl">🌙</span>}
                </div>
                <h3 className="text-lg font-bold text-volentis-navy mb-2">
                  {t(`solution.capabilities.${num}.title`)}
                </h3>
                <p className="text-sm text-text-body">
                  {t(`solution.capabilities.${num}.description`)}
                </p>
              </div>
            ))}
          </div>

          {/* How it works visual */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-volentis-cyan/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-4xl">📁</span>
                </div>
                <h4 className="font-bold text-volentis-navy mb-1">Your documents</h4>
                <p className="text-sm text-text-muted">CAOs, handbooks, policies</p>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-volentis-cyan hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <svg className="w-8 h-8 text-volentis-cyan md:hidden rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-volentis-cyan rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl">🤖</span>
                </div>
                <h4 className="font-bold text-volentis-navy mb-1">HR Agent</h4>
                <p className="text-sm text-text-muted">Processes & understands</p>
              </div>

              {/* Arrow */}
              <svg className="w-8 h-8 text-volentis-cyan hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <svg className="w-8 h-8 text-volentis-cyan md:hidden rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-accent-success/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-4xl">✅</span>
                </div>
                <h4 className="font-bold text-volentis-navy mb-1">Verified answers</h4>
                <p className="text-sm text-text-muted">With source citations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 md:py-32 bg-bg-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('demo.title')}
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('demo.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <InteractiveDemo agent="hr" />
            <p className="text-center text-sm text-text-muted mt-4 italic">
              {t('demo.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section 
        ref={resultsRef.ref}
        className={`py-20 md:py-32 bg-white transition-all duration-1000 ${
          resultsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-4">
              {t('results.title')}
            </h2>
            <p className="text-xl text-text-body">
              {t('results.subtitle')}
            </p>
          </div>

          {/* Before/After metrics */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-bg-light rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div>
                    <p className="text-2xl font-bold text-red-500 line-through opacity-60">
                      {t(`results.metrics.${num}.before`)}
                    </p>
                    <p className="text-xs text-text-muted">{t(`results.metrics.${num}.beforeLabel`)}</p>
                  </div>
                  <svg className="w-6 h-6 text-volentis-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div>
                    <p className="text-2xl font-bold text-accent-success">
                      {t(`results.metrics.${num}.after`)}
                    </p>
                    <p className="text-xs text-text-muted">{t(`results.metrics.${num}.afterLabel`)}</p>
                  </div>
                </div>
                <p className="text-volentis-cyan font-semibold">
                  {t(`results.metrics.${num}.change`)}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto bg-volentis-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <span className="text-[200px] font-serif text-white absolute -top-16 -left-8">"</span>
            </div>
            <p className="text-xl md:text-2xl text-white mb-6 relative z-10 italic">
              "{t('results.quote.text')}"
            </p>
            <div className="relative z-10">
              <p className="text-white font-semibold">{t('results.quote.author')}</p>
              <p className="text-white/60 text-sm">{t('results.quote.company')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 md:py-32 bg-bg-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
              {t('topics.title')}
            </h2>
            <p className="text-xl text-text-body">
              {t('topics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['leave', 'benefits', 'policies', 'onboarding'].map((category) => (
              <div key={category} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow">
                <h3 className="text-lg font-bold text-volentis-navy mb-4">
                  {t(`topics.categories.${category}.title`)}
                </h3>
                <ul className="space-y-2">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="text-sm text-text-muted italic">
                      "{t(`topics.categories.${category}.examples.${i}`)}"
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-volentis-navy to-volentis-navy/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-volentis-cyan/20 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('calculator.title')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t('calculator.employees.label')}
                </label>
                <input
                  type="number"
                  value={calcEmployees}
                  onChange={(e) => setCalcEmployees(e.target.value)}
                  placeholder={t('calculator.employees.placeholder')}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-volentis-cyan"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {t('calculator.tickets.label')}
                </label>
                <input
                  type="number"
                  value={calcTickets}
                  onChange={(e) => setCalcTickets(e.target.value)}
                  placeholder={t('calculator.tickets.placeholder')}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-volentis-cyan"
                />
              </div>
            </div>

            {(calcEmployees || calcTickets) && (
              <div className="border-t border-white/20 pt-8">
                <h3 className="text-white font-semibold mb-6 text-center">{t('calculator.results.title')}</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold text-volentis-cyan">{savings.ticketsDeflected}</p>
                    <p className="text-white/60 text-sm">{t('calculator.results.ticketReduction')}</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-volentis-cyan">{savings.hoursSaved.toLocaleString()}</p>
                    <p className="text-white/60 text-sm">{t('calculator.results.hoursSaved')}</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent-success">€{savings.costSaved.toLocaleString()}</p>
                    <p className="text-white/60 text-sm">{t('calculator.results.costSaved')}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-volentis-cyan text-white font-semibold rounded-xl hover:bg-volentis-cyan-hover transition-all"
              >
                {t('calculator.cta')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-white/40 text-xs mt-4">
                {t('calculator.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section 
        ref={securityRef.ref}
        className={`py-20 md:py-32 bg-white transition-all duration-1000 ${
          securityRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
              {t('security.title')}
            </h2>
            <p className="text-xl text-text-body">
              {t('security.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 bg-accent-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-volentis-navy mb-1">
                    {t(`security.points.${num}.title`)}
                  </h3>
                  <p className="text-sm text-text-body">
                    {t(`security.points.${num}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Security badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {['gdpr', 'euAiAct', 'euHosted', 'soc2'].map((badge) => (
              <div key={badge} className="px-4 py-2 bg-bg-light rounded-full text-sm font-medium text-volentis-navy">
                {t(`security.badges.${badge}`)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-bg-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-volentis-navy mb-2">
              {t('integration.title')}
            </h2>
            <p className="text-text-body">
              {t('integration.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {['sharepoint', 'teams', 'afas', 'sap', 'workday', 'personio'].map((source) => (
              <div key={source} className="px-6 py-3 bg-white rounded-xl shadow-sm text-volentis-navy font-medium">
                {t(`integration.sources.${source}`)}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-text-muted mt-6">
            {t('integration.note')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-volentis-navy mb-4">
              {t('objections.title')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="border border-border-gray/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === num ? null : num)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-light transition-colors"
                >
                  <span className="font-semibold text-volentis-navy pr-4">
                    {t(`objections.items.${num}.question`)}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-volentis-cyan flex-shrink-0 transition-transform ${openFaq === num ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === num && (
                  <div className="px-6 pb-6">
                    <p className="text-text-body">
                      {t(`objections.items.${num}.answer`)}
                    </p>
                  </div>
                )}
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
                  <li key={num} className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-volentis-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(`cta.benefits.${num}`)}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('cta.trust.noCreditCard')}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('cta.trust.liveInWeeks')}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('cta.trust.euHosted')}
                </span>
              </div>
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
                    href="https://outlook.office.com/bookwithme/user/e24fb78dcb5249b0ad5bdb243afdf606@bestpractice.consulting/meetingtype/zZR0QjjmwEKPKHbKSh0MdA2?anonymous&ep=mlink"
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
                  <a href="mailto:info@volentis.ai" className="text-volentis-cyan hover:underline">
                    info@volentis.ai
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
              <Link href="/legal/privacy" className="text-white/60 hover:text-white transition-colors">
                {t('footer.links.privacy')}
              </Link>
              <Link href="/legal/terms" className="text-white/60 hover:text-white transition-colors">
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
