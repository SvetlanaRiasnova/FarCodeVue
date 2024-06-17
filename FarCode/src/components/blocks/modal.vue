<template>
  <div>
    <div class="modal-fon hidden" ref="modal"></div>
    <div class="modal hidden">
      <div class="register">
        <div class="register__header_block">
          <h2 class="register__header">
            <span class="slash_purple">/</span>Регистрация на кейс
          </h2>
          <div class="modal_close">X</div>
        </div>
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
                <input
                  id="agreement"
                  name="agreement"
                  type="checkbox"
                  required
                />
                <label for="agreement">Соглашение пользователя</label>
              </div>
            </div>
          </div>
          <button type="submit" class="register__button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
};
</script>

<style lang="scss">
.modal-fon {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.5;
  position: fixed;
  background-color: #7a7a7a;
}
.modal {
  margin-top: 60px;
  width: 1200px;
  height: 800px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  padding-top: 60px;
}
.register__header_block {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.modal_close {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}
</style>
