<template>
    <div class="root">
    
       <div class="img" :style="`background-image: url(${imgUrl})`"></div>
       <div class="main">
       
       <div class="btns" >
            <el-button circle class="back"  :icon="Back" @click="goBack"  v-if="isBackVisible"/>  
            <el-button class="btn" @click="gpForCoctailRandom">Get random cocktail</el-button>
       </div>
        <slot></slot>
        
       </div> 
    </div>

</template>

<script setup>
import {computed} from 'vue'
import {  Back } from '@element-plus/icons-vue'
import { useRoute, useRouter} from 'vue-router'
import { ROUTES_PATHS } from '@/constants'

//const props = defineProps(['imgUrl'])
const props = defineProps({
    imgUrl: {
        type: String,
        required:true
    },
    backFunc: Function,
    isBackVisible: {
     type:  Boolean,
     default: true
    }


})

 const route = useRoute()
 const router = useRouter()

 const routeName = computed(() => route.name)

const gpForCoctailRandom = ()=>{
    router.push(ROUTES_PATHS.COCKTAIL_RANDOM)

    if( routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM){
        router.go()
    }
}

const goBack =()=>{
    props.backFunc ? props.backFunc() : router.go(-1)
}

</script>


<style lang="sass" scoped>
@import '../assets/styles/main'
.root
    display: flex
    min-height: 100vh
    background: $background
.img
    width: 50%    
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 30px 40px

.btn
    position: absolute
    top: 32px
    right: 40px
    background-color: $accent  
    border-color: $accent  
    color: $text  
    font-family: 'Raleway', 'Arial', sans-serif
    font-size: 16px   

    &:hover,
    &:active
        border-color: darken($accent,10%)  
        background-color: darken($accent,10%)  
        color: darken($text  , 0%)

.btns        
    display: flex
    justify-content: space-between
    align-items: center


        
</style>