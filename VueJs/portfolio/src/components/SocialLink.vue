<template>
  <ul class="about-desc-social mt-4 list-unstyled list-inline">
    <li
      class="list-inline-item"
      v-for="oneSociallink in socialLink"
      :key="oneSociallink.id"
    >
      <a href="#"><i :class="['fab', oneSociallink.fabicon]"></i></a>
    </li>
  </ul>
</template>


<script>
export default {
  name: "Scoiallink",
  data() {
    return {
      socialLink: []
    };
  },
  created() {
    this.socialLink = [
      {
        id: "1",
        fabicon: "fa-facebook-f"
      }
    ];
  }
};
</script>




