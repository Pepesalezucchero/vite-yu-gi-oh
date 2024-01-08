<script>
export default {
    name: 'AppCard',
}
</script>

<template>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro fghf</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
    </div>
    <div class="card">
        <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="carta">
        <h3>ciao caro nome carta</h3>
        <span>alinedjkv</span>
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