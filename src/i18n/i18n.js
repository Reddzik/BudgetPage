import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import CustomBackend from "./CustomBackend";
import LangaugeDetector from "i18next-browser-languagedetector";

//move this variables with dotenv.
const POEDITOR_API_TOKEN = "87a410aad5e7b26ef79e2d3cb81640fb";
const PROJECT_ID = "393021";

i18n
  .use(CustomBackend)
  .use(LangaugeDetector)
  .use(initReactI18next)
  .init({
    defaultLanguage: "en",
    otherLanguage: ["pl"],
    fallbackLng: "en",
    debug: true,
    saveMissing: true,

    backend: {
      // !!!!!!!!!! Don't use it in production!!!!!!!! It's just a trick. It asks poeditor API by cors proxy. On Production you should have your own server to get translation of your app :)
      loadPath:
        "https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/list",
      addPath:
        "https://cors-anywhere.herokuapp.com/https://api.poeditor.com/v2/terms/add",
      crossDomain: true,
      parse: (data) => {
        const parsedData = JSON.parse(data);
        const terms = parsedData.result.terms.reduce((acc, item) => {
          acc[item.term] = item.translation.content || item.term;

          return acc;
        }, {});

        return terms;
      },
      parsePayload: (namespace, key) => {
        if (key === "_t") return;

        const data = [
          {
            term: key,
          },
        ];
        const payload = {
          api_token: POEDITOR_API_TOKEN,
          data: JSON.stringify(data),
          id: PROJECT_ID,
        };

        return payload;
      },
      parseLoadPayload: ({ lng }) => {
        const payload = {
          language: lng,
          api_token: POEDITOR_API_TOKEN,
          id: PROJECT_ID,
        };

        return payload;
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
