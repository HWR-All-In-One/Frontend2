
<template>
    <div>
        <v-list class="schedule-list">
            <ListItem v-for="item in items" :item="item" :key="item.title" />
        </v-list>
    </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue';

export default {
    name: "schedulelist",
    components: {
        ListItem,
},
    data: () => ({
        items: [
            {

                title: "Fachrichtung",
                items: [
                    {

                        title: "Informatik",
                        items: [
                            {

                                title: "Jahrgang",
                                items: [
                                    {

                                        title: "2021",
                                        items: [
                                            {

                                                title: "1. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "2. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "3. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "4. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "5. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "6. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 6. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2021 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {

                                        title: "2022",
                                        items: [
                                            {

                                                title: "1. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 1. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "2. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "3. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "4. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "5. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "6. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2022 - 2. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {

                                        title: "2023",
                                        items: [
                                            {

                                                title: "1. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 1. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 1. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "2. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 2. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 2. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "3. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 3. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 3. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "4. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 4. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 4. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "5. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 5. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 5. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "6. Semester",
                                                items: [
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 6. Semester - Kurs A",
                                                        title: "Kurs A",
                                                        to: "/test",
                                                    },
                                                    {
                                                        webTitle: "Informatik - Jahrgang 2023 - 6. Semester - Kurs B",
                                                        title: "Kurs B",
                                                        to: "/test",
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                ]
                            }
                        ]
                    },
                    {

                        title: "Wirtschaftsinformatik",
                        items: [
                            {

                                title: "Jahrgang",
                                items: [
                                    {

                                        title: "2021",
                                        items: [
                                            {

                                                title: "1. Semester",
                                                items: [
                                                    {

                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {

                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "2. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "3. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "4. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "5. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "6. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {

                                        title: "2022",
                                        items: [
                                            {

                                                title: "1. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "2. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "3. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "4. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "5. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "6. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {

                                        title: "2023",
                                        items: [
                                            {

                                                title: "1. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "2. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "3. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "4. Semester",
                                                items: [
                                                    {

                                                        title: "Kurs A"
                                                    },
                                                    {

                                                        title: "Kurs B"
                                                    }
                                                ]
                                            },
                                            {

                                                title: "5. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            },
                                            {

                                                title: "6. Semester",
                                                items: [
                                                    {
                                                        title: "Kurs A",
                                                        to: "/login",
                                                    },
                                                    {
                                                        title: "Kurs B",
                                                        to: "/login",
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                ]
                            }
                        ]
                    },
                ]
            }
        ]
    })
};
</script>

<style lang="scss">
/* Light and dark props have been removed. */

/* Mobile Styling */


/* Tablet Styling */


/* Desktop Styling */
.schedule-list {
    padding: 0;
    margin-bottom: 1.5rem;
}
</style>