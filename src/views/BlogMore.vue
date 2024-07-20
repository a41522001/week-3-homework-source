<script setup>
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
    <nav>
      <Nav></Nav>
    </nav>
  </header>
  <div class="tag bg-secondary py-3">
    <div class="container">
      <ul class="list-unstyled d-flex mb-0 justify-content-center">
        <li class="text-white fs-6 fs-md-5 fw-bold me-2 me-sm-5 me-md-8">最新消息</li>
        <li class="text-white fs-6 fs-md-5 fw-bold me-2 me-sm-5 me-md-8">特別企劃</li>
        <li class="text-white fs-6 fs-md-5 fw-bold me-2 me-sm-5 me-md-8">新品上市</li>
        <li class="text-white fs-6 fs-md-5 fw-bold">鏡框小知識</li>
        <li class="ms-auto d-none d-md-block"><span class="material-symbols-outlined fs-3 text-white">search</span></li>
      </ul>
    </div>
  </div>
  <main>
    <div class="container pt-5 pb-12">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-2">
          <li class="breadcrumb-item"><a class="text-black text-decoration-none" href="#">首頁</a></li>
          <li class="breadcrumb-item"><a class="text-black text-decoration-none" href="#">部落格</a></li>
          <li class="breadcrumb-item active"><a class="text-black text-decoration-none" href="#">特別企劃</a></li>
          <li class="breadcrumb-item active"><a class="text-primary text-decoration-none" href="#">情人特別企劃</a></li>
        </ol>
      </nav>
      <div class="mb-2">
        <span class="fw-bold fs-4 text-primary text-roboto me-3">#special</span>
        <span class="fw-bold fs-4 text-primary text-roboto">#event</span>
      </div>
      <div class="row">
        <div class="col-md-8">
          <h2 class="mb-0 fs-1">情人特別企劃</h2>
          <p class="mb-3 fs-4 text-roboto">2020 Valentine’s Special</p>
          <ul class="mb-0 list-unstyled">
            <li class="mb-7">
              <div class="mb-2">
                <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-1.png?raw=true" alt="blog">
              </div>
              <p style="color: #555">一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！</p>
            </li>
            <li class="mb-7">
              <div class="mb-2">
                <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-2.png?raw=true" alt="blog">
              </div>
              <p style="color: #555">一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！</p>
            </li>
            <li class="mb-7">
              <div class="mb-2">
                <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-3.png?raw=true" alt="blog">
              </div>
              <p style="color: #555">一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！</p>
            </li>
            <li class="pb-3">
              <div class="mb-2">
                <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-4.png?raw=true" alt="blog">
              </div>
              <p style="color: #555">2/14(五)-2/20(日)<br/>至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個<br/>期間優惠還有~~持他牌鏡框更換鏡片<br/>薄型非球面鏡片折300元<br/>濾藍光鏡片折500元<br/>快快帶上另一半<br/>讓彼此每一次睜開眼，都被愛的視線包圍!</p>
              <span class="fw-bold text-roboto me-3">Share</span>
              <img class="me-3" width="24" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-facebook.png?raw=true" alt="facebook">
              <img width="24" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-instagram.png?raw=true" alt="instagram">
            </li>
          </ul>
        </div>
        <div class="col-md-4 d-none d-md-block">
          <h4 class="fs-2 text-primary fw-bold text-roboto d-flex mb-3"><span class="material-symbols-outlined fs-1 text-primary me-3">label</span>TAGS</h4>
          <p>
            <span class="d-inline-block text-primary fs-4 fw-bold text-roboto me-5 mb-1">#special</span>
            <span class="d-inline-block text-primary fs-4 fw-bold text-roboto mb-1">#sale</span><br/>
            <span class="d-inline-block text-primary fs-4 fw-bold text-roboto me-5 mb-1">#new_item</span>
            <span class="d-inline-block text-primary fs-4 fw-bold text-roboto mb-1">#interview</span><br/>
            <span class="d-inline-block text-primary fs-4 fw-bold text-roboto me-5 mb-1">#trivia</span>
            <span class="d-inline-block text-primary fs-4 fw-bold text-roboto mb-1">#news</span><br/>
            <span class="d-inline-block text-primary fs-4 fw-bold text-roboto">#event</span>
          </p>
        </div>
        <div class="col-md-12 col-xl-8 d-none d-md-block">
          <div class="d-flex justify-content-between pt-5 border-top border-3">
            <div class="d-flex">
              <span class="material-symbols-outlined">
              arrow_back
              </span>
              <p class="mb-0">上一篇：街頭潮人訪問 1</p>
            </div>
            <div class="d-flex">
              <span class="material-symbols-outlined">
              arrow_forward
              </span>
              <p class="mb-0">下一篇：街頭潮人訪問 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>

</style>