<script setup></script>

<template>
  <div class="team" id="team">
    <div class="team__info">
      <h2 class="team__title">Команда</h2>
      <p>
        У нас по-настоящему дружная команда. Мы регулярно проводим неофициальные
        встречи в московском офисе и придумываем форматы онлайн-встреч для того,
        чтобы не терять связь с ребятами на удалёнке из других городов и стран.
      </p>
    </div>
    <div class="team__stat">
      <div class="team__stat_item">
        124
        <span>человека</span>
      </div>
    </div>
    <div class="team__image">
      <picture>
        <source media="(min-width:768px)" srcset="../assets/images/team.jpg" />
        <source
          media="(max-width:767px)"
          srcset="../assets/images/team_mobile.jpg"
        />
        <img src="../assets/images/team.jpg" alt="team" />
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team {
  display: grid;
  grid-template-areas:
    "info stat"
    "image image";
  grid-template-columns: 66% 1fr;
  align-items: center;
  padding: 0 1.5rem;
  @media screen and (min-width: 1345px) {
    grid-template-columns: 704 1fr;
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 57% 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "info"
      "stat"
      "image";
    padding: 0 1rem;
  }
  &__info {
    grid-area: info;
    margin-bottom: 80px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 64px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 0;
    }
  }
  &__title {
    text-align: left;
  }
  &__stat {
    grid-area: stat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    &_item {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 52px 40px 0 0;
      font-family: "MuseoSansCyrl", sans-serif;
      font-size: 96px;
      font-weight: 700;
      line-height: 96px;
      text-align: left;
      background: url("../assets/images/arrow.jpg") right no-repeat;
      margin-bottom: 40px;
      @media screen and (min-width: 1345px) {
        font-size: 120px;
        line-height: 120px;
      }
      @media screen and (max-width: 767px) {
        margin: 0 0 2rem;
        padding: 24px 16px 0 0;
        font-size: 56px;
        line-height: 56px;
        background: url("../assets/images/arrow_mobile.jpg") right/48px
          no-repeat;
      }
      span {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        align-self: center;
        margin-top: -6px;
        @media screen and (max-width: 1024px) {
          font-size: 17px;
          line-height: 24px;
        }
      }
    }
  }
  &__image {
    grid-area: image;
  }
}
</style>
