<template>
  <h1 id="title">about me</h1>

  <section>
      <div class="section-title">
        <h2>Hobbies</h2>
        <p class="section-title-separator">·</p>
        <p class="update-date">Updated on <span class="date">8/8/2024</span></p>
        <div class="section-title-line"></div>
      </div>
      <p>
      I have, and I've always had a lot of hobbies simulteanously. However,
      the hobbies that I stuck with are the precious ones and I cherish
      them for existing.
      </p>
      <p>
      Okay, so first of all <span class="shakey">MUSIC.</span> but that has
      it's own section here, because my life revolves around it. I could be
      making an entire other website to talk about it.
      </p>
  </section>

  <section>
      <div class="section-title">
        <h2>Music</h2>
        <p class="section-title-separator">·</p>
        <p class="update-date">Updated on <span class="date">8/8/2024</span></p>
        <div class="section-title-line"></div>
      </div>
  </section>

  <section>
      <div class="section-title">
        <h2>Culture</h2>
        <p class="section-title-separator">·</p>
        <p class="update-date">Updated on <span class="date">8/8/2024</span></p>
        <div class="section-title-line"></div>
      </div>
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
  ];
</script>
