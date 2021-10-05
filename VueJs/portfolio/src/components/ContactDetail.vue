<template>
  <div class="contact-details">
    <h5 class="section-subHead pt-5 mb-4">Get in Touch</h5>
    <div class="row">
      <div
        class="col-md-4 col-lg-4"
        v-for="oneContactDetail in contactdetail"
        :key="oneContactDetail.id"
      >
        <div class="contact-details--panel p-4 b-box text-center hover-state">
          <div class="mb-4">
            <i :class="oneContactDetail.icon"></i>
          </div>
          <div class="mt-2">
            <a href="#" class="">{{ oneContactDetail.content }}</a>
            <p class="mt-1 ">{{ oneContactDetail.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ContactDeatil",
  data() {
    return {
      contactdetail: []
    };
  },
  created() {
    this.contactdetail = [
      {
        id: 1,
        icon: "fas fa-map-marked-alt",
        content: "144 Mangan St, Miami, FL",
        title: "Address"
      },
      {
        id: 2,
        icon: "fas fa-mobile-alt",
        content: "+987 654 3210",
        title: "Call Us"
      },
      {
        id: 3,
        icon: "fas fa-envelope ",
        content: "hello@beingeorge.com",
        title: "Email Us"
      }
    ];
  }
};
</script>
