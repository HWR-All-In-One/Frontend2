<template>
    <PasswordPanel />
</template>

<script>
import PasswordInput from '~/components/PasswordPanel.vue';

export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire"
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js"
        };
    },
    components: {
        PasswordInput,
    }
}
</script>

<style lang="scss">
/* Light and dark props have been removed. */

/* Mobile Styling */


/* Tablet Styling */


/* Desktop Styling */
</style>