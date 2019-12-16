<template>
  <ul>
    <li v-for="product in product_list" :key="product.id">
      {{ product.title }} -{{ product.price }} - {{ xxs }}
    </li>
  </ul>
</template>

<script>
import shop from "@/api/shop.js";
//import store from "@/store/index.js";

export default {
  name: "ProductList",
  // data() {
  //   return {
  //     product_list: {},
  //     xxs: "first way"
  //   };
  // },

  // data: () => ({
  //     product_list: {},
  //     xxs: "second way"
  // }),

  data: function() {
    return {
      //product_list: {},
      xxs: "third way"
    };
  },
  computed: {
    product_list() {
      return this.$store.state.products;
    }
  },
  created() {
    shop.getProducts(x => {
      //store.state.products = x; #work but not correct
      this.$store.commit("setProducts", x);
    });
  }
};
</script>
