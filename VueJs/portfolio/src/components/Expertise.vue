<template>
  <section class="section section-dark section-resume" id="resume">
    <div class="container">
      <SectionHead subtitle="MY RESUME" maintitle="MY EXPERTISES" />
      <ExpertiseCard />
      <Skill />
    </div>
  </section>
</template>



<script>
import SectionHead from "./SectionHead";
import ExpertiseCard from "./ExpertiseCard";
import Skill from "./Skill";
export default {
  name: "Expertise",
  components: {
    SectionHead,
    ExpertiseCard,
    Skill
  },
  data() {
    return {};
  }
};
</script>

<style>
.resume-list h5 {
  font-size: 18px;
  font-weight: 500;
}

.progress-bar {
  background: #304ffe !important;
  opacity: 0.8;
}

.progress {
  height: 4px;
}
</style>