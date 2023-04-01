<script setup></script>

<template>
  <div class="opportunities">
    <h2 class="opportunities__title">Возможности</h2>
  </div>
</template>

<style lang="scss" scoped>
.opportunities {
  &__title {
    text-align: left;
    margin-bottom: 2rem;
    @media screen and (max-width: 1024px) {
      font-size: 64px;
      line-height: 72px;
      margin-bottom: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 2rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 40px;
      line-height: 48px;
      text-align: left;
      margin-bottom: 1rem;
    }
  }
}
</style>
