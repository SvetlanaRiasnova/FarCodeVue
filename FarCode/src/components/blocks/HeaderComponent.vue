<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      <img src="logo.png" alt="" class="header__logo-image" />
    </router-link>
    <nav class="header__menu">
      <a
        v-for="(item, index) in mainMenu"
        :key="index"
        :href="`${item.href}`"
        >{{ item.name }}</a
      >
      <!-- <a href="#contacts" class="header__menu-link">Контакты</a> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["mainMenu"],
};
</script>

<style scoped lang="scss">
@import "src/style/style.scss";
.header {
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  width: 1168px;
  height: 35px;
  &__menu {
    display: flex;
    gap: 72px;
    & a {
      text-decoration: none;
      color: rgb(0, 0, 0);
    }
  }
}
</style>
