<template>
  <div class="py-5 container">
    <Loader v-if="loading" />
    <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div class="lg:col-span-2 w-full">
        <router-link
          to="/shop"
          class="px-5 py-2 bg-slate-900 text-white rounded text-sm"
          >Go Back</router-link
        >
      </div>
      <div class="lg:col-span-1 w-full">
        <img
          :src="product?.image"
          class="h-96 w-full object-contain"
          :alt="product?.title"
        />
      </div>
      <div class="lg:col-span-1 w-full">
        <h1 class="text-xl font-bold">{{ product?.title }}</h1>
        <p class="text-gray-500 my-5">{{ product?.description }}</p>
        <h3 class="text-slate-700 font-bold mb-5">
          Rating - {{ product?.rating?.rate }} from
          {{ product?.rating?.count }} reviews
        </h3>
        <h3 class="text-slate-700 font-bold mb-5">
          Price - ${{ product?.price }}
        </h3>

        <button
          className="p-3 px-6 text-sm rounded bg-slate-900 text-gray-50 hover:bg-slate-800 uppercase transition-all"
        >
          add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Loader from "../../components/Loader.vue";

export default {
  name: "ProductDetails",
  props: ["id"],
  components: { Loader },

  setup(props) {
    const loading = ref(false);
    const product = ref(null);
    const getProductById = async () => {
      try {
        loading.value = true;
        const { data } = await axios(
          `https://fakestoreapi.com/products/${props.id}`
        );
        product.value = data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(getProductById);
    return {
      product,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped></style>
