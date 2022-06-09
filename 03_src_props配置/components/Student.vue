<template>
 <!-- 组件的结构 -->
    <div class="demo1">
        <h1>{{msg}}</h1>
        <h2>学生：{{name}}</h2>
        <h2>年龄:{{myAge+1}}</h2>
        <h2>性别：{{sex}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
        
    </div>
</template>
<script>
// 组件交互相关的代码（数据、方法等等）
  export default {
      name:'Student',
      data(){
                return {
                    msg:'我是一名学生',
                    myAge:this.age
                    
                }
            },
            methods:{
                updateAge(){
                    this.myAge++
                }
            },
            // props:['name','sex','age'] //简单声明接收

            //接收的同时对数据进行类型限制
            // props:{
            //     name:String,
            //     age:Number,
            //     sex:String
            // }

            //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
            props:{
                name:{
                    type:String,
                    required:true //name是必要的
                },
                age:{
                    type:Number,
                    default:99
                },
                sex:{
                    type:String,
                    required:true
                }
            }
          
  }
</script>
<style>
   /* //组件的样式 */
   .demo1{
       background-color: wheat;
   }
</style>
