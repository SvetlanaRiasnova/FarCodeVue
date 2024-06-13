<template>
  <section class="register">
    <h2 class="register__header">
      <span class="slash_purple">/</span>Регистрация на кейс
    </h2>
    <form action="" method="post" class="register__form">
      <div class="register__form_inputs">
        <div class="register__form_left">
          <input type="text" placeholder="Введите имя" required />
          <input type="text" placeholder="Введите фамилию" required />
          <input
            type="number"
            placeholder="Введите свой возраст (от 10 до 100)"
            required
          />
          <input type="email" placeholder="Введите email" required />
          <input type="phone" placeholder="Номер телефона" required />
          <input type="text" placeholder="Название организации" />
        </div>
        <div class="register__form_right">
          <textarea name="" id="" rows="14"></textarea>
          <div class="register__form_chbx">
            <input id="agreement" name="agreement" type="checkbox" required />
            <label for="agreement">Соглашение пользователя</label>
          </div>
        </div>
      </div>
      <button type="submit" class="register__button">Зарегистрироваться</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>

<style lang="scss" scoped>
@import "src/style/style.scss";
.register {
  width: 1170px;
  &__header {
    @include titleFont;
    padding-bottom: 53px;
  }
  &__form_inputs {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(2, 570px);
  }
  &__form_left,
  &__form_right {
    width: 570px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    & input,
    & textarea {
      width: 100%;
      border-radius: 10px;
      box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
      background: rgb(255, 255, 255);
      border: none;
    }
    & input {
      height: 51px;
      padding: 21px 31px;
    }
  }
  &__form_chbx {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    width: 570px;
    border-radius: 10px;
    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    background: rgb(255, 255, 255);
    border: none;
    & input {
      width: 20px;
      margin: 0;
      margin-left: 31px;
      &::before {
        border-color: #7a7a7a;
        background-color: #ffffff;
      }
      &::after {
        border-color: #7a7a7a;
        background-color: #7a7a7a;
      }
    }
    & label {
      margin: 0;
      padding-left: 14px;
      color: rgb(136, 136, 136);
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
    }
  }
  &__button {
    margin-top: 30px;
    margin-bottom: 76px;
    width: 319.77px;
    height: 70px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background: rgb(22, 14, 32);
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
}
.modal {
  // display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  & .register {
    // display: block;
    background: #ddd;
    width: 900px;
  }
}
</style>
