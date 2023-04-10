<template>
  <div class="opportunities" id="opportunities">
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
  background: url(../assets/images/bg_image_5.jpg) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  padding: 0 134px 0 1.5rem;
  @media screen and (min-width: 1345px) {
    padding: 0 164px 0 3.75rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 107px 0 1.5rem;
  }
  @media screen and (max-width: 767px) {
    background: url(../assets/images/bg_image_5_mobile.jpg) bottom/100% auto
      no-repeat;
    border-radius: 0px 0px 24px 24px;
    padding: 0 46px 0 1rem;
  }
  &__title {
    text-align: left;
  }
  &__intro {
    width: 75%;
    margin-bottom: 96px;
    @media screen and (min-width: 1345px) {
      width: 808px;
    }
    @media screen and (max-width: 1024px) {
      width: 83%;
      margin-bottom: 56px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
  &__list {
    list-style: "★" outside;
    padding-left: 2rem;
    margin-bottom: 600px;
    @media screen and (max-width: 1024px) {
      padding-left: 1.5rem;
      margin-bottom: 448px;
    }
    @media screen and (max-width: 767px) {
      padding-left: 1rem;
      margin-bottom: calc(100vw * 0.63);
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
        padding-left: 1rem;
      }
    }
    li:not(:last-of-type) {
      margin-bottom: 4rem;
      @media screen and (max-width: 767px) {
        margin-bottom: 2.5rem;
      }
    }
  }
}
</style>
