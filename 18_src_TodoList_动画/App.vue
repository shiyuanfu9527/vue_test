<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"></MyHeader>
                <MyList :todos="todos" ></MyList>
                <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
            </div>
        </div>
        
    </div>
    
</template>

<script>
//引入组件
    import pubsub from 'pubsub-js'
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from './components/MyFooter.vue'
    import MyList from './components/MyList.vue'
    export default {
        name: 'App', 
        components:{MyHeader,MyList,MyFooter},
        data(){
            return{
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            //添加一个todo
            addTodo(todoObj){
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选
            checkTodo(_,id){
                this.todos.forEach((todo)=>{
                 if(todo.id === id) todo.done = !todo.done
                })
            },
            //删除
            deleteTodo(_,id){
               this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            },
            //全选or取消全选
            checkAllTodo(done){
                this.todos.forEach((todo)=>{
                todo.done = done
                })
            },
            //清除所有已经完成的todo
            clearAllTodo(){
               this.todos = this.todos.filter((todo)=>{
                return !todo.done
                })
            },
            //更新一个todo
            updateTodo(id,title){
                this.todos.forEach((todo)=>{
                 if(todo.id === id) todo.title = title
                })
            },
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem('todos',JSON.stringify(value)) 
                }
            }
        },
        mounted(){
           this.pubId =  pubsub.subscribe('checkTodo',this.checkTodo)
          this.pubID =  pubsub.subscribe('deleteTodo',this.deleteTodo)
          this.$bus.$on('updateTodo',this.updateTodo)
        },
        beforeDestroy(){
            pubsub.unsubscribe('checkTodo',this.pubId)
             pubsub.unsubscribe('deleteTodo',this.pubID)
             this.$bus.$off('updateTodo')
        }   
         }
</script>


<style >
    body{
        background-color: #fff;
    }
    .btn{
        display: inline-block;
        padding:4px 12px;
        margin-bottom: 0;
        font-size:14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2x rgba(0, 0, 0, 0.5);
        border-radius: 4px;
    }
    .btn-danger{
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    
    .btn-danger:hover{
        color: #fff;
        background-color: #bd362f;
    }
    .btn-edit{
        color: #fff;
        background-color: skyblue;
        border: 1px solid rgb(109, 167, 190);
        margin-right: 5px;
    }
    .btn-edit:hover{
        color: #fff;
        background-color: rgb(71, 170, 209);
    }
    .btn:focus{
        outline: none;
    }
    .todo-container{
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap{
        padding: 10px;
        border:1px solid #ddd;
        border-radius: 5px;
    }
</style>