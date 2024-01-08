<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>

  <!-- intestazione pagina con logo e titolo -->
  <header>
    <AppHeader message="Yu-Gi-Oh! API" />
  </header>
  <!-- contenuto principale della pagina -->
  <main>
    <AppMain />
  </main>

</template>


<style lang="scss">
@use './styles/general.scss';

</style>
