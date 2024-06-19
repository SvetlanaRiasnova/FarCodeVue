<template>
  <div class="clouds">
    <img src="@/assets/img/cloud1.png" alt="cloud" class="cloud1" />
    <img src="@/assets/img/cloud2.png" alt="cloud" class="cloud2" />
    <img src="@/assets/img/cloud3.png" alt="cloud" class="cloud3" />
    <img
      src="@/assets/img/cloud4.png"
      alt="cloud"
      class="cloud4 cloud__bottom"
    />
    <img src="@/assets/img/cloud5.png" alt="cloud" class="cloud5" />
    <img src="@/assets/img/cloud6.png" alt="cloud" class="cloud6" />
  </div>
</template>

<script>
export default {
  name: "BackgroundHeavens",
};
</script>

<style lang="scss" scoped>
.cloud1 {
  /* Фигура5 */
  position: absolute;
  width: 590.13px;
  height: 569.43px;
  left: -168px;
  right: 2193.49px;
  top: -136px;
  bottom: 5812px;
  z-index: -2;
}
.cloud2 {
  /* Фигура3 */
  position: absolute;
  width: 433.5px;
  height: 472.78px;
  left: 3px;
  right: 2179.12px;
  top: 800px;
  bottom: 4972.65px;
  z-index: -2;
}
.cloud3 {
  position: absolute;
  width: 859.63px;
  height: 813.45px;
  left: 1408px;
  right: 348px;
  top: 981px;
  bottom: 4450.98px;
  z-index: -2;
}
.cloud4 {
  /* Фигура2 */
  position: absolute;
  width: 861.63px;
  height: 805.45px;
  // left: 513.63px;
  right: 1240.37px;
  top: 3344px;
  bottom: 2095.98px;
  z-index: -2;
}
.cloud5 {
  /* Фигура4 */
  position: absolute;
  width: 632.09px;
  height: 656.4px;
  right: -50.13px;
  top: 4636px;
  bottom: 953.03px;
  z-index: -2;
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
