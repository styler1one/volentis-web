import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/navigation';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - API routes (/api/...)
  // - Static files (/_next/..., /favicon.ico, etc.)
  matcher: [
    '/',
    '/(nl|en|de|fr)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
