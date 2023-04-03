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
  padding: 0 1.5rem;
  background: url(../assets/images/bg_image_5.png) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0 1rem;
    background: url(../assets/images/bg_image_5_mobile.png) bottom/100% auto
      no-repeat;
    border-radius: 0px 0px 24px 24px;
  }
  &__title {
    text-align: left;
    margin-bottom: 2rem;
    @media screen and (max-width: 1024px) {
      font-size: 64px;
      line-height: 72px;
      margin-bottom: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 2rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 40px;
      line-height: 48px;
      text-align: left;
      margin-bottom: 1rem;
    }
  }
}
</style>
