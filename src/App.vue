<script setup>
import About from "./components/About.vue";
import Concept from "./components/Concept.vue";
import Footer from "./components/Footer.vue";
import Guides from "./components/Guides.vue";
import Header from "./components/Header.vue";
import Mission from "./components/Mission.vue";
import Opportunities from "./components/Opportunities.vue";
import Product from "./components/Product.vue";
import Team from "./components/Team.vue";
</script>

<template>
  <Header />
  <main class="main">
    <About />
    <Mission />
    <Product />
    <Guides />
    <Opportunities />
    <Team />
    <Concept />
  </main>
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
