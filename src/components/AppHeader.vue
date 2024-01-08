<script>
export default {
    name: 'AppHeader',
    props: ['message'],
}
</script>

<template>
    <div class="header-container">
        <a href="#"><img src="../../public/img/Yu-Gi-Oh!_(Logo).jpg" alt="logo"></a>
        <h1>{{ message }}</h1>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

.header-container {
    display: flex;
    align-items: center;
    background-color: $text-color;
    min-height: 75px;
}

img {
    width: 60px;
    height: 20px;
    margin: 0 20px;

    &:hover {
        box-shadow: 0px 0px 30px 5px rgba(80, 80, 80, 0.144);
    }
}

h1{
    font-size: 40px;
}
</style>