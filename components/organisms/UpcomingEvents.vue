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
      <ul class="-mx-6 mt-6">
        <li
          v-for="event in events"
          :key="event.title + event.dateTime"
          class="mb-6 flex bg-white"
        >
          <div
            class="
              bg-black
              text-white
              p-6
              flex flex-col
              items-center
              justify-center
              tabular-nums
              tracking-1
            "
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
const getEvents = (fetch, url) =>
  fetch(url).then(res =>
    res.items.map(e => {
      const startTime = new Date(e.start.dateTime);
      return {
        // ...e,
        title: e.summary,
        dateTime: startTime,
        month: startTime.toLocaleString("default", { month: "long" }),
        date: startTime.getDate(),
        day: startTime.getDay(),
        year: startTime.getYear(),
        time: startTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
        end: {
          datetime: e.end.dateTime,
          month: e.end.dateTime,
          day: e.end.dateTime,
          year: e.end.dateTime,
          time: e.end.dateTime,
        },
        description: e.description
          .replace(/<p>(<br>)<\/p>/g, "")
          .replace(/<(.*?)><\/\1>/g, ""),
      };
    }),
  );

export default {
  async setup() {
    const id = "g3tdlvc4g3fafvm1udas37futg@group.calendar.google.com";
    const key = process.env.GOOGLE_CAL_KEY;
    const start = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    const end = new Date(start.getTime() + 7 * 24 * 60 * 60 * 1000);
    const url = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${key}&timeMin=${start.toISOString()}&timeMax=${end.toISOString()}&singleEvents=true&orderBy=startTime&showDeleted=false`;
    const { data } = await useAsyncData("events", () => getEvents($fetch, url));
    return { events: data };
  },
};
</script>
