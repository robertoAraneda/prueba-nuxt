import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from "vuetify/util/colors";
import { createVuetify } from 'vuetify'

export default createVuetify({
  ssr: true,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#5E5384", // #E53935
          secondary: "#F7F7FC", // #FFCDD2
          bar: "#ffffff",
          barSelected: "#F7ECFC",
          accent: colors.red.darken1,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#5E5384",
          secondary: "#F7F7FC",
          accent: colors.red.darken1,
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
  // ... your configuration
})

