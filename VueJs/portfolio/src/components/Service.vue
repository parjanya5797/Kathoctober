<template>
  <section class="section section-services" id="services">
    <div class="container">
      <SectionHead subtitle="WHAT I DO" maintitle="MY SERVICES" />

      <div class="row mt-4">
        <div
          class="col-sm-6 col-md-6"
          v-for="oneService in serviceList"
          :key="oneService.id"
        >
          <div class="services-flip">
            <div class="services-list">
              <div
                class="services-list-front services-list-1"
                :style="{ background: 'url(' + oneService.serviceimg + ')' }"
              >
                <div class="flip-content">
                  <h5 class="mb-0">{{ oneService.servicetitle }}</h5>
                </div>
              </div>
              <div class="services-list-back">
                <div class="flip-content">
                  <div class="services-list-icon">
                    <i :class="['fas', oneService.fabicon]"></i>
                  </div>
                  <div class="mt-4">
                    <h5 class="mb-0">{{ oneService.servicetitle }}</h5>
                    <p class=" mt-3">
                      {{ oneService.servicecontent }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHead from "./SectionHead";
export default {
  name: "Service",
  components: {
    SectionHead
  },
  data() {
    return {
      serviceList: []
    };
  },
  created() {
    this.serviceList = [
      {
        id: "1",
        serviceimg: "/images/services1.jpg",
        fabicon: "fa-paint-brush",
        servicetitle: "Graphic Design",
        servicecontent:
          "Modern and mobile-ready website that will help of your  marketing."
      },
      {
        id: "2",
        serviceimg: "/images/services2.jpg",
        fabicon: "fa-palette",
        servicetitle: "Web Development",
        servicecontent:
          "Modern and mobile-ready website that will help of your marketing."
      }
    ];
  }
};
</script>


<style>
.section-services {
  padding-bottom: 80px;
}

.services-list-icon {
  font-size: 30px;
  position: relative;
  color: #fff;
}

.services-flip {
  display: flex;
  min-height: 270px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1200px;
  perspective: 1200px;
  width: 100%;
  height: 100%;
}

.services-flip:hover .services-list {
  -webkit-transform: rotate3d(1, 0, 0, 180deg);
  -moz-transform: rotate3d(1, 0, 0, 180deg);
  -ms-transform: rotate3d(1, 0, 0, 180deg);
  -o-transform: rotate3d(1, 0, 0, 180deg);
  transform: rotate3d(1, 0, 0, 180deg);
}

.services-list {
  position: relative;
  transition-property: box-shadow, -webkit-transform;
  transition-property: box-shadow, transform;
  transition-property: box-shadow, transform, -webkit-transform;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transform-style: inherit;
  -moz-transform-style: inherit;
  -ms-transform-style: inherit;
  -o-transform-style: inherit;
  transform-style: inherit;
  -webkit-perspective: inherit;
  -moz-perspective: inherit;
  -ms-perspective: inherit;
  -o-perspective: inherit;
  perspective: inherit;
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
}

.services-list h5 {
  font-size: 20px;
  font-weight: 500;
}

.flip-content {
  -webkit-transform: translate3d(0, 0, 60px) scale(0.85);
  -moz-transform: translate3d(0, 0, 60px) scale(0.85);
  -ms-transform: translate3d(0, 0, 60px) scale(0.85);
  -o-transform: translate3d(0, 0, 60px) scale(0.85);
  transform: translate3d(0, 0, 60px) scale(0.85);
}

.services-list-front {
  background-color: #fff;
  z-index: 2;
  justify-content: center;
  align-items: center;
  display: flex;
  -webkit-transform-style: inherit;
  -moz-transform-style: inherit;
  -ms-transform-style: inherit;
  -o-transform-style: inherit;
  transform-style: inherit;
  -webkit-perspective: inherit;
  -moz-perspective: inherit;
  -ms-perspective: inherit;
  -o-perspective: inherit;
  perspective: inherit;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.services-list-front:before {
  right: 0;
  content: "";
  position: absolute;
  background: #000;
  left: 0;
  height: 100%;
  opacity: 0.2;
}

.services-list-front h5 {
  padding: 11px 20px;
  background: #fff;
  font-size: 14px;
  border-radius: 2px;
  font-family: "Open Sans", sans-serif;
}

.services-list-back {
  -webkit-transform: rotateY(-180deg) rotateZ(-180deg);
  -moz-transform: rotateY(-180deg) rotateZ(-180deg);
  -ms-transform: rotateY(-180deg) rotateZ(-180deg);
  -o-transform: rotateY(-180deg) rotateZ(-180deg);
  transform: rotateY(-180deg) rotateZ(-180deg);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: rotate3d(0, 1, 0, 180deg);
  -moz-transform: rotate3d(0, 1, 0, 180deg);
  -ms-transform: rotate3d(0, 1, 0, 180deg);
  -o-transform: rotate3d(0, 1, 0, 180deg);
  transform: rotate3d(0, 1, 0, 180deg);
  z-index: 1;
  background: #304ffe;
  -webkit-transform-style: inherit;
  -moz-transform-style: inherit;
  -ms-transform-style: inherit;
  -o-transform-style: inherit;
  transform-style: inherit;
  -webkit-perspective: inherit;
  -moz-perspective: inherit;
  -ms-perspective: inherit;
  -o-perspective: inherit;
  perspective: inherit;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.services-list-back {
  -webkit-transform: rotateY(-180deg) rotateZ(-180deg);
  -moz-transform: rotateY(-180deg) rotateZ(-180deg);
  -ms-transform: rotateY(-180deg) rotateZ(-180deg);
  -o-transform: rotateY(-180deg) rotateZ(-180deg);
  transform: rotateY(-180deg) rotateZ(-180deg);
}

.services-list-back h5,
.services-list-back p {
  color: #fff;
}

/* .services-list-1 {
  background-image: url("../images/services1.jpg");
} */
</style>