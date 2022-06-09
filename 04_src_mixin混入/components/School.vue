<template>
 <!-- 组件的结构 -->
    <div class="demo">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        
    </div>
</template>
<script>
// 组件交互相关的代码（数据、方法等等）
    import{mixin} from '../mixin'
  export default {
      name:'School',
      data(){
        return {
                    name:'南方',
                    address:'广州'
            }
        },
        mixins:[mixin]
           
           
    }
</script>
<style>
   /* //组件的样式 */
   .demo{
       background-color: gray;
   }
</style>
