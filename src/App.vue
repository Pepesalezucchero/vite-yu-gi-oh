<script>
//importo axios
import axios from 'axios';
//importo componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
//importo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data () {
    return{
      store,
    }
  },
  methods: {
    getCards() {
      axios
        .get(store.apiUrl)
        .then((res => {
          console.log(res.data.data);
          store.listCards = res.data.data;
        }))
        .catch((err) => {
          console.log("Errori", err);
        });
    }
  },

    created() {
      this.getCards();
    },
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
