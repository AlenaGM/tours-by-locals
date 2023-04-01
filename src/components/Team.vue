<script setup></script>

<template>
  <div class="team"><h2 class="team__title">Команда</h2></div>
</template>

<style lang="scss" scoped>
.team {
  &__title {
    text-align: left;
    margin-bottom: 2rem;
    @media screen and (max-width: 1024px) {
      font-size: 64px;
      line-height: 72px;
      margin-bottom: 1.5rem;
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
