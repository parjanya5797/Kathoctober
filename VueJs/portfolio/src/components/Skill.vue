<template>
  <div class="row mt-4">
    <div
      class="col-sm-6 col-lg-6"
      v-for="oneSkillcard in skillCard"
      :key="oneSkillcard.id"
    >
      <h5 class="section-subHead mt-3">{{ oneSkillcard.skilltitle }}</h5>
      <SkillList :items="oneSkillcard.items" />
    </div>
  </div>
</template>

<script>
import SkillList from "./SkillList";
export default {
  name: "Skill",
  components: {
    SkillList
  },
  data() {
    return {
      skillCard: []
    };
  },
  created() {
    this.skillCard = [
      {
        id: 1,
        skilltitle: "Design Skills",
        items: [
          {
            id: 1,
            subtitle: "Graphic Design",
            progressBar: "50%"
          }
        ]
      },
      {
        id: 2,
        skilltitle: "Codeing Skills",
        items: [
          {
            id: 1,
            subtitle: "Bootstrap"
          }
        ]
      }
    ];
  }
};
</script>