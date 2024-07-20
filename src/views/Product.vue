<script setup>
    import Nav from "@/components/Nav.vue";
    import Footer from "@/components/Footer.vue";
    import Tag from "@/components/Tag.vue";
    import { ref, onUpdated, onMounted } from "vue";
    import { useRoute } from "vue-router"
    const route = useRoute();
    onMounted(() => {
      item1.value = true;
    })
    onUpdated(() => {
      console.log(route.path)
      if(route.path === "/product"){
        item1.value = true;
        item2.value = false;
      } else if(route.path === "/product/sunglasses"){
        item2.value = true;
        item1.value = false;
      }
    })
    const item1 = ref(false);
    const item2 = ref(false);
    const item3 = ref(false);
</script>

<template>
  <header>
    <nav>
      <Nav></Nav>
    </nav>
  </header>
  <section>
    <Tag :item1="item1" :item2="item2" :item3="item3"></Tag>
  </section>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>

</style>