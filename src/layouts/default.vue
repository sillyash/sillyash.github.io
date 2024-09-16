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
    height: 100%;
    width: 100%;

    padding-top: calc(var(--header-height) + 2 * var(--padding));
    /*
    padding-bottom: var(--footer-height) + 2 * var(--padding);
    handled by v-footer
    */

    padding-right: var(--main-padding);
    padding-left: var(--main-padding);

    color: var(--text-color-main);
  }
</style>

<script setup>
  import AppHeader from '@/components/AppHeader.vue';
  import AppFooter from '@/components/AppFooter.vue';
</script>
