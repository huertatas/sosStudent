import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Welcome Back 👋': 'Welcome Back 👋',
      Login: 'Login',
      Settings: 'Settings',
      Classrooms: 'Classrooms list',
      AddNewRoom: 'New classroom',
      Add: 'Add',
      ClassName: 'Class name...',
      Empty: 'Empty',
      WaitingRoom: 'Classroom',
      StudentName: 'Student Name',
      Logout: 'Logout',
      ColorTheme: 'Color Theme',
      LangTheme: 'Change language',
      AskQuestion: 'Ask a question',
      AskDescription: 'Your question...'
    }
  },
  fr: {
    translation: {
      'Welcome Back 👋': 'Content de vous revoir ! 👋',
      Login: 'Se connecter',
      Settings: 'Paramètres',
      Classrooms: 'Liste des classes',
      AddNewRoom: 'Nouvelle classe',
      Add: 'Ajouter',
      ClassName: 'Titre de la classe...',
      Empty: 'vide',
      WaitingRoom: 'Salle de classe',
      StudentName: "Nom de l'élève",
      Logout: 'Déconnexion',
      ColorTheme: 'Thème color',
      LangTheme: 'Changer la langue',
      AskQuestion: 'Poser une question',
      AskDescription: 'Votre question...'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'fr', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
