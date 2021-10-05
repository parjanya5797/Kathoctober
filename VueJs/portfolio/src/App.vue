<template>
  <Header />
  <Banner />
  <About />
  <Service />
  <Expertise />
  <Portfolio />
  <Testimonial />
  <Freelance />
  <Contact />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Service from "./components/Service.vue";
import Expertise from "./components/Expertise.vue";
import Portfolio from "./components/Portfolio.vue";
import Freelance from "./components/Freelance.vue";
import Testimonial from "./components/Testimonial.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    About,
    Service,
    Expertise,
    Portfolio,
    Freelance,
    Testimonial,
    Contact
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
