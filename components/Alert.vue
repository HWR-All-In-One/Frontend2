<template>
    <div>
        <v-alert class="info-alert" color="info">
            <h3 class="text-h5">
                Information
            </h3>
            <div>
                Wenn Sie noch weitere Informationen benötigen, melden Sie sich bitte bei
                uns.
            </div>

            <v-divider class="my-4 info"></v-divider>

            <v-row class="info-button-row" no-gutters>
                <v-col class="grow"> </v-col>
                <v-col class="shrink">
                    <v-btn class="info-button" outlined color="info" >
                        Kontakt
                    </v-btn>
                </v-col>
            </v-row>
        </v-alert>

        <v-alert class="success-alert" prominent type="success" icon="mdi-clock-fast">
            Anmeldung erfolgreich. Bitte warten Sie einen Moment.
        </v-alert>
        <v-alert class="connection-lost-alert" prominent type="error" icon="mdi-cloud-alert">
            Verbindung fehlgeschlagen. Bitte überprüfen sie ihre Netzwerkverbindung.
        </v-alert>
    </div>
</template>

<style lang="scss">
/* Dark Theme Styling */


/* Light Theme Styling */


/* General Mobile Styling */


/* General Desktop Styling */
.my-4.info {
    opacity: 0.22;
}
</style>
