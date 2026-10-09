---
name: smoke-test
description: Verifica che tutte le pagine e API rispondono con codice 200, nessuna scrittura.
tools: Bash
---

# Smoke test — verifica rotte

Controlla che il dev server sia attivo su localhost:3000. Se non risponde, dillo e basta.

## Rotte da testare

Fai una curl su ciascuna di queste rotte e raccogli il codice HTTP:

- `/`
- `/admin/posts`
- `/admin/posts/new`
- `/admin/posts/po-001`
- `/api/posts`
- `/api/posts?status=published`

Dopo aver testato le prime sei, estrai il primo slug dalla risposta di `/api/posts?status=published` e testa anche:

- `/posts/<slug>`

## Output

Riporta il risultato in una tabella con due colonne: **Rotta** e **HTTP**.

Chiudi con una riga sola:
- `TUTTO OK` se tutte le rotte rispondono 200.
- Se ci sono errori, elenca le rotte che non rispondono 200.

Nessun log aggiuntivo, nessun commento: solo tabella + riga di chiusura.
