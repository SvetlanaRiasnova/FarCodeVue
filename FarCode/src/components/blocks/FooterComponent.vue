<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__info">
        <div class="footer__site-name">FARCODE</div>
        <div class="footer__owner">© 2022 Golomedov Andrey</div>
      </div>
      <div class="footer__contact" id="contacts">
        <p class="footer__text">Контакты</p>
        <div class="footer__phone">+ 7 (800) 500-27-34</div>
        <div class="footer__email">help@far-code.ru</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss">
.footer {
  background-color: #160e20;
  color: #b1b9ce;
  overflow: hidden;
  &__wrap {
    width: 1170px;
    margin: 0 auto;
    padding: 74px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__info,
  &__contact {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
  &__contact {
    align-items: end;
    & p {
      margin: 0;
    }
  }
  &__email,
  &__site-name {
    margin: 0;
  }
}
</style>
