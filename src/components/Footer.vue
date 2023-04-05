<script setup></script>

<template>
  <footer class="footer">
    <a href="#" target="_blank" rel="noopener noreferrer">Присоединяйся ></a>
    <div>© 2013–2023, Tripster Limited</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 0 1.5rem 4rem;
  display: grid;
  align-content: space-between;
  justify-items: center;
  @media screen and (min-width: 1345px) {
    padding: 0 3.75rem 4rem;
  }
  @media screen and (max-width: 767px) {
    padding: 0 1rem 1.5rem;
  }
  a {
    font-family: "MuseoSansCyrl", sans-serif;
    font-size: 80px;
    font-weight: 700;
    line-height: 88px;
    margin-bottom: 184px;
    &:hover {
      color: #d42764;
    }
    @media screen and (max-width: 767px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 80px;
    }
  }
  div {
    font-family: "MuseoSansCyrl", sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    color: var(--color-black);
    opacity: 50%;
  }
}
</style>
