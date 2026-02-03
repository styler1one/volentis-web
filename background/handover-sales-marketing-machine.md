# Handover: Agentic Sales & Marketing Machine

## 🎯 Project Doel
Bouw een agentic sales en marketing machine voor **Best Practice Company (BPC)** en **Volentis.ai**.

---

## 🏢 De Twee Merken

### Volentis.ai
- **Website**: https://volentis.ai
- **App**: https://app.volentis.ai
- **Tagline**: "Enterprise AI that actually works"
- **Focus**: B2B Enterprise AI platform voor interne kennismanagement
- **Doelgroep**: HR, Legal, Compliance, IT, Finance afdelingen bij grote organisaties
- **USP's**: 
  - EU-Sovereign (data blijft in Europa)
  - RAG-technologie (antwoorden uit eigen documenten)
  - 6 gespecialiseerde AI Agents
  - ISO 27001, GDPR, EU AI Act compliant

### Best Practice Company (BPC)
- **Website**: https://bestpracticecompany.nl (aanname)
- **Relatie**: Zusterorganisatie / consultancy partner
- **Focus**: IT consultancy en implementatie

---

## 📁 Beschikbare Resources

### Volentis Website Codebase
```
volentis-web/
├── src/
│   ├── app/[locale]/           # Next.js pages (NL, EN, DE, FR)
│   ├── components/             # React components
│   ├── messages/               # Vertalingen (nl.json, en.json, de.json, fr.json)
│   └── styles/globals.css      # Styling + animaties
├── public/
│   ├── brand/                  # Brand assets (banners, signatures)
│   ├── avatars/                # Chat demo avatar
│   ├── team/                   # Team foto's
│   └── volentis_logo.png       # Hoofdlogo
└── background/                 # Documentatie
    ├── project-regels.md       # Core development principles
    ├── prompts-geleerd.md      # Effectieve prompts
    ├── linkedin-company-page.md # LinkedIn content
    └── cookie-consent-plan.md  # GDPR implementatie
```

### Volentis AI Agents (Producten)
1. **HR Agent** - Personeelsvragen, verlof, onboarding
2. **Legal Agent** - Contractanalyse, clausule-zoeken
3. **Compliance Agent** - GDPR, EU AI Act, audit-ready
4. **IT Agent** - Helpdesk, troubleshooting
5. **Finance Agent** - Declaraties, budgetten
6. **International Agent** - Meertalige ondersteuning

### Brand Assets Locaties
- **Volentis**: `volentis-web/public/brand/`
- **BPC**: `bpc-web/public/brand/`

---

## 🎨 Design System

### Volentis Kleuren
```css
--volentis-navy: #0d2b3e      /* Primair donker */
--volentis-cyan: #00a5b5      /* Accent/CTA */
--volentis-cyan-hover: #008a99
--accent-success: #10b981     /* Groen voor validatie */
--bg-light: #f8fafc           /* Lichte achtergrond */
--bg-light-blue: #e0f7fa      /* Hover states */
```

### Typography
- **Font**: Outfit (Google Fonts)
- **Headlines**: Bold, large (text-5xl/6xl desktop)
- **Body**: Regular, readable spacing

### Design Principes
1. **Glassmorphism** - Subtiele transparantie en blur
2. **Organic shapes** - Golvende achtergronden (geen harde hoeken)
3. **Micro-animaties** - Staggered fade-ins, hover effects
4. **Professional B2B** - Geen speelse elementen, enterprise-feel

---

## ✅ Wat Al Gebouwd Is

### Volentis Website
- [x] Complete website met 4 talen (NL, EN, DE, FR)
- [x] Hero sectie met interactieve chat demo
- [x] AI Agents showcase
- [x] Use case pagina's (HR, Legal, Compliance, IT, Finance, International)
- [x] Product pagina's (Features, Integrations, Deployment, Security)
- [x] Pricing pagina
- [x] Contact & Demo booking
- [x] Legal pages (Privacy, Terms, Cookies)
- [x] SEO optimalisatie (sitemap, robots.txt, structured data)
- [x] Cookie consent + Google Analytics 4
- [x] Vercel Analytics

### Brand Assets
- [x] LinkedIn banners (personal + company)
- [x] Presentation backgrounds
- [x] Email signatures (4 founders, premium + compact)
- [x] LinkedIn company page teksten

---

## 🚀 Sales & Marketing Machine Suggesties

### Content Automation
- LinkedIn posts generator (thought leadership)
- Case study templates
- Email sequences voor leads
- Blog artikel outlines

### Lead Generation
- Landing page A/B testing
- Form tracking & analytics
- CRM integratie (HubSpot, Salesforce)
- Lead scoring automation

### Outreach Automation
- Email cadences
- LinkedIn connection requests
- Follow-up sequences
- Meeting scheduling (Calendly/MS Bookings integratie)

### Analytics & Reporting
- Dashboard voor marketing metrics
- Lead funnel visualization
- ROI tracking per kanaal
- Weekly/monthly reports

---

## 📋 Development Principes

### Kwaliteit Boven Snelheid
- Geen fake of hardcoded data
- Natuurlijke taal (geen AI-verraad zoals "—")
- Mensgerichte design
- Responsive en toegankelijk

### Technische Standaarden
- TypeScript voor type safety
- Tailwind CSS voor styling
- Next.js App Router
- Vercel voor deployment

### Copy Guidelines
- B2B professioneel maar niet stijf
- Engelse termen waar functioneel (AI, compliance, etc.)
- Geen marketing-jargon of buzzwords
- Concrete benefits, geen vage beloftes

---

## 🔗 Belangrijke Links

### Volentis
- Website: https://volentis.ai
- App: https://app.volentis.ai
- GitHub: https://github.com/styler1one/volentis-web

### Externe Tools
- Vercel Dashboard: https://vercel.com
- Google Analytics: G-Y8Z2LKBF9Q
- Microsoft Bookings: (voor demo's)

---

## 👥 Team Context

De founders van BPC en Volentis zijn dezelfde personen:
- 4 founders met email signatures beschikbaar
- Team foto's in `/public/team/`
- LinkedIn profielen moeten consistent zijn met website

---

## 📝 Prompt Template voor Nieuwe Features

```markdown
## Context
Ik werk aan [BPC/Volentis] sales & marketing automation.

## Doel
[Beschrijf wat je wilt bereiken]

## Vereisten
- Kwaliteit boven snelheid
- Geen fake of hardcoded data
- Consistent met bestaande brand guidelines
- B2B professioneel

## Bestaande Resources
- Volentis website: volentis.ai
- Brand assets: /public/brand/
- Vertalingen: /src/messages/

## Gewenste Output
[Beschrijf het eindresultaat]
```

---

## ⚡ Quick Start Nieuwe Workspace

1. **Lees eerst**: `background/project-regels.md` voor core principles
2. **Brand context**: Kopieer merk & strategie MD bestand
3. **Inspiratie**: Bekijk `background/prompts-geleerd.md` voor effectieve prompts
4. **Consistentie**: Gebruik dezelfde design tokens en componenten

---

*Laatste update: Januari 2026*
*Volentis website versie: Live op volentis.ai*
