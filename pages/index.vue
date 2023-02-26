<template>
    <v-app>
        <div>
            <h1 class="main-title">
                Hauptseite
            </h1>
            <v-btn color="primary">
                <NuxtLink class="component-library-link" to="/test">
                    Komponentenbibliothek
                </NuxtLink>
            </v-btn>
            <v-btn color="primary">
                <NuxtLink class="login-link" to="/login">
                    Login
                </NuxtLink>
            </v-btn>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'IndexPage',
}
</script>

<style lang="scss">
/* Light and dark props have been removed. */

/* Mobile Styling */


/* Tablet Styling */


/* Desktop Styling */
.main-title {
    padding: 50px 0 25px 0;
}

.component-library-link,
.login-link {
    text-decoration: none;
}
</style>