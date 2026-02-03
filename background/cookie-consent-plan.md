# Cookie Consent Implementatie Plan - Volentis.ai

## 📊 Huidige Situatie

### Cookies die de site gebruikt:
| Cookie | Type | Doel | Consent nodig? |
|--------|------|------|----------------|
| `session_id` | Strikt noodzakelijk | Sessie beheer | ❌ Nee |
| `locale` | Strikt noodzakelijk | Taalvoorkeur | ❌ Nee |

### Wat er NIET is:
- ❌ Google Analytics
- ❌ Facebook Pixel
- ❌ Marketing cookies
- ❌ Third-party tracking

### Wat er WEL is:
- ✅ Cookie policy pagina (`/cookies`)
- ✅ Link in footer naar cookie policy

---

## ⚖️ EU Wetgeving (ePrivacy + GDPR)

### Strikt noodzakelijke cookies:
- **Geen consent nodig** - alleen informeren
- Mag geplaatst worden zonder toestemming
- Volentis valt momenteel in deze categorie

### Analytics/Marketing cookies:
- **Consent VERPLICHT vóór plaatsing**
- Gebruiker moet actief toestemmen
- "Reject All" moet even makkelijk zijn als "Accept All"

---

## 🎯 Aanbeveling: Minimale Banner

Omdat Volentis **alleen strikt noodzakelijke cookies** gebruikt, is technisch gezien **geen banner verplicht**. 

**Echter**, voor:
- Transparantie naar bezoekers
- Toekomstbestendigheid (als analytics toegevoegd wordt)
- Professionele uitstraling

Raad ik een **minimale, niet-opdringerige banner** aan.

---

## 🎨 Design Specificaties

### Positie & Stijl:
- **Positie:** Onderkant scherm, kleine bar (geen popup/modal)
- **Grootte:** Max 60px hoog op desktop, 80px op mobile
- **Stijl:** Glassmorphism, past bij site design
- **Animatie:** Subtiel slide-in vanaf onder

### Gedrag:
- Verschijnt alleen bij **eerste bezoek**
- Keuze wordt opgeslagen in **localStorage** (geen extra cookie!)
- Verdwijnt na keuze met fade-out
- Komt **NIET** terug tenzij localStorage gewist

### Opties (simpel):
1. **"Accepteren"** - Accepteert alle cookies (voor toekomstige analytics)
2. **"Alleen noodzakelijk"** - Alleen functionele cookies
3. **Link naar cookie policy** - Voor meer info

### Geen:
- ❌ Geen groot popup scherm
- ❌ Geen "manage preferences" met 20 toggles
- ❌ Geen dark patterns
- ❌ Geen herhaalde verzoeken

---

## 💻 Technische Implementatie

### Bestanden:
```
src/
  components/
    ui/
      CookieConsent.tsx    # Nieuwe component
  hooks/
    useCookieConsent.ts    # Custom hook voor state
```

### Logica:
```typescript
// useCookieConsent.ts
1. Check localStorage voor 'cookie-consent'
2. Als niet aanwezig → toon banner
3. Bij keuze → sla op in localStorage
4. Return: { showBanner, consent, acceptAll, acceptNecessary }
```

### localStorage keys:
```javascript
{
  "cookie-consent": "all" | "necessary" | null,
  "cookie-consent-date": "2026-01-21"
}
```

### Integratie:
- Component toevoegen aan `layout.tsx`
- Translations toevoegen aan alle talen
- Geen externe dependencies

---

## 📝 Teksten (meertalig)

### Nederlands:
```
We gebruiken cookies om de site te laten werken. Geen tracking, geen advertenties.
[Accepteren] [Alleen noodzakelijk] [Meer info]
```

### Engels:
```
We use cookies to make the site work. No tracking, no ads.
[Accept] [Necessary only] [Learn more]
```

---

## ✅ Checklist Implementatie

- [ ] `CookieConsent.tsx` component maken
- [ ] `useCookieConsent.ts` hook maken
- [ ] Translations toevoegen (en, nl, de, fr)
- [ ] Component in layout.tsx
- [ ] Testen in alle talen
- [ ] Testen localStorage persistence
- [ ] Mobile responsive check

---

## 🚫 Wat we NIET doen

1. **Geen cookie consent library** (te zwaar, overkill)
2. **Geen Google Consent Mode** (geen analytics)
3. **Geen IAB TCF framework** (voor ad-tech, niet relevant)
4. **Geen cookie wall** (niet toegestaan in EU)

---

## 📅 Tijdsinschatting

| Taak | Tijd |
|------|------|
| Component bouwen | 30 min |
| Hook bouwen | 15 min |
| Translations | 15 min |
| Integratie & test | 15 min |
| **Totaal** | **~1 uur** |

---

*Dit plan volgt de EU ePrivacy Directive en GDPR, met focus op minimale impact op gebruikerservaring.*
