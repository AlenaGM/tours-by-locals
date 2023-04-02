<script setup></script>

<template>
  <div class="about">
    <div class="about__intro">
      <h2 class="about__intro_title">Компания</h2>
      <p class="about__intro_text content-text">
        С момента запуска компании в 2013 году мы стали одними из лидеров на
        рынке бронирования экскурсий
      </p>
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
    <div class="about__content">
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
  display: grid;
  justify-items: center;
  padding: 0 1.5rem;
  background: linear-gradient(
      180deg,
      #ffffff 27.16%,
      rgba(255, 255, 255, 0) 56.09%
    ),
    url(../assets/images/bg_image_2.png) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0 1rem;
    background: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 56.09%
      ),
      url(../assets/images/bg_image_2_mobile.png) bottom/100% auto no-repeat;
    border-radius: 0px 0px 24px 24px;
  }
  &__intro {
    &_title {
      margin-bottom: 1.5rem;
      @media screen and (max-width: 1024px) {
        margin-bottom: 1rem;
      }
      @media screen and (max-width: 767px) {
        text-align: left;
      }
    }
    &_text {
      width: 800px;
      margin-bottom: 72px;
      @media screen and (max-width: 1024px) {
        width: 660px;
        margin-bottom: 64px;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: 40px;
      }
    }
  }
  &__stat {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 120px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 56px;
      width: 520px;
      justify-content: flex-start;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 40px;
      justify-content: flex-start;
      justify-self: flex-start;
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
      @media screen and (min-width: 1345px) {
        font-size: 120px;
        line-height: 120px;
      }
      @media screen and (max-width: 767px) {
        font-size: 56px;
        line-height: 56px;
        padding-right: 24px;
        padding-top: 24px;
        background: url("../assets/images/arrow.png") right/48px no-repeat;
      }
      span {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        align-self: flex-start;
        margin-top: -6px;
        @media screen and (max-width: 1024px) {
          font-size: 17px;
          line-height: 24px;
        }
      }
      &:not(:last-of-type) {
        margin-right: 80px;
        @media screen and (max-width: 767px) {
          margin-right: 40px;
        }
      }
    }
  }
  &__content {
    display: grid;
    justify-self: end;
    width: 48%;
    margin-bottom: 600px;
    @media screen and (min-width: 1345px) {
      margin-bottom: 640px;
      width: 32%;
    }
    @media screen and (max-width: 1024px) {
      margin-bottom: 483px;
      width: 520px;
      padding-right: 40px;
      justify-self: center;
      justify-content: flex-start;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 450px;
      width: 100%;
      padding-right: 0px;
      justify-content: flex-start;
      justify-self: flex-start;
    }
    @media screen and (max-width: 530px) {
      margin-bottom: 352px;
    }
    @media screen and (max-width: 420px) {
      margin-bottom: 280px;
    }
  }
}
</style>
