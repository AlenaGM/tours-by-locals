<script setup></script>

<template>
  <header class="header">
    <nav class="header__navbar">
      <div class="header__navbar_logo">
        <a href="#">
          <img
            alt="Tipster logo"
            class="header__navbar_logo"
            src="../assets/images/logo.svg"
          />
        </a>
      </div>
      <div class="header__navbar_menu">
        <div>
          <a href="#">Вакансии</a>
        </div>
        <div>
          <img alt="Dropdown menu icon" src="../assets/images/open.svg" />
        </div>
      </div>
    </nav>
    <div class="header__content">
      <h1>
        Работа <br />
        в Tripster
      </h1>
      <p class="content-text">
        Сервис онлайн-бронирования необычных экскурсий от местных жителей по
        всему миру
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template: minmax(80px, auto) 1fr/ 1fr;
  background: url(../assets/images/bg_image_1.png), #231e1b;
  background-size: cover;
  border-radius: 0px 0px 80px 80px;
  padding: 2rem 1.5rem 0;
  @media screen and (min-width: 1345px) {
    padding: 2rem 3.75rem 0;
  }
  @media screen and (max-width: 767px) {
    grid-template: minmax(56px, auto) 1fr/ 1fr;
    background: url(../assets/images/bg_image_1_mobile.png), #231e1b;
    background-size: cover;
    border-radius: 0px 0px 24px 24px;
    padding: 1rem 1rem 0;
  }

  &__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_logo {
      display: block;
      cursor: pointer;
      img {
        height: 32px;
        @media screen and (max-width: 767px) {
          height: 20px;
        }
      }
    }
    &_menu {
      display: inline-flex;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px 12px;
        color: var(--color-black);
        background-color: #00000012;
        backdrop-filter: blur(15px);
        border-radius: 100px;
        @media screen and (max-width: 767px) {
          padding: 13.33px 10px;
        }
        cursor: pointer;
        img {
          width: 24px;
          height: 16px;
          @media screen and (max-width: 767px) {
            width: 20px;
            height: 13.33px;
          }
        }
      }
      div:first-of-type {
        font-family: "MuseoSansCyrl-300", sans-serif;
        font-size: 17px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        margin-right: 0.5rem;
        padding: 12px 32px;
        @media screen and (max-width: 767px) {
          font-size: 14px;
          line-height: 20px;
          padding: 10px 16px;
        }
      }
    }
  }
  &__content {
    margin-top: 2.5rem;
    max-width: 600px;
    p {
      margin-top: 1rem;
      font-family: "MuseoSansCyrl-300", sans-serif;
      font-size: 17px;
      font-weight: 400;
      line-height: 24px;
      color: var(--color-white);
      text-align: left;
      @media screen and (max-width: 1024px) {
        margin-top: 0.5rem;
      }
      @media screen and (max-width: 767px) {
        color: var(--color-black);
      }
    }
    @media screen and (max-width: 1024px) {
      max-width: 400px;
    }
    @media screen and (max-width: 767px) {
      margin-top: 2rem;
      max-width: 260px;
    }
  }
}
</style>
