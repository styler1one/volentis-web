'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    employees: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    // In production, this would send to your backend/CRM
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        employees: '',
        interest: '',
        message: '',
      });
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-volentis-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-volentis-navy mb-6">
              {t('headline')}
            </h1>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              {t('subheadline')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-volentis-navy mb-6">{t('form.title')}</h2>

              {formStatus === 'success' ? (
                <div className="bg-accent-success/10 border border-accent-success/20 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent-success rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('form.success.title')}</h3>
                  <p className="text-text-body">{t('form.success.message')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-volentis-navy mb-1">
                        {t('form.fields.firstName.label')} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan"
                        placeholder={t('form.fields.firstName.placeholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-volentis-navy mb-1">
                        {t('form.fields.lastName.label')} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan"
                        placeholder={t('form.fields.lastName.placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-volentis-navy mb-1">
                      {t('form.fields.email.label')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan"
                      placeholder={t('form.fields.email.placeholder')}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-volentis-navy mb-1">
                        {t('form.fields.company.label')} *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan"
                        placeholder={t('form.fields.company.placeholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-volentis-navy mb-1">
                        {t('form.fields.jobTitle.label')}
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan"
                        placeholder={t('form.fields.jobTitle.placeholder')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-volentis-navy mb-1">
                        {t('form.fields.employees.label')}
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan bg-white"
                      >
                        <option value="">{t('form.fields.employees.placeholder')}</option>
                        <option value="50-200">{t('form.fields.employees.options.1')}</option>
                        <option value="200-500">{t('form.fields.employees.options.2')}</option>
                        <option value="500-1000">{t('form.fields.employees.options.3')}</option>
                        <option value="1000-5000">{t('form.fields.employees.options.4')}</option>
                        <option value="5000+">{t('form.fields.employees.options.5')}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-volentis-navy mb-1">
                        {t('form.fields.interest.label')}
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan bg-white"
                      >
                        <option value="">{t('form.fields.interest.placeholder')}</option>
                        <option value="hr">{t('form.fields.interest.options.hr')}</option>
                        <option value="legal">{t('form.fields.interest.options.legal')}</option>
                        <option value="compliance">{t('form.fields.interest.options.compliance')}</option>
                        <option value="it">{t('form.fields.interest.options.it')}</option>
                        <option value="finance">{t('form.fields.interest.options.finance')}</option>
                        <option value="multiple">{t('form.fields.interest.options.multiple')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-volentis-navy mb-1">
                      {t('form.fields.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-volentis-cyan/50 focus:border-volentis-cyan resize-none"
                      placeholder={t('form.fields.message.placeholder')}
                    />
                  </div>

                  <div className="text-sm text-text-muted">
                    {t('form.privacy')}
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto justify-center"
                  >
                    {formStatus === 'submitting' ? t('form.submitting') : t('form.submit')}
                  </Button>

                  {formStatus === 'error' && (
                    <p className="text-red-600 text-sm">{t('form.error')}</p>
                  )}
                </form>
              )}
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              {/* Talk to Expert - Booking */}
              <div className="bg-bg-light rounded-2xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-volentis-navy mb-2">{t('talkToExpert.title')}</h3>
                  <p className="text-sm text-text-body mb-6">{t('talkToExpert.description')}</p>
                  <a 
                    href="https://outlook.office.com/bookwithme/user/e24fb78dcb5249b0ad5bdb243afdf606@bestpractice.consulting/meetingtype/RSrsgKRz4Euy0892PXPZ5A2?anonymous&ep=mlink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-volentis-cyan text-white font-semibold rounded-xl shadow-lg shadow-volentis-cyan/25 hover:shadow-xl hover:shadow-volentis-cyan/30 hover:bg-volentis-cyan-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t('talkToExpert.button')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-volentis-navy rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">{t('directContact.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-sm text-white/70">{t('directContact.email.label')}</p>
                      <a href="mailto:info@volentis.ai" className="hover:text-volentis-cyan transition-colors">
                        info@volentis.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-sm text-white/70">{t('directContact.phone.label')}</p>
                      <a href="tel:+31103220675" className="hover:text-volentis-cyan transition-colors">
                        +31 10 322 0675
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-white/70">{t('directContact.address.label')}</p>
                      <p>Baron de Coubertinlaan 6</p>
                      <p>2719 EL Zoetermeer</p>
                      <p>{t('directContact.address.country')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-bg-light rounded-full text-sm font-medium text-volentis-navy">
                  🇪🇺 {t('trust.euHosted')}
                </span>
                <span className="px-4 py-2 bg-bg-light rounded-full text-sm font-medium text-volentis-navy">
                  🛡️ {t('trust.gdpr')}
                </span>
                <span className="px-4 py-2 bg-bg-light rounded-full text-sm font-medium text-volentis-navy">
                  🤖 {t('trust.euAiAct')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
