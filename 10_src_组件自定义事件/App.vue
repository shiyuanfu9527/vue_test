<template>
    <div class="app">
        <h1>{{msg}},学生姓名是:</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法) -->
        <Student v-on:atguigu="getStudentName" @demo="m1" @click.native="show"></Student>
         <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法) -->
         <!-- <Student ref="student"></Student> -->
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
                studentName:''
            }
        },methods:{
            getSchoolName(name){
                console.log('App收到了学校名:',name)
            }, 
            getStudentName(name,...params){
            console.log('App收到了学生名',name,params)
            this.studentName = name
        },
        m1(){
            console.log('demo被触发了')
        },
        show(){
            alert('123')
        }
        },
        mounted(){
           
            //      this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
            //  this.$refs.student.$once('atguigu',this.getStudentName)  //绑定自定义事件（一次性）
           
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