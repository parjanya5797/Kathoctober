<template>
  <div
    class="resume-panel b-box hover-state p-4 mt-3"
    v-for="oneItems in items"
    :key="oneItems.id"
  >
    <div class="mb-4 pb-2">
      <h6>{{ oneItems.subtitle }}</h6>
      <div
        class="progress mt-2"
        v-for="oneProgress in items"
        :key="oneProgress.id"
      >
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: oneProgress.progressBar }"
          aria-valuenow="95"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillList",
  props: {
    items: Array
  }
};
</script>