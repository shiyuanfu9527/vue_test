<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
//引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name: 'App', 
        components:{School,Student},
        data(){
            return{
                msg:'你好啊!',
            }
        }
       
    }
</script>

<style lang="scss" scoped>

</style>
<style >
 .app{
     background-color: grey;
     padding: 5px;
 }
</style>