import { defineNuxtConfig } from 'nuxt'
import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: {
        transpile: [
            'vuetify',
        ],
    },
    css: [
        '@mdi/font/css/materialdesignicons.min.css',
        '@/assets/styles/main.scss',
    ],
    devServerHandlers: [],
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        async (options, nuxt) => {
			// @ts-ignore
			nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
		},
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    typescript: {
        shim: false,
    },
    vite: {
        ssr: {
			noExternal: ["vuetify"],
		},
		define: {
			"process.env.DEBUG": false,
		},
    },
})
