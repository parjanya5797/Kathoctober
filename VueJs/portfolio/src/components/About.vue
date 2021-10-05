<template>
  <section class="section section-about in" id="about">
    <div
      class="section-about-wrap"
      v-for="aboutOne in aboutMe"
      :key="aboutOne.id"
    >
      <div class="row justify-content-center align-items-center">
        <div class="col-md-5 mb-md-0 mb-5">
          <img
            class="img-fluid img-thumbnail"
            :src="aboutOne.aboutimg"
            alt="About Picture"
          />
        </div>

        <div class="col-md-7">
          <div class="about-desc">
            <div class="about-desc-content">
              <h2>About Me</h2>
              <p class="mt-4 font-weight-light">
                {{ aboutOne.aboutcontent }}
              </p>
            </div>
            <SocialLink />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import SocialLink from "./SocialLink";
export default {
  name: "About",
  components: {
    SocialLink
  },
  data() {
    return {
      aboutMe: []
    };
  },
  created() {
    this.aboutMe = [
      {
        id: "1",
        aboutimg: "images/avatar.svg",
        aboutcontent:
          "Passionate designer &amp; developer who loves simplicity in things and crafts beautiful user interfaces with love."
      }
    ];
  }
};
</script>


<style>
.about-avatar img {
  height: 160px;
  width: 160px;
  border: 2px outset #ed4242;
  padding: 10px;
}

.about-social a.downloadCV span {
  padding-left: 5px;
}

.about-desc h2 {
  font-size: 32px;
  font-weight: 500;
}

.about-desc h3 {
  font-size: 18px;
  line-height: 32px;
  margin: 0 auto;
}

.about-desc-more {
  padding: 30px 30px 10px;
}

.about-desc-info {
  padding-bottom: 20px;
}

.about-desc-info b {
  padding-right: 10px;
}

.about-desc-info span,
.about-desc-info a {
  font-size: 14px;
  color: #5f6f81;
}

.about-desc-info a {
  text-decoration: underline;
}

.about-desc-info a:hover {
  text-decoration: none;
}

.img-thumbnail {
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.section-about {
  margin: 0 auto;
  max-width: calc(1140px - 30px);
  background: #fff;
  margin-top: -200px;
  z-index: 100;
  position: relative;
  width: 95%;
  opacity: 0;
  visibility: hidden;
  border-radius: 5px;
  transition: 0.5s;
  transform: translateY(20px);
  padding: 0 !important;
  max-width: 950px;
}

.section-about:after {
  content: "";
  position: absolute;
  right: -80px;
  z-index: -354;
  height: 200px;
  width: 200px;
  display: block;
  /* background: url(../images/pattern1.png); */
  background-size: 155px;
  top: -80px;
}

.section-about:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  width: 90%;
  background: #fff;
  display: block;
  height: 70%;
  bottom: 0;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  z-index: -1;
}

.section-about.in {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}

.section-about-wrap {
  padding: 50px;
  background-color: #fff;
  border-radius: 5px;
}

.section-about img {
  height: 300px;
  margin: 0 auto;
  width: 300px;
  object-fit: cover;
  display: block;
  border-radius: 50%;
}

.about-desc-content {
  max-width: 490px;
}

.about-desc-content p {
  font-size: 20px;
}

.about-desc-social li {
  margin-right: 10px !important;
  display: inline-block;
}

.about-desc-social li a {
  color: #333;
  background: rgb(0 0 0 / 0.05);
  height: 40px;
  width: 40px;
  display: block;
  text-align: center;
  border-radius: 50%;
  line-height: 40px;
}

.about-desc-social li a:hover {
  background: rgb(0 0 0 / 0.1);
}
</style>