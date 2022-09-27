<template>
  <div class="wrapper">
    <Header/>
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
  import Header from "./components/layouts/Header.vue";
  import Footer from "./components/layouts/Footer.vue";

</script>

