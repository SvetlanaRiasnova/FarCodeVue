<template>
  <section class="intro">
    <div class="intro__info">
      <h1 class="intro__info-header">
        <span class="slashpurple">/</span>FARCODE
      </h1>
      <p class="intro__info-description">ХАКАТОН ЦИФРОВЫХ ПРОФЕССИЙ</p>
      <button class="intro__info-button" @click="onclickBtn()" type="button">
        участвовать
      </button>
    </div>
    <div class="intro__image">
      <img src="intro.png" alt="main image" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePageIntro",
  data() {
    return {};
  },
  methods: {
    showModal() {
      let element = this.$refs.modal.$el;
      element.modal("modal");
    },
    onclickBtn() {
      let x = document.getElementById("cases");
      x.scrollIntoView({ behavior: "smooth" });
    },
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
    &-header {
      margin: 0;
      font-size: 60px;
      font-weight: 700;
      line-height: 73px;
      text-align: left;
      display: flex;
      align-items: center;
      & .slashpurple {
        font-size: 60px;
      }
    }
    &-description {
      margin: 0;
      color: rgb(0, 0, 0);
      padding-top: 25px;
    }
  }
  .intro__info-button {
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
}
</style>
