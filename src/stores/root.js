import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { COCKTAILS_URL_BY_NAME, INGEDIENTS_URL } from '../constants'

export const useRootStore = defineStore('root', () => {

    const ingredients = ref([])
    const cocktails = ref([])
    const ingredient = ref(null)


    const getIngredients = async() => {
        const dat = await axios.get(INGEDIENTS_URL);
        ingredients.value = dat.data.drinks; //dat?.data?.drinks;
    }

    const setIngredient = (val) => {
        console.log('setIngredient');
        ingredient.value = val;
        console.log(' ingredient.value:', ingredient.value);

    }

    const getCocktails = async(ingredient) => {
        const dat = await axios.get(COCKTAILS_URL_BY_NAME + ingredient);
        cocktails.value = dat.data.drinks; //dat?.data?.drinks;
    }



    return { ingredients, cocktails, ingredient, getIngredients, getCocktails, setIngredient }
})