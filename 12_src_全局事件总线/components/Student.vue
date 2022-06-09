<template>
 <!-- 组件的结构 -->
    <div class="student">
        <h2 >学生：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <button @click="sendSchoolName">把学生名给School组件</button></button>
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
        methods:{
            sendSchoolName(){
                this.$bus.$emit('hello',this.name)
            }
        }

    }
</script>
<style>
   /* //组件的样式 */
   .student{
       background-color: wheat;
       padding: 5px;
       margin-top: 30px;
   }
</style>
