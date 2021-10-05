<template>
  <div
    class="resume-list b-box hover-state p-4 mt-4"
    v-for="oneItem in items"
    :key="oneItem.id"
  >
    <div>
      <h5>{{ oneItem.subtitle }}</h5>
      <h6 class="badge badge-dark d-inline-block my-3">
        {{ oneItem.badge }}
      </h6>
      <p>{{ oneItem.content }}</p>
      <span v-for="oneTag in oneItem.tags" :key="oneTag.id">{{
        oneTag.title
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertiseCardList",
  props: {
    items: Array
  }
};
</script>

