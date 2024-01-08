<script>
import AppCard from '../components/AppCard.vue'
//importo store
import{ store } from '../store';

export default {
    name: 'AppMain',
    components: {
        AppCard,
    },
}
</script>

<template>
    <!-- dropdown menu di scelta -->
    <select>
        <option>Alien</option>
        <option>?</option>
        <option>??</option>
        <option>???</option>
    </select>

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

select {
    cursor: pointer;
    margin: 25px 0 25px 130px;
    width: 150px;
    padding: 10px;
}

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