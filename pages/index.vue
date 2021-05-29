<template lang="pug">

  div#base-home
    div.header.content
      h1.title.is-1 Hey 👋, I'm Thomas Wang.

      hr

      h2.title.is-3 &gt; Who are 🥸 you?
      p.subtitle.is-5 I'm Tian Hao Wang (he/him), though most people call me #[b Thomas].
      p.subtitle.is-5 I'm a #[b full-stack software engineer] from Melbourne, Australia.
      p.subtitle.is-5
        | Currently, I work for #[a(href="https://domain.com.au", target="__blank") Domain Australia]. I also
        | co-founded and operate the interactive media company
        | #[a(href="https://inklinginteractive.com", target="__blank") Inkling Interactive].

      hr

      h2.title.is-3 &gt; What are your ❤️ passions in tech?
      p.subtitle.is-5
        | I am strong advocate for the idea that technology should be #[b available], #[b usable], and #[b accessible]
        | by all:
      ul
        li
          p.subtitle.is-5 Follow what users do, not what they say.
        li
          p.subtitle.is-5 Add features only right before they're needed.
        li
          p.subtitle.is-5 After prototyping, deploy a Minimum Usable Product.
      p.subtitle.is-5
        | "Usability" doesn't just mean #[b uncomplicated user interfaces]. Backend code #[b doesn't have to suck]
        | either; not if it is designed well.

      hr

      h2.title.is-3 &gt; What are you 🛠 good at?
      p.subtitle.is-5 Point me at a hard problem, and I'll find the solution.
      p.subtitle.is-5
        | That being said, I'm strong in #[b algorithms], #[b security], and #[b usability]: if you need it done 🎉
        | properly, ⛑ safely, and 🍳 simply, I'm your man.
      p.subtitle.is-5
        | Check out my #[NuxtLink(to="/profile") profile] for much more information.
      p.subtitle.is-5
        | If you're just looking for a #[b resume], check out my
        | #[a(href="https://www.linkedin.com/in/tianhao-wang", target="__blank") #[fa(:icon=['fab', 'linkedin'])] LinkedIn]!

      hr

      h2.title.is-3 &gt; What have you 🧑🏻‍💻 done?
      p.subtitle.is-5
        | Lots of things. I just love building stuff.
      p.subtitle.is-5 You can find most of it on my #[a(href="https://github.com/paced", target="__blank") #[fa(:icon=['fab', 'github'])] GitHub].

</template>

<style>
  h1, h2 {
    padding-bottom: 0.2em;
  }

  .header {
    padding: 1.5vh 2.427vw 0;
  }

  p, blockquote {
    line-height: 1.6em;
    max-width: 32em;
  }
</style>

<script lang="ts">

export default {
  name: 'index',
  layout: 'base',
}

</script>
