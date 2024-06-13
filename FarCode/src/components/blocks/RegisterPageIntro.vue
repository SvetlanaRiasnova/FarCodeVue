<template>
  <section class="case__intro">
    <div class="case__intro_info">
      <h1 class="case__intro_header">Разработка программы сервера на Django</h1>
      <MainButton :buttonContex="msg" :class="case__intro_button" />
    </div>
    <div class="case__intro_image">
      <img src="case1.png" alt="case1 image" />
    </div>
  </section>
</template>

<script>
import MainButton from "@/components/MainButton.vue";
export default {
  name: "RegisterPageIntro",
  components: {
    MainButton,
  },
  data() {
    return {
      msg: "записаться",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.case__intro {
  margin: 0 auto;
  margin-top: 214px;
  // margin-bottom: 253px;
  width: 1170px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-direction: row;
  &_header {
    @include titleFont;
    width: 534px;
    margin: 0;
    padding-top: 51px;
  }
  :deep(&_button) {
    margin-top: 49px;
    width: 186px;
    height: 70px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background: rgb(22, 14, 32);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  & img {
    width: 526px;
  }
}
</style>
