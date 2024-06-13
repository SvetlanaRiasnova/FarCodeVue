<template>
  <div>
    <BackgroundHeavens />
    <HeaderComponent />
    <RegisterPageIntro />
    <RegisterPageDetails />
    <RegisterCaseDescription />
    <RegisterCaseMentors />
    <RegisterForm />
    <FooterComponent />
  </div>
</template>

<script>
import BackgroundHeavens from "@/components/MainBackgroundHeavens.vue";
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
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
</style>
