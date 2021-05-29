<template lang="pug">

</template>

<script>

export default {
  name: "page_toggle",
  methods: {
    toggle() {
      if (this.$colorMode.preference !== "dark") {
        this.$colorMode.preference = 'dark';
      } else {
        this.$colorMode.preference = 'light';
      }
    },
  }
}

</script>
