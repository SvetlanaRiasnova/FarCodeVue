<template>
  <div id="App">
    <HomePage />
    <RegisterPage />
  </div>
</template>

<script>
import HomePage from "./components/pages/HomePage.vue";
import RegisterPage from "/src/components/pages/RegisterPage.vue";

export default {
  components: {
    HomePage,
    RegisterPage,
  },
};
</script>

<style lang="scss"></style>
