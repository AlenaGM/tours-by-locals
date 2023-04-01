<script setup></script>

<template>
  <div class="mission">
    <h3 class="mission__title">
      <span>Главная цель компании —</span> стать сервисом №1 в сфере путешествий
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.mission {
  &__title {
    font-family: "MuseoSansCyrl-700", sans-serif;
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    text-align: left;
    color: var(--color-black);
    margin-bottom: 4rem;
    span {
      font-family: "MuseoSansCyrl-700", sans-serif;
      font-size: 64px;
      font-weight: 700;
      line-height: 72px;
      text-align: left;
      color: var(--color-black30);
    }
    @media screen and (min-width: 1344px) {
      font-size: 64px;
      line-height: 72px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 48px;
      line-height: 56px;
      margin-bottom: 3rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 1rem;
    }
  }
}
</style>
