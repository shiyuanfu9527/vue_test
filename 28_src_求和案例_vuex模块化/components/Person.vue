<template>
  <div>
      <h1>人员列表</h1>
      <h3 style="color:red">count组件求和为:{{sum}}</h3>
      <h3>列表中第一个人的名字是:{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click="addPersonWang(name)">添加一个姓王的人</button>
      <button @click="addPersonServer">添加一个人，名字随机</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
        name:'Person',
        data(){
            return{
                name:''
            }
        },
        computed:{
            ...mapState('personOptions',['personList']),
             ...mapState('countOptions',['sum']),
             ...mapGetters('personOptions',['firstPersonName'])
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('personOptions/ADD_PERSON',personObj)
                this.name = ''
            },
            ...mapActions('personOptions',['addPersonWang','addPersonServer'])
        }
}
</script>

<style>

</style>