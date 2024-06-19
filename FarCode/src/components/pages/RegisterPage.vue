<template>
  <div>
    <BackgroundHeavens />
    <HeaderComponent :mainMenu="mainMenu" />
    <RegisterPageIntro />
    <RegisterPageDetails />
    <RegisterCaseDescription />
    <RegisterCaseMentors />
    <RegisterForm />
    <FooterComponent />
  </div>
</template>

<script>
import BackgroundHeavens from "@/components/blocks/BackgroundHeavens.vue";
import HeaderComponent from "@/components/blocks/HeaderComponent.vue";
import RegisterPageIntro from "@/components/blocks/RegisterPageIntro.vue";
import RegisterPageDetails from "@/components/blocks/RegisterPageDetails.vue";
import RegisterCaseDescription from "@/components/blocks/RegisterCaseDescription.vue";
import RegisterCaseMentors from "@/components/blocks/RegisterCaseMentors.vue";
import RegisterForm from "@/components/blocks/RegisterForm.vue";
import FooterComponent from "@/components/blocks/FooterComponent.vue";

export default {
  name: "RegisterPage",
  components: {
    BackgroundHeavens,
    HeaderComponent,
    RegisterPageIntro,
    RegisterPageDetails,
    RegisterCaseDescription,
    RegisterCaseMentors,
    RegisterForm,
    FooterComponent,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      mainMenu: [
        {
          name: "Главная",
          href: "/",
        },
        {
          name: "Контакты",
          href: "#contacts",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "src/style/style.scss";
.cloud5 {
  display: none;
}
.cloud6 {
  display: none;
}
.cloud__bottom {
  width: 400.63px;
  height: 405.45px;
  right: 1640.37px;
  top: 3444px;
}
</style>
