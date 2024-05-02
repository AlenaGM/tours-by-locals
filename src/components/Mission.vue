<template>
  <section class="mission">
    <h3 class="mission_title">
      <span>Главная цель компании —</span> стать сервисом №1 в сфере путешествий
    </h3>
    <div class="mission_content">
      <p>
        Хотим, чтобы Трипстер стал синонимом увлекательного и уникального опыта
        познания мира. Сегодня в нашей команде сотрудники с опытом работы в
        топовых компаниях: Яндекс, VK, Ozon, Циан, X5, Авито, Tutu.
      </p>
      <p>
        Их экспертиза помогает совершенствовать сервис и обмениваться друг с
        другом опытом внутри компании. Мы ищем людей, которые хотят делать
        классный продукт, делиться своими знаниями и развиваться.
      </p>
    </div>
    <div class="mission_advantage">
      Трипстер — это прибыльный бизнес, который полностью окупает себя, а
      значит, не зависит от сторонних инвесторов. Заработанные деньги
      инвестируются в дальнейший рост, так что даже в условиях нестабильной
      экономики мы развиваемся.
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mission {
  display: grid;
  grid-template-areas:
    "title title"
    "content advantage";
  grid-template-columns: 50% 1fr;
  justify-items: start;
  background: url(../assets/images/bg_image_3.jpg) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  padding: 0 1.5rem;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-areas:
      "title"
      "content"
      "advantage";
    grid-template-columns: 1fr;
    background: url(../assets/images/bg_image_3_mobile.jpg) bottom/100% auto
      no-repeat;
    border-radius: 0px 0px 24px 24px;
    padding: 0 1rem;
  }
  &_title {
    grid-area: title;
    width: 730px;
    margin-bottom: 4rem;
    @media screen and (min-width: 1345px) {
      width: 864px;
      margin-bottom: 4rem;
    }
    @media screen and (max-width: 1024px) {
      width: 660px;
      margin-bottom: 3rem;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      max-width: 480px;
      margin-bottom: 1rem;
    }
  }
  &_content {
    grid-area: content;
    margin-bottom: calc(100vw * 0.47);
    @media screen and (min-width: 1345px) {
      margin-bottom: 552px;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom: calc(100vw * 0.5);
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 1.5rem;
    }
  }
  &_advantage {
    grid-area: advantage;
    width: 61%;
    margin-left: auto;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    opacity: 0.5;
    @media screen and (min-width: 1345px) {
      width: 288px;
      margin: 0 auto;
    }
    @media screen and (max-width: 1024px) {
      width: 75%;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: calc(100vw * 0.8);
    }
  }
}
</style>
