"use client";
// Client component: Input vuole onChange e Button onClick, che una pagina server non può passare.

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { PostCard } from "@/components/ui/PostCard";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function VetrinaPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [wrong, setWrong] = useState("ab");
  const [clicks, setClicks] = useState(0);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-10 p-8">
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">PostCard</h2>
        <PostCard
          title="Il primo post di prova"
          excerpt="Un sommario inventato per vedere come si presenta la card."
          author="Mario Rossi"
          date="2026-03-14T10:00:00.000Z"
          href="#"
        />
        <PostCard
          title="Un secondo post, più lungo nel titolo"
          excerpt="Altro testo finto, giusto per avere due card una sotto l'altra."
          author="Anna Verdi"
          date="2026-05-02T08:30:00.000Z"
          href="#"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">StatusBadge</h2>
        <div className="flex gap-3">
          <StatusBadge status="published" />
          <StatusBadge status="draft" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Button</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" onClick={() => setClicks(clicks + 1)}>
            Primario
          </Button>
          <Button variant="secondary" onClick={() => setClicks(clicks + 1)}>
            Secondario
          </Button>
          <Button variant="danger" onClick={() => setClicks(clicks + 1)}>
            Pericolo
          </Button>
          <Button disabled>Disabilitato</Button>
          <span className="text-sm text-gray-600">Click: {clicks}</span>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Field + Input</h2>
        <Field label="Titolo" htmlFor="vetrina-title">
          <Input
            id="vetrina-title"
            name="title"
            value={title}
            onChange={setTitle}
            placeholder="Scrivi un titolo"
          />
        </Field>
        <Field label="Contenuto (multiline)" htmlFor="vetrina-body">
          <Input
            id="vetrina-body"
            name="body"
            value={body}
            onChange={setBody}
            multiline
            placeholder="Scrivi il contenuto"
          />
        </Field>
        <Field
          label="Con errore"
          htmlFor="vetrina-wrong"
          error="Il titolo deve avere almeno 3 caratteri"
        >
          <Input
            id="vetrina-wrong"
            name="wrong"
            value={wrong}
            onChange={setWrong}
            invalid
          />
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">EmptyState</h2>
        <EmptyState title="Nessun post" />
        <EmptyState
          title="Nessun post trovato"
          description="Non c'è ancora niente qui: crea il primo articolo dal backoffice."
        />
      </section>
    </main>
  );
}
