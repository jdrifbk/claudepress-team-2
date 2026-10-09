---
name: new-page
description: Crea una pagina del sito pubblico (server component) che carica dati dal contratto e gestisce dati/vuoto/errore. Trigger: nuova pagina, crea la home, la pagina del post.
---

# Nuova pagina pubblica

Ricevi la risorsa da mostrare, per esempio "la home" o "la pagina del post".

1. Apri `src/contracts/blog.ts`: trova la rotta in `API_ROUTES` e, se la pagina
   mostra una singola risorsa, il modo per verificarne l'esistenza.
   **Se la rotta non c'è, fermati e dillo**: il contratto non si modifica.
2. Crea `src/app/<percorso>/page.tsx`.
3. Server component: **niente `"use client"`**.
4. Carica i dati con
   `await fetch(apiUrl(API_ROUTES.x), { cache: "no-store" })`, tutto importato
   da `@/contracts/blog`. Mai un path relativo, mai un URL scritto a mano.
5. Gestisci tre casi:
   - dati presenti → renderizza (riusa i componenti di `src/components/ui/`
     dove calzano, es. `PostCard`);
   - elenco vuoto → `EmptyState`;
   - fetch fallita (`!res.ok`) → messaggio d'errore, niente crash.
6. Se la pagina mostra una risorsa singola e non esiste, chiama `notFound()`
   di `next/navigation`. Non ritornare `null`.
7. Solo classi Tailwind, nessuna libreria nuova.
8. Testi utente in **italiano**, nomi di variabili e file in **inglese**.
9. Alla fine esegui `npm run check` e riporta l'esito in una riga.

Tocca **solo** il file della pagina. Se serve altro, dillo invece di farlo.
