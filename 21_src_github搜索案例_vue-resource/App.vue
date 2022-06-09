<template>
        <div class="container">
            <Search></Search>    
            <List></List>
        </div>  
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List'
//引入组件
    export default {
  components: { Search,List },
        name: 'App', 
       
         }
</script>


<style >
 

</style>