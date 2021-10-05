<template>
  <nav class="navbar navbar-expand-lg navbar-custom navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand  mr-auto " href="index.html">Emma </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="60">
          <path
            class="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          ></path>
          <path class="line middle" d="m 30,50 h 40"></path>
          <path
            class="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          ></path>
        </svg>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto">
          <li><a class="nav-link active" href="#home">home</a></li>
          <li><a class="nav-link" href="#services">Service</a></li>
          <li><a class="nav-link" href="#resume">EXPERTISES</a></li>
          <li><a class="nav-link" href="#work">Works</a></li>
          <li><a class="nav-link" href="#blog">Blog</a></li>
          <li><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Header"
};
</script>


<style>
.ml-auto,
.mx-auto {
  margin-left: auto !important;
}
.nav-wrapper .navbar-toggler {
  position: absolute;
  left: 100%;
  z-index: 20;
  top: 0;
  padding: 0;
  display: none;
}

.nav-wrapper .navbar {
  background: #2a2d35;
  /*box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);*/
  transition: all 750ms cubic-bezier(0.8, 0, 0.55, 0.94);
  padding-bottom: 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-wrapper .navbar.active {
  transform: translate3d(0%, 0, 0);
}

.nav-wrapper .navbar-nav {
  display: block;
}

.navbar {
  background-color: #fff;
  z-index: 999;
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  left: 0;
  right: 0;
  position: relative;
}

.navbar:after {
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgb(165, 165, 165),
    rgba(0, 0, 0, 0)
  ) !important;
  background-image: -moz-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  background-image: -ms-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#000000', GradientType=1);
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  width: 100%;
  content: "";
  bottom: 0;
}

.navbar.fixed-top {
  position: fixed !important;
  display: none;
}

.navbar-nav .nav-link {
  font-size: 12px;
  font-weight: 700;
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.7) !important;
  text-transform: uppercase;
  padding-left: 15px !important;
  opacity: 0.8;
  padding-right: 15px !important;
}

.navbar-nav .nav-link:hover {
  opacity: 1;
}

.navbar-nav .nav-link:after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  width: 100%;
  height: 0;
  background: #fbd0a1;
  bottom: 20px;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.navbar-nav .nav-link.active {
  opacity: 1;
  color: #304ffe !important;
}

.nav-wrapper {
  height: 100%;
}

.navbar-light .navbar-toggler {
  outline: none;
  padding: 0;
  border: none;
}
</style>