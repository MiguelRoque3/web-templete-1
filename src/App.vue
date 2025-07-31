<script setup>
  import Footer from './layouts/footer.vue';
import nabar from './layouts/navbar.vue'
</script>

<template>
  <nabar/>
  <router-view/>
  <Footer />
</template>