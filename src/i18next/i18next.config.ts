import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './languages/english.json';
import hi from './languages/hindi.json';
import kn from './languages/kannada.json';

// extract the translation resources
const resources = {
  en: {
    translate: en,
  },
  hi: {
    translate: hi,
  },
  kn: {
    translate: kn,
  },
};

// initialize the i18next
i18next.use(initReactI18next).init({
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language if no translations found
  defaultNS: 'translate', // this is the name space
  ns: ['translate'], // all name spaces
  resources: resources, // resources containing the translation json'sF
});

export default i18next;
