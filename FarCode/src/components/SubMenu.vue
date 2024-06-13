<template>
  <nav class="concept__menu">
    <a
      class="consept__menu_link"
      href="#"
      v-for="(item, index) in menuItems"
      :key="index"
      >{{ item }}</a
    >
  </nav>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menuItems: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.concept__menu {
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 42px;
  & a {
    text-decoration: none;
    color: #000000;
  }
}
</style>
