<template>
  <v-footer id="footer" app>
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-3 social-link"
      :href="item.href"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 36 : 28"
      />
    </a>

    <div
      class="footer-copyright"
      style="color: var(--text-color-footer);"
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
      title: 'GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/sillyash',
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

  .footer-copyright {
    margin-left: auto;
    font-size: 1rem;
  }

  #licenseInfo {
    font-size: 1rem;
    color: var(--text-color-footer);
    text-decoration: none;
    transition: 0.4s all;
  }

  #licenseInfo:hover {
    color: var(--bg-color-main);
  }
</style>
