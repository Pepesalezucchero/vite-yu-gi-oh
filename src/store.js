import { reactive } from 'vue'

export const store = reactive ({
    //API delle carte e lista
    listCards: [],
    apiCardsUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    //API degli archetipi e lista
    listArchetipes: [],
    apiCardsArchetipesUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",

});