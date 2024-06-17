<template>
  <button class="intro__info_button">
    {{ buttonContex }}
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    buttonContex: String,
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.intro__info_button {
  margin: 0;
  margin-top: 120px;
  width: 220px;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  background: rgb(22, 14, 32);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
