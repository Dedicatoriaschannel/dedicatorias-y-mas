\# Project State — Dedicatorias y Más



\## Repo

\- GitHub: https://github.com/Dedicatoriaschannel/dedicatorias-y-mas

\- Visibilità: \*\*public temporaneamente\*\* (serve per permettere accesso/lettura ad altre AI come Gemini/Claude). In futuro verrà valutato “private”.



\## Stack \& ambiente

\- Stack: Astro + Tailwind CSS (dark \& gold)

\- OS: Windows + GitHub Desktop

\- Dev server: `npm run dev` → http://localhost:4321/



\## Stato Git

\- Branch principale: `main`

\- PR #1 (README + package-lock): \*\*fatta/merge completato\*\* ✅ (branch eliminato)

\- Stato attuale: stiamo lavorando su “Step 2” (docs/structure). Creati i file:

&nbsp; - `docs/STATE.md`

&nbsp; - `docs/NEXT.md`

&nbsp; - `docs/DECISION.md`



\## Sicurezza

\- Nessuna API key / segreto inserito.

\- `.gitignore` include: `.env\*`, `node\_modules`, `dist`, `.astro`, `.vercel/`, `.netlify/`, ecc.

\- Nota: dopo `npm install` compaiono avvisi `npm audit` (vulnerabilità). \*\*Non eseguire `npm audit fix --force`\*\* senza revisione, perché può introdurre breaking changes.



\## Note operative

\- `node\_modules` e `.astro` devono restare \*\*locali\*\* (non versionati).

\- Il progetto funziona in locale (dev server OK).



