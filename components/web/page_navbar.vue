<template lang="pug">

  div#navbar-base
    nav.navbar(role="navigation" aria-label="main navigation")
      div.navbar-brand
        NuxtLink.navbar-item(to="/")
          img#nav-logo(src="img/hexagons.png" alt="The site's main logo.")

        a.navbar-burger(role="button" aria-label="menu" aria-expanded="false" data-target="navbar")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      div#navbar.navbar-menu
        div.navbar-start
          NuxtLink#nav-home.navbar-item(to="/") Home
          NuxtLink#nav-profile.navbar-item(to="/profile") Profile
          NuxtLink#nav-contact.navbar-item(to="/contact") Contact
        div.navbar-end
          a.navbar-item #[fa(:icon=['fab', 'github'])] &nbsp; GitHub
          a.navbar-item #[fa(:icon=['fab', 'linkedin'])] &nbsp; LinkedIn

</template>

<style lang="css">

</style>

<script lang="ts">

export default {
  name: "navbar",
}

</script>
