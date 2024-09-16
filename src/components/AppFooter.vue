<template>
  <v-footer id="footer" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption"
      style="position: absolute; right: 16px; color: var(--text-color-footer);"
    >
      &copy; 2024-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Ashley Merienne</span>
      —
      <a
        id="licenseInfo"
        href="https://www.gnu.org/licenses/gpl-3.0.en.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        GNU GPL-3.0 License
      </a>
    </div>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'Vuetify Documentation',
      icon: `$vuetify`,
      href: 'https://vuetifyjs.com/',
    },
    {
      title: 'X',
      icon: ['M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z'],
      href: 'https://x.com/JazzySillyAsh',
    },
    {
      title: 'GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/sillyash',
    },
    {
      title: 'LinkedIn',
      icon: `mdi-linkedin`,
      href: 'https://linkedin.com/in/ashmerienne',
    },
    {
      title: 'Pronouns Page',
      icon: `mdi-account-heart`,
      href: 'https://en.pronouns.page/@SassyAsh',
    },
  ]
</script>

<style>
  @import "/src/styles/main.css";

  #footer {
    height: var(--footer-height);
    background-color: var(--bg-color-2);
  }

  .social-link {
    color: #aaaaaa;
    text-decoration: none;
    transition: 0.4s ease-in-out all;
  }

  .social-link:hover {
      color: var(--bg-color-main);
  }

  #licenseInfo {
    color: var(--text-color-footer);
    text-decoration: none;
    transition: 0.4s all;
  }

  #licenseInfo:hover {
    color: var(--bg-color-main);
  }
</style>
