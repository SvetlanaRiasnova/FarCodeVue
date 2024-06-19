<template>
  <main class="case__details">
    <SubMenu :menuItems="menuItems" />
    <div class="case__content" id="aboutcase">
      <div class="case__content-about">
        <h2 class="case__content-title">
          <span class="slashgreen">/</span>О компании
        </h2>
        <p class="case__content-text">
          ООО «ОПТИАКС» - это IT-стартап, который разрабатывает системы для
          анализа данных на фондовых рынках. Используются собственные разработки
          в области машинного обучения, алгоритмических торговых систем,
          искусственного интеллекта.
        </p>
        <p class="case__content-text">
          На текущий момент наш продукт - аналитические данные на финансовых
          рынках. Это продукт для компаний, которые специализируются на
          управлении активами фондовых рынков.
        </p>
      </div>
      <div class="case__content-logo">
        <img src="@/assets/icons/logo_event.png" alt="logo event" />
      </div>
    </div>
  </main>
</template>

<script>
import SubMenu from "@/components/blocks/SubMenu.vue";
export default {
  name: "RegisterPageDetails",
  components: {
    SubMenu,
  },
  data() {
    return {
      menuItems: [
        {
          name: "О компании",
          href: "#aboutcase",
        },
        {
          name: "Описание кейса",
          href: "#case_description",
        },
        {
          name: "Менторы кейса",
          href: "#mentors",
        },
        {
          name: "Регистрация",
          href: "#register_form",
        },
        // "О компании",
        // "Описание кейса",
        // "Менторы кейса",
        // "Регистрация",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.case__details {
  margin: 0 auto;
  margin-bottom: 81px;
  width: 1350px;
  padding-top: 253px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-menu {
    width: 1005px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 42px;
    & a {
      text-decoration: none;
      color: #000000;
    }
  }
}
.case__content {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 65px 90px 116px 90px;
  width: 1350px;
  border-radius: 20px;
  background: url("/src/assets/img/case_page.png") no-repeat center;
  background-size: 100%;
  &-about {
    width: 570px;
    color: #b1b9ce;
    padding-right: 80px;
  }
  &-title {
    @include titleFont;
  }
  &-logo img {
    width: 570px;
  }
}
.case__description {
  margin: 0 auto;
  width: 1170px;
  &-header {
    @include titleFont;
    margin: 0;
    padding-bottom: 40px;
  }
  &-text {
    margin: 0;
    padding-bottom: 40px;
  }
}
</style>
