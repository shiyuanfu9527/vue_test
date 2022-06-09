<template>
 <!-- 组件的结构 -->
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        
    </div>
</template>
<script>
// 组件交互相关的代码（数据、方法等等）
    import pubsub from 'pubsub-js'
  export default {
      name:'School',
      props:['getSchoolName'],
      data(){
        return {
                    name:'广州南方学院',
                    address:'广州'
            }
        }, 
        methods: {
            demo(msgName,data){
                console.log('有人发布了hello消息,hello消息的回调执行了',msgName,data)
            }
        },
        mounted(){
            // this.$bus.$on('hello',(data)=>{
            // console.log('我是School组件,收到了数据',data)
            // })
          this.pubId =  pubsub.subscribe('hello',this.demo)
        },
        beforeDestroy(){
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>
<style scoped>
   /* //组件的样式 */
   .school{
       background-color: blue;
       padding: 5px;
   }
</style>
