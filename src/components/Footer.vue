<script setup>

</script>

<template>
  <div class="bg-primary pt-8 pb-6">
    <div class="container">
      <div class="row border-bottom border-white pb-6 mx-2 mx-lg">
        <div class="col-6 col-md-9 pt-0 pt-md-1 pt-lg-3 px-0">
          <ul class="d-none d-md-flex list-unstyled mb-6">
            <li class="me-8"><router-link to="/home" class="text-decoration-none text-white" href="">首頁</router-link></li>
            <li class="me-8"><router-link to="/product" class="text-decoration-none text-white" href="">系列鏡框</router-link></li>
            <li class="me-8"><router-link to="/location" class="text-decoration-none text-white" href="">門市據點</router-link></li>
            <li class="me-8"><router-link to="/blog" class="text-decoration-none text-white" href="">部落格</router-link></li>
            <li class=""><router-link to="/question" class="text-decoration-none text-white" href="">常見問題</router-link></li>
          </ul>
          <div>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined me-2 me-md-5">
              call
              </span>
              <span class="text-white fs-6 fs-md-2">0800-000-000</span>
            </div>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined me-2 me-md-5">
              email
              </span>
              <span class="text-white fs-6 fs-md-2">glasses@business.com</span>
            </div>
          </div>   
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-end px-0">
          <div class="icon me-2 me-md-6">
            <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic-social-fb.png?raw=true" alt="fb">
          </div>
          <div class="icon me-2 me-md-6">
            <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_ig.png?raw=true" alt="ig">
          </div>
          <div class="icon">
            <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_line.png?raw=true" alt="line">
          </div>
        </div>
      </div>
      <div class="row mt-6 mx-2 mx-lg">
        <div class="col-md-6 px-0">
          <p class="text-white mb-2 mb-md-0" style="font-size: 14px;">Copyright © 2020 Glasses.All rights reserved.</p>
        </div>
        <div class="col-md-6 d-block d-md-flex justify-content-md-end px-0">
          <p class="text-white me-8 mb-2 mb-md-0" style="font-size: 14px;">隱私權政策</p>
          <p class="text-white mb-0" style="font-size: 14px;">服務條款</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .icon{
    width: 3rem;
  }
  .material-symbols-outlined{
    font-size: 2.25rem;
    color: #fff;
  }
  @media (max-width: 767px) {
    .material-symbols-outlined{
      font-size: 1rem;
    }
    .icon{
      width: 1.5rem;
    }
  }
</style>