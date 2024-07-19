<script setup>
  import Nav from "@/components/Nav.vue";
</script>

<template>
  <header>
    <nav>
      <Nav></Nav>
    </nav>
  </header>
  <div class="banner">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col h-100 px-0">
          <div class="h-100 d-flex align-items-end flex-column justify-content-center pe-3 pe-lg-0">
            <h2 class="text-secondary fs-6 fs-md-2">Promise-Desert 2020 早春系列</h2>
            <p class="banner-text fw-bold text-secondary ">看得清，才能看得遠</p>
            <button class="btn btn-primary fs-5">立即購買</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <div class="container">
      <h3 class="text-primary">用專業的心，做專業的事</h3>
      <div class="row">
        <div class="col-md-6 col-xxl-3">
          <div>
            <div>
              <img src="" alt="">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-3">
          <div>
            <div>
              <img src="" alt="">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-3">
          <div>
            <div>
              <img src="" alt="">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-3">
          <div>
            <div>
              <img src="" alt="">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .banner{
    background: 
      url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header.png?raw=true")
      no-repeat
      center center / cover;
    height: 787px;  
  }
  .banner-text{
    font-size: 4rem;
  }
  @media (max-width: 767px) {
    .banner{
      background: 
        url("https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true")
        no-repeat
        center center / cover;
      height: 396px;
    }
    .banner-text{
      font-size: 1.5rem;
    }
  }
</style>

