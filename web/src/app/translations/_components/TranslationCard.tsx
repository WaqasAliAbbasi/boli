import { Translation } from "@/generated/server/proto/boli";
import React from "react";

export const TranslationCard: React.FC<{ translation: Translation }> = ({
  translation,
}) => {
  return (
    <div className="p-3">
      <p>
        In {translation.sourceLanguage}: {translation.sourceLanguage}
      </p>
      <p>
        In {translation.destinationLanguage}: {translation.destinationText}
      </p>
    </div>
  );
};
