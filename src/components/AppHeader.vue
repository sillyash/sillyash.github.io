<template>
  <div id="header">
    <a id="navLogo" href="index.html">
      <img src="/src/assets/mitsuki.jpg"/>
    </a>

    <div class="navbar">
      <a
        v-for="item in items"
        :key="item.title"
        :href="item.href"
        :title="item.title"
        class="navbar-link"
        :target="item.isBlank ? '_blank' : null"
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
      href: 'index.html',
    },
    {
      title: 'about',
      href: 'index.html#about',
    },
    {
      title: 'projects',
      href: 'projects.html',
    },
    {
      title: 'contact',
      href: 'contact.html'
    },
    {
      title: 'github',
      href: 'https://github.com/sillyash',
      isBlank: true,
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
