<template>
  <section class="section section-work" id="work">
    <SectionHead subtitle="PORTFOLIO" maintitle="MY WORKS" />
    <div class="container">
      <div class="row no-gutters">
        <div class="filtering col-sm-12 text-center">
          <span data-filter="*" class="active">All</span>
          <span
            :data-filter="'.' + onePortfolio.class"
            class=""
            v-for="onePortfolio in portfolio"
            :key="onePortfolio.id"
            >{{ onePortfolio.title }}
          </span>
          <!-- <span data-filter=".decor" class="">Decor</span>
          <span data-filter=".interior" class="">Interior</span> -->
        </div>
        <div class="col-12 text-center w-100">
          <div class="form-row gallery">
            <div
              :class="['col-sm-6 col-lg-4 mb-2', oneItems.class]"
              v-for="oneItems in items"
              :key="oneItems.id"
            >
              <div class="portfolio-wrapper">
                <div class="portfolio-image">
                  <img :src="oneItems.image" alt="..." />
                </div>
                <div class="portfolio-overlay">
                  <div class="portfolio-content">
                    <a class="popimg ml-0" href="#">
                      <i
                        class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"
                      ></i>
                    </a>
                    <h4>{{ oneItems.title }}</h4>
                    <p>{{ oneItems.subtitle }}</p>
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
  name: "Portfolio",
  components: {
    SectionHead
  },
  data() {
    return {
      portfolio: [],
      items: []
    };
  },
  created() {
    this.portfolio = [
      {
        id: 1,
        title: "Architecture",
        class: "architecture"
      },
      {
        id: 2,
        title: "Decor",
        class: "decor"
      }
    ];
    this.items = [
      {
        id: 1,
        image: "https://via.placeholder.com/350x350/FFB6C1/000000",
        title: "Stylish Family Appartment",
        subtitle: "[Interior]",
        class: "architecture"
      },
      {
        id: 2,
        image: "https://via.placeholder.com/350x350/C71585/000000",
        title: "Stylish Family Appartment New",
        subtitle: "[Exterior]",
        class: "decor"
      },
      {
        id: 3,
        image: "https://via.placeholder.com/350x350/FFB6C1/000000",
        title: "Decor 1",
        subtitle: "[Interior]",
        class: "architecture"
      },
      {
        id: 4,
        image: "https://via.placeholder.com/350x350/C71585/000000",
        title: "Decor 2",
        subtitle: "[Exterior]",
        class: "decor"
      }
    ];
  }
};
</script>



<style>
.filtering {
  margin-bottom: 40px;
}
.filtering span {
  display: inline-block;
  font: 400 14px/1.2 "Poppins", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  margin: 5px 10px;
  color: #333;
  cursor: pointer;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  -ms-transition: all 0.4s ease-in-out 0s;
  -o-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  position: relative;
  z-index: 1;
  border-radius: 2px;
}
.filtering span:last-child {
  margin: 0;
}
.filtering .active {
  background: #304ffe;
  color: #fff;
}
.portfolio-wrapper {
  position: relative;
  overflow: hidden;
}
.portfolio-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 500ms ease;
}
.portfolio-wrapper .portfolio-image img {
  transform: scale(1.2);
  will-change: transform;
  transition: all 0.5s ease;
  width: 100%;
}
.portfolio-wrapper:hover .portfolio-image img {
  transform: none;
}
.portfolio-overlay:before {
  position: absolute;
  display: inline-block;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  border: 1px solid rgba(0, 0, 0, 0.36);
  content: "";
  opacity: 0;
  transition: all 0.5s ease;
  transform: scale(0.85);
}
.portfolio-overlay .portfolio-content {
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  padding: 0 35px;
}
.portfolio-content h4 {
  color: #000;
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 15px;
}
.portfolio-content p {
  color: #000;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 0;
}
.portfolio-content > a {
  line-height: 42px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #000;
  display: inline-block;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 800;
}
.portfolio-wrapper:hover .portfolio-overlay {
  background-color: rgba(204, 222, 2, 0.85);
}
.portfolio-wrapper:hover .portfolio-overlay:before {
  opacity: 1;
  visibility: visible;
  transform: none;
}
.portfolio-wrapper:hover .portfolio-overlay .portfolio-content {
  transform: translateY(50%);
  transition: transform 0.5s ease;
  opacity: 1;
}
@media screen and (max-width: 1199px) {
  .portfolio-content h4 {
    font-size: 18px;
  }
}
@media screen and (max-width: 991px) {
  .portfolio-content h4 {
    margin-bottom: 10px;
  }
  .portfolio-content p {
    font-size: 15px;
  }
  .portfolio-content > a {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 767px) {
  .portfolio-content h4 {
    font-size: 17px;
  }
  .portfolio-content p {
    font-size: 14px;
  }
}
@media screen and (max-width: 575px) {
  .portfolio-content h4 {
    font-size: 16px;
  }
}
.grid .grid-item {
  position: relative;
  overflow: hidden;
}
.grid .grid-item .portfolio-wrapper {
  position: relative;
  overflow: hidden;
}
.grid .grid-item .portfolio-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all 500ms ease;
}
.grid .grid-item .portfolio-wrapper .portfolio-image img {
  transform: none;
  will-change: transform;
  transition: none;
  width: 100%;
}
.grid .grid-item .portfolio-wrapper:hover .portfolio-image img {
  transform: none;
}
.grid .grid-item .portfolio-overlay:before {
  position: absolute;
  display: inline-block;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  border: 1px solid rgba(0, 0, 0, 0.36);
  content: "";
  opacity: 0;
  transition: all 0.5s ease;
  transform: scale(0.85);
}
.grid .grid-item .portfolio-overlay .portfolio-content {
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
}
.grid .grid-item .portfolio-content h4 {
  color: #000;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
  margin-bottom: 10px;
}
.grid .grid-item .portfolio-content p {
  color: #000;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 0;
}
.grid .grid-item .portfolio-content a {
  line-height: 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #000;
  display: inline-block;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 800;
}
.grid .grid-item .portfolio-wrapper:hover .portfolio-overlay {
  background-color: rgba(204, 222, 2, 0.85);
}
.grid .grid-item .portfolio-wrapper:hover .portfolio-overlay:before {
  opacity: 1;
  visibility: visible;
  transform: none;
}
.grid
  .grid-item
  .portfolio-wrapper:hover
  .portfolio-overlay
  .portfolio-content {
  transform: translateY(50%);
  transition: transform 0.5s ease;
  opacity: 1;
}
@media screen and (max-width: 1199px) {
  .grid .grid-item .portfolio-content h4 {
    font-size: 18px;
  }
}
@media screen and (max-width: 991px) {
  .grid .grid-item .portfolio-content h4 {
    margin-bottom: 10px;
  }
  .grid .grid-item .portfolio-content p {
    font-size: 15px;
  }
  .grid .grid-item .portfolio-content a {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 767px) {
  .grid .grid-item .portfolio-content h4 {
    font-size: 17px;
  }
  .grid .grid-item .portfolio-content p {
    font-size: 14px;
  }
}
@media screen and (max-width: 575px) {
  .grid .grid-item .portfolio-content h4 {
    font-size: 16px;
  }
  .grid .grid-item .portfolio-overlay:before {
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
  }
}
</style>