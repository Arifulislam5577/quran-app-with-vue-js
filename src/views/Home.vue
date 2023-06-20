<template>
  <NewHero />
  <OurService />
  <Business />
  <SignUp />
  <LatestBlog />
</template>

<script>
import NewHero from "../components/NewHero.vue";
import LatestBlog from "../components/LatestBlog.vue";
import OurService from "../components/OurService.vue";
import Business from "../components/Business.vue";
import SignUp from "../components/SignUp.vue";
export default {
  name: "Home",
  components: {
    NewHero,
    LatestBlog,
    OurService,
    Business,
    SignUp,
  },
};
</script>

<style lang="scss" scoped></style>
