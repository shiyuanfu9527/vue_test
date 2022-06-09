<template>
 <!-- 组件的结构 -->
    <div class="demo1">
        <h2 @click="showName">学生：{{name}}</h2>
        <h2>性别：{{sex}}</h2>

        
    </div>
</template>
<script>
        //引入一个混入
        import{mixin} from '../mixin'
// 组件交互相关的代码（数据、方法等等）
  export default {
      name:'Student',
      data(){
        return {
                    name:'syf',
                    sex:'男'
                    
            }
        },
         mixins:[mixin]
           
            
          
    }
</script>
<style>
   /* //组件的样式 */
   .demo1{
       background-color: wheat;
   }
</style>
