// plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: 'dark',
            themes: {
                light: {
                    colors: {
                        primary: "#d50b2e",
                        secondary: "#121212",
                    },
                },
                dark: {
                    colors: {
                        primary: "#d50b2e",
                        secondary: "#121212",
                    },
                },
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})