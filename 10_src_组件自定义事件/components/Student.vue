<template>
 <!-- 组件的结构 -->
    <div class="student">
        <h2 >学生：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给app</button>
        <button @click="unbind">解绑atguigu事件</button>
        
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
            sendStudentName(){
                //触发student组件实例身上的atguigu事件
                this.$emit('atguigu',this.name,666,888,999)
                // this.$emit('demo')
            },
            unbind(){
                this.$off('guguigu') //解绑一个自定义事件
                // this.$off(['atguigu','demo']) //解绑多个自定义事件
                // this.$off() //解绑所有的自定义事件
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
