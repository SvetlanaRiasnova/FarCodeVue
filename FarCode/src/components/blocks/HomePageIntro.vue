<template>
  <section class="intro">
    <div class="intro__info">
      <h1 class="intro__info_header">
        <span class="slash_purple">/</span>FARCODE
      </h1>
      <p class="intro__info_description">ХАКАТОН ЦИФРОВЫХ ПРОФЕССИЙ</p>
      <MainButton :buttonContex="msg" />
    </div>
    <div class="intro__image">
      <img src="intro.png" alt="main image" />
    </div>
  </section>
</template>

<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "HomePageIntro",
  components: {
    MainButton,
  },
  data() {
    return {
      msg: "участвовать",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.intro {
  margin: 0 auto;
  width: 1291px;
  display: flex;
  gap: 100px;
  justify-content: center;
  padding-top: 80px;
  &__info {
    width: 400px;
    display: flex;
    flex-direction: column;
    padding-top: 227px;
    &_header {
      margin: 0;
      font-size: 60px;
      font-weight: 700;
      line-height: 73px;
      text-align: left;
      display: flex;
      align-items: center;
      & .slash_purple {
        font-size: 60px;
      }
    }
    &_description {
      margin: 0;
      color: rgb(0, 0, 0);
      padding-top: 25px;
    }
  }
}
</style>
