<template>
  <ul>
    <li v-for="product in product_list" :key="product.id">
      {{ product.title }} -{{ product.price }}
    </li>
  </ul>
</template>

<script>
import shop from "@/api/shop.js";

export default {
  name: "ProductList",
  data: () => ({
    product_list: []
  }),
  created() {
    shop.getProducts(x => {
      this.product_list = x;
    });
  }
};
</script>
