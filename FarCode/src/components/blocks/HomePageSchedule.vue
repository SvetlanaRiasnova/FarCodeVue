<template>
  <section class="schedule" id="dates">
    <div class="schedule__content">
      <div class="schedule__heading">
        <h2 class="schedule__header">
          <span class="slash__green">/</span>Что, а самое главное когда
        </h2>
        <p class="schedule__text">Ключевые даты хакатона</p>
      </div>
      <div class="schedule__dates">
        <div class="schedule__date">
          <h3 class="schedule__title">15 июля - 05 сентября</h3>
          <p class="schedule__description">Онлайн регистрация на кейс</p>
        </div>
        <div class="schedule__date">
          <h3 class="schedule__title">05 сентября 00:00</h3>
          <p class="schedule__description">
            Окончание приема заявок от участников хакатона
          </p>
        </div>
        <div class="schedule__date">
          <h3 class="schedule__title">До 15 сентября</h3>
          <p class="schedule__description">
            Формирование команд на кейсы и приглашение на хакатон
          </p>
        </div>
        <div class="schedule__date">
          <h3 class="schedule__title">23-24 сентября</h3>
          <p class="schedule__description">
            Старт 2-х дней хакатона + экспертная поддержка
          </p>
        </div>
        <div class="schedule__date">
          <h3 class="schedule__title">24 сентября</h3>
          <p class="schedule__description">
            Финал для команд кейсов / подведение итогов
          </p>
        </div>
      </div>
    </div>
    <div class="schedule__image">
      <img src="@/assets/img/FARCODE.png" alt="farcode" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePageSchedule",
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.schedule {
  margin: 105px auto;
  width: 1412px;
  min-height: 1108px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  background: rgb(22, 14, 32);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  &__content {
    width: 590px;
    padding-left: 113px;
    margin: 0;
  }
  &__header {
    @include titleFont;
    margin: 0;
    color: #ffffff;
  }
  &__text {
    margin: 0;
    padding-top: 30px;
    color: #ffffff;
  }
  &__dates {
    padding-top: 47px;
    display: flex;
    flex-direction: column;
    gap: 38px;
  }
  &__date {
    width: 514px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 19px 26px;
  }
  &__title {
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
  }
  &__description {
    margin: 0;
    padding-top: 20px;
  }
  & img {
    width: 720px;
    min-height: 966px;
  }
}
</style>
