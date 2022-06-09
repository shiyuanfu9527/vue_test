<template>
 <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生：{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        
    </div>
</template>
<script>
// 组件交互相关的代码（数据、方法等等）
  export default {
      name:'StudentName',
      data(){
                return {
                    name:'syf',
                    age:21
                }
            },
          
  }
</script>
<style>
   /* //组件的样式 */
   .demo{
       background-color: orange;
   }
</style>
