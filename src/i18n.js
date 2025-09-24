import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pl from "./locales/pl/translation.json";
import en from "./locales/en/translation.json";

// Zasoby tłumaczeń
const resources = {
    pl: { translation: pl },
    en: { translation: en }
};

i18n
    .use(LanguageDetector) // wykrywa język z localStorage, navigator, itp.
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "pl", // jeśli brak tłumaczenia, trzymaj polski
        lng: "pl", // wymuszamy domyślnie polski
        supportedLngs: ["pl", "en"],
        interpolation: {
            escapeValue: false
        },
        detection: {
            // priorytet: najpierw localStorage (po przełączeniu), potem język przeglądarki
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"]
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;