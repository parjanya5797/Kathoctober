<template>
  <div class="section-head">
    <span>{{ subtitle }}</span>
    <h2>{{ maintitle }}</h2>
  </div>
</template>


<script>
export default {
  name: "SectionHead",
  props: {
    subtitle: String,
    maintitle: String
  }
};
</script>