<template>
  <div class="banner" id="home">
    <div class="banner-img">
      <img :src="bannerImg" class="img-fluid" alt="" />
    </div>
    <div class="overlay d-flex justify-content-center align-items-center">
      <div class="overlay-wrap section-head" style="">
        <span class="mb-2">Hello, I am</span>
        <h1>Emma Joseph</h1>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
export default {
  name: "Banner",
  data() {
    return {
      bannerImg: '',
    };
  },
  async created() {
    // this.bannerImg = [
    //   {
    //     id: "1",
    //     bannerImage: "/images/banner.jpg"
    //   }
    // ];
    try{
      const res = await axios.get('https://shakyaparjanya.com.np/api/services/');
      this.bannerImg = res.data.hero_image;
    }
    catch(e)
    {
      console.error(e);
    }


  }
};
</script>



<style>
.banner {
  position: relative;
}

.banner-img {
  height: 750px;
  width: 100%;
  overflow: hidden;
}

.banner-img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.banner .overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  flex-wrap: wrap;
  z-index: 2;
  text-align: center;
  color: #fff;
}

.overlay-wrap {
  padding: 0 15px;
}

.section-head {
  margin-bottom: 50px;
  text-align: center;
  position: relative;
}

.overlay span {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #fff;
  font-weight: 300;
}

.overlay h1 {
  display: block;
  font-size: 12vh;
  color: #fff;
}

.section-head h2:after,
.overlay-wrap h1:after {
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgb(165, 165, 165),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  width: 100%;
  content: "";
  bottom: -30px;
}
</style>