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
  @import "/src/styles/main.css";

  #main {
    margin-top: calc(var(--header-height) + 10px);
    margin-left: 10px;
    margin-right: 10px;
  }
</style>

<script setup>
  import AppHeader from '@/components/AppHeader.vue';
</script>
