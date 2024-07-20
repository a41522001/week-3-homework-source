<script setup>
  import Nav from "@/components/Nav.vue";
  import Footer from "@/components/Footer.vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const goToZhongshanPage = () => {
    router.push("/zhongshan");
  }
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
          <label for="location" class="flex-grow-1 me-3 text-nowrap fs-4">選擇地區</label>
          <select class="form-select form-select-lg flex-shrink-1" id="location">
            <option selected>台北市</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-xl-4">
          <div class="border" @click="goToZhongshanPage">
            <div>
              <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true" alt="store">
            </div>
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
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                location_on
                </span>
                <span class="fs-5">地址：台北市中山區南京東路25巷2-1號</span>
              </div>
            </div>
            <p class="bg-black text-white py-3 text-center fs-5 mb-0">詳細資訊</p>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mt-5 mt-md-0">
          <div class="border">
            <div>
              <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-2.png?raw=true" alt="store">
            </div>
            <h3 class="px-5 py-2 mb-0 fs-4 border-bottom">台北綠園店</h3>
            <div class="px-5 py-3">
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                call
                </span>
                <span class="fs-5">電話：(02)000-2345</span>
              </div>
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                schedule
                </span>
                <span class="fs-5">營業時間：10:00-21:00</span>
              </div>
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                location_on
                </span>
                <span class="fs-5">地址：台北市中正區復興南路 132-1 號</span>
              </div>
            </div>
            <p class="bg-black text-white py-3 text-center fs-5 mb-0">詳細資訊</p>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mt-5 mt-xl-0">
          <div class="border">
            <div>
              <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-3.png?raw=true" alt="store">
            </div>
            <h3 class="px-5 py-2 mb-0 fs-4 border-bottom">台中清水旗艦店</h3>
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
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                location_on
                </span>
                <span class="fs-5">地址：台中市清水區經南一路 23 號 8 樓</span>
              </div>
            </div>
            <p class="bg-black text-white py-3 text-center fs-5 mb-0">詳細資訊</p>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mt-5 mt-xl-8">
          <div class="border">
            <div>
              <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-4.png?raw=true" alt="store">
            </div>
            <h3 class="px-5 py-2 mb-0 fs-4 border-bottom">高雄中正形象店</h3>
            <div class="px-5 py-3">
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                call
                </span>
                <span class="fs-5">電話：(07)000-2345</span>
              </div>
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                schedule
                </span>
                <span class="fs-5">營業時間：10:00-21:00</span>
              </div>
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                location_on
                </span>
                <span class="fs-5">地址：高雄市苓雅區中正路 38 號 12 樓</span>
              </div>
            </div>
            <p class="bg-black text-white py-3 text-center fs-5 mb-0">詳細資訊</p>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mt-5 mt-xl-8">
          <div class="border">
            <div>
              <img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-5.png?raw=true" alt="store">
            </div>
            <h3 class="px-5 py-2 mb-0 fs-4 border-bottom">高雄夢時代店</h3>
            <div class="px-5 py-3">
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                call
                </span>
                <span class="fs-5">電話：(07)000-1234</span>
              </div>
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                schedule
                </span>
                <span class="fs-5">營業時間：10:00-21:00</span>
              </div>
              <div class="d-flex align-items-start mb-2">
                <span class="material-symbols-outlined me-2">
                location_on
                </span>
                <span class="fs-5">地址：高雄市前鎮區中華一路 63 號 6 樓</span>
              </div>
            </div>
            <p class="bg-black text-white py-3 text-center fs-5 mb-0">詳細資訊</p>
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
  .material-symbols-outlined{
    font-size: 1.5rem;
  }
</style>