<template>
  <section class="cases" id="cases">
    <div class="cases__top">
      <h2 class="cases__header">
        <span class="slash_purple">/</span>
        Серьёзные проблемы требуют серьёзных решений
      </h2>
      <p class="cases__description">Кейсы от ведущих российских компаний</p>
    </div>
    <div class="cases__items">
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case1.png" alt="case1" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Разработка программы сервера на Django</a
        >
      </div>
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case2.png" alt="case2" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Вёрстка сайтов по макетам (HTML + CSS)</a
        >
      </div>
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case3.png" alt="case3" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Разработка мобильного UI на React-native</a
        >
      </div>
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case4.png" alt="case4" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Создание Web-дизайна</a
        >
      </div>
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case5.png" alt="case5" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Разработка мобильного приложения на IOS</a
        >
      </div>
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case6.png" alt="case6" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Разработка мобильного приложения на Android</a
        >
      </div>
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case7.png" alt="case7" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Разработка UI на одном из JavaScript фреймворке</a
        >
      </div>
      <div class="cases__item">
        <div class="cases__item_image">
          <img src="@/assets/img/case8.png" alt="case8" class="gray" />
        </div>
        <a href="registration.html" class="cases__item_text"
          >Разработка приложений под Windows 10 на C++</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePageCases",
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.cases {
  width: 1294px;
  margin: 0 auto;
  &__top {
    width: 1294px;
    height: 499px;
    background: url("@/assets/img/cases_background.png");
  }
  &__header {
    padding-top: 62px;
    width: 570px;
    @include titleFont;
    margin: 0;
    margin-left: 86px;
  }
  &__description {
    width: 390px;
    text-transform: uppercase;
    padding-top: 30px;
    margin: 0;
    margin-left: 86px;
  }
  &__items {
    margin: 0 auto;
    margin-top: -70px;
    width: 1169px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 30px;
  }
  &__item {
    width: 269.26px;
    height: 327.16px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
    background: rgb(255, 255, 255);
    text-align: left;
    &_text {
      text-decoration: none;
      width: 234px;
      padding-top: 21px;
      padding-left: 16px;
      color: #000000;
    }
  }
  .cases__item {
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0);
    }
  }
}
</style>
