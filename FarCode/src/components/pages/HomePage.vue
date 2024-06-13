<template>
  <div>
    <BackgroundHeavens />
    <HeaderComponent />
    <HomePageIntro />
    <HomePageConcept />
    <HomePageCases />
    <HomePageSchedule />
    <QuestionAnswer />
    <FooterComponent />
  </div>
</template>

<script>
import BackgroundHeavens from "/src/components/MainBackgroundHeavens.vue";
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
