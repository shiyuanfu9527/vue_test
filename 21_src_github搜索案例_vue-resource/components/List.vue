<template>
  <div class="row">
      <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <transition-group name="animate__animated animate__bounce" :appear="true" enter-active-class="animate__rotateInUpLeft" leave-active-class="animate__rotateOutUpRight">
    <h1 v-show="info.isFirst" key="1" >欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h2 v-show="info.isLoading" key="2"> 加载中....</h2>
    </transition-group>  
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
</div>
</template>

<script>
import 'animate.css'
export default {
    name:'List',
    data(){
        return{
           info:{
            isFirst:true,
            isLoading:false,
            errMsg:'',
            users:[],
           }

        }
    },
    methods:{
       updateListData(dataObj){
           this.info =  {...this.info,...dataObj}
       } ,
    },
    mounted(){
        this.$bus.$on('updateListData',this.updateListData)
    }

}
</script>

<style scoped>
   .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
    }

    .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    }

    .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
    }

    .card-text {
    font-size: 85%;
    }
</style>