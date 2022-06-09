//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
//使用vuex插件
Vue.use(Vuex)



//准备actions --用于响应组件中的动作

//mutations --用于操作数据（state）
//准备state --用于存储数据（state）
//准备getters-用于将state中的数据进行加工


//创建并暴露store
export default  new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})
