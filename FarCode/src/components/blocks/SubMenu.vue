<template>
  <nav class="concept__menu">
    <a
      class="consept__menu_link"
      v-for="(item, index) in menuItems"
      :key="index"
      :href="`${item.href}`"
      @click="active_item = item"
      :class="{ active: item === active_item }"
      >{{ item.name }}</a
    >
  </nav>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menuItems: [],
  },
  data() {
    return {
      active_item: this.menuItems[0],
    };
  },
  methods: {
    cklickOn(item) {
      const items = document.getElementsByClassName("case__menu-link");
      for (let item of items) {
        item.classList.remove("active");
      }
      item.classlist.add("active");
    },
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
  & a:hover {
    border-bottom: 2px solid rgb(120, 86, 255);
  }
}
.active {
  border-bottom: 2px solid rgb(120, 86, 255);
}
</style>
