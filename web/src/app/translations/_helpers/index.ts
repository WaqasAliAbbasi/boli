import {
  GrpcWebImpl,
  TranslateClientImpl,
  Translations,
} from "@/generated/server/proto/boli";

export const getTranslationsHelper = (): Promise<Translations> => {
  const rpc = new GrpcWebImpl("http://[::1]:50051", {});
  const client = new TranslateClientImpl(rpc);

  return client.GetTranslations({});
};

export const createTranslation = () => {
  const rpc = new GrpcWebImpl("http://[::1]:50051", {});
  const client = new TranslateClientImpl(rpc);

  return client.TranslateText({
    sourceLanguage: "english",
    sourceText: "how are you?",
    destinationLanguage: "sindhi",
    destinationText: "chal haal tai?",
  });
};
