export const themeData = {
  "locales": {
    "/": {
      "selectLanguageText": "Languages",
      "selectLanguageAriaLabel": "Select language",
      "selectLanguageName": "English",
      "toggleThemeModeAriaLabel": "Toggle theme mode",
      "lastUpdatedText": "Last Updated"
    }
  },
  "logo": null,
  "title": null,
  "home": "/",
  "navbar": []
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
