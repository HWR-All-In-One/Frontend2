<template>
    <div>
        <h1 class="calendar-title">Informatik - Jahrgang ???? - ?. Semester - Kurs ?</h1>
        <ScheduleList />
        <Schedule />
    </div>
</template>

<script>
import Schedule from '~/components/Schedule.vue';
import ScheduleList from '~/components/ScheduleList.vue';

export default {
    name: "informatik21sem4ka",
    components: {
        Schedule,
        ScheduleList,
    }
}
</script>

<style lang="scss">
/* Light and dark props have been removed. */

/* Mobile Styling */


/* Tablet Styling */


/* Desktop Styling */
.calendar-title {
    margin: 1rem 0;
}
</style>