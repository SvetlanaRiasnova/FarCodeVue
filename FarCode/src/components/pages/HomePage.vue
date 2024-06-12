<template>
  <div>
    <HeaderComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/blocks/HeaderComponent.vue";
import FooterComponent from "@/components/blocks/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
<style scoped></style>
