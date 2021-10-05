<template>
  <section class="section section-dark section-testimony" id="testimony">
    <div class="container">
      <SectionHead subtitle="KIND WORDS" maintitle="TESTIMONIAL" />
      <div class="owl-carousel owl-theme">
        <div
          class="item single-testimonials"
          v-for="oneTestimonial in testimonial"
          :key="oneTestimonial.id"
        >
          <div class="single-testimonials-in text-center p-4 b-box mx-auto">
            <img :src="oneTestimonial.images" alt="" class="mx-auto b-box" />
            <p class="pt-2 mt-4 text-center">{{ oneTestimonial.message }}</p>
            <span class="mt-3 d-block">{{ oneTestimonial.writer }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import SectionHead from "./SectionHead";
export default {
  name: "Testimonial",
  components: {
    SectionHead
  },
  data() {
    return {
      testimonial: []
    };
  },
  created() {
    this.testimonial = [
      {
        id: 1,
        images: "/images/avatar5.jpg",
        message:
          "Raw denim you probably haven't heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.",
        writer: "- Anj Joseph, Web Developer"
      },
      {
        id: 2,
        images: "/images/avatar5.jpg",
        message:
          "Raw denim you probably haven't heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.",
        writer: "- Anj Joseph, Web Developer"
      },
      {
        id: 3,
        images: "/images/avatar5.jpg",
        message:
          "Raw denim you probably haven't heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.",
        writer: "- Anj Joseph, Web Developer"
      },
      {
        id: 4,
        images: "/images/avatar5.jpg",
        message:
          "Raw denim you probably haven't heard of them jean shorts Austin.Nesciunt tofu stumptown aliqua, retro synth master cleanse.Mustache cliche tempor, williamsburg carles vegan helvetica.",
        writer: "- Anj Joseph, Web Developer"
      }
    ];
  }
};
</script>

<style>
.section-testimony {
  padding-bottom: 80px;
}

.single-testimonials {
  width: 100%;
}

.single-testimonials-in span {
  font-size: 14px;
}

.single-testimonials img {
  max-width: 100px;
  height: 100px;
  border-radius: 30px;
  width: 100px;
  object-fit: cover;
}

.swiper-pagination {
  position: static;
}

.swiper-container {
  padding-top: 20px;
}

.testimony-pagination {
  margin: 40px auto 0;
  transform: none !important;
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #304ffe;
}
</style>