<template>
  <v-app>
    <AppHeader />

    <v-main id="main">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<style lang="css">
  @import "@/styles/main.css";

  #main {
    padding-top: calc(var(--header-height) + 2 * var(--padding));
    padding-right: calc(var(--footer-height) + 2 * var(--padding));
    color: var(--text-color-main);
    height: 100%;
    width: 100%;

    padding-left: 10px;
  }
</style>

<script setup>
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
</script>
