"use client";

import { Translation } from "@/generated/server/proto/boli";
import { useEffect, useState } from "react";
import { createTranslation, getTranslationsHelper } from "./_helpers";
import { TranslationCard } from "./_components/TranslationCard";
import { Button } from "../_components/Button";

export default function Home() {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const refreshTranslations = () =>
    getTranslationsHelper().then((t) => setTranslations(t.translations));
  useEffect(() => {
    refreshTranslations();
  }, []);

  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Home
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Button
            onClick={() => {
              createTranslation().then(() => refreshTranslations());
            }}
          >
            Create
          </Button>
          <ul role="list" className="divide-y divide-dashed">
            {translations.map((t, index) => (
              <TranslationCard translation={t} key={index} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
