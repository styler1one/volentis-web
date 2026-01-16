import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="gradient-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/volentis_logo.png"
              alt="Volentis.ai"
              width={140}
              height={35}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-accent-light text-sm italic">
              {t('tagline')}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>📍</span>
              <span>{t('location')}</span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('product')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/product/features" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('features')}
                </Link>
              </li>
              <li>
                <Link href="/product/integrations" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('integrations')}
                </Link>
              </li>
              <li>
                <Link href="/product/deployment" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('deployment')}
                </Link>
              </li>
              <li>
                <Link href="/product/security" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('security')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{nav('useCases')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/use-cases/hr" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('hr')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/legal" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('legal')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/compliance" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('compliance')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/it" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('it')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/finance" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {nav('finance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('cookies')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-volentis-cyan transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:contact@volentis.ai" className="text-gray-300 hover:text-volentis-cyan transition-colors text-sm">
                contact@volentis.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
