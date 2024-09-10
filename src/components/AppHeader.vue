<template>
  <div class="header">
    <a href="index.html">
      <img src="/src/assets/mitsuki.jpg"/>
    </a>

    <div class="navbar">
      <a
        v-for="item in items"
        :key="item.title"
        :href="item.href"
        :title="item.title"
        class="navbar-link"
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
    },
  ]
</script>

<style>
  @import "/src/styles/jetbrains-mono.css";
  @import "/src/styles/main.css";

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 10px;
    width: 100%;
    height: 70px;
    background-color: rgb(var(--bg-color-2));
    color: rgb(var(--text-color-2));
  }

  .navbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .navbar-item {
    color: rgb(var(--text-color-2));
    text-decoration: overline;
    transition: 0.3s all;
  }

  .navbar-item:hover {
    color: rgb(var(--bg-color-main));
  }

  a > img {
    height: 55px;
    object-fit: contain;
  }
</style>
