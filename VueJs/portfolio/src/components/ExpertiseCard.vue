<template>
  <div class="row mt-4">
    <div
      class="col-sm-6 col-lg-6"
      v-for="oneExpertlist in expertList"
      :key="oneExpertlist.id"
    >
      <h5 class="section-subHead mt-3">{{ oneExpertlist.cardtitle }}</h5>
      <ExpertiseCardList :items="oneExpertlist.items" />
    </div>
  </div>
</template>

<script>
import ExpertiseCardList from "./ExpertiseCardList";
export default {
  name: "ExpertiseCard",
  data() {
    return {
      expertList: []
    };
  },
  components: {
    ExpertiseCardList
  },
  created() {
    this.expertList = [
      {
        id: "1",
        cardtitle: "My Experience",
        items: [
          {
            id: 1,
            subtitle: "Front-end Developer",
            badge: "2013 - 2015 | Facebook Inc.",
            content:
              "Collaborate with creative and development teams on the execution of ideas."
            //   tags: [
            //   {
            //     id: 1,
            //     title: "Tag 1"
            //   },
            //   {
            //     id: 1,
            //     title: "Tag 2"
            //   }
            // ]
          }
        ]
      },
      {
        id: "2",
        cardtitle: "My Education",
        items: [
          {
            id: 1,
            subtitle: "Master in Arts",
            badge: "2013 - 2015",
            content:
              "Collaborate with creative and development teams on the execution of ideas."
          }
        ]
      }
    ];
  }
};
</script>