<template>
  <div class="wrapper">
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
  import Footer from "./components/layouts/Footer.vue";

</script>

