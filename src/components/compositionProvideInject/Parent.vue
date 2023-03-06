<template>
  <div>
    <h2 class="">I am Parent Component</h2>
    <Child />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: { Child },
};
</script>
