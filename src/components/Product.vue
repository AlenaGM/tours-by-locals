<script setup>
import gallery from "../assets/data/gallery.js";
</script>

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
        <img src="../assets/images/ceo.png" alt="tipster's ceo" />
        <div>
          <p>Алексей Мельчаков</p>
          <span>CEO, co-founder</span>
        </div>
      </div>
    </div>
    <div class="product__gallery">
      <div
        class="product__gallery_item item"
        v-for="item in gallery"
        :key="item.id"
      >
        <div>
          <img class="item__image" :src="item.image" :alt="item.name" />
        </div>
        <div class="item__author">
          <img :src="item.authorImg" :alt="item.author" />
          <p>{{ item.author }}</p>
        </div>
        <div class="item__info">
          <p>{{ item.info }}</p>
        </div>
        <a
          class="item__link"
          :href="item.path"
          target="_blank"
          rel="noopener noreferrer"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding: 0 1.5rem;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0 1rem;
  }
  &__intro {
    display: grid;
    justify-items: center;
    margin-bottom: 335px;
    @media screen and (max-width: 767px) {
      margin-bottom: 48px;
    }
    &_title {
      margin-bottom: 1.5rem;
      @media screen and (max-width: 1024px) {
        margin-bottom: 1rem;
      }
    }
    &_text {
      width: 83%;
      max-width: none;
      text-align: center;
      margin-bottom: 2rem;
      @media screen and (min-width: 1345px) {
        max-width: 1016px;
      }
      @media screen and (max-width: 1024px) {
        width: 100%;
        max-width: 720px;
      }
      @media screen and (max-width: 767px) {
        max-width: none;
        margin-bottom: 1.5rem;
      }
    }
    &_ceo {
      display: inline-flex;
      align-items: center;
      img {
        display: block;
        width: 80px;
        height: 80px;
        margin-right: 1rem;
        @media screen and (max-width: 767px) {
          width: 56px;
          height: 56px;
        }
      }
      p,
      span {
        font-size: 24px;
        line-height: 32px;
        @media screen and (max-width: 767px) {
          font-size: 17px;
          line-height: 24px;
        }
      }
      span {
        color: var(--color-gray70);
      }
    }
  }
  &__gallery {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 80px;
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      row-gap: 56px;
    }
    &_item:nth-of-type(odd) {
      position: relative;
      top: -215px;
      @media screen and (max-width: 767px) {
        top: 0;
      }
    }
  }
}

.item {
  display: grid;
  grid-auto-flow: row;
  grid-template: auto 1fr auto/ 1fr;
  &__image {
    margin-bottom: 1.5rem;
    border-radius: 64px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 1rem;
      border-radius: 40px;
    }
    @media screen and (max-width: 767px) {
      border-radius: 24px;
    }
  }
  &__author {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
      display: block;
      width: 48px;
      height: 48px;
      margin-right: 1rem;
      @media screen and (max-width: 1024px) {
        width: 40px;
        height: 40px;
      }
    }
    p {
      font-weight: 600;
    }
  }
  &__info {
    margin-bottom: 1rem;
    @media screen and (max-width: 767px) {
      margin-bottom: 0.5rem;
    }
  }
  &__author,
  &__link,
  &__info {
    padding-left: 2rem;
    width: 83%;
    @media screen and (max-width: 1024px) {
      padding: 0 1.5rem;
      width: 100%;
    }
  }
}
</style>
