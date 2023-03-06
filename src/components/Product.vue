<template>
  <article
    class="p-5 bg-white flex flex-col items-center justify-center shadow"
  >
    <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
      <img :src="product.image" :alt="product.title" class="h-20" />
    </router-link>
    <div class="product-description mt-5 text-center">
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
        <h2
          class="font-bold text-sm text-slate-900 hover:text-slate-700 transition-all"
        >
          {{ product.title }}
        </h2>
      </router-link>

      <h3 class="text-slate-900 my-5">${{ product.price }}</h3>
      <button
        class="bg-gray-200 py-2 px-4 hover:bg-slate-900 transition-all hover:text-gray-50 rounded-md border-none text-slate-900 hover:scale-90"
        @click="addToCart(product.id)"
      >
        Add to cart
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>

<style scoped></style>
