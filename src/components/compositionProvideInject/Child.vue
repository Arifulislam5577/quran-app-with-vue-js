<template>
  <div class="m-6">
    <h2>I am child component</h2>
    <p>Child - {{ counter }}</p>
    <button @click="increment" class="px-5 py-2 bg-slate-300">Increment</button>
    <Parent />
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Child",
  setup() {
    const counter = inject("counter", 5);
    const increment = inject("increment");
    return {
      counter,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
