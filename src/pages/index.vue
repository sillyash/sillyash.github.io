<template>
  <h1 id="title">ashley's github page</h1>
  <section id="presentation">
    <div class="section-title">
      <h2>Presentation</h2>
      <p class="section-title-separator">·</p>
      <p class="update-date">Updated on <span class="date">8/8/2024</span></p>
      <div class="section-title-line"></div>
    </div>

    <template v-for="(paragraph, index) in paragraphs">
      <p>
        {{ paragraph }}
      </p>
    </template>
  </section>

  <section id="glossary">
    <div class="section-title">
        <h2>Glossary</h2>
        <p class="section-title-separator">·</p>
        <p class="update-date">Updated on <span class="date">8/8/2024</span></p>
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

<script setup>
  const glossaryWords = [
    {
      word: "IUT",
      definition: "University Institute of Technology",
    },
    {
      word: "CNRS",
      definition: "National Scientific Research Center",
    },
    {
      word: "IPSL",
      definition: "Pierre-Simon Laplace Institute",
    },
    {
      word: "CompSci",
      definition: "Computer Science",
    },
  ]

  const paragraphs = [
  "Hi! I'm Ashley, a student at Orsay's IUT from Paris-Saclay University, studying computer science. Currently, I'm interning at CNRS, at IPSL's research center. I've been studying computer science since high school, and I continue to deepen my knowledge through various languages and technologies.",
  "Although I'm a native French speaker, I'm fluent in English, especially when it comes to IT terminology. My experience includes Python and Java, and I'm comfortable working with JavaScript and Bash as well. Currently, I'm expanding my skills by learning C, PHP, and more advanced JavaScript. I enjoy exploring new languages, as it gets easier with each one I learn. While I don't aim to master all of them, understanding the basics helps me discover which ones I want to specialize in.",
  "I'm developing a solid foundation in C++ and its libraries, and I'm also enjoying Java, which offer two very different approaches to programming. While I find frontend development fun, I'm particularly drawn to backend work. Ideally, I'd love to pursue full-stack development and explore related frameworks.",
  "My academic projects have involved SQL and database management, including setting up a MariaDB database on a Raspberry Pi for DevOps learning. I also value open-source and free software and enjoy participating in any engaging tech projects.",
  "As for my tools, I regularly use both Windows and GNU/Linux. I prioritize freedom, security, and privacy, which is why I run Debian/Kali and Arch/Manjaro on my systems. I'm comfortable with both PowerShell and Bash, which I use frequently across my devices."
  ];

</script>
