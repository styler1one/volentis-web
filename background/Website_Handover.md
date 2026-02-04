# Volentis.ai Website — Handover Document

## Voor het Website Development Team

Dit document bevat alle essentiële informatie om een succesvolle Volentis.ai website te bouwen. Het is een geconsolideerde versie van de technische documentatie, marketing content, en use cases.

---

# 1. BRAND ESSENTIALS

## Bedrijfsnaam
**Volentis.ai** (Volentis B.V.)

## Tagline
> *"European AI with Trust at the Core"*

## Slogan (uit logo)
> *"Simply Disrupting"*

---

## KLEURENSCHEMA

### Primaire Kleuren

| Kleur | HEX | RGB | Gebruik |
|-------|-----|-----|--------|
| **Volentis Blauw (Donker)** | `#1B3A4B` | rgb(27, 58, 75) | Logo, headings, primaire tekst |
| **Volentis Cyan (Accent)** | `#2AAAD9` | rgb(42, 170, 217) | CTA buttons, links, accenten |
| **Volentis Lichtblauw** | `#30A9D6` | rgb(48, 169, 214) | Hover states, secundaire accenten |

### Secundaire Kleuren

| Kleur | HEX | RGB | Gebruik |
|-------|-----|-----|--------|
| **Wit** | `#FFFFFF` | rgb(255, 255, 255) | Achtergrond, tekst op donker |
| **Lichtgrijs BG** | `#F8F9FB` | rgb(248, 249, 251) | Sectie achtergronden |
| **Lichtblauw BG** | `#F2F9FC` | rgb(242, 249, 252) | Feature secties |
| **Donkergrijs Tekst** | `#222222` | rgb(34, 34, 34) | Body tekst |
| **Grijs Tekst** | `#666666` | rgb(102, 102, 102) | Secundaire tekst |
| **Lichtgrijs** | `#777777` | rgb(119, 119, 119) | Subtekst, placeholders |

### Accent Kleuren

| Kleur | HEX | RGB | Gebruik |
|-------|-----|-----|--------|
| **Success Groen** | `#4ECDC4` | rgb(78, 205, 196) | Success states, checkmarks, positieve feedback |
| **Licht Cyan** | `#7DD3E8` | rgb(125, 211, 232) | Highlights, hover accenten |
| **Donker Navy** | `#0F2A38` | rgb(15, 42, 56) | Footer, donkere secties |
| **Warm Grijs** | `#94A3B8` | rgb(148, 163, 184) | Borders, dividers, disabled states |

### Kleurgebruik Richtlijnen

```css
/* CSS Variables */
:root {
  /* Primary */
  --volentis-navy: #1B3A4B;
  --volentis-cyan: #2AAAD9;
  --volentis-cyan-hover: #30A9D6;
  
  /* Backgrounds */
  --bg-white: #FFFFFF;
  --bg-light: #F8F9FB;
  --bg-light-blue: #F2F9FC;
  
  /* Text */
  --text-dark: #222222;
  --text-body: #666666;
  --text-muted: #777777;
  
  /* Accents */
  --accent-success: #4ECDC4;
  --accent-light: #7DD3E8;
  --navy-dark: #0F2A38;
  --border-gray: #94A3B8;
}
```

---

## LOGO

### Logo Bestand
`volentis_logo.png` (beschikbaar in docs folder)

### Logo Beschrijving
- **Icoon**: Gestileerde "V" met circuit/node elementen (verwijst naar AI/technologie)
- **Wordmark**: "VOLENTIS" in donkerblauw, ".ai" in cyan
- **Slogan**: "SIMPLY DISRUPTING" onder de wordmark
- **Stijl**: Modern, clean, tech-georiënteerd

### Logo Kleuren
| Element | Kleur |
|---------|-------|
| Icoon (V-vorm) | Donkerblauw `#1B3A4B` |
| Icoon (nodes/dots) | Donkerblauw `#1B3A4B` |
| "VOLENTIS" tekst | Donkerblauw `#1B3A4B` |
| ".ai" tekst | Cyan `#2AAAD9` |
| "SIMPLY DISRUPTING" | Donkerblauw `#1B3A4B` |

### Logo Varianten Nodig
- [ ] Logo met slogan (huidige versie)
- [ ] Logo zonder slogan
- [ ] Icoon only (voor favicon, app icons)
- [ ] Wit logo (voor donkere achtergronden)
- [ ] SVG versies van alle varianten

### Logo Gebruik
- **Minimum grootte**: 120px breed
- **Clear space**: Minimaal hoogte van de "V" rondom
- **Achtergrond**: Wit of zeer licht (geen drukke achtergronden)

## Core Message
**"Enterprise AI die je kunt vertrouwen"**

Geen hallucinaties. Geen data-lekken. Geen compliance-risico's. Alleen betrouwbare antwoorden.

## One-Liner
Volentis.ai is een EU-soeverein enterprise AI-platform dat jouw interne kennis transformeert tot een betrouwbare, auditeerbare beslissingsmotor.

## Elevator Pitch (30 sec)
> Volentis.ai transformeert hoe Europese ondernemingen omgaan met bedrijfskritische kennis. Onze AI-assistent werkt uitsluitend met jouw goedgekeurde bedrijfskennis, is volledig compliant met Europese regelgeving, en maakt elk antwoord traceerbaar naar de bron. AI-assistenten die functioneren als teamleden — veilig, praktisch, en altijd beschikbaar.

---

# 2. PRODUCT OVERVIEW

## Wat is Volentis.ai?

Een EU-soeverein enterprise AI-platform met:
- **Conversational AI** — Natuurlijke taalinteractie voor vragen en antwoorden
- **Agentic Workflows** — Geautomatiseerde workflows met menselijke goedkeuringspoorten
- **Decision Support** — Onderbouwde adviezen met bronvermelding
- **Draft Generation** — Concept-documenten met verplichte menselijke review

## Hoe het werkt (voor visuele weergave)

```
JOUW DOCUMENTEN          →    VOLENTIS.AI RAG    →    BETROUWBARE ANTWOORDEN
├── Personeelshandboeken      • Retrieval-Augmented     ✓ Bronvermelding
├── Contracten                  Generation              ✓ Confidence scoring
├── Procedures                • Alleen jouw data        ✓ Audit trail
├── Compliance docs           • EU-datacenters          ✓ EU AI Act compliant
└── Bedrijfsbeleid            • Geen training op data
```

## Flagship Product: De HR Agent

**Volentis HR Agent** — jouw always-on assistent die:
- Direct HR-vragen beantwoordt uit CAO's, handboeken en beleid
- Medewerkers begeleidt door HR-processen
- Beleid samenvat met bronvermelding
- Integreert met HR-systemen

---

# 3. KEY BENEFITS (voor homepage)

## 5 Unique Selling Points

### 1. 🛡️ Absolute Data-Soevereiniteit
- Data locatie: EU-datacenters (Duitsland & Nederland)
- Geen training op klantdata — nooit
- 100% data-eigenaarschap bij klant
- Geen derde-partij toegang

### 2. 🎯 Geen Hallucinaties
- Antwoorden alleen uit goedgekeurde documenten
- Bronvermelding bij elk antwoord
- Confidence scoring (groen/geel/rood)
- Menselijke verificatie: systeem adviseert, mensen beslissen

### 3. ✅ Compliance by Design
- **GDPR**: Data Processor onder Artikel 28
- **EU AI Act**: Limited risk systeem (Artikel 52)
- Volledige audit trail
- Configureerbaar retentiebeleid

### 4. 🔒 Enterprise-Grade Security
- Encryptie: TLS 1.2+ (transit), AES-256 (rest)
- Authenticatie: SAML 2.0, OpenID Connect, MFA
- RBAC met granulaire permissies
- BYOK optie voor single-tenant

### 5. 🌍 Multi-Jurisdictioneel & Meertalig
- Alle EU-talen ondersteund
- Cross-jurisdictionele beleidsanalyse
- Lokale compliance-vereisten per land

---

# 4. TARGET AUDIENCE

## Primaire Doelgroep

| Segment | Functietitels |
|---------|---------------|
| **HR** | CHRO, HR Director, HR Manager, HR Business Partner |
| **Legal** | General Counsel, Legal Director, Contract Manager, Compliance Officer |
| **IT/Operations** | CIO, IT Director, Service Desk Manager |
| **Finance** | CFO, Finance Director, Procurement Manager |

## Organisatieprofiel
- **Grootte**: 500+ medewerkers (mid-to-large enterprises)
- **Geografie**: Europese Unie
- **Kenmerken**: Gereguleerde omgevingen, multi-site, multi-jurisdictioneel

## Industrieën
- Financial Services
- Healthcare & Pharma
- Manufacturing
- Professional Services
- Technology
- Retail
- Energy & Utilities
- Government & Public Sector

---

# 5. USE CASES (voor website secties/pagina's)

## Use Case 1: HR Policy Assistant ⭐ PRIORITEIT

**Headline**: "Bevrijdt je HR-team van repetitieve vragen"

**Probleem**: HR-teams besteden 40% van hun tijd aan routinevragen

**Oplossing**: 24/7 AI-assistent die direct antwoord geeft uit CAO's en handboeken

**Resultaten**:
| Metric | Impact |
|--------|--------|
| HR Service Tickets | 50-70% reductie |
| Beschikbaarheid | 24/7 self-service |
| Medewerkerstevredenheid | +30% |

**Voorbeeldvragen**:
- "Hoeveel vakantiedagen heb ik als parttime medewerker?"
- "Hoe vraag ik ouderschapsverlof aan?"
- "Wat is het thuiswerkbeleid?"

---

## Use Case 2: Employee Onboarding

**Headline**: "Van 90 dagen naar 45 dagen productief"

**Probleem**: 20% van nieuwe medewerkers vertrekt binnen 45 dagen door slechte onboarding

**Oplossing**: Gepersonaliseerde onboarding assistant met rol-specifieke informatie

**Resultaten**:
| Metric | Impact |
|--------|--------|
| Time-to-productivity | 50% sneller |
| Early attrition | 25% lager |
| Onboarding vragen aan HR | 60% reductie |

---

## Use Case 3: Legal Contract Assistant

**Headline**: "Contract review in uren, niet dagen"

**Probleem**: Juristen besteden 60% van hun tijd aan document review

**Oplossing**: AI die clausules vindt, vergelijkt en afwijkingen identificeert

**Resultaten**:
| Metric | Impact |
|--------|--------|
| Contract review tijd | 70% sneller |
| Due diligence doorlooptijd | 50% korter |
| Gemiste clausules | 90% reductie |

---

## Use Case 4: Regulatory Compliance

**Headline**: "Compliance confidence in een complexe wereld"

**Probleem**: GDPR-boetes tot 4% van jaarlijkse omzet

**Oplossing**: Compliance assistant voor regelgeving-interpretatie en audit-voorbereiding

**Resultaten**:
| Metric | Impact |
|--------|--------|
| Audit-voorbereiding | 60% sneller |
| Compliance gaps | 80% sneller geïdentificeerd |

---

## Use Case 5: IT Helpdesk

**Headline**: "Halveer je IT-tickets zonder extra FTE"

**Probleem**: 60-70% van IT-tickets zijn repetitieve vragen

**Oplossing**: Tier-1 deflection met self-service troubleshooting

**Resultaten**:
| Metric | Impact |
|--------|--------|
| Ticket deflection | 50-60% |
| Kosten per ticket | 35% lager |

---

## Use Case 6: Finance & Procurement

**Headline**: "Inkoopbeleid dat iedereen begrijpt"

**Probleem**: 30% van facturen vertraagd door procedurefouten

**Oplossing**: Beleid uitleg en goedkeuringsroute bepaling

**Resultaten**:
| Metric | Impact |
|--------|--------|
| Procedurefouten | 60% reductie |
| Factuurverwerkingstijd | 40% sneller |

---

## Use Case 7: Multi-Jurisdictional

**Headline**: "Eén AI voor al je Europese operaties"

**Probleem**: Multinationals hebben 15+ verschillende beleidssets

**Oplossing**: Cross-border vergelijking en harmonisatie-ondersteuning

**Resultaten**:
| Metric | Impact |
|--------|--------|
| Cross-border vragen | 80% sneller beantwoord |
| Externe juridische kosten | 40% reductie |

---

# 6. DEPLOYMENT OPTIONS (voor pricing/product pagina)

## Optie 1: SaaS Multi-Tenant
**Voor**: Organisaties die snel willen starten

- ✅ Live in weken, niet maanden
- ✅ EU-datacenters (DE/NL)
- ✅ Logische tenant-isolatie
- ✅ Automatische updates
- ✅ Kostenefficiënt

## Optie 2: Single-Tenant SaaS
**Voor**: Organisaties met verhoogde security-eisen

- ✅ Dedicated infrastructuur
- ✅ Eigen cluster en databases
- ✅ BYOK (Bring Your Own Key)
- ✅ Enhanced isolatie

## Optie 3: Customer-Managed *(Coming Soon)*
**Voor**: Hoogste security-eisen

- ✅ Volledige controle
- ✅ Air-gapped opties
- ✅ On-premise mogelijk

---

# 7. INTEGRATIONS (voor integraties pagina)

## Document Bronnen
- SharePoint Online & Server 2019+
- Direct Upload (PDF, Word, Excel, PowerPoint, TXT, RTF)

## HR Systemen
- AFAS
- SAP SuccessFactors
- Microsoft Dynamics 365
- Workday
- Personio
- Outlook Calendars

## Identity & Access
- SAML 2.0
- OpenID Connect
- SCIM 2.0
- MFA

## Collaboration
- Microsoft Teams
- Slack
- Email & Calendar

## API
- REST API met OAuth 2.0
- Webhooks

---

# 8. TECHNICAL SPECIFICATIONS (voor technische pagina)

| Categorie | Specificatie |
|-----------|--------------|
| **Architectuur** | RAG (Retrieval-Augmented Generation) |
| **AI Models** | Multiple models, EU-deployed |
| **Data Residency** | EU (Duitsland, Nederland) |
| **Encryptie** | TLS 1.2+ (transit), AES-256 (rest) |
| **Authenticatie** | SAML 2.0, OIDC, MFA |
| **Autorisatie** | RBAC met granulaire permissies |
| **Session Management** | JWT tokens (RS256), 8-uur sessies |
| **Data Retention** | Configureerbaar (default 12 maanden) |
| **SharePoint Sync** | 4 uur metadata, 24 uur full content |

## Compliance Status

| Regelgeving | Status |
|-------------|--------|
| GDPR | ✅ Compliant (Data Processor Art. 28) |
| EU AI Act | ✅ Compliant (Limited Risk, Art. 52) |
| ISO 27001 | 🔄 In progress |

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

# 9. TRUST & SECURITY (voor trust/security pagina)

## Ingebouwde Safeguards

| Safeguard | Beschrijving |
|-----------|-------------|
| **Geen Geautomatiseerde HR-Beslissingen** | Systeem geeft info; mensen beslissen |
| **Bijzondere Persoonsgegevens** | Standaard geen verwerking zonder expliciete config |
| **Human-in-the-Loop** | Geen autonome acties zonder goedkeuring |
| **Professioneel Advies** | Geen vervanging voor juridisch/HR-advies |

## Data Protection

- Volentis = Data Processor (GDPR Art. 28)
- Data Processing Agreement met EU SCCs
- Geen datatransfer buiten EU zonder expliciete config
- Geen training op klantdata

## Transparency (EU AI Act)

- AI-disclosure bij elk antwoord
- Bronvermelding verplicht
- Confidence scoring zichtbaar
- Volledige audit trail

---

# 10. SOCIAL PROOF (voor testimonials/case studies)

## Bewezen Resultaten (algemeen)

| Metric | Impact |
|--------|--------|
| HR Service Tickets | 50-70% reductie |
| Beschikbaarheid | 24/7 self-service |
| Medewerkerstevredenheid | +30% |
| Contract review | 70% sneller |
| Compliance gaps | 80% sneller geïdentificeerd |
| IT ticket deflection | 50-60% |

*(Voeg klantlogo's en testimonials toe zodra beschikbaar)*

---

# 11. CALLS-TO-ACTION

## Primaire CTA's
- **"Book a Demo"** — Hoofdpagina, use case pagina's
- **"Talk to our team"** — Contact pagina

## Secundaire CTA's
- "Bereken je besparingen" — ROI calculator
- "Zie hoe het werkt" — Product demo video
- "Download whitepaper" — Lead generation

---

# 12. CONTACT INFORMATIE

**Volentis B.V.**

- 📧 contact@volentis.ai
- 🌐 www.volentis.ai
- 📍 Nederland

---

# 13. DESIGN INSPIRATIE: Sweet & Maxwell ProView

## Geanalyseerde Website
https://www.sweetandmaxwell.co.uk/en-gb/products/proview

## Bruikbare Elementen voor Volentis

### ✅ Page Structure (kopieerbaar)

| Sectie | ProView | Volentis Equivalent |
|--------|---------|--------------------|
| **Hero** | Headline + subheadline + korte beschrijving + CTA | ✅ Zelfde aanpak |
| **"What makes X convenient?"** | 4 features met afbeelding + tekst (alternating layout) | ✅ "Wat maakt Volentis.ai uniek?" |
| **"Purchase options"** | 3 opties in cards | ✅ Deployment opties |
| **"The value of X"** | Video + 3 value props | ✅ Demo video + benefits |
| **"Explore titles"** | Product categories | ✅ Use cases |
| **CTA sectie** | "Request free trial" | ✅ "Book a demo" |

### ✅ Design Patterns (overnemen)

1. **Alternating Image/Text Layout**
   - Feature 1: Afbeelding links, tekst rechts
   - Feature 2: Tekst links, afbeelding rechts
   - Herhaal voor alle features
   - Elke feature eindigt met "Try it for free" link

2. **Consistent CTA Herhaling**
   - Primaire CTA in hero
   - "Try it for free" na elke feature sectie
   - CTA in footer

3. **Value Props in Cards**
   - 3 cards naast elkaar
   - Icon + heading + korte beschrijving
   - Geen CTA in cards (clean)

4. **Video Integratie**
   - Thumbnail met play button
   - Naast video: heading + beschrijving + link

5. **Trust Indicators**
   - "Trusted content" sectie
   - Publisher logos
   - "Getting started resources" link

### ✅ Content Patterns (overnemen)

| Element | ProView Voorbeeld | Volentis Vertaling |
|---------|-------------------|-------------------|
| **Headline** | "You know the question; ProView helps find the answer" | "Je kent de vraag; Volentis.ai vindt het antwoord" |
| **Subheadline** | "Take your e-books wherever work goes..." | "Neem je bedrijfskennis overal mee..." |
| **Feature heading** | "Take your library with you" | "Neem je kennisbank overal mee" |
| **Feature heading** | "Powerful search and filtering" | "Krachtig zoeken met AI" |
| **Feature heading** | "Bring your publications to life" | "Breng je documenten tot leven" |
| **Value prop** | "Trusted content" | "Betrouwbare antwoorden" |
| **Value prop** | "Research made easy" | "Onderzoek moeiteloos" |

### ✅ Specifieke Secties om te Kopiëren

**1. Hero Sectie**
```
[H1] Volentis.ai
[H2] Je kent de vraag; Volentis.ai vindt het betrouwbare antwoord
[P] Neem je bedrijfskennis overal mee met 24/7 toegang tot 
    betrouwbare antwoorden uit jouw eigen documenten — 
    de enige AI-assistent gebouwd voor Europese enterprises.
[CTA] Book a Demo
```

**2. "What makes Volentis.ai so convenient?" Sectie**
- Feature 1: "Antwoorden uit jouw eigen documenten" + afbeelding
- Feature 2: "Bronvermelding bij elk antwoord" + afbeelding
- Feature 3: "Krachtig zoeken met AI" + afbeelding
- Feature 4: "Samenwerken en delen" + afbeelding

**3. "Deployment options to suit you" Sectie**
- Card 1: SaaS Multi-Tenant
- Card 2: Single-Tenant SaaS
- Card 3: Customer-Managed

**4. "The value of Volentis.ai" Sectie**
- Video thumbnail links
- Rechts: "Toegang tot antwoorden, altijd en overal"
- Onder video: 3 value props (Betrouwbare antwoorden, Audit trail, Compliance)

**5. "Explore use cases" Sectie**
- HR Policy Assistant (met logo/icon)
- Legal Contract Assistant
- IT Helpdesk
- etc.

### ❌ Niet Overnemen

- Cookie banner styling (standaard oplossing gebruiken)
- Mega menu structuur (te complex voor Volentis)
- Publisher logos sectie (niet relevant)
- "Write with us" sectie (niet relevant)

---

# 14. WEBSITE STRUCTUUR (UPDATED)

```
Homepage
├── Hero (headline + subheadline + CTA)
├── ⭐ "VOOR WIE?" SECTIE (direct na hero!) ⭐
├── "What makes Volentis.ai so convenient?" (4 features)
├── "The value of Volentis.ai" (video + 3 value props)
├── "Deployment options" (3 cards)
├── Trust & Security badges
├── CTA

Use Cases (subpagina's)
├── HR Policy Assistant ⭐
├── Employee Onboarding
├── Legal Contract Assistant
├── Regulatory Compliance
├── IT Helpdesk
├── Finance & Procurement
├── Multi-Jurisdictional
```

---

## ⭐ HOMEPAGE USE CASE SECTIE (Kritiek voor conversie!)

### Waarom Direct na Hero?

Bezoekers moeten binnen 5 seconden denken: *"Dit is voor mij!"*

### Sectie Titel
> **"Welk probleem wil jij oplossen?"**
> of: **"Kies jouw uitdaging"**
> of: **"Voor welke afdeling zoek je een oplossing?"**

### Use Case Cards (6 cards in grid)

Elke card bevat:
- **Icoon** (afdeling-specifiek)
- **Titel** (korte herkenbare naam)
- **One-liner** (het probleem dat we oplossen)
- **Link** naar detail pagina

```
┌─────────────────────────────────────────────────────────────────┐
│  👥 HR BELEID              📜 JURIDISCH           🛡️ COMPLIANCE     │
│  "Minder tickets,        "Contract review      "GDPR & EU AI Act  │
│   meer strategie"         in uren, niet dagen" zonder stress"     │
│  [Ontdek meer →]         [Ontdek meer →]      [Ontdek meer →]    │
├─────────────────────────────────────────────────────────────────┤
│  💻 IT HELPDESK           💰 FINANCE             🌍 INTERNATIONAAL │
│  "Halveer je tickets     "Inkoopbeleid dat    "Eén AI voor al je  │
│   zonder extra FTE"       iedereen begrijpt"   EU-operaties"      │
│  [Ontdek meer →]         [Ontdek meer →]      [Ontdek meer →]    │
└─────────────────────────────────────────────────────────────────┘
```

### Card Content (exact)

| Card | Icoon | Titel | One-liner | Link |
|------|-------|-------|-----------|------|
| 1 | 👥 | **HR Beleid & Service** | "50-70% minder HR-tickets, 24/7 antwoorden" | /use-cases/hr |
| 2 | 📜 | **Juridisch & Contracten** | "Contract review 70% sneller, geen clausules missen" | /use-cases/legal |
| 3 | 🛡️ | **Compliance & Risk** | "GDPR & EU AI Act audit-ready in uren" | /use-cases/compliance |
| 4 | 💻 | **IT & Helpdesk** | "Tier-1 deflection van 50-60%, lagere kosten" | /use-cases/it |
| 5 | 💰 | **Finance & Inkoop** | "60% minder procedurefouten, snellere facturen" | /use-cases/finance |
| 6 | 🌍 | **Internationaal** | "Eén platform voor al je EU-jurisdicties" | /use-cases/international |

### Alternatief: Persona-Based Cards

Voor nog directere herkenning, target op functietitel:

| Card | Titel | One-liner |
|------|-------|----------|
| 1 | **"Ik ben HR Manager"** | "Geef je team 24/7 antwoorden zonder extra FTE" |
| 2 | **"Ik ben General Counsel"** | "Versnel contract review en due diligence" |
| 3 | **"Ik ben Compliance Officer"** | "Blijf audit-ready zonder stress" |
| 4 | **"Ik ben IT Director"** | "Reduceer helpdesk tickets met 50%" |
| 5 | **"Ik ben CFO"** | "Iedereen begrijpt het inkoopbeleid" |
| 6 | **"Wij zijn multinational"** | "Eén AI voor alle EU-landen" |

### Design Specificaties

- **Layout**: 3x2 grid op desktop, 2x3 op tablet, 1x6 op mobile
- **Card styling**: 
  - Witte achtergrond met subtle shadow
  - Hover: lichte cyan tint (`#F2F9FC`) + shadow versterken
  - Border-radius: 12px
- **Icoon**: 48px, in Volentis Cyan (`#2AAAD9`)
- **Titel**: 18px, bold, Volentis Navy (`#1B3A4B`)
- **One-liner**: 14px, grijs (`#666666`)
- **Link**: Cyan (`#2AAAD9`), met pijl icoon

Product
├── Features
├── Integrations
├── Deployment Options
├── Technical Specs

Trust & Security
├── Compliance (GDPR, EU AI Act)
├── Data Protection
├── Security Architecture

Pricing
├── Deployment options
├── Contact for quote

Resources
├── Blog (zie Blog Implementatie sectie hieronder)
├── Whitepapers
├── Case Studies
├── FAQ

---

# 14b. BLOG IMPLEMENTATIE

## Directory Structuur

```
/volentis-web/
├── content/
│   └── blog/
│       └── nl/
│           ├── artikel-slug.md
│           └── ...
├── src/
│   ├── app/[locale]/blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx          # Artikel pagina
│   ├── components/blog/
│   │   ├── ArticleHero.tsx       # Full-width hero
│   │   ├── ArticleContent.tsx    # Markdown content
│   │   ├── ArticleCTA.tsx        # In-article CTA
│   │   ├── BlogCard.tsx          # Listing card
│   │   ├── BlogHero.tsx          # Listing hero
│   │   ├── RelatedPosts.tsx      # Gerelateerde artikelen
│   │   ├── ShareButtons.tsx      # Social share (client component)
│   │   └── TableOfContents.tsx   # Auto-generated TOC
│   └── lib/
│       └── blog.ts               # Blog utilities
└── public/
    └── images/
        └── blog/
            └── [artikel-images].png
```

## Frontmatter Structuur

```yaml
---
title: "Artikel Titel"
description: "150-160 karakters voor SEO en lead paragraph"
date: "2026-02-03"
author: "Volentis Team"
category: "HR"
tags: ["tag1", "tag2", "tag3"]
image: "/images/blog/artikel-hero.png"
imageAlt: "Beschrijving afbeelding"
published: true
---
```

## Insight Boxes

Speciale blockquotes worden automatisch omgezet naar gekleurde boxes:

| Type | Syntax | Kleur |
|------|--------|-------|
| Key Insight | `> **Key Insight:** tekst` | Blauw |
| Pro Tip | `> **Pro Tip:** tekst` | Groen |
| Bottom Line | `> **Bottom Line:** tekst` | Amber |

**Aanbevolen per artikel:**
- 2-3x Key Insight (verspreid)
- 2x Pro Tip (bij praktische secties)
- 1x Bottom Line (aan het eind)

## Automatische Features

1. **Table of Contents** — Auto-gegenereerd uit H2 headers (bij 3+ secties)
2. **Lead Paragraph** — Description met accent-lijn
3. **CTA Sectie** — "Klaar om dit te ervaren?" met demo button
4. **Share Buttons** — LinkedIn, X, Copy Link
5. **Related Posts** — Automatisch op basis van category/tags

## i18n Keys (messages/*.json)

```json
"blog": {
  "badge": "Insights & Artikelen",
  "title": "Volentis Blog",
  "description": "...",
  "jumpTo": "In dit artikel",
  "ctaBadge": "Zet dit in praktijk",
  "ctaTitle": "Klaar om dit te ervaren?",
  "ctaDescription": "...",
  "ctaButton": "Boek een demo",
  "ctaSecondary": "Bekijk use cases"
}
```

## Hero Images

- **Formaat:** 1200x630 (OG-compatible)
- **Logo:** Volentis logo (light versie) rechtsboven met 50px padding
- **Stijl:** Consistent met brand (navy/cyan gradients)

**ImageMagick commando voor logo:**
```bash
composite -gravity northeast -geometry +50+40 \
  volentis_logo_light.png artikel-hero.png output.png
```

Contact
├── Form
├── Demo booking
```

---

# 14. ASSETS CHECKLIST

## Benodigde Visuele Assets

- [ ] Logo (SVG, PNG in verschillende formaten)
- [ ] Favicon
- [ ] Hero afbeelding/illustratie
- [ ] Use case iconen (7x)
- [ ] Feature iconen
- [ ] Integration logos (SharePoint, Teams, Slack, AFAS, SAP, etc.)
- [ ] Trust badges (GDPR, EU AI Act)
- [ ] Screenshots van platform interface
- [ ] Demo video (2-3 minuten)

## Benodigde Content

- [ ] Privacy Policy
- [ ] Terms & Conditions
- [ ] Cookie Policy
- [ ] Data Processing Agreement (downloadbaar)

---

# 15. BRONBESTANDEN

Voor meer detail, raadpleeg:

1. **Volentis_End_User_Manual.md** — Volledige technische documentatie
2. **Volentis_Marketing_Sales_Story.md** — Uitgebreide marketing content
3. **Volentis_Use_Cases_Campagnes.md** — Gedetailleerde use cases met buyer personas

---

*Document versie: 1.0*  
*Aangemaakt: Januari 2026*  
*© Volentis B.V.*
