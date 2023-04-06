<script setup></script>

<template>
  <div class="aliens">
    <div class="aliens__content content-text">
      Мы такие же увлечённые путешественники и с удовольствием пользуемся
      Tрипстером сами и советуем его близким
    </div>
    <div class="aliens__label">Даша, SMM-редактор</div>
  </div>
</template>

<style lang="scss" scoped>
.aliens {
  display: grid;
  justify-items: center;
  padding: 0 1.5rem 1rem;
  background: url(../assets/images/bg_image_4.png) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem 1rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0 1rem 0.5rem;
    background: url(../assets/images/bg_image_4_mobile.png) bottom/100% auto
      no-repeat;
    border-radius: 0px 0px 24px 24px;
  }
  &__content {
    margin-bottom: calc(100vw * 0.56);
    max-width: 800px;
    text-align: center;
    @media screen and (min-width: 1345px) {
      margin-bottom: 800px;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 0 72px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: calc(100vw * 0.82);
      padding: 0 1rem;
    }
  }
  &__label {
    font-family: "MuseoSansCyrl", sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    padding: 4px 12px;
    color: var(--color-black);
    background: rgba(255, 255, 255, 0.7);
    border-radius: 100px;
  }
}
</style>
