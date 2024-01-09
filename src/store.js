import { reactive } from 'vue'

export const store = reactive ({
    listCards: [],
    //API delle carte
    apiCardsUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    //API degli archetipi

});