<script setup></script>

<template>
  <div class="about">
    <h2>Компания</h2>
    <div class="about__content content-text">
      С момента запуска компании в 2013 году мы стали одними из лидеров на рынке
      бронирования экскурсий
    </div>
    <div class="about__stat">
      <div class="about__stat_item">
        669
        <span>городов</span>
      </div>
      <div class="about__stat_item">
        99
        <span>стран</span>
      </div>
      <div class="about__stat_item">
        2 052 370
        <span>посетителей в месяц</span>
      </div>
    </div>
    <div class="about__description">
      <p>
        Трипстер — это бизнес с человеческим лицом, который делает продукт про
        людей и для людей. Мы не просто продаём экскурсии, а выбираем для
        путешественников лучшее.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      180deg,
      #ffffff 27.16%,
      rgba(255, 255, 255, 0) 56.09%
    ),
    url(../assets/images/bg_image_2.png) bottom no-repeat;
  border-radius: 80px;
  padding: 0 1.5rem;
  @media screen and (min-width: 1344px) {
    //Большие экраны
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1rem;
    //Мобильник
  }
  &__content {
    margin-bottom: 72px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 64px;
    }
    @media screen and (max-width: 500px) {
      margin-bottom: 40px;
    }
  }
  &__stat {
    display: flex;
    flex-direction: row;
    margin-bottom: 120px;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      max-width: 520px;
    }
    @media screen and (max-width: 500px) {
      justify-content: flex-start;
    }
    &_item {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 40px;
      padding-top: 52px;
      font-family: "MuseoSansCyrl-700", sans-serif;
      font-size: 96px;
      font-weight: 700;
      line-height: 96px;
      text-align: left;
      background: url("../assets/images/arrow.png") right no-repeat;
      &:not(:last-of-type) {
        margin-right: 80px;
      }
      @media screen and (min-width: 1344px) {
        //Большие экраны
        font-size: 120px;
        line-height: 120px;
        padding-right: 40px;
        padding-top: 64px;
      }
      @media screen and (max-width: 560px) {
        font-size: 56px;
        line-height: 56px;
        padding-right: 24px;
        padding-top: 36px;
        background: url("../assets/images/arrow_mobile.png") right no-repeat;
      }
      span {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        align-self: flex-start;
        margin-top: -6px;
      }
    }
  }
  &__description {
    padding-bottom: 736px;
    align-self: flex-end;
    width: 50%;
    @media screen and (min-width: 1344px) {
      width: 32%;
    }
    @media screen and (max-width: 1024px) {
      max-width: 520px;
      width: 100%;
      align-self: center;
    }
  }
}
</style>
