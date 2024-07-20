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
  <div class="tag bg-secondary py-3 d-none d-md-block">
    <div class="container">
      <ul class="list-unstyled d-flex mb-0">
        <li class="text-white fs-5 fw-bold me-8">最新消息</li>
        <li class="text-white fs-5 fw-bold me-8">特別企劃</li>
        <li class="text-white fs-5 fw-bold me-8">新品上市</li>
        <li class="text-white fs-5 fw-bold">鏡框小知識</li>
        <li class="ms-auto"><span class="material-symbols-outlined fs-3 text-white">search</span></li>
      </ul>
    </div>
  </div>
  <main class="py-7 py-xl-12">
    <div class="container">
      <h2 class="fs-1 fw-bold mb-7 ps-3 mt-3 border-start border-primary border-8">部落格</h2>
      <div class="row mb-9">
        <div class="col-md-6">
          <div class="h-100">
            <img class="img-fluid h-100" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-1.png?raw=true" alt="blog">
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 d-block d-lg-flex flex-column">
            <h2 class="text-secondary fs-2 mb-0">情人特別企劃</h2>
            <div class="d-flex mb-3 justify-content-between align-items-start align-items-md-center">
              <span class="fs-5">2020 Valentine’s Special</span>
              <span class="text-end text-roboto">2020/02/14</span>
            </div>
            <span class="d-none d-sm-inline-block fs-5 mb-0" style="color: #555;">
              一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ 即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯
            </span>
            <router-link class="d-none d-sm-inline-block text-decoration-none text-lg-secondary text-body-tertiary text-roboto fw-bold fs-xl-1 ms-auto mt-auto" to="/blogMore">MORE</router-link>
          </div>      
        </div>
      </div>
      <div class="row mb-9">
        <div class="col-md-6">
          <div class="h-100">
            <img class="img-fluid h-100" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-2.png?raw=true" alt="blog">
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 d-block d-lg-flex flex-column">
            <h2 class="text-secondary fs-2 mb-0">街頭潮人訪問</h2>
            <div class="d-flex mb-3 justify-content-between align-items-center">
              <span class="fs-5">Street Interview</span>
              <span class="text-end text-roboto">2020/02/02</span>
            </div>
            <span class="d-none d-sm-inline-block fs-5 mb-0" style="color: #555;">
              炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯
            </span>
            <router-link class="d-none d-sm-inline-block text-decoration-none text-lg-secondary text-body-tertiary text-roboto fw-bold fs-xl-1 ms-auto mt-auto" to="/blogMore">MORE</router-link>
          </div>      
        </div>
      </div>
      <div class="row mb-9">
        <div class="col-md-6">
          <div class="h-100">
            <img class="img-fluid h-100" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-3.png?raw=true" alt="blog">
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 d-block d-lg-flex flex-column">
            <h2 class="text-secondary fs-2 mb-0">春季新品上市</h2>
            <div class="d-flex mb-3 justify-content-between align-items-center">
              <span class="fs-5">New Selection</span>
              <span class="text-end text-roboto">2020/02/02</span>
            </div>
            <span class="d-none d-sm-inline-block fs-5 mb-0" style="color: #555;">
              2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯
            </span>
            <router-link class="d-none d-sm-inline-block text-decoration-none text-lg-secondary text-body-tertiary text-roboto fw-bold fs-xl-1 ms-auto mt-auto" to="/blogMore">MORE</router-link>
          </div>      
        </div>
      </div>
      <div class="row mb-9">
        <div class="col-md-6">
          <div class="h-100">
            <img class="img-fluid h-100" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-4.png?raw=true" alt="blog">
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 d-block d-lg-flex flex-column">
            <h2 class="text-secondary fs-2 mb-0">設計師獨享鏡框優惠</h2>
            <div class="d-flex mb-3 justify-content-between align-items-center">
              <span class="fs-5">Sales for Designer</span>
              <span class="text-end text-roboto">2020/01/18</span>
            </div>
            <span class="d-none d-sm-inline-block fs-5 mb-0" style="color: #555;">
              2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯
            </span>
            <router-link class="d-none d-sm-inline-block text-decoration-none text-lg-secondary text-body-tertiary text-roboto fw-bold fs-xl-1 ms-auto mt-auto" to="/blogMore">MORE</router-link>
          </div>      
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="h-100">
            <img class="img-fluid h-100" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-5.png?raw=true" alt="blog">
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 d-block d-lg-flex flex-column">
            <h2 class="text-secondary fs-2 mb-0">抵抗夏日大作戰</h2>
            <div class="d-flex mb-3 justify-content-between align-items-center">
              <span class="fs-5">Summer Special</span>
              <span class="text-end text-roboto">2019/08/07</span>
            </div>
            <span class="d-none d-sm-inline-block fs-5 mb-0" style="color: #555;">
              2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯
            </span>
            <router-link class="d-none d-sm-inline-block text-decoration-none text-lg-secondary text-body-tertiary text-roboto fw-bold fs-xl-1 ms-auto mt-auto" to="/blogMore">MORE</router-link>
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