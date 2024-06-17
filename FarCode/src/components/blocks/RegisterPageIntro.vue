<template>
  <section class="case__intro">
    <div class="case__intro_info">
      <h1 class="case__intro_header">Разработка программы сервера на Django</h1>
      <MainButton :buttonContex="msg" class="case__info_button" />
    </div>
    <div class="case__intro_image">
      <img src="/case1.png" alt="case1 image" />
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

  & img {
    width: 526px;
  }
}
.case__info_button {
  margin-top: 49px;
  width: 186px;
}
</style>
