<template>
  <div id="header">
    <RouterLink to="/">
      <img id="navLogo" src="/src/assets/mitsuki.jpg"/>
    </RouterLink>

    <div class="navbar">
      <template v-for="item in items">
        <RouterLink class="navbar-link"
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
      </template>

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
    padding-left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: var(--bg-color-2);
    color: var(--text-color-2);
  }

  #navLogo {
    height: var(--header-height);
    vertical-align: middle;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .navbar-link {
    font-size: 1.4rem;
    color: var(--text-color-2);
    text-decoration: overline;
    transition: 0.3s all;

    align-content: center;
    height: 100%;
  }

  .navbar-link:hover {
    color: var(--bg-color-main);
  }
</style>
