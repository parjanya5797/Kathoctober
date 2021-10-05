<template>
  <section
    class="section  section-freelance section-light text-center "
    style="  background: url(/images/freelance.jpg);"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <SectionHead maintitle="LET'S WORK TOGETHER!" />
          <div class="mt-5">
            <a href="#" class="btn btn-outline hover-state">Hire Me!</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHead from "./SectionHead";
export default {
  name: "Freelance",
  components: {
    SectionHead
  }
};
</script>


<style>
.section-freelance {
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
}

.section-freelance:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #2a2d35;
  z-index: -1;
  opacity: 0.5;
}

.section-freelance h2 {
  color: #fff;
}
</style>