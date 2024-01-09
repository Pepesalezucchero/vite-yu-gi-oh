<script>
import AppCard from '../components/AppCard.vue'
import AppFilterCards from '../components/AppFilterCards.vue'
//importo store
import{ store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppCard,
        AppFilterCards,
    },
}
</script>

<template>
    <AppFilterCards />
    <!-- contenitore principale -->
    <div class="main-container">
        <span><strong>Found ?? cards</strong></span>

        <div class="cards-container">
            <AppCard />
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-container {
    padding-top: 30px;
    width: 90%;
    margin: 0 auto;
    background-color: white;
}

.cards-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
}

span {
    width: 90%;
    margin: 0 auto;
    display: block;
    padding: 20px 15px;
    color: $text-color;
    background-color: $bg-minor-color;
}
</style>