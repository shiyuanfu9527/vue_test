<template>
  <ul class="todo-main">
      <transition-group name="animate__animated animate__bounce" :appear="true" enter-active-class="animate__fadeInDown" leave-active-class="animate__bounceOut">
    <MyItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo="todoObj" >
    </MyItem>
      </transition-group>
</ul>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:'MyList',
        components:{MyItem},
        props:['todos']
    }
</script>

<style scoped>
  .todo-main{
        margin-left:0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>