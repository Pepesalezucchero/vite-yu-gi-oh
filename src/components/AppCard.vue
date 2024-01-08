<script>
//importo store
import{ store } from '../store';

export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="card" v-for="card in store.listCards" :key="card.id">
        <img :src="card.card_images[0].image_url" :alt="card.id">
        <h3>{{ card.name }}</h3>
        <span>{{ card.archetype }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    width: calc((100% / 5) - 20px);
    background-color: $bg-color;
    margin-bottom: 20px;

    img {
        width: 100%;
    }
}

span, h3 {
    display: block;
    text-align: center;
    margin: 25px 0;
}

h3 {
    color: $text-color;
}
</style>