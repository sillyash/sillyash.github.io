<template>
  <h1 id="title">projects</h1>

  <section>
    <div class="section-title">
      <h2>CWAC</h2>
      <p class="section-title-separator">·</p>
      <p class="project-language">HTML & CSS</p>
      <p class="section-title-separator">·</p>
      <a class="project-link" href="https://sillyash.github.io/cwac" target="_blank">
        link to project
      </a>
      <p class="section-title-separator">·</p>
      <p class="update-date">Updated on <span class="date">17/8/2024</span></p>
      <div class="section-title-line"></div>
    </div>
    <p>
      First semester project at Orsay's IUT.
      I had to make a fake higher education institution website (with a fictitious
      institution) with a partner.
    </p>
    <p>
      We chose to make a website for the "American Music School of Toulouse" (AMST).
      You can find the summary of the project and the resources (in french)
      <a class="project-link" href="https://sillyash.github.io/cwac/Rapport_CWAC.pdf">here</a>.
    </p>
  </section>

  <section>
    <div class="section-title">
      <h2>Image Manipulation</h2>
      <p class="section-title-separator">·</p>
      <p class="project-language">C++</p>
      <p class="section-title-separator">·</p>
      <a class="project-link" href="https://sillyash.github.io/S102" target="_blank">
        link to project
      </a>
      <p class="section-title-separator">·</p>
      <p class="update-date">Updated on <span class="date">17/8/2024</span></p>
      <div class="section-title-line"></div>
    </div>
    <p>
      A CLI for PPM image manipulation, made in C++. PPM images are notably used in the
      widely used GIMP software.
    </p>
    <p>
      This was my second semester project, for algorithmics, matrixes and C++. The subject
      used PPM files because they're quite easy to read/write.
    </p>
    <p>
      The CLI I made with my colleague uses knowledge in colors, pixels, blurriness, to make
      different image effects and manipulations available, like black and white, contrast, luminosity...
    </p>
  </section>

  <section>
    <div class="section-title">
      <h2>Raspberry Pi 4 DevOps</h2>
      <p class="section-title-separator">·</p>
      <p class="project-language">MySQL, MariaDB & GNU/Linux</p>
      <p class="section-title-separator">·</p>
      <a class="project-link" href="https://sillyash.github.io/S103" target="_blank">
        link to project
      </a>
      <p class="section-title-separator">·</p>
      <p class="update-date">Updated on <span class="date">17/8/2024</span></p>
      <div class="section-title-line"></div>
    </div>
    <p>
      This project was also first semester, and made by one of my favourite teachers ever, Nicola
      Roberto Zema. You can find the subject
      <a class="project-link" href="https://www.lri.fr/~zema/S103/S103.html">here</a>.
    </p>
    <p>
      What I liked with this project was the <span class="shakey">challenge.</span> We were kind
      of thrown into the project with not much insight and had to search on our own for informations.
    </p>
    <p>
      Also, there was a literal challenge in the subject daring us to try this on Arch Linux ARM :
      our group tried, kind of succeeded, but decided to switch to the regular challenge instead.
      It was a fun experience and part of my love for DevOps comes from this project.
    </p>
  </section>

  <section>
    <div class="section-title">
      <h2>PyKemon</h2>
      <p class="section-title-separator">·</p>
      <p class="project-language">Python</p>
      <p class="section-title-separator">·</p>
      <a class="project-link" href="https://sillyash.github.io/PyKemon" target="_blank">
        link to project
      </a>
      <p class="section-title-separator">·</p>
      <p class="update-date">Updated on <span class="date">17/8/2024</span></p>
      <div class="section-title-line"></div>
    </div>
    <p>
      This is a much older project : it dates back to my second year of highschool, where
      I was learning Python. Our teacher gave us a project where we could do whatever we
      wanted. So I decided to pair up with a colleague and make a Pokemon game.
    </p>
    <p>
      We pretty much didn't know how to do a GUI so we decided to do a CLI Pokemon game.
      We also didn't have the time and resources to implement all the different abilities
      of pokemons so we decided to just simplify the game as a whole.
    </p>
    <p>
      The game can be quite fun to play, even though it's just a single battle.
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
</script>
