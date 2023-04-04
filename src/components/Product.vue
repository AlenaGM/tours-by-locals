<script setup></script>

<template>
  <div class="product">
    <div class="product__intro">
      <h2 class="product__intro_title">Продукт</h2>
      <div class="product__intro_text content-text">
        «Мы делаем полезный и удобный сервис для путешественников и находим
        экскурсии, которые становятся уникальным опытом встречи с другими
        людьми, возможностью соприкоснуться с их мировоззрением, с местами, про
        которые даже не мог подумать и представить»
      </div>
      <div class="product__intro_ceo">
        <div>
          <img src="../assets/images/ceo.png" alt="tipster's ceo" />
        </div>
        <div>
          <p>Алексей Мельчаков</p>
          <span>CEO, co-founder</span>
        </div>
      </div>
    </div>
    <div class="product__gallery">
      <div class="product__gallery_item">Item1</div>
    </div>
  </div>
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
