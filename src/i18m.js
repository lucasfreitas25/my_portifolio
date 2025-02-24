

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções para inglês e português
const resources = {
    en: {
      translation: {
        welcome: "I'm a Software Dev and Data Scientist",  // A chave 'welcome' para o título
        description: "I'm a Software Dev and Data Scientist", // A chave 'description' para a descrição
      },
    },
    pt: {
      translation: {
        welcome: "Sou dev", // Tradução para o título em português
        description: "Sou dev", // Tradução para a descrição em português
      },
    },
  };
  

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',  // Define o idioma padrão como inglês
  interpolation: {
    escapeValue: false, // React já faz o escaping
  },
});

export default i18n;
