---
name: new-form
description: Crea il form del post, in creazione (POST) e in modifica (PATCH), con i componenti condivisi e gli errori sotto ogni campo. Trigger: nuovo form, il form di creazione, il modulo del post.
---

# Nuovo form del post

1. Crea il form come client component. In cima `"use client"` con una riga di
   commento che dice perché (stato dei campi e event handler).
2. Importa `Field`, `Input`, `Button` da `@/components/ui/Field`,
   `@/components/ui/Input`, `@/components/ui/Button`. Se un file non esiste,
   fermati e dillo. Nessun `<input>`, `<textarea>`, `<button>` scritto a mano.
3. Props: `initial?: PostInput` e `postId?: string`. Senza `postId` il form fa
   POST su `API_ROUTES.posts`, con `postId` fa PATCH su `API_ROUTES.post(postId)`.
4. Stato: i valori dei campi, `errors: Record<string, string>`, `submitting`.
5. Al submit: `postInputSchema.safeParse(values)`. Se fallisce, riempi `errors`
   dai suoi issue (`path[0]` → `message`) e non inviare.
6. Se valida, imposta `submitting` a true e invia con `fetch`, JSON,
   `cache: "no-store"`.
7. Se la risposta non è ok, leggila come `ApiError`. Con
   `error.code === "validation_error"` metti `error.fields` in `errors`.
8. Ogni `Field` riceve `error={errors.<campo>}` e avvolge il suo `Input`.
   Mai un riquadro di errori in cima.
9. `Button type="submit"` con `disabled={submitting}`. Rimetti `submitting` a
   false a fine invio, anche in caso di errore.
10. Testi in italiano, nomi in inglese. Esegui `npm run check`, esito in una riga.

Tocca solo il file del form. Se serve altro, dillo.
