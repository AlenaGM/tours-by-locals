<script setup></script>

<template>
  <div class="opportunities">
    <h2 class="opportunities__title">Возможности</h2>
    <div class="opportunities__intro">
      <p>
        Трипстер — современная и технологичная компания. У нас работают крутые
        профи из сфер IT и маркетинга, в компании которых можно постоянно
        учиться новому.
      </p>
    </div>
    <ul class="opportunities__list">
      <li>
        Предлагаем комфортный формат работы на удалёнке и гибкий график, уважаем
        work-life balance и всячески следим, чтобы наши коллеги не выгорали на
        работе.
      </li>
      <li>
        Проводим для разных команд и отделов тренинги, чтобы усиливать их
        профессиональные навыки.
      </li>
      <li>
        Компенсируем индивидуальное обучение членам команды, когда есть запрос
        на повышение компетенций в своей области.
      </li>
      <li>
        Свободно принимаем любую идею и реализуем её — как в работе, так и вне
        рабочих процессов. Мы рады инициативным членам команды.
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.opportunities {
  display: grid;
  padding: 0 134px 0 1.5rem;
  background: url(../assets/images/bg_image_5.png) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  @media screen and (min-width: 1345px) {
    padding: 0 164px 0 3.75rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 107px 0 1.5rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0 46px 0 1rem;
    background: url(../assets/images/bg_image_5_mobile.png) bottom/100% auto
      no-repeat;
    border-radius: 0px 0px 24px 24px;
  }
  &__title {
    text-align: left;
  }
  &__intro {
    margin-bottom: 96px;
    max-width: 720px;
    @media screen and (min-width: 1345px) {
      max-width: 800px;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom: 56px;
      max-width: 600px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 40px;
      max-width: none;
    }
  }
  &__list {
    list-style: "★" outside;
    margin-bottom: 600px;
    padding-left: 2rem;
    @media screen and (max-width: 1024px) {
      margin-bottom: 448px;
      padding-left: 1.5rem;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: calc(100vw * 0.63);
      padding-left: 1rem;
    }
    li {
      font-size: 40px;
      line-height: 56px;
      padding-left: 77px;
      @media screen and (min-width: 1345px) {
        padding-left: 71px;
      }
      @media screen and (max-width: 1024px) {
        font-size: 32px;
        line-height: 48px;
        padding-left: 56px;
      }
      @media screen and (max-width: 767px) {
        font-size: 17px;
        line-height: 24px;
        padding-left: 16px;
      }
    }
    li:not(:last-of-type) {
      margin-bottom: 4rem;
      @media screen and (max-width: 767px) {
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
