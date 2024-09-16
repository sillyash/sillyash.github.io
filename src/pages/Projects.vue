<template>
  <h1 id="title">projects</h1>

  <section v-for="(project, index) in projects">
    <div class="section-title">
      <h2>{{ project.name }}</h2>
      <p class="section-title-separator">·</p>
      <p class="project-language">
        <template v-for="(lang, index) in project.languages">
          <span v-if="index != project.languages.length - 1">{{ lang }}, </span>
          <span v-else>{{ lang }}</span>
        </template>
      </p>
      <p class="section-title-separator">·</p>
      <a class="project-link" :href="project.link" target="_blank">
        link to project
      </a>
      <p class="section-title-separator">·</p>
      <p class="update-date">Updated on <span class="date">{{ project.updateDate.toLocaleDateString() }}</span></p>
      <div class="section-title-line"></div>
    </div>

    <p v-for="(paragraph, index) in project.paragraphs">
      {{ paragraph }}
    </p>
  </section>

  <section id="glossary">
    <div class="section-title">
      <h2>Glossary</h2>
      <p class="section-title-separator">·</p>
      <p class="update-date">Updated on <span class="date">17/8/2024</span></p>
      <div class="section-title-line"></div>
    </div>

    <p class="glossary" v-for="(glossaryWord, index) in glossaryWords">
        <span class="glossary-word-def">
          {{ glossaryWord.word }}
        </span> · {{ glossaryWord.definition }}
        <br>
    </p>
  </section>
</template>

<style lang="css">
  @import "/src/styles/main.css";

  .project-language {
      font-weight: bold;
  }

  .project-link {
      font-weight: bold;
      text-decoration: overline;
      color: var(--text-color-5);
      transition: 0.3s all;
  }

  .project-link:hover {
      color: var(--text-color-2);
  }
</style>

<script setup>
  const glossaryWords = [
    {
      word: "CWAC",
      definition: "Academic Web Communication",
    },
    {
      word: "CLI",
      definition: "Command Line Interface",
    },
    {
      word: "PPM",
      definition: "Portable Pixmap File Format",
    },
    {
      word: "Arch Linux ARM",
      definition: "a distribution of Arch Linux for ARM computers",
    },
    {
      word: "GUI",
      definition: "Graphical User Interface",
    },
  ];

  const projects = [
    {
      name: "CWAC",
      languages: [
        "HTML",
        "CSS",
      ],
      link: "https://sillyash.github.io/cwac",
      updateDate: new Date(2024, 8, 17),
      paragraphs: [
        "First semester project at Orsay's IUT. I had to make a fake higher education institution website (with a fictitious institution) with a partner.",
        "We chose to make a website for the 'American Music School of Toulouse' (AMST). You can find the summary of the project and the resources (in french) in the footer of the project's page.",
      ],
    },
    {
      name: "Image Manipulation",
      languages: [
        "C++",
      ],
      link: "https://sillyash.github.io/S102",
      updateDate: new Date(2024, 7, 17),
      paragraphs: [
        'A CLI for PPM image manipulation, made in C++. PPM images are notably used in the widely used GIMP software.',
        'This was my second semester project, for algorithmics, matrixes, and C++. The subject used PPM files because they\'re quite easy to read/write.',
        'The CLI I made with my colleague uses knowledge in colors, pixels, and blurriness to make different image effects and manipulations available, like black and white, contrast, and luminosity.',
      ],
    },
    {
      name: "RasPi 4 DevOps",
      languages: [
        "MySQL",
        "MariaDB",
        "GNU/Linux",
      ],
      link: "https://sillyash.github.io/S103",
      updateDate: new Date(2024, 8, 16),
      paragraphs: [
        'This project was also first semester, and made by one of my favourite teachers ever, Nicola Roberto Zema. You can find the subject <a class="project-link" href="https://www.lri.fr/~zema/S103/S103.html">here</a>.',
        'We had to setup a Raspberry Pi 4 for database calls, SSH, and network calls from scratch. My group tried to set it up with Arch Linux ARM but failed, so we went with the classic Debian OS.',
        'What I liked with this project was the challenge. We were kind of thrown into the project with not much insight and had to search on our own for information.',
        'There was a literal challenge daring us to try this on Arch Linux ARM: our group tried, kind of succeeded, but decided to switch to the regular challenge instead. It was a fun experience and part of my love for DevOps comes from this project.',
      ],
    },
    {
      name: "PyKemon",
      languages: [
        "Python",
      ],
      link: "https://sillyash.github.io/PyKemon",
      updateDate: new Date(2024, 7, 17),
      paragraphs: [
        'This is a much older project: it dates back to my second year of high school, where I was learning Python. Our teacher gave us a project where we could do whatever we wanted. So I decided to pair up with a colleague and make a Pokémon game.',
        'We pretty much didn\'t know how to do a GUI so we decided to do a CLI Pokémon game. We also didn\'t have the time and resources to implement all the different abilities of Pokémon, so we decided to simplify the game as a whole.',
        'The game can be quite fun to play, even though it\'s just a single battle.',
      ],
    }
  ];
</script>
