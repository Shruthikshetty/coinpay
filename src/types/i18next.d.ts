import 'i18next';
import en from '../i18next/languages/english.json';

// this file is used to provide type safety to translations in i18next

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translate';
    resources: {
      translate: typeof en; // namespace is give the type of english.json since all the languages are to follow same key values
    };
  }
}
