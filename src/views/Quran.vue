<template>
  <div class="container w-2/3 mx-auto py-10">
    <header class="bg-gray-100 p-4 rounded flex items-center justify-between">
      <div>
        <select @change="getSurahNumber" class="p-3 text-sm px-5 rounded">
          <option
            v-for="surah in suras"
            :key="surah.number"
            :value="surah.number"
            class=""
          >
            {{ surah.number }}. {{ surah.name }} - {{ surah.englishName }}
          </option>
        </select>
      </div>

      <div class="text-right">
        <h2 class="text-sm font-bold">
          {{ currentSuras?.name }} - {{ currentSuras?.englishName }}
        </h2>
        <div class="flex items-center">
          <p class="text-xs">({{ currentSuras?.englishNameTranslation }})</p>
          <p class="text-xs font-bold">
            Ayat - {{ currentSuras?.numberOfAyahs }}
          </p>
        </div>
      </div>
    </header>

    <h2 v-if="loading" class="text-center font-bold text-xl">Loading...</h2>

    <div v-if="currentSuras?.ayahs?.length" class="mt-5">
      <div v-for="verse in currentSuras.ayahs" :key="verse.numberInSurah">
        <p class="flex items-center my-3 font-bold text-xl">
          <span
            class="mr-4 w-8 h-8 rounded-full border flex items-center justify-center font-normal text-sm"
            >{{ verse.numberInSurah }}</span
          >
          <span class="text-right">{{ verse.text }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      error: "",
      suras: [],
      currentSuras: null,
    };
  },

  mounted() {
    this.getSuras();
    this.getCurrentSuras(11);
  },

  methods: {
    async getSuras() {
      try {
        this.loading = true;
        const { data } = await axios("http://api.alquran.cloud/v1/surah");
        this.suras = data?.data;
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    },

    async getCurrentSuras(value) {
      try {
        this.loading = true;
        const { data } = await axios(
          `http://api.alquran.cloud/v1/surah/${value}`
        );
        this.currentSuras = data?.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },

    getSurahNumber(e) {
      this.getCurrentSuras(e.target.value);
    },
  },
};
</script>

<style scoped></style>
