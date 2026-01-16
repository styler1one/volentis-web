# Volentis.ai Website Development — Cursor Prompt

## Project Overview

**Volentis.ai** is een EU-soeverein enterprise AI-platform dat bedrijfskennis transformeert tot betrouwbare, auditeerbare antwoorden. Het platform is specifiek ontworpen voor HR, Legal, Compliance, IT en Finance afdelingen in Europese ondernemingen.

**Tagline:** *"European AI with Trust at the Core"*

**Core Message:** Enterprise AI die je kunt vertrouwen — geen hallucinaties, geen data-lekken, geen compliance-risico's.

---

## Productdocumentatie

Lees eerst volledig de volgende bestanden in de `background/` folder:

1. **`Website_Handover.md`** — Geconsolideerde website briefing met alle content, structuur en design specs
2. **`Volentis_Marketing_Sales_Story.md`** — Uitgebreide marketing content en messaging
3. **`Volentis_Use_Cases_Campagnes.md`** — Gedetailleerde use cases met buyer personas
4. **`Volentis_End_User_Manual.md`** — Technische productdocumentatie

---

## Tech Stack

```
- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- next-intl voor i18n (EN, NL, DE, FR)
- Vercel voor deployment
```

---

## Brand Identity

### Kleurenpalet (VERPLICHT)

```css
:root {
  /* Primary */
  --volentis-navy: #1B3A4B;      /* Logo, headings, primaire tekst */
  --volentis-cyan: #2AAAD9;      /* CTA buttons, links, accenten */
  --volentis-cyan-hover: #30A9D6; /* Hover states */
  
  /* Backgrounds */
  --bg-white: #FFFFFF;           /* Main background */
  --bg-light: #F8F9FB;           /* Sectie achtergronden */
  --bg-light-blue: #F2F9FC;      /* Feature secties */
  
  /* Text */
  --text-dark: #222222;          /* Body tekst */
  --text-body: #666666;          /* Secundaire tekst */
  --text-muted: #777777;         /* Subtekst, placeholders */
  
  /* Accents */
  --accent-success: #4ECDC4;     /* Success states, checkmarks */
  --accent-light: #7DD3E8;       /* Highlights */
  --navy-dark: #0F2A38;          /* Footer, donkere secties */
  --border-gray: #94A3B8;        /* Borders, dividers */
}
```

### Logo

- **Bestand:** `background/volentis_logo.png`
- **Icoon:** Gestileerde "V" met circuit/node elementen
- **Wordmark:** "VOLENTIS" (navy) + ".ai" (cyan)
- **Slogan:** "SIMPLY DISRUPTING"

### Typography

- **Headings:** Modern sans-serif (Inter, Outfit, of vergelijkbaar)
- **Body:** Clean sans-serif, goed leesbaar
- **Stijl:** Modern SaaS, niet corporate

---

## Website Structuur

### Pagina's

```
Homepage
├── Hero (headline + chat demo + CTA)
├── ⭐ "Voor Wie?" sectie (6 use case cards - DIRECT NA HERO)
├── "Wat maakt Volentis.ai uniek?" (4 features, alternating layout)
├── "De waarde van Volentis.ai" (video + 3 value props)
├── "Deployment opties" (3 cards)
├── Trust & Security badges
├── CTA

Use Cases (subpagina's)
├── /use-cases/hr — HR Beleid & Service
├── /use-cases/legal — Juridisch & Contracten
├── /use-cases/compliance — Compliance & Risk
├── /use-cases/it — IT & Helpdesk
├── /use-cases/finance — Finance & Inkoop
├── /use-cases/international — Multi-Jurisdictioneel

Product
├── /product/features
├── /product/integrations
├── /product/deployment
├── /product/security

/pricing
/contact (demo booking)
```

---

## Homepage Specificaties

### Hero Sectie

```
[H1] Volentis.ai
[H2] Je kent de vraag; Volentis.ai vindt het betrouwbare antwoord
[P]  Neem je bedrijfskennis overal mee met 24/7 toegang tot 
     betrouwbare antwoorden uit jouw eigen documenten — 
     de enige AI-assistent gebouwd voor Europese enterprises.
[CTA] Book a Demo
```

**Visueel:** Chat interface als hero element — het product IS een chat assistent. Animatie van een chat gesprek als centerpiece.

### ⭐ "Voor Wie?" Sectie (KRITIEK VOOR CONVERSIE)

Direct na hero. Bezoekers moeten binnen 5 seconden denken: *"Dit is voor mij!"*

**Sectie titel:** "Welk probleem wil jij oplossen?"

**6 Cards in 3x2 grid:**

| Icoon | Titel | One-liner | Link |
|-------|-------|-----------|------|
| 👥 | **HR Beleid & Service** | "50-70% minder HR-tickets, 24/7 antwoorden" | /use-cases/hr |
| 📜 | **Juridisch & Contracten** | "Contract review 70% sneller, geen clausules missen" | /use-cases/legal |
| 🛡️ | **Compliance & Risk** | "GDPR & EU AI Act audit-ready in uren" | /use-cases/compliance |
| 💻 | **IT & Helpdesk** | "Tier-1 deflection van 50-60%, lagere kosten" | /use-cases/it |
| 💰 | **Finance & Inkoop** | "60% minder procedurefouten, snellere facturen" | /use-cases/finance |
| 🌍 | **Internationaal** | "Eén platform voor al je EU-jurisdicties" | /use-cases/international |

**Card styling:**
- Witte achtergrond met subtle shadow
- Hover: lichte cyan tint (`#F2F9FC`) + shadow versterken
- Border-radius: 12px
- Icoon: 48px, Volentis Cyan
- Titel: 18px, bold, Volentis Navy
- One-liner: 14px, grijs

### Features Sectie

**Alternating image/text layout** (zoals Sweet & Maxwell ProView):

1. **"Antwoorden uit jouw eigen documenten"** + afbeelding rechts
2. **"Bronvermelding bij elk antwoord"** + afbeelding links
3. **"Krachtig zoeken met AI"** + afbeelding rechts
4. **"Samenwerken en delen"** + afbeelding links

Elke feature eindigt met "Probeer het zelf →" link.

### Deployment Opties (3 cards)

| Card | Titel | Beschrijving |
|------|-------|--------------|
| 1 | **SaaS Multi-Tenant** | Live in weken, EU-datacenters, kostenefficiënt |
| 2 | **Single-Tenant SaaS** | Dedicated infrastructuur, BYOK, enhanced isolatie |
| 3 | **Customer-Managed** | Volledige controle, air-gapped, on-premise *(Coming Soon)* |

---

## Key Metrics (voor social proof)

| Metric | Waarde |
|--------|--------|
| HR Service Tickets | 50-70% reductie |
| Contract Review | 70% sneller |
| Beschikbaarheid | 24/7 self-service |
| Medewerkerstevredenheid | +30% |
| Compliance Gaps | 80% sneller geïdentificeerd |
| IT Ticket Deflection | 50-60% |

---

## Trust Indicators (PROMINENT)

- 🇪🇺 EU Flag + "EU-Hosted"
- 🛡️ GDPR Compliant badge
- ✅ EU AI Act Compliant badge
- 🔒 Security icons (TLS, AES-256)
- Integration logos: AFAS, SAP, Dynamics, Workday, Personio, Teams, Slack, SharePoint

---

## Integraties

### HR Systemen
AFAS, SAP SuccessFactors, Microsoft Dynamics 365, Workday, Personio, Outlook

### Identity & Access
SAML 2.0, OpenID Connect, SCIM 2.0, MFA

### Collaboration
Microsoft Teams, Slack, Email & Calendar

### Documents
SharePoint Online & Server 2019+, Direct Upload (PDF, Word, Excel, PPT)

---

## Tone of Voice

- **Zakelijk maar toegankelijk** — niet stijf, niet casual
- **Confidence zonder arrogantie** — we weten wat we doen
- **Focus op resultaten en trust** — concrete cijfers, geen vage beloftes
- **Vermijd hype** — wel concrete cijfers (50-70% minder tickets, etc.)
- **Nederlands of Engels** — afhankelijk van locale

---

## Must-Haves

- [ ] Mobile-first responsive design
- [ ] Demo booking CTA op elke pagina
- [ ] Trust indicators prominent (EU flag, GDPR badge, security icons)
- [ ] Chat widget of demo preview in hero
- [ ] Use case cards direct na hero
- [ ] Integratie logos sectie
- [ ] Consistent CTA herhaling door hele pagina
- [ ] Geen hardcoded teksten — alles via i18n

---

## Folder Structuur

```
src/
├── app/
│   └── [locale]/
│       ├── page.tsx                 # Homepage
│       ├── use-cases/
│       │   ├── hr/page.tsx
│       │   ├── legal/page.tsx
│       │   ├── compliance/page.tsx
│       │   ├── it/page.tsx
│       │   ├── finance/page.tsx
│       │   └── international/page.tsx
│       ├── product/
│       │   ├── features/page.tsx
│       │   ├── integrations/page.tsx
│       │   ├── deployment/page.tsx
│       │   └── security/page.tsx
│       ├── pricing/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── UseCaseCards.tsx
│   │   ├── Features.tsx
│   │   ├── DeploymentOptions.tsx
│   │   ├── TrustBadges.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── ChatDemo.tsx
├── messages/
│   ├── en.json
│   ├── nl.json
│   ├── de.json
│   └── fr.json
├── i18n/
│   └── config.ts
└── styles/
    └── globals.css
```

---

## Workflow

1. **Begin met foundation:** Next.js setup, Tailwind config met kleurenpalet, folder structuur
2. **Design system eerst:** Definieer kleuren, typography, spacing in `tailwind.config.ts`
3. **Hero sectie als proof of concept:** Valideer design system voordat je verder bouwt
4. **Use case cards:** Direct na hero, kritiek voor conversie
5. **Bouw alleen met Engelse vertalingen** (`messages/en.json`) — andere talen later
6. **Kwaliteit boven snelheid**
7. **Commit regelmatig** met duidelijke messages

---

## Start Opdracht

Begin met:

1. **Project setup:** Next.js 14+, TypeScript, Tailwind CSS
2. **Tailwind config:** Implementeer het volledige kleurenpalet uit dit document
3. **Folder structuur:** Zoals hierboven gespecificeerd
4. **Basis layout:** Header met navigatie, Footer met links
5. **Homepage Hero:** Met chat demo animatie als centerpiece
6. **Use Case Cards:** 6 cards in grid, direct na hero

---

## Referentie Website

Bekijk https://www.sweetandmaxwell.co.uk/en-gb/products/proview voor design inspiratie:
- Alternating image/text layout voor features
- 3 cards voor opties
- Video + value props sectie
- Consistent CTA herhaling

---

*Documentatie versie: 1.0*
*Aangemaakt: Januari 2026*

