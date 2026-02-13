# 🚀 QUICK START - Dedicatorias y Más

## ✅ COSA HO CREATO

**Progetto Astro completo** pronto per sviluppo locale e deploy su Vercel.

### File Generati (16 totali)

#### Config & Setup
- `package.json` - Dependencies
- `tailwind.config.mjs` - Brand colors (Dark/Gold)
- `astro.config.mjs` - Astro setup
- `.gitignore` - Git ignore rules

#### Data Layer
- `src/data/eventsConfig.ts` - 30+ eventi con date mobili
- `src/data/mockVideos.ts` - 24 video mock realistici
- `src/data/categories.ts` - 6 categorie

#### Utils
- `src/utils/eventCalculator.ts` - Algoritmo Computus + calcolo date

#### Components
- `src/components/Header.astro` - Navbar glassmorphism + logo
- `src/components/Hero.astro` - Hero premium Dark/Gold
- `src/components/CelebraHoy.astro` - Evento dinamico
- `src/components/VideoCard.astro` - Card video
- `src/components/VideoGrid.astro` - Grid responsive

#### Layouts & Pages
- `src/layouts/Layout.astro` - Layout base + SEO
- `src/pages/index.astro` - Homepage completa

#### Docs
- `README.md` - Documentazione completa

---

## ⚡ SETUP IN 3 MINUTI

### 1. Installa Dependencies
```bash
cd dedicatorias-y-mas
npm install
```

### 2. Aggiungi Logo
Copia il tuo logo PNG in:
```
public/logo.png
```

### 3. Avvia Server
```bash
npm run dev
```

Apri: `http://localhost:4321`

---

## 🎯 COSA VEDRAI

✅ **Homepage completa** con:
- Hero section premium Dark/Gold
- Sezione "Celebra Hoy" (mostra prossimo evento automaticamente)
- 4 categorie prioritarie con cards interattive
- Grid ultimi 8 video con hover effects gold
- Footer con social links

✅ **Design System**:
- Colori: Dark (#0F0F0F) + Gold (#D4AF37)
- Font: Playfair Display (titoli) + Inter (testo)
- Responsive: Mobile-first, desktop elegante
- Animations: Smooth transitions, hover effects

✅ **Funzionalità Avanzate**:
- Calcolo automatico eventi (Pasqua con Computus, date mobili multi-paese)
- 24 video mock realistici con thumbnails Unsplash
- SEO completo (meta tags, Open Graph, Twitter Cards)
- Glassmorphism navbar sticky

---

## 🚀 DEPLOY SU VERCEL (5 minuti)

### Opzione A: Via GitHub
1. Push progetto a GitHub
2. Vai su vercel.com → Import Repository
3. Deploy (zero configurazione, Astro auto-detect)

### Opzione B: Via CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Collegare Dominio GoDaddy
1. Vercel → Settings → Domains → Add `dedicatoriasymas.com`
2. GoDaddy DNS:
   - CNAME `@` → `cname.vercel-dns.com`
   - CNAME `www` → `cname.vercel-dns.com`

**Email Microsoft 365** resta su GoDaddy (non modificare MX records)

---

## 📋 PROSSIMI STEP (Gemini/Claude Fase 4)

Queste pagine NON sono state create (usano template dinamico):
- [ ] `/videos` - Archivio completo con filtri
- [ ] `/categoria/[slug]` - Template categoria
- [ ] `/eventos/[slug]` - Template evento
- [ ] `/video/[slug]` - Dettaglio + WhatsApp button
- [ ] `/sobre-mi` - Pagina "Sobre Mí"

Integrazione da fare:
- [ ] YouTube Data API v3 (sostituire mock data)
- [ ] WhatsApp share button (sticky su mobile)

---

## ⚠️ IMPORTANTE

1. **Logo obbligatorio**: Senza logo in `public/logo.png` il sito mostrerà errore
2. **Mock data**: I video sono placeholder, devi integrare YouTube API
3. **Eventi**: Già configurati 30+ eventi, calcolo automatico funziona
4. **SEO**: Meta tags già ottimizzati in spagnolo

---

## 🆘 TROUBLESHOOTING

**Errore "Cannot find module"**:
```bash
npm install
```

**Port già in uso**:
```bash
npm run dev -- --port 3000
```

**Build fallisce**:
```bash
npm run build
# Controlla errori TypeScript/Astro
```

---

## 📞 CONTATTO

Per domande tecniche → Chiedi a Claude o Gemini  
Deadline: **Giovedì prossimo** ✅

**Status Progetto**: Fase 1-3 Complete | Fase 4 Pendiente
