<script setup></script>

<template>
  <div class="about" id="about">
    <div class="about__intro">
      <h2 class="about__intro_title">Компания</h2>
      <div class="about__intro_text content-text">
        С момента запуска компании в 2013 году мы стали одними из лидеров на
        рынке бронирования экскурсий
      </div>
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
        {{
          new Intl.NumberFormat("ru-RU", {
            style: "decimal",
          }).format(2052370)
        }}
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
    <div><a class="about__arrow-up" href="#" /></div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: grid;
  justify-items: center;
  background: linear-gradient(
      180deg,
      #ffffff 27.16%,
      rgba(255, 255, 255, 0) 56.09%
    ),
    url(../assets/images/bg_image_2.jpg) bottom/100% auto no-repeat;
  border-radius: 0px 0px 80px 80px;
  padding: 0 1.5rem;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem;
  }
  @media screen and (max-width: 767px) {
    background: linear-gradient(
        180deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 56.09%
      ),
      url(../assets/images/bg_image_2_mobile.jpg) bottom/100% auto no-repeat;
    border-radius: 0px 0px 24px 24px;
    padding: 0 1rem;
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
      @media screen and (min-width: 1345px) {
        width: 808px;
      }
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
      max-width: 500px;
      justify-content: flex-start;
      margin-bottom: 56px;
    }
    @media screen and (max-width: 767px) {
      max-width: 480px;
      justify-content: flex-start;
      justify-self: flex-start;
      margin-bottom: 40px;
    }
    &_item {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-family: "MuseoSansCyrl", sans-serif;
      font-size: 96px;
      font-weight: 700;
      line-height: 96px;
      text-align: left;
      padding-top: 24px;
      position: relative;
      @media screen and (min-width: 1345px) {
        font-size: 120px;
        line-height: 120px;
      }
      @media screen and (max-width: 767px) {
        padding-top: 16px;
        font-size: 56px;
        line-height: 56px;
      }
      &::before {
        content: "";
        z-index: 1;
        position: absolute;
        right: -16px;
        top: 0;
        background: url("../assets/images/arrow.png") center/100% auto no-repeat;
        width: 85px;
        height: 80px;
        @media screen and (max-width: 767px) {
          width: 51px;
          height: 48px;
          right: -9.6px;
        }
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
        @media screen and (min-width: 1345px) {
          margin-right: 88px;
        }
        @media screen and (max-width: 767px) {
          margin-right: 40px;
        }
      }
    }
  }
  &__content {
    display: grid;
    width: 51%;
    justify-self: end;
    padding-right: 2rem;
    margin-bottom: calc(100vw * 0.5);
    @media screen and (min-width: 1345px) {
      width: 444px;
      padding-right: 0px;
      margin-bottom: 640px;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
      max-width: 500px;
      justify-self: center;
      justify-content: flex-start;
      margin-bottom: calc(100vw * 0.62);
    }
    @media screen and (max-width: 767px) {
      max-width: none;
      justify-content: flex-start;
      justify-self: flex-start;
      padding-right: 0px;
      margin-bottom: calc(100vw * 0.83);
    }
  }
  &__arrow-up {
    z-index: 2;
    color: var(--color-black);
    background-color: #00000012;
    backdrop-filter: blur(15px);
    border-radius: 100px;
    cursor: pointer;
    background: url(../assets/images/up_arrow.svg) center / 50% 50% no-repeat,
      #00000012;
    height: 48px;
    width: 48px;
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    @media screen and (min-width: 1345px) {
      right: calc((100vw - 1344px) / 2 + 60px);
    }
    @media screen and (max-width: 767px) {
      height: 40px;
      width: 40px;
      right: 1rem;
      bottom: 1rem;
    }
    &:hover {
      background: url(../assets/images/up_arrow_hover.svg) center / 50% 50%
          no-repeat,
        #00000012;
    }
  }
}
</style>
