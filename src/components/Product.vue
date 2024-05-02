<script setup>
import gallery from "../assets/data/gallery.js";
</script>

<template>
  <section class="product">
    <i id="product" />
    <div class="product_intro">
      <h2 class="product_intro__title">Продукт</h2>
      <div class="product_intro__text content-text">
        «Мы делаем полезный и удобный сервис для путешественников и находим
        экскурсии, которые становятся уникальным опытом встречи с другими
        людьми, возможностью соприкоснуться с их мировоззрением, с местами, про
        которые даже не мог подумать и представить»
      </div>
      <div class="product_intro__ceo">
        <img src="../assets/images/ceo.png" alt="tipster's ceo" />
        <div>
          <p>Алексей Мельчаков</p>
          <span>CEO, co-founder</span>
        </div>
      </div>
    </div>
    <div class="product_gallery">
      <div
        class="product_gallery__item item"
        v-for="item in gallery"
        :key="item.id"
      >
        <a :href="item.path" target="_blank" rel="noopener noreferrer">
          <img class="item_image" :src="item.image" :alt="item.name" />
        </a>
        <div class="item_author">
          <img :src="item.authorImg" :alt="item.author" />
          <p>{{ item.author }}</p>
        </div>
        <div class="item_info">
          <p>{{ item.info }}</p>
        </div>
        <a
          class="item_link"
          :href="item.path"
          target="_blank"
          rel="noopener noreferrer"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </section>
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
  &_intro {
    display: grid;
    justify-items: center;
    margin-bottom: 335px;
    @media screen and (max-width: 767px) {
      margin-bottom: 48px;
    }
    &__itle {
      margin-bottom: 1.5rem;
      @media screen and (max-width: 1024px) {
        margin-bottom: 1rem;
      }
    }
    &__text {
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
    &__ceo {
      display: inline-flex;
      align-items: center;
      img {
        display: block;
        width: 80px;
        height: 80px;
        max-width: 100%;
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
  &_gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 80px;
    margin: 0 auto;
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      row-gap: 56px;
    }
    &__item:nth-of-type(odd) {
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
  grid-template: auto 1fr auto/ 1fr;
  grid-auto-flow: row;
  transition: all 0.4s ease;
  @media (any-pointer: fine) {
    a:hover {
      transform: scale(1.025);
      transition: all 0.4s ease;
    }
  }
  &_image {
    border-radius: 64px;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 1024px) {
      border-radius: 40px;
      margin-bottom: 1rem;
    }
    @media screen and (max-width: 767px) {
      border-radius: 24px;
    }
  }
  &_author {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
      display: block;
      width: 48px;
      height: 48px;
      max-width: 100%;
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
  &_info {
    margin-bottom: 1rem;
    @media screen and (max-width: 767px) {
      margin-bottom: 0.5rem;
    }
  }
  &_author,
  &_link,
  &_info {
    padding-left: 2rem;
    width: 83%;
    @media screen and (max-width: 1024px) {
      padding: 0 1.5rem;
      width: 100%;
    }
  }
}
</style>
