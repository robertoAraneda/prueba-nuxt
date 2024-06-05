// import this after install `@mdi/font` package
import vuetifyConfig from "../vuetify.config"

export default defineNuxtPlugin((app) => {
  app.vueApp.use(vuetifyConfig)
})