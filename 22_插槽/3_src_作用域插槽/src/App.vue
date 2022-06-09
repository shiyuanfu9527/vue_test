<template>
        <div class="container">
            <Category title="游戏" >
                <template v-slot:default="{games}">
                     <ul>
                        <li v-for="(g,index) in games" :key="index">{{g}}</li>
                    </ul>
                </template>
            </Category>
            <Category title="游戏" >
                <template scope="{games}">
                     <ol>
                        <li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
                    </ol>
                </template>
            </Category>
            <Category title="游戏" >
                 <template slot-scope="{games}">            
                        <h4  v-for="(g,index) in games" :key="index">{{g}}</h4>

                </template>
            </Category>
            
        </div>  
</template>

<script>
import Category from './components/Category'

//引入组件
    export default {
  components: { Category},
        name: 'App', 
      
         }
</script>


<style >
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>