import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const loadTranslations = async () => {
  console.log("entra");
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: {
            title: "Sermon idea generator",
            subtitle:
              "Input a title or a verse and the generator will write a sermon idea",
            placeholder: "Start typing here your sermon title or a verse...",
            generate: "Generate",
            output: "Output",
          },
        },
        es: {
          translation: {
            title: "Generador de sermones",
            subtitle:
              "Escribe un titulo o un versiculo y el generador escribira ideas para un sermon",
            placeholder: "Escribe aqui tu titulo o versiculo...",
            generate: "Generar",
            output: "Resultado",
          },
        },
      }, // if you're using a language detector, do not define the lng option
      fallbackLng: "en",

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
};
