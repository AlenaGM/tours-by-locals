<script setup>
import { ref } from "vue";
const isOpenedMobileMenu = ref(false);

const menu = [
  {
    name: "Компания",
    path: "#about",
  },
  {
    name: "Продукт",
    path: "#product",
  },
  {
    name: "Возможности",
    path: "#opportunities",
  },
  {
    name: "Команда",
    path: "#team",
  },
];
</script>

<template>
  <header class="header" id="#header">
    <nav class="header__navbar">
      <div class="header__navbar_logo">
        <a href="#">
          <img alt="Tipster logo" src="../assets/images/logo.svg" />
        </a>
      </div>

      <div class="header__navbar_menu">
        <div>
          <a href="#">Вакансии</a>
        </div>
        <div
          class="menu_open"
          v-if="!isOpenedMobileMenu"
          @click="isOpenedMobileMenu = !isOpenedMobileMenu"
        />
        <div
          class="menu_close"
          v-else
          @click="isOpenedMobileMenu = !isOpenedMobileMenu"
        />
      </div>
    </nav>

    <div class="header__dropdown" v-if="isOpenedMobileMenu">
      <a
        v-for="(element, i) of menu"
        class="header__dropdown_link"
        :href="element.path"
        :key="i"
      >
        {{ element.name }}
      </a>
    </div>

    <div class="header__content">
      <h1>
        Работа <br />
        в Tripster
      </h1>
      <div class="content-text">
        Сервис онлайн-бронирования необычных экскурсий от местных жителей по
        всему миру
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template: minmax(48px, auto) 1fr/ 1fr;
  background: url(../assets/images/bg_image_1.png) 100% 100% / cover no-repeat,
    #231e1b;
  border-radius: 0px 0px 80px 80px;
  padding: 2rem 1.5rem 0;
  @media screen and (min-width: 1345px) {
    padding: 2rem 3.75rem 0;
    min-height: 1000px;
  }
  @media screen and (max-width: 767px) {
    grid-template: minmax(40px, auto) 1fr/ 1fr;
    background: url(../assets/images/bg_image_1_mobile.png) 100% 100% / cover
        no-repeat,
      #231e1b;
    border-radius: 0px 0px 24px 24px;
    padding: 1rem 1rem 0;
  }
  &__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        display: block;
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
        color: var(--color-black);
        background-color: #00000012;
        backdrop-filter: blur(15px);
        border-radius: 100px;
        cursor: pointer;
        height: 48px;
        @media screen and (max-width: 767px) {
          height: 40px;
        }
      }
      div:first-of-type {
        margin-right: 0.5rem;
        a {
          font-family: "MuseoSansCyrl", sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 24px;
          text-align: center;
          padding: 0 2rem;
          @media screen and (max-width: 767px) {
            font-size: 14px;
            line-height: 20px;
            padding: 0 1rem;
          }
        }
      }
      div:last-of-type {
        width: 48px;
        @media screen and (max-width: 767px) {
          width: 40px;
        }
      }
      .menu_open {
        background: url(../assets/images/open.svg) center / 50% 50% no-repeat,
          #00000012;
        &:hover {
          background: url(../assets/images/open_hover.svg) center / 50% 50%
              no-repeat,
            #00000012;
        }
      }
      .menu_close {
        background: url(../assets/images/close.svg) center / 50% 50% no-repeat,
          #00000012;
        &:hover {
          background: url(../assets/images/close_hover.svg) center / 50% 50%
              no-repeat,
            #00000012;
        }
      }
    }
  }
  &__dropdown {
    position: absolute;
    top: 88px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: var(--color-black);
    background-color: #00000012;
    backdrop-filter: blur(15px);
    width: 198px;
    border-radius: 32px;
    padding: 28px 32px 32px 32px;
    z-index: 2;
    right: 1.5rem;
    @media screen and (min-width: 1345px) {
      right: 3.75rem;
    }
    @media screen and (max-width: 767px) {
      top: 64px;
      right: 1rem;
      width: 142px;
      border-radius: 24px;
      padding: 1rem;
    }
    &_link {
      display: block;
      color: var(--color-black);
      text-decoration: none;
      font-family: "MuseoSansCyrl", sans-serif;
      font-size: 17px;
      font-weight: 400;
      line-height: 24px;
      @media screen and (max-width: 767px) {
        font-size: 14px;
      }
      &:hover {
        color: var(--color-hover);
      }
      &:not(:last-of-type) {
        margin-bottom: 1rem;
        @media screen and (max-width: 767px) {
          margin-bottom: 12px;
        }
      }
    }
  }
  &__content {
    margin-top: 2.5rem;
    @media screen and (max-width: 767px) {
      margin-top: 2rem;
    }
    div {
      font-family: "MuseoSansCyrl", sans-serif;
      font-size: 17px;
      font-weight: 400;
      line-height: 24px;
      color: var(--color-white);
      text-align: left;
      width: 40%;
      margin-top: 1rem;
      @media screen and (min-width: 1345px) {
        width: 496px;
      }
      @media screen and (max-width: 1024px) {
        margin-top: 0.5rem;
      }
      @media screen and (max-width: 767px) {
        color: var(--color-black);
        width: 60%;
      }
    }
    @media screen and (orientation: landscape) and (max-width: 767px) {
      h1,
      div {
        color: var(--color-white);
      }
    }
  }
}
</style>
