<script setup>
  const props = defineProps({
    item1: {
      type: Boolean,
      default: false
    },
    item2: {
      type: Boolean,
      default: false
    },
    item3: {
      type: Boolean,
      default: false
    },
  })
</script>

<template>
  <div class="container">
    <div class="row">
      <div :class="{'col-4': true, border: true, 'px-0': true, 'px-md-2': true, item1: item1}">
        <p class="mb-0 fs-6 fs-md-2 fw-bold text-center text-roboto py-4">
          <router-link to="/product" class="text-black text-decoration-none"> OPTICAL</router-link>
        </p>
      </div>
      <div :class="{'col-4': true, border: true, 'px-0': true, 'px-md-2': true, item2: item2}">
        <p class="mb-0 fs-6 fs-md-2 fw-bold text-center text-roboto py-4">
          <router-link to="/product/sunglasses" class="text-black text-decoration-none">SUNGLASSES</router-link>
        </p>
      </div>
      <div :class="{'col-4': true, border: true, 'px-0': true, 'px-md-2': true, item3: item3}">
        <p class="mb-0 fs-6 fs-md-2 fw-bold text-center text-roboto py-4">
          <router-link class="text-black text-decoration-none">FUNCTIONAL</router-link>  
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .item1, .item2, .item3{
    border-bottom: 8px solid #aa0601 !important;
  }
</style>