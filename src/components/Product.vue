<script setup></script>

<template>
  <div class="product"><h2 class="product__title">Продукт</h2></div>
</template>

<style lang="scss" scoped>
.product {
  &__title {
    @media screen and (max-width: 500px) {
      text-align: center;
    }
  }
}
</style>
