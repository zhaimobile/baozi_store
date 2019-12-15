<template>
  <div class="home">
    <h1>Welcome to Daoluansi Baozi!!</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "home",
  components: { ProductList }
};
</script>
