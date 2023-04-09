<script setup>
import concepts from "../assets/data/concepts.js";
</script>

<template>
  <div class="concept">
    <h3>
      <span>Наш главный принцип работы —</span> открытость и возможность каждого
      члена команды менять процессы в компании
    </h3>
    <div class="concept__intro">
      У нас нет босса и подчинённых, а люди в команде — не просто ресурс. В
      Трипстере каждый заряжен общей идеей — делать качественный и полезный
      продукт для путешествий. И в этом ценность общего дела для нас.
    </div>
    <div class="concept__gallery">
      <div
        class="concept__gallery_item"
        v-for="concept in concepts"
        :key="concept.id"
      >
        <p>{{ concept.info }}</p>
        <div>
          <picture>
            <source media="(min-width:768px)" :srcset="concept.image" />
            <source media="(max-width:767px)" :srcset="concept.mobileImage" />
            <img :src="concept.image" alt="workflow" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.concept {
  display: grid;
  padding: 0 1.5rem;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0 1rem;
  }
  &__intro {
    margin-bottom: 112px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 80px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
  &__gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(476px, 1fr));
    grid-auto-rows: 1fr;
    gap: 1.5rem;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(348px, 1fr));
      grid-auto-rows: 1fr;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    &_item {
      display: grid;
      grid-template: 1fr auto / 1fr;
      grid-auto-flow: row;
      justify-items: center;
      background: var(--color-gradient);
      border-radius: 48px;
      padding: 40px;
      @media screen and (max-width: 1024px) {
        border-radius: 32px;
        padding: 32px;
      }
      @media screen and (max-width: 767px) {
        padding: 24px;
      }
      p {
        text-align: left;
        padding-right: 15%;
        @media screen and (max-width: 767px) {
          padding-bottom: 1.5rem;
          padding-right: 0;
        }
      }
      div {
        position: relative;
        width: 75%;
        margin: auto;
        aspect-ratio: 1/1;
        img,
        picture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
    &_item:last-of-type {
      @media screen and (min-width: 768px) {
        grid-column: span 2;
        display: grid;
        grid-template: 1fr / 1fr 1fr;
        justify-items: center;
        aspect-ratio: 2/1;
      }
    }
  }
}
</style>
