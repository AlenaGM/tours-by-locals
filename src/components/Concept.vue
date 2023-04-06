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
      <p>
        У нас нет босса и подчинённых, а люди в команде — не просто ресурс. В
        Трипстере каждый заряжен общей идеей — делать качественный и полезный
        продукт для путешествий. И в этом ценность общего дела для нас.
      </p>
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 2rem;
    @media screen and (max-width: 767px) {
      gap: 1rem;
      grid-template-columns: 1fr;
    }
    &_item {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 40px;
      background: var(--color-gradient);
      border-radius: 48px;
      align-items: center;
      justify-content: space-between;
      aspect-ratio: 1 / 1;
      @media screen and (max-width: 1024px) {
        border-radius: 32px;
      }
      @media screen and (max-width: 767px) {
        aspect-ratio: 5 / 5;
      }
      p {
        align-self: flex-start;
        max-width: 400px;
        text-align: left;
        @media screen and (max-width: 1024px) {
          max-width: 340px;
        }
      }
      div {
        text-align: center;
        img {
          width: 95%;
          @media screen and (max-width: 1200px) {
            width: 78%;
          }
          @media screen and (max-width: 1024px) {
            width: 60%;
          }
          @media screen and (max-width: 767px) {
            width: 100%;
            margin-top: 1rem;
          }
        }
      }
    }
    &_item:last-of-type {
      aspect-ratio: 1/1;
      display: flex;
      flex-direction: column;
      @media screen and (min-width: 768px) {
        grid-column: span 2;
        aspect-ratio: 2/1;
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
