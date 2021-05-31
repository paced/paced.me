<template lang="pug">

  div#base
    div#wrapper
      div.container
        main
          page_navbar

          div.nuxt
            nuxt

    page_footer

</template>

<style>

  #base {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #wrapper {
    flex: 1;
  }

  .container {
    padding: 3vh 4.854vw 0;
  }

</style>

<script lang="ts">

import page_footer from "~/components/web/page_footer.vue";
import page_navbar from "~/components/web/page_navbar.vue";

export default {
  components: {
    page_footer,
    page_navbar,
  }
}

</script>
