<template>
    <div class="root">
    
       <div class="img" :style="`background-image: url(${imgUrl})`"></div>
       <div class="main">
       
       <div class="btns" >
            <el-button circle class="back"  :icon="Back" @click="backFunc"  v-if="isBackVisible"/>  
            <el-button class="btn">Get random cocktail</el-button>
       </div>
        <slot></slot>
        
       </div> 
    </div>

</template>

<script setup>
import {  Back } from '@element-plus/icons-vue'

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