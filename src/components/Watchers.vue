<template>
  <div>Watchers</div>

  <div class="my-5">
    <div class="mb-4">
      <input
        type="text"
        class="border px-6 py-2.5 focus:outline-none"
        placeholder="First Name"
        v-model="firstName"
      />
    </div>

    <div class="mb-4">
      <input
        type="text"
        class="border px-6 py-2.5 focus:outline-none"
        placeholder="Last Name"
        v-model="lastName"
      />
    </div>
    <div class="mb-4">
      <input
        type="text"
        class="border px-6 py-2.5 focus:outline-none"
        placeholder="Position Name"
        v-model="position.title"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
export default {
  name: "Watchers",
  setup() {
    const state = reactive({
      firstName: "",
      lastName: "",
      position: {
        title: "",
      },
    });

    // watch(
    //   () => {
    //     return { ...state };
    //   },
    //   (newValue, oldValue) => {
    //     console.log("Old Value", oldValue.firstName);
    //     console.log("New Value", newValue.firstName);
    //     console.log("Old Value", oldValue.lastName);
    //     console.log("New Value", newValue.lastName);
    //   }
    // );

    watch(
      () => state.position,
      function (n, o) {
        console.log("Old Value", o.title);
        console.log("New Value", n.title);
      },
      { deep: true }
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>
