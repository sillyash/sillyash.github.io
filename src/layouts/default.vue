<template>
  <v-app>
    <AppHeader />

    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';

  //
</script>

<style lang="css" scoped>
  @import "/src/styles/main.css";

  .v-main {
    margin-top: var(--header-height);
  }
</style>
