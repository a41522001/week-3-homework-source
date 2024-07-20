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
  <main class="py-7 py-xl-12">
    <div class="container">
      <h2 class="fs-1 fw-bold mb-7 ps-3 mt-3 border-start border-primary border-8">門市據點</h2>
      <div class="row mb-7">
        <div class="col-md-8 col-xl-4 d-flex">
          <label for="location" class="flex-grow-1 me-3 text-nowrap fs-4">選擇分店</label>
          <select class="form-select form-select-lg flex-shrink-1" id="location">
            <option selected>台北中山旗艦店</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-5">
          <div class="border-xl h-xl-100 d-block d-md-flex d-xl-block justify-content-between">
            <div class="w-100 w-md-50 w-xl-auto text-center">
              <img class="img-fluid h-100 h-xl-auto" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true" alt="store">
            </div>
            <div class="border border-md-1 border-xl-0 ms-md-3 ms-xl-0">
              <h3 class="px-5 py-2 mb-0 fs-4 border-bottom">台北中山旗艦店</h3>
              <div class="px-5 py-3">
                <div class="d-flex align-items-start mb-2">
                  <span class="material-symbols-outlined me-2">
                  call
                  </span>
                  <span class="fs-5">電話：(02)000-1234</span>
                </div>
                <div class="d-flex align-items-start mb-2">
                  <span class="material-symbols-outlined me-2">
                  schedule
                  </span>
                  <span class="fs-5">營業時間：10:00-21:00</span>
                </div>
                <div class="d-flex align-items-start">
                  <span class="material-symbols-outlined me-2">
                  location_on
                  </span>
                  <span class="fs-5">地址：台北市中山區南京東路25巷2-1號</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 mt-5 mt-xl-0">
          <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7228.994476749844!2d121.52857904513327!3d25.051130630823998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Zyw5Z2A77ya5Y-w5YyX5biC5Lit5bGx5Y2A5Y2X5Lqs5p2x6LevMjXlt7cyLTHomZ8!5e0!3m2!1szh-TW!2stw!4v1721465118053!5m2!1szh-TW!2stw" width="600" height="470" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>
  .material-symbols-outlined{
    font-size: 1.5rem;
  }
</style>