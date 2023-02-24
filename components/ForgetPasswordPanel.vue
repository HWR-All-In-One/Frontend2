<template>
    <div class="password-recovery-panel">
        <div class="password-recovery-panel-top">
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
        <div class="password-recovery-panel-middle">
            <v-text-field class="password-recovery-input"
                hide-details
                single-linenpm 
                filled outlined 
                label="Email fuer die Wiederherstellung"
                hint="Die E-Mail, die ihr angegeben habt">
            </v-text-field>
        </div>
        <div class="password-recovery-panel-bottom">
            <v-btn class="send-recovery-button">
                Sende E-Mail
            </v-btn>
        </div>
    </div>
</template>

<style lang="scss">
/* Dark Theme Styling */
.theme--dark.v-treeview {
    color: #121212;
}

/* Light Theme Styling */


/* General Mobile Styling */


/* General Desktop Styling */
.password-recovery-panel {
    width: 40%;
    height: 80%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-self: center;
    border: 1px solid #d50b2e;
    border-radius: 15px;
}

.password-recovery-panel-top {
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

.password-recovery-panel-middle {
    display: flex;
    flex-direction: column;
}

.password-recovery-input {
    background-color: #ffffff;
    border: 1px solid #d50b2e;
}

.forgot-password-link {
    margin-top: 10px;
    margin-bottom: 30px;
}

.password-recovery-panel-bottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2%;
    justify-content: center;
}

.send-recovery-button {
    width: 49%;
    margin-top: 30px;
    height: 40px !important;
}
</style>