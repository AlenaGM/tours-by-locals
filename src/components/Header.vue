<script setup>
import { ref } from "vue";

const isOpenedMobileMenu = ref(false);

const onClickAway = () => {
  isOpenedMobileMenu.value = false;
};

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
    <nav class="header_navbar">
      <div class="header_navbar__logo">
        <a href="#">
          <picture>
            <source
              media="(min-width:768px)"
              srcset="../assets/images/logo.svg"
            />
            <source
              media="(max-width:767px)"
              srcset="../assets/images/logo_mobile.svg"
            />
            <img src="../assets/images/logo.svg" alt="Tipster logo" />
          </picture>
        </a>
      </div>
      <div class="header_navbar__menu">
        <div>
          <a
            href="https://jobs.friend.work/68867469BE63840C92B96047B6EFB174"
            target="_blank"
            rel="noopener noreferrer"
            >Вакансии</a
          >
        </div>
        <div
          class="menu_open"
          v-if="!isOpenedMobileMenu"
          @click="isOpenedMobileMenu = true"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
        <div class="menu_close" v-else @click="isOpenedMobileMenu = false">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </nav>
    <Transition name="dropdown">
      <div class="header_dropdown__wrapper" v-if="isOpenedMobileMenu">
        <div class="header_dropdown_content" v-click-away="onClickAway">
          <a
            v-for="(element, i) of menu"
            class="header_dropdown__link"
            :href="element.path"
            :key="i"
            @click="isOpenedMobileMenu = false"
          >
            {{ element.name }}
          </a>
        </div>
      </div>
    </Transition>
    <div class="header_content">
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
  background: url(../assets/images/bg_image_1.jpg) 100% 100% / cover no-repeat,
    #231e1b;
  border-radius: 0px 0px 80px 80px;
  padding: 2rem 1.5rem 0;
  z-index: 3;
  @media screen and (min-width: 1345px) {
    padding: 2rem 3.75rem 0;
    min-height: 1000px;
  }
  @media screen and (max-width: 767px) {
    grid-template: minmax(40px, auto) 1fr/ 1fr;
    background: url(../assets/images/bg_image_1_mobile.jpg) 100% 100% / cover
        no-repeat,
      #231e1b;
    border-radius: 0px 0px 24px 24px;
    padding: 1rem 1rem 0;
  }
  &_navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      img,
      picture {
        display: block;
        height: 32px;
        max-width: 100%;
        @media screen and (max-width: 767px) {
          height: 20px;
        }
      }
    }
    &__menu {
      display: inline-flex;
      position: fixed;
      top: 2rem;
      right: 1.5rem;
      @media screen and (min-width: 1345px) {
        right: calc((100vw - 1344px) / 2 + 60px);
      }
      @media screen and (max-width: 767px) {
        top: 1rem;
        right: 1rem;
      }
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
        font-size: 17px;
        width: 48px;
        @media screen and (max-width: 767px) {
          width: 40px;
          font-size: 14px;
        }
        @media (any-pointer: fine) {
          svg {
            transition: all 0.4s ease;
            &:hover {
              transition: all 0.4s ease;
              color: var(--color-hover);
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
  &_dropdown {
    &__wrapper {
      position: fixed;
      top: 88px;
      right: 1.5rem;
      z-index: 4;
      background-color: #00000012;
      backdrop-filter: blur(15px);
      width: 198px;
      border-radius: 32px;
      padding: 28px 32px 32px 32px;
      @media screen and (min-width: 1345px) {
        right: calc((100vw - 1344px) / 2 + 60px);
      }
      @media screen and (max-width: 767px) {
        top: 64px;
        right: 1rem;
        width: 142px;
        border-radius: 24px;
        padding: 1rem;
      }
    }
    &__content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: var(--color-black);
    }
    &__link {
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
      @media (any-pointer: fine) {
        &:hover {
          color: var(--color-hover);
        }
      }
      &:not(:last-of-type) {
        margin-bottom: 1rem;
        @media screen and (max-width: 767px) {
          margin-bottom: 12px;
        }
      }
    }
  }
  &_content {
    margin-top: 2.5rem;
    position: relative;
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

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.7s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  -webkit-transform: translateY(-48px);
  transform: translateY(-48px);
  opacity: 0;
}
</style>
