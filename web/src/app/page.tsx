"use client";

import {
  GrpcWebImpl,
  TranslateClientImpl,
  Translation,
  Translations,
} from "@/generated/server/proto/boli";
import { useEffect, useState } from "react";

const getTranslationsHelper = (): Promise<Translations> => {
  const rpc = new GrpcWebImpl("http://[::1]:50051", {});
  const client = new TranslateClientImpl(rpc);

  return client.GetTranslations({});
};

const createTranslation = () => {
  const rpc = new GrpcWebImpl("http://[::1]:50051", {});
  const client = new TranslateClientImpl(rpc);

  return client.TranslateText({
    sourceLanguage: "english",
    sourceText: "how are you?",
    destinationLanguage: "sindhi",
    destinationText: "chal haal tai?",
  });
};

export default function Home() {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const refreshTranslations = () =>
    getTranslationsHelper().then((t) => setTranslations(t.translations));
  useEffect(() => {
    refreshTranslations();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button
          onClick={() => {
            createTranslation().then(() => refreshTranslations());
          }}
        >
          Create
        </button>
        {translations.map((t, index) => (
          <div key={index}>{JSON.stringify(t)}</div>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
