<template>
    <AppLayout imgUrl = "/src/assets/img/bg-1.jpg" :backFunc="removeIngredient" :isBackVisible="!!ingredient">
      <div class="wrapper">
        <div class="info"
        v-if="!ingredient || !cocktails"
        >
           <div class="title">Choose your drink</div>
           <div class="line"></div>

          <div class="select-wrapper">
            <el-select 
            v-model="rootStore.ingredient" 
            class="select" 
            placeholder="Choose main ingredient" 
            size="large"
            effect="dark"
            clearable
            filterable
            allow-create
            @change="getCocktails1()"
            >
                <el-option
                  v-for="item in ingredients"
                  :key="item.strIngredient1"
                  :label="item.strIngredient1"
                  :value="item.strIngredient1"
                />
              </el-select>
          </div>

          <div class="text">Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.</div>
          <img src="/src/assets/img/cocktails.png" alt="Cocktails" class="img">


        </div>

        <div v-else class="info">
           <div class="title">COCKTAILS WITH {{ rootStore.ingredient }} </div>
           <div class="line"></div>
           <div class="cocktails">
              <CocktailThumb
              v-for="cocktail in cocktails"
              :key="cocktail.idDrink"
              :cocktail="cocktail"
              />
           </div>
        </div>

      </div>
    </AppLayout>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {computed,ref} from 'vue'
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '@/stores/root'

import CocktailThumb from '../components/CocktailThumb.vue'

const rootStore = useRootStore()
rootStore.getIngredients()

const {ingredients,cocktails,ingredient} = storeToRefs(rootStore)
//const ingredient =ref(null)


const getCocktails1 = ( ()=>rootStore.getCocktails(rootStore.ingredient))

const removeIngredient = ()=>{
  rootStore.setIngredient(null)
}

</script>


<style lang="sass">
@import '../assets/styles/main'



.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  line-height: 36px
  padding-top: 50px
  letter-spacing: 0.1em
  color: $textMuted
  max-width: 516px
  margin: 0 auto



.cocktails
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 60px
  flex-wrap: wrap
  overflow-y: auto
  max-height: 340px


</style>