<template>
    <ul>
        <li :style="{opacity}"></li>
        <li>消息编号{{id}}</li>
        <li>消息标题{{title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title'],
    data(){
        return {
            opacity:1
        }
    },
    activated(){
      this.timer =  setInterval(()=>{
        this.opacity -=0.01
        if(this.opacity <=0) this.opacity = 1
        },16)
    },
    deactivated(){
        clearInterval(this.timer)
    }
    // computed:{
    //     id(){
    //         return this.$route.query.id
    //     },
    //      title(){
    //         return this.$route.query.title
    //     }
    // }
}
</script>

<style>

</style>