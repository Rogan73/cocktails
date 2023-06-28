<script setup>
import { computed, ref } from "vue";
import AppLayout from "../components/AppLayout.vue";

import { COCKTAIL_RANDOM,INGREDIENT_PIC } from "../constants/api";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

//const route = useRoute();
//const router = useRouter();

// const goBack = () => {
//   router.back(); //  = go(-1)
// };

const cocktail = ref(null);


const ingredients = computed(() => {
  const ingredients_ = [];

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient =  cocktail.value[`strIngredient${i}`];

    ingredients_.push(ingredient);
  }

  return ingredients_;
});

const getCocktail = async () => {
  const data = await axios.get(COCKTAIL_RANDOM);
  cocktail.value = data?.data?.drinks[0];
};

getCocktail();
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              class="swiper"
            >
              <swiper-slide
              v-for="(item,i) in ingredients"
              :key="i"
              >
              <img :src="`${INGREDIENT_PIC}${item}-Small.png`" alt="">
             
                <div class="name">
                    {{ item }}
                </div>             
              
              </swiper-slide>

            </swiper>
          </div>

          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass">
@import '../assets/styles/main'

.slider
    padding: 50px 0

.swiper
    width: 586px  

.name
    padding-top: 20px      
</style>
