# Effectieve Prompts voor Website Development

Dit document bevat prompts die goed werkten tijdens het bouwen van de Volentis website. Gebruik deze als referentie voor toekomstige projecten.

---

## 🎨 Design & UI

### Algemene design review
```
Kijk nu even naar de homepage en binnenkomer vanuit het perspectief van een designer. Welke aanbevelingen heb je?
```

### Implementatie van verbeteringen
```
Ja voer alle zaken maar door. Je hebt alle resources tot je beschikking. Niks hoeft snel. Geen fake en hardcoded zaken. Neem je tijd. Kwaliteit is belangrijker dan snelheid.
```

### Specifieke visuele aanpassingen
```
Voor mijn gevoel mag de tekst aan de linkerkant iets compacter... kan dit kloppen?
```

```
En de tekst misschien iets hoger laten beginnen. Er zit wel heel veel ruimte tussen het logo en sovereign ai platform
```

### Animatie/achtergrond kopiëren van bestaande site
```
https://volentis.ai/ heeft een bewegende achtergrond achter de hero. Kijk even wat dat precies is. Zouden wij dat ook zo kunnen maken?
```

### Finetuning met screenshot
```
finetuning: in de chat zie je 2 groene bolletjes alsof volentis online is. Dat is dubbelop en too much...
```

---

## 📝 Content & Copywriting

### Onnatuurlijke vertalingen corrigeren
```
Ik vind dit alleen te vrij vertaald, dit zeggen wij echt niet in Nederland: [tekst]
```

### AI-achtige tekst verbeteren
```
te veel " — " verraad dat de website door ai geschreven is. Waar kunnen we ze het beste weghalen?
```

```
Haal ze zoveel mogelijk weg zonder de boodschap daardoor veranderd.
```

---

## 🔧 Technische Features

### SEO/Meta/LLM bestanden
```
Maak SEO/Meta/LLM files voor de website: robots.txt, sitemap.xml, manifest.json, enhanced metadata (OpenGraph & Twitter cards), structured data (JSON-LD), en llms.txt
```

### Brand assets maken op basis van ander project
```
voor bpc hebben we Brand Assets gemaakt. Dat wil ik nu ook voor volentis doen. Het gaat hier om dezelfde mensen. Kijk in de map @bpc-web/public/brand. Neem je tijd, je hebt alle resources tot je beschikking.
```

### Functionaliteit toevoegen
```
Zullen we naast de button book a demo een login button maken voor bestaande klanten die verwijst naar: https://app.volentis.ai/ Deze misschien juist in een lichtere kleur.
```

---

## 🖼️ Afbeeldingen & Assets

### Echte foto gebruiken in plaats van placeholder
```
Ik wil hier eigenlijk een echte foto van gebruiken en ik heb er een. Kun jij deze aanpassen naar de juiste size en gebruiken?
```

### Avatar/icoon menselijker maken
```
Ik vind alleen de avatar niet zo goed zichtbaar. Ik wil dat de mensen daar iets persoonlijks en menselijks bij voelen. Geen bot of robot ofzo. Meer een moederlijk figuur.
```

### LinkedIn banners specifiek
```
De linkedin banners en de e-mail signatures zijn nu in de stijl van bpc. Kijk even goed naar de site van volentis en de hero section en maak op basis daarvan de banners voor linkedin. met het logo erin rechtsboven.
```

```
Je hebt nu niet het logo van ons gebruikt. En aan de linkerkant komt altijd de foto van de persoon of logo van het bedrijf half over de banner dus daar kan niks staan.
```

---

## 🚀 Deployment & Workflow

### Snel deployen
```
push nu alles via git
```

### Problemen oplossen
```
het lijkt erop dat de website niet laadt, misschien herstarten?
```

```
website laadt niet meer
```

---

## 💡 Best Practices Geleerd

### 1. **Wees specifiek over wat je wilt**
- Geef concrete voorbeelden of referenties
- Stuur screenshots mee bij finetuning
- Noem exacte teksten die je wilt veranderen

### 2. **Geef context**
- Verwijs naar bestaande projecten als voorbeeld (`@bpc-web/public/brand`)
- Leg uit waarom iets niet werkt ("dit zeggen wij niet in Nederland")

### 3. **Itereer in kleine stappen**
- Bekijk het resultaat
- Geef gerichte feedback
- Laat aanpassen

### 4. **Kwaliteit boven snelheid**
- "Neem je tijd, kwaliteit is belangrijker dan snelheid"
- "Geen fake en hardcoded zaken"

### 5. **Vertrouw op automatisering**
- Vercel deployt automatisch bij git push
- Geen handmatige deploy commands nodig

---

## 🎯 Template voor Nieuwe Features

```
[Wat wil je] + [Context/Voorbeeld] + [Kwaliteitseis]

Voorbeeld:
"Maak een chat demo component. Kijk naar hoe Intercom dit doet. 
Neem je tijd, geen hardcoded data."
```

---

*Laatst bijgewerkt: Januari 2026*
