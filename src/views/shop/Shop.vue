<template>
  <div class="py-5 container">
    <Loader v-if="loading" />
    <div
      v-else
      class="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between"
    >
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "../../components/Product.vue";
import Loader from "../../components/Loader.vue";
import axios from "axios";
export default {
  components: {
    Product,
    Loader,
  },
  data() {
    return {
      loading: false,
      products: [],
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        this.loading = true;
        const { data } = await axios("https://fakestoreapi.com/products");
        this.products = data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
