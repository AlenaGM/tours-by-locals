<script setup></script>

<template>
  <footer class="footer">
    <a
      href="https://jobs.friend.work/68867469BE63840C92B96047B6EFB174"
      target="_blank"
      rel="noopener noreferrer"
      >Присоединяйся</a
    >
    <div>© 2013–2023, Tripster Limited</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: grid;
  align-content: space-between;
  justify-items: center;
  padding: 0 1.5rem 4rem;
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
    display: inline-flex;
    align-items: flex-end;
    background: url(../assets/images/footer_arrow.svg) right 60% /26px 42px no-repeat;
    padding-right: 50px;
    margin-right: 20px;
    &:hover {
      color: var(--color-hover);
      background: url(../assets/images/footer_arrow_hover.svg) right 60% /26px 42px
        no-repeat;
    }
    @media screen and (max-width: 1024px) {
      font-size: 64px;
    }
    @media screen and (max-width: 767px) {
      font-size: 32px;
      line-height: 40px;
      background-size: 12px 20px;
      padding-right: 20px;
      margin-bottom: 80px;
    }
  }
  div {
    font-family: "MuseoSansCyrl", sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    color: var(--color-black50);
  }
}
</style>
