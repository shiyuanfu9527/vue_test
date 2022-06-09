<template>
        <div >
    <Count/>
    <hr>
    <Person/>       
        </div>  
</template>

<script>
import Count from './components/Count'
import Person from './components/Person'
//引入组件
    export default {
        components: { Count,Person},
        name: 'App', 
         }
</script>


<style >
</style>