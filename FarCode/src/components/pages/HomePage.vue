<template>
  <div>
    <BackgroundHeavens />
    <HeaderComponent :mainMenu="mainMenu" />
    <HomePageIntro />
    <HomePageConcept />
    <HomePageCases />
    <HomePageSchedule />
    <QuestionAnswer />
    <FooterComponent />
  </div>
</template>

<script>
import BackgroundHeavens from "@/components/blocks/BackgroundHeavens.vue";
import HeaderComponent from "@/components/blocks/HeaderComponent.vue";
import HomePageIntro from "@/components/blocks/HomePageIntro.vue";
import HomePageConcept from "@/components/blocks/HomePageMainConcept.vue";
import HomePageCases from "@/components/blocks/HomePageCases.vue";
import HomePageSchedule from "@/components/blocks/HomePageSchedule.vue";
import QuestionAnswer from "@/components/blocks/HomePageQuestionAnswer.vue";
import FooterComponent from "@/components/blocks/FooterComponent.vue";

export default {
  components: {
    BackgroundHeavens,
    HeaderComponent,
    HomePageIntro,
    HomePageConcept,
    HomePageCases,
    HomePageSchedule,
    QuestionAnswer,
    FooterComponent,
  },
  data() {
    return {
      mainMenu: [
        {
          name: "О нас",
          href: "#about_us",
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
<style lang="scss" scoped>
@import "src/style/style.scss";
.cloud5 {
  /* Фигура4 */
  position: absolute;
  width: 632.09px;
  height: 656.4px;
  // left: 2033.67px;
  right: -50.13px;
  top: 4636px;
  bottom: 953.03px;
  z-index: -2;
  // transform: rotate(160.73deg);
}
.cloud6 {
  /* Фигура6 */
  position: absolute;
  width: 590.13px;
  height: 569.43px;
  left: -290px;
  right: 2315.49px;
  top: 5540px;
  bottom: 136px;
  z-index: -2;
}
.cloud__bottom {
  width: 400.63px;
  height: 405.45px;
  right: 1640.37px;
  top: 3444px;
}
</style>
