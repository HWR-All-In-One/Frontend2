<template>
    <div class="password-panel">
        <div class="password-panel-top">
            <h1 class="first-title">
                HWR Student Portal
            </h1>
            <img class="bear-image" src="~/assets/images/Bear.png">
            <h2 class="second-title">
                Anmeldung
            </h2>
            <h3 class="third-title">
                Zum Benutzerkonto
            </h3>
        </div>
        <div class="password-panel-middle">
            <v-text-field class="password-input" hide-details single-linenpm filled outlined label="Passwort"
                hint="Dein Passwort von Moodle">
            </v-text-field>
            <a class="forgot-password-link" href="/login/forget/fpassword">
                Passwort vergessen?
            </a>
        </div>
        <div class="password-panel-bottom">
            <v-btn class="create-account-button" secondary to="/registration">
                Konto erstellen
            </v-btn>
            <v-btn class="continue-to-userspace-button">
                Bestätigen
            </v-btn>
        </div>
    </div>
</template>

<style lang="scss">
/* Dark Theme Styling */


/* Light Theme Styling */


/* General Mobile Styling */


/* General Desktop Styling */
.password-panel {
    width: 40%;
    height: 80%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-self: center;
    border: 1px solid #d50b2e;
    border-radius: 15px;
}

.password-panel-top {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.first-title {
    margin-bottom: 30px;
    color: #d50b2e;
}

.bear-image {
    width: 25%;
    height: 45%;
    margin-bottom: 30px;
    align-self: center;
}

.second-title {
    align-self: center;
    margin-bottom: 15px;
}

.third-title {
    align-self: center;
    margin-bottom: 30px;
}

.password-panel-middle {
    display: flex;
    flex-direction: column;
}

.password-input {
    background-color: #ffffff;
    border: 1px solid #d50b2e;
}

.forgot-password-link {
    margin-top: 10px;
    margin-bottom: 30px;
}

.password-panel-bottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2%;
}

.create-account-button {
    width: 49%;
    height: 40px !important;
}

.continue-to-userspace-button {
    width: 49%;
    height: 40px !important;
}
</style>