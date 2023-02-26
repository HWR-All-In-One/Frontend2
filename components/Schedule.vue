<template>
    <div>
        <v-row class="schedule fill-height">
            <v-col>
                <v-sheet height="64">
                    <v-toolbar flat>
                        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                            Heute
                        </v-btn>
                        <v-btn fab text small color="grey darken-2" @click="prev">
                            <v-icon small>
                                mdi-chevron-left
                            </v-icon>
                        </v-btn>
                        <v-btn fab text small color="grey darken-2" @click="next">
                            <v-icon small>
                                mdi-chevron-right
                            </v-icon>
                        </v-btn>
                        <v-toolbar-title v-if="$refs.calendar">
                            {{ $refs.calendar.title }}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-menu bottom right>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                                    <span>{{ typeToLabel[type] }}</span>
                                    <v-icon right>
                                        mdi-menu-down
                                    </v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item @click="type = 'day'">
                                    <v-list-item-title>
                                        Tag
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="type = 'week'">
                                    <v-list-item-title>
                                        Woche
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="type = 'month'">
                                    <v-list-item-title>
                                        Monat
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-toolbar>
                </v-sheet>
                <v-sheet height="600">
                    <v-calendar ref="calendar" v-model="focus" color="primary" :events="events"
                        :event-color="getEventColor" :type="type" @click:event="showEvent" @click:more="viewDay"
                        @click:date="viewDay" @change="updateRange"></v-calendar>
                    <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement"
                        offset-x>
                        <v-card color="grey lighten-4" min-width="350px" flat>
                            <v-toolbar :color="selectedEvent.color" dark>
                                <v-btn icon>
                                    <v-icon>
                                        mdi-pencil
                                    </v-icon>
                                </v-btn>
                                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>
                                        mdi-heart
                                    </v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>
                                        mdi-dots-vertical
                                    </v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                <span v-html="selectedEvent.details"></span>
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
/**
 * type Lesson struct {
    Start       *time.Time
    End         *time.Time
    Description string
    Summary     string
    Location    string
    Organizer   string
    Type        string
    Name        string
}
 */

export default {
    name: "schedule",
    components: {
        ListItem: () => import("./ListItem.vue")
    },
    data: () => ({
        focus: '',
        type: 'month',
        typeToLabel: {
            month: 'Monat',
            week: 'Woche',
            day: 'Tag',
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted() {
        this.$refs.calendar.checkChange()
    },
    methods: {
        viewDay({ date }) {
            this.focus = date
            this.type = 'day'
        },
        getEventColor(event) {
            return event.color
        },
        setToday() {
            this.focus = ''
        },
        prev() {
            this.$refs.calendar.prev()
        },
        next() {
            this.$refs.calendar.next()
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
            }

            if (this.selectedOpen) {
                this.selectedOpen = false
                requestAnimationFrame(() => requestAnimationFrame(() => open()))
            } else {
                open()
            }

            nativeEvent.stopPropagation()
        },
        updateRange({ start, end }) {
            const events = []

            const min = new Date(`${start.date}T00:00:00`)
            const max = new Date(`${end.date}T23:59:59`)
            const days = (max.getTime() - min.getTime()) / 86400000
            const eventCount = this.rnd(days, days + 20)

            for (let i = 0; i < eventCount; i++) {
                const allDay = this.rnd(0, 3) === 0
                const firstTimestamp = this.rnd(min.getTime(), max.getTime())
                const first = new Date(firstTimestamp - (firstTimestamp % 900000))
                const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
                const second = new Date(first.getTime() + secondTimestamp)

                events.push({
                    name: this.names[this.rnd(0, this.names.length - 1)],
                    start: first,
                    end: second,
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                    timed: !allDay,
                })
            }

            this.events = events
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
    },
}
</script>

<style lang="scss">
/* Light and dark props have been removed. */
.theme--dark .schedule .col {
    background-color: #272727;
}

.theme--dark .schedule .v-btn {
    color: #ffffff !important;
}

.theme--dark.v-sheet {
    background-color: #272727;
}

.theme--light .schedule .col {
    background-color: #272727;
}

/* Mobile Styling */


/* Tablet Styling */


/* Desktop Styling */
.schedule .col {
    border-radius: 15px;
    border: 1px solid #d50b2e;
}

.schedule .v-toolbar__title {
    margin-left: 0.5rem;
}

.theme-toggle-box {
    margin-top: auto;
}

.theme-toggle-item.v-list-item {
    align-self: flex-start;
    margin-left: 0.5rem;
}
</style>