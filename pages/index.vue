<template>
  <div class="flex flex-col flex-grow">
    <AtomsMeta :content="document" />
    <OrganismsHero
      :heading="document.data.hero[0].heading"
      :copy="document.data.hero[0].copy"
      :image="document.data.hero[0].image"
      :buttonlabel="document.data.hero[0].button_label"
      :buttonlink="document.data.hero[0].button_link"
      :linklabel="document.data.hero[0].secondary_link_label"
      :linklink="document.data.hero[0].secondary_link"
      big
    />
    <OrganismsArticlesTeaser />
    <LazyOrganismsUpcomingEvents :allEvents="allEvents" :limit="7" />
    <LazyOrganismsSignUpJoinCta />
    <LazyOrganismsFooter />
  </div>
</template>

<script setup>
// get events
const id = "g3tdlvc4g3fafvm1udas37futg@group.calendar.google.com";
const key = process?.env?.GOOGLE_CAL_KEY || "";
const start = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const end = new Date(start.getTime() + 30 * 24 * 60 * 60 * 1000);
const url = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${key}&timeMin=${start.toISOString()}&timeMax=${end.toISOString()}&singleEvents=true&orderBy=startTime&showDeleted=false`;
const { data: allEvents } = await useAsyncData("events", () =>
  $fetch(url).then(res =>
    res.items
      .filter(e => e.description)
      .map(e => {
        try {
          const startTime = new Date(e.start.dateTime || e.start.date);
          return {
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
              ?.replace(/<p>(<br>)<\/p>/g, "")
              ?.replace(/<(.*?)><\/\1>/g, ""),
          };
        } catch (err) {
          console.log(err, e);
          return e;
        }
      }),
  ),
);

// get page data
const { client } = usePrismic();
const getHome = () => client.getSingle("home");
const { data: document } = await useAsyncData("home", getHome);
</script>
