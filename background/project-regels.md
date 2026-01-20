# Volentis Website - Project Regels

Deze regels gelden altijd bij het bouwen of aanpassen van de site.

---

## 🎯 Kernprincipes

### 1. Kwaliteit boven snelheid
- Neem de tijd voor goede oplossingen
- Geen quick fixes die later problemen veroorzaken
- Liever 1x goed dan 3x aanpassen

### 2. Geen fake of hardcoded data
- Alles moet uit echte bronnen komen (translations, API's, config)
- Geen placeholder teksten die "later" vervangen worden
- Geen hardcoded waarden die in meerdere bestanden voorkomen

### 3. Natuurlijk Nederlands
- Vermijd letterlijke vertalingen uit het Engels
- Geen overmatig gebruik van "—" (em-dashes)
- Teksten moeten klinken alsof een mens ze geschreven heeft
- Bij twijfel: "Zouden wij dit echt zo zeggen?"

### 4. Menselijk en warm
- Geen robotachtige of koude uitstraling
- Persoonlijke, benaderbare tone of voice
- Visueel: echte foto's boven illustraties/iconen waar mogelijk

---

## 🔧 Technische Regels

### Git & Deployment
- Alleen `git push origin main` - Vercel deployt automatisch
- Geen handmatige `npx vercel` commands nodig
- Commit messages in het Engels, kort en duidelijk

### Code Stijl
- Bestaande patronen en conventies volgen
- Tailwind classes gebruiken, geen custom CSS tenzij nodig
- Translations in alle 4 talen (en, nl, de, fr) - Engels als fallback

### Afbeeldingen
- Geoptimaliseerd voor web (max ~50KB voor avatars/icons)
- Vierkant formaat voor avatars
- WebP of gecomprimeerde JPG

---

## 🎨 Design Regels

### Volentis Branding
- Kleuren: volentis-navy, volentis-cyan als accenten
- Moderne, clean uitstraling
- Subtiele animaties (geen overdreven effecten)

### Layout
- Mobile-first responsive design
- Voldoende whitespace
- Tekst compact maar leesbaar

### Componenten
- Hergebruik bestaande componenten
- Consistente styling across pages
- Glassmorphism effecten waar passend

---

## ✅ Checklist voor Wijzigingen

Voordat iets live gaat:

- [ ] Werkt het in alle 4 talen?
- [ ] Is de Nederlandse tekst natuurlijk?
- [ ] Geen hardcoded waarden?
- [ ] Mobile responsive?
- [ ] Geen console errors?
- [ ] Git gepusht?

---

## 📋 Standaard Context voor AI

Copy-paste dit bij nieuwe taken:

```
Context: Volentis.ai website (Next.js, Tailwind, next-intl)

Regels:
- Kwaliteit > snelheid
- Geen fake/hardcoded data
- Natuurlijk Nederlands (geen AI-tekst)
- Menselijk en warm
- Alleen git push, Vercel deployt automatisch
- Volg bestaande code patronen
```

---

*Deze regels zijn gebaseerd op de samenwerking tijdens het bouwen van de site.*
