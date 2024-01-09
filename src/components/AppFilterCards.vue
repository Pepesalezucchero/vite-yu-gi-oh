<script>
//importo store
import{ store } from '../store';

export default {
    name: 'AppFilterCards',
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