<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getWeather");
});

const onSearchCity = (city) => {
  weatherData.value.city = city;
};
</script>

<template>
  <Navbar />
  <div v-if="!$store.state.toggle">
    <MainComp />
  </div>
  <div v-else>
    <div class="about-text">
      <h2>About Weather App</h2>
      <h1>냉무</h1>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
