<script setup></script>

<template>
  <section class="aliens">
    <div class="aliens_content content-text">
      Мы такие же увлечённые путешественники и с удовольствием пользуемся
      Tрипстером сами и советуем его близким
    </div>
    <div class="aliens_label">Даша, SMM-редактор</div>
  </section>
</template>

<style lang="scss" scoped>
.aliens {
  display: grid;
  justify-items: center;
  background: url(../assets/images/bg_image_4.jpg) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  padding: 0 1.5rem 1rem;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem 1rem;
  }
  @media screen and (max-width: 767px) {
    background: url(../assets/images/bg_image_4_mobile.jpg) bottom/100% auto
      no-repeat;
    border-radius: 0px 0px 24px 24px;
    padding: 0 1rem 0.5rem;
  }
  &_content {
    max-width: 800px;
    text-align: center;
    margin-bottom: calc(100vw * 0.56);
    @media screen and (min-width: 1345px) {
      margin-bottom: 800px;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 0 72px;
    }
    @media screen and (max-width: 767px) {
      padding: 0 1rem;
      margin-bottom: calc(100vw * 0.82);
    }
  }
  &_label {
    font-family: "MuseoSansCyrl", sans-serif;
    color: var(--color-black);
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 100px;
  }
}
</style>
