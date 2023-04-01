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
            width="134"
            height="32"
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

    <h1 class="header__title">
      Работа <br />
      в Tripster
    </h1>
    <div class="header__content">
      Сервис онлайн-бронирования необычных экскурсий от местных жителей по всему
      миру
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  //Основной
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: url(../assets/images/bg_image_1.png), #231e1b;
  background-size: cover;
  border-radius: 0px 0px 80px 80px;
  padding: 0 1.5rem;
  @media screen and (min-width: 1344px) {
    //Большие экраны
    padding: 0 3.75rem;
  }

  @media screen and (max-width: 1024px) {
    //Таблетка
  }
  @media screen and (max-width: 768px) {
    //Таблетка вeртикально
  }

  @media screen and (max-width: 500px) {
    background: url(../assets/images/bg_image_1_mobile.png), #231e1b;
    background-size: cover;
    border-radius: 0px 0px 24px 24px;
    padding: 0 1rem;
    //Мобильник
  }
  @media screen and (max-width: 320px) {
    //Мобильник маленький
  }
  &__navbar {
    display: flex;
    top: 0;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto 2.5rem;
    @media screen and (max-width: 768px) {
      margin: 1.5rem auto 2rem;
    }
    @media screen and (max-width: 500px) {
      margin: 1rem auto 2rem;
    }
    &_logo {
      display: flex;
      align-items: center;
    }
    &_menu {
      display: flex;
      align-items: center;
      right: 0;
      div {
        padding: 12px 12px;
        color: var(--color-black);
        background-color: #00000012;
        backdrop-filter: blur(15px);
        border-radius: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        img {
          width: 24px;
          height: 24px;
        }
      }
      div:first-of-type {
        margin-right: 0.5rem;
        font-family: "MuseoSansCyrl-500", sans-serif;
        font-size: 17px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        padding: 12px 32px;
      }
    }
  }
  &__content {
    margin-top: 1rem;
    font-family: "MuseoSansCyrl-500", sans-serif;
    color: var(--color-white);
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    max-width: 400px;
    @media screen and (min-width: 1344px) {
      font-size: 24px;
      line-height: 32px;
    }
    @media screen and (max-width: 1024px) {
      margin-top: 0.5rem;
      max-width: 286px;
    }
    @media screen and (max-width: 500px) {
      color: var(--color-black);
      max-width: 260px;
    }
  }
}
</style>
