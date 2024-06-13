<template>
  <header class="header">
    <a class="header__logo" href="index.html">
      <img src="logo.png" alt="" class="header__logo_image" />
    </a>
    <nav class="header__menu">
      <a href="#about_us" class="header__menu_link">О нас</a>
      <a href="#contacts" class="header__menu_link">Контакты</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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
    /* padding-right: 120px; */
    & a {
      text-decoration: none;
      color: rgb(0, 0, 0);
    }
  }
}
</style>
