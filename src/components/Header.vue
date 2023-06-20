<template>
  <header class="py-6 bg-white">
    <div
      class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between"
    >
      <router-link to="/" class="font-bold text-black text-xl">
        <img
          class="w-auto h-9"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
          alt=""
      /></router-link>
      <nav class="flex items-center gap-5 text-sm font-bold">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/quran">Quran</router-link>
        <router-link to="/shop">Shop</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped></style>
