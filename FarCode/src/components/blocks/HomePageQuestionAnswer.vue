<template>
  <section class="qa" id="faq">
    <h2 class="qa__header">
      <span class="slash_purple">/</span>Часто задаваемые вопросы и ответы
    </h2>
    <div class="qa__items">
      <div class="qa__item1 qa__item">
        <h3 class="qa__item_question">Вопрос 1</h3>
        <p class="qa__item_answer">
          mi sit amet mauris commodo quis imperdiet massa tincidunt nunc
        </p>
      </div>
      <div class="qa__item2 qa__item">
        <h3 class="qa__item_question">Вопрос 2</h3>
        <p class="qa__item_answer">
          venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam
          sem fringilla ut morbi tincidunt
        </p>
      </div>
      <div class="qa__item3 qa__item">
        <h3 class="qa__item_question">Вопрос 3</h3>
        <p class="qa__item_answer">
          aliquam sem et tortor consequat id porta nibh venenatis cras sed felis
          eget velit aliquet sagittis id consectetur
        </p>
      </div>
      <div class="qa__item4 qa__item">
        <h3 class="qa__item_question">Вопрос 4</h3>
        <p class="qa__item_answer">
          id aliquet lectus proin nibh nisl condimentum id venenatis a
          condimentum vitae sapien pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas sed tempus urna
          et pharetra pharetra massa massa ultricies mi
        </p>
      </div>
      <div class="qa__item5 qa__item">
        <h3 class="qa__item_question">Вопрос 5</h3>
        <p class="qa__item_answer">
          aliquam sem et tortor consequat id porta nibh venenatis cras sed felis
          eget velit aliquet sagittis id consectetur
        </p>
      </div>
      <div class="qa__item6 qa__item">
        <h3 class="qa__item_question">Вопрос 6</h3>
        <p class="qa__item_answer">
          venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam
          sem fringilla ut morbi tincidunt
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  nsme: "QuestionAnswer",
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.qa {
  margin: 0 auto;
  width: 1170px;
  margin-bottom: 107px;
  &__header {
    margin: 0;
    width: 570px;
    font-size: 40px;
    font-weight: 700;
    line-height: 49px;
  }
  &__items {
    margin-top: 47px;
    width: 1170px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    color: rgb(0, 0, 0);
    font-size: 20px;
    line-height: 24px;
  }
  &__item {
    padding: 23px 26px;
    border-radius: 7px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    background: rgb(255, 255, 255);
    &_question {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
  &__item1 {
    grid-column: 1 / 1;
    grid-row: 1;
  }
  &__item2 {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }
  &__item3 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  &__item4 {
    grid-column: 3 / 3;
    grid-row: 2 / 4;
  }
  &__item5 {
    grid-column: 1 / 2;
    grid-row: 3 / 3;
  }
}
</style>
