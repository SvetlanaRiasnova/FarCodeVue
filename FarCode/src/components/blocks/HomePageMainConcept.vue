<template>
  <main class="concept" id="about_us">
    <SubMenu :menuItems="menuItems" />
    <div class="concept__content" id="about">
      <div class="concept__about">
        <h2 class="concept__about-title">
          <span class="slashgreen">/</span>Что такое хакатон цифровых профессий?
        </h2>
        <p class="concept__about-text">
          Это мероприятие, где команды, состоящие из молодых людей создают
          прототипы цифровых продуктов по техническому заданию от малого и
          среднего бизнеса (кейсы).
        </p>
      </div>
      <div class="concept__reasons">
        <h2 class="concept__reasons-title">
          <span class="slashgreen">/</span>Почему вам это нужно?
        </h2>
        <p class="concept__reasons-text">
          Хакатон позволит вам получить крутой опыт командной разработки, новые
          и полезные знакомства, а также шанс попасть на стажировку или работу в
          IT-компанию или в IT-подразделение крупной корпорации.
        </p>
      </div>
      <div class="concept__participation">
        <h2 class="concept__participation-title">
          <span class="slashgreen">/</span>
          Как принять участие в хакатоне?
        </h2>
        <div class="concept__participation-cards">
          <div class="concept__participation-card">
            <div class="concept__participation-icon">
              <img src="@/assets/icons/participation1.png" alt="icon" />
            </div>
            <div class="concept__participation-text">
              Изучите кейсы через кнопки Подробнее о каждом кейсе
            </div>
          </div>
          <div class="concept__participation-card">
            <div class="concept__participation-icon">
              <img src="@/assets/icons/participation2.png" alt="icon" />
            </div>
            <div class="concept__participation-text">
              Регистрируйтесь на понравившийся кейс
            </div>
          </div>
          <div class="concept__participation-card">
            <div class="concept__participation-icon">
              <img src="@/assets/icons/participation3.png" alt="icon" />
            </div>
            <div class="concept__participation-text">
              Перед хакатоном будет укомплектована команда по навыкам
            </div>
          </div>
          <div class="concept__participation-card">
            <div class="concept__participation-icon">
              <img src="@/assets/icons/participation4.png" alt="icon" />
            </div>
            <div class="concept__participation-text">
              Решаете кейс в дни проведения хакатона вместе со своей командой
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SubMenu from "@/components/blocks/SubMenu.vue";

export default {
  name: "HomePageConcept",
  components: {
    SubMenu,
  },
  data() {
    return {
      menuItems: [
        {
          name: "О концепции",
          href: "#about_us",
        },
        {
          name: "Кейсы",
          href: "#cases",
        },
        {
          name: "Ключевые даты",
          href: "#dates",
        },
        {
          name: "FAQ",
          href: "#faq",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.concept {
  margin: 0 auto;
  padding-top: 223px;
  width: 1412px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(177, 185, 206);
  text-align: left;
  &__content {
    border-radius: 20px;
    background: #160e20;
    width: 1412px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background: rgb(22, 14, 32);
  }
  &__about {
    background: url("@/assets/img/concept_content.png") no-repeat;
    height: 508px;
    padding: 65px 121px;

    &-title {
      width: 570px;
      margin: 0;
      @include titleFont;
    }
    &-text {
      margin: 0;
      width: 528px;
    }
  }
  &__reasons {
    padding-left: 718px;
    padding-top: 64px;
    height: 508px;
    background: url("@/assets/img/concept__reasons.png") no-repeat;
    background-size: contain;
    &-title {
      margin: 0;
      width: 306px;
      @include titleFont;
    }
    &-text {
      padding-right: 200px;
    }
  }
  &__participation {
    height: 508px;
    padding: 65px 121px;
    background: url("@/assets/img/concept__participation.png") no-repeat;
    background-size: contain;
    &-title {
      margin: 0;
      width: 510px;
      @include titleFont;
    }
    &-cards {
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-gap: 14px;
      justify-content: center;
      align-content: start;
      padding-top: 46px;
    }
    &-card {
      width: 300px;
      height: 225px;
      @include flexCenter;
      flex-direction: column;
      text-align: center;
      &:nth-child(2) {
        margin-top: -10px;
      }
    }
    &-icon {
      @include flexCenter;
      flex-direction: column;
      width: 110px;
      height: 110px;
      background-color: #ffffff;
    }
    &-text {
      padding-top: 34px;
    }
    & img {
      width: 78px;
      height: 78px;
    }
  }
}
.cases__item {
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0);
  }
}
</style>
