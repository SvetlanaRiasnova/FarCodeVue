<template>
  <section class="case__intro">
    <div class="case__intro-info">
      <h1 class="case__intro-header">Разработка программы сервера на Django</h1>
      <button class="intro__info-button" @click="onclickBtn()" type="button">
        записаться
      </button>
    </div>
    <div class="case__intro-image">
      <img src="/case1.png" alt="case1 image" />
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterPageIntro",
  data() {
    return {};
  },
  methods: {
    onclickBtn() {
      let x = document.getElementById("register_form");
      x.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.case__intro {
  margin: 0 auto;
  margin-top: 214px;
  width: 1170px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-direction: row;
  &-header {
    @include titleFont;
    width: 534px;
    margin: 0;
    padding-top: 51px;
  }

  & img {
    width: 526px;
  }
}
.case__info-button {
  margin-top: 49px;
  width: 186px;
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
</style>
