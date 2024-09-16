<template>
  <div id="header">
    <a id="navLogo" href="index.html">
      <img src="/src/assets/mitsuki.jpg"/>
    </a>

    <div class="navbar" v-for="item in items">
      <RouterLink
          class="navbar-link"
        v-if="item.isRouterLink"
        :to="item.href"
      >
        {{ item.title }}
      </RouterLink>
      <a v-else
        class="navbar-link"
        :href="item.href"
        target="_blank"
      >
        {{ item.title }}
      </a>
    </div>
  </div>

</template>

<script setup>
  const items = [
    {
      title: 'home',
      href: '/',
      isRouterLink: true,
    },
    {
      title: 'about',
      href: '/AboutMe',
      isRouterLink: true,
    },
    {
      title: 'projects',
      href: '/Projects',
      isRouterLink: true,
    },
    {
      title: 'contact',
      href: '/ContactMe',
      isRouterLink: true,
    },
    {
      title: 'github',
      href: 'https://github.com/sillyash',
      isRouterLink: false,
    },
  ]
</script>

<style>
  @import "/src/styles/jetbrains-mono.css";
  @import "/src/styles/main.css";

  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 10px;
    width: 100%;
    height: var(--header-height);
    background-color: var(--bg-color-2);
    color: var(--text-color-2);
  }

  #navLogo {
    height: fit-content;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .navbar-link {
    color: var(--text-color-2);
    text-decoration: overline;
    transition: 0.3s all;
  }

  .navbar-link:hover {
    color: var(--bg-color-main);
  }

  #navLogo > img {
    height: 50px;
    object-fit: contain;
    vertical-align: middle;
  }
</style>
