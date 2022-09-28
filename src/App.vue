<template>
  <div class="wrapper">
    <main class="main">
            <transition
                    name="fade"
                    mode="out-in"
            >
                <router-view/>
            </transition>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
  import Footer from "./components/layouts/Footer.vue";

</script>
