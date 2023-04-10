<script setup>
import guides from "../assets/data/guides.js";
</script>

<template>
  <div class="guides">
    <h3 class="guides__title">
      Трипстер даёт людям возможность получать необычный опыт даже в рамках
      родного города
    </h3>
    <div class="guides__intro">
      Наш основной фокус — на гидах-личностях, которые буквально меняют
      отношение к привычному или открывают людям совсем неизвестное.
    </div>
    <div class="guides__image">
      <img src="../assets/images/guides.png" alt="guides" />
    </div>
    <div class="guides__gallery">
      <a
        v-for="guide in guides"
        class="guides__gallery_item"
        :href="guide.path"
        target="_blank"
        rel="noopener noreferrer"
        :key="guide.id"
        :name="guide.name"
        :rating="guide.rating"
        :location="guide.location"
      >
        <img :src="guide.image" :alt="guide.name" />
        <div class="guides__gallery_guide">
          <div>
            <p>{{ guide.name }}</p>
            <p>{{ guide.rating }}</p>
          </div>
          <div>
            <p>{{ guide.location }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guides {
  display: grid;
  grid-template-areas:
    "title image"
    "intro image"
    "gallery gallery";
  grid-template-columns: 74% 1fr;
  column-gap: 1.5rem;
  align-items: center;
  justify-items: center;
  padding: 0 1.5rem;
  @media screen and (min-width: 1345px) {
    grid-template-columns: 808px 1fr;
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-template-areas:
      "title title"
      "intro image"
      "gallery gallery";
    column-gap: 0;
    padding: 0 1rem;
  }
  &__title {
    grid-area: title;
  }
  &__intro {
    grid-area: intro;
    @media screen and (max-width: 767px) {
      align-self: flex-start;
    }
  }
  &__image {
    grid-area: image;
    img {
      max-width: 242px;
      width: 100%;
      @media screen and (max-width: 1024px) {
        max-width: 170px;
        width: 100%;
      }
      @media screen and (max-width: 767px) {
        max-width: 120px;
        width: 100%;
      }
    }
  }
  &__gallery {
    grid-area: gallery;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin: 96px auto 0;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 56px auto 0;
    }
    &_item {
      position: relative;
      display: flex;
      justify-content: center;
      transition: all 0.5s ease-out;
      img {
        border-radius: 40px;
        max-width: 100%;
        @media screen and (max-width: 1024px) {
          border-radius: 32px;
        }
        @media screen and (max-width: 767px) {
          border-radius: 16px;
        }
      }
      &:hover p {
        color: var(--color-hover);
      }
    }
    &_item:last-of-type {
      @media screen and (max-width: 1024px) {
        display: none;
      }
      @media screen and (max-width: 767px) {
        display: flex;
      }
    }
    &_item:nth-of-type(even) {
      position: relative;
      top: 40px;
    }
    &_guide {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      bottom: 1rem;
      @media screen and (max-width: 767px) {
        bottom: 0.5rem;
      }
      p {
        font-size: 17px;
        font-weight: 400;
        line-height: 17px;
        color: var(--color-white);
        @media screen and (max-width: 767px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
      div:first-of-type {
        display: inline-flex;
        margin-bottom: 0.5rem;
        @media screen and (max-width: 767px) {
          margin-bottom: 0;
        }
        p {
          font-weight: 900;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>
