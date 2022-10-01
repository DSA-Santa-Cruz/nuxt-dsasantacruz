<template>
  <section class="bg-red py-12">
    <Container>
      <h2 class="font-bold text-2xl text-white mb-4">
        <NuxtLink to="/events/">Upcoming Events &amp; Meetings</NuxtLink>
      </h2>
      <p class="text-white my-4">
        Get the details on our upcoming actions and organizing sessions.
      </p>
      <!-- <div class="text-white -mt-2 mb-6">
        <NuxtLink to="/events/" class="group"><AtomsIconLink>All Events</AtomsIconLink></NuxtLink>
      </div> -->
      <ul v-if="events" class="-mx-6 mt-6">
        <li
          v-for="event in events"
          :key="event.title + event.dateTime"
          class="mb-6 flex bg-white"
        >
          <div
            class="bg-black text-white py-6 flex flex-col items-center justify-center tabular-nums tracking-1 flex-shrink-0 w-32"
          >
            <span class="text-xs uppercase">{{ event.month }}</span>
            <span class="text-xl font-bold">{{ event.date }}</span>
            <span class="text-xs">{{ event.time }}</span>
          </div>
          <div class="p-6">
            <h3 class="font-bold mb-2">{{ event.title }}</h3>
            <div
              class="text-sm prose leading-tight"
              v-html="event.description"
            />
            <!-- <div class="text-red text-sm mt-3">
              <AtomsIconLink>Details</AtomsIconLink>
            </div> -->
          </div>
        </li>
      </ul>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    all: {
      type: Boolean,
      default: false,
    },
    allEvents: {
      type: Array,
      default: null,
    },
  },
  computed: {
    events() {
      const { allEvents, all } = this;
      if (!all) {
        const firstDay = new Date();
        const nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
        return allEvents.filter(e => e.dateTime.getTime() < nextWeek.getTime());
      }
      return allEvents;
    },
  },
};
</script>
