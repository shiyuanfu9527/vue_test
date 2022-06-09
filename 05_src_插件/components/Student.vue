<template>
 <!-- 组件的结构 -->
    <div class="demo1">
        <h2 >学生：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <input type="text" v-fbind:value="name">

        
    </div>
</template>
<script>
      
// 组件交互相关的代码（数据、方法等等）
  export default {
      name:'Student',
      data(){
        return {
                    name:'syf',
                    sex:'男'
                    
            }
        },
        
           
            
          
    }
</script>
<style>
   /* //组件的样式 */
   .demo1{
       background-color: wheat;
   }
</style>
