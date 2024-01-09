<script>
//importo store
import{ store } from '../store';
//Importo axios
import axios from 'axios';

export default {
    name: 'AppFilterCards',
    data() {
        return {
            store
        }
    },
    methods: {
        //prendo le informazioni dalle carte dalla API fornita 
        getArchetipes() {
        axios
        //se viene scelto un filtro
        .get(store.apiCardsArchetipesUrl)
        .then((res => {
            console.log(res.data);
            store.listArchetipes = res.data;
        }))
        //controllo errori
        .catch((err) => {
            console.log("Errori", err);
        });
        }
    },
    created() {
        this.getArchetipes();
    },
}
</script>

<template>
    <!-- dropdown menu di scelta -->
    <select v-model="store.selectedFilter" @change="$emit('filter')">
        <option value="">*No filtro*</option>
        <option v-for="archetipe in store.listArchetipes" :value="archetipe.archetype_name">
            {{ archetipe.archetype_name }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

select {
    cursor: pointer;
    margin: 25px 0 25px 130px;
    width: 150px;
    padding: 10px;
}
</style>