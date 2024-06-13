<template>
  <section class="mentors">
    <h2 class="mentors__header">
      <span class="slash__green">/</span>Менторы кейса
    </h2>
    <div class="mentors__info">
      <div class="mentors__info_block">
        <img
          src="@/assets/img/Alexsey.png"
          alt="mentor Alexsey"
          class="mentors__photo"
        />
        <p class="mentors__name">Алексей Кунин</p>
        <p class="mentors__prof">CEO Optiacs</p>
      </div>
      <div class="mentors__info_block">
        <img
          src="@/assets/img/Oleg.png"
          alt="mentor Oleg"
          class="mentors__photo"
        />
        <p class="mentors__name">Олег Никитин</p>
        <p class="mentors__prof">Co-founder<br />Optiacs</p>
      </div>
      <div class="mentors__info_block">
        <img
          src="@/assets/img/Olga.png"
          alt="mentor Olga"
          class="mentors__photo"
        />
        <p class="mentors__name">Ольга Лукьянова</p>
        <p class="mentors__prof">Co-founder<br />Optiacs</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterCaseMentors",
};
</script>

<style lang="scss" scoped>
@import "/src/style/style.scss";
.mentors {
  margin-top: 41px;
  margin-bottom: 76px;
  width: 1350px;
  padding: 76px 90px 106px 90px;
  min-height: 769px;
  border-radius: 20px;
  background: url("@/assets/img/mentors_bg.png") no-repeat center;
  background-size: 100%;
  color: #b1b9ce;
  &__header {
    @include titleFont;
    color: #ffffff;
    padding-bottom: 57px;
  }
  &__info {
    display: flex;
    & img {
      padding-bottom: 34px;
    }
    &_block {
      text-align: center;
    }
  }
  &__name {
    font-weight: 700;
  }
}
</style>
