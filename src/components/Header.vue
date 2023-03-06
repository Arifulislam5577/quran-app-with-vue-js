<template>
  <header class="py-6 bg-white">
    <div class="container flex items-center justify-between">
      <router-link to="/" class="font-bold text-black text-xl"
        >Vue Router</router-link
      >
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
