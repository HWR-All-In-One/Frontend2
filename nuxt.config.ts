// import { defineNuxtConfig } from 'nuxt/config'
// import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@mdi/font/css/materialdesignicons.min.css',
        'assets/styles/main.scss'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
