<script>
import AppCard from '../components/AppCard.vue'

export default {
    name: 'AppMain',
    components: {
    AppCard,
    
  }
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
        <div class="cards-container">
            <span class="card-counter"><strong>Found ?? cards</strong></span>
            <!-- singole carte -->
            <AppCard />
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

select {
    cursor: pointer;
    margin: 20px 0 20px 130px;
    width: 130px;
    padding: 7px;
}

.main-container {
    display: flex;
    width: 90%;
    margin: 0 auto;
    min-height: 500px;
    background-color: white;
}

.cards-container {
    width: 90%;
    margin: 30px auto;
}

.card-counter {
    display: block;
    padding: 20px;
    background-color: $bg-minor-color;
    color: $text-color;
 }
</style>