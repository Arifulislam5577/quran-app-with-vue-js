<template>
  <section class="py-5">
    <div class="container flex flex-col justify-center">
      <div class="my-3">
        <h1 class="text-2xl font-bold text-black">Our Gallery</h1>
        <p class="text-base text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          asperiores earum eaque repudiandae laudantium deserunt sequi corrupti
          iure quam consequuntur illum ea, sapiente fugit praesentium quae nam.
          Qui, id voluptate.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        <img
          class="object-cover w-full rounded-xl block aspect-square"
          src="https://source.unsplash.com/random/300x300/?1"
        />
        <img
          class="object-cover w-full rounded-xl block aspect-square"
          src="https://source.unsplash.com/random/300x300/?2"
        />
        <img
          class="object-cover w-full rounded-xl block aspect-square"
          src="https://source.unsplash.com/random/300x300/?3"
        />
        <img
          class="object-cover w-full rounded-xl block aspect-square"
          src="https://source.unsplash.com/random/300x300/?4"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    name: "Gallery",
  },
};
</script>

<style scoped></style>
