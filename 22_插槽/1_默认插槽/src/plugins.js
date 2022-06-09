export default{
    //全局过滤器
    install(Vue){
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
        //定义全局指令
        Vue.directive('fbind',{
            bind(element,binding){
                element.value = binding.value
            },
            inserted (element, binding) {
                element.focus()
            },
            update(element,binding) {
                element.value = binding.value
            },
        })
        //定义混入
        Vue.mixin({
            date(){
                return{
                    x:100,
                    y:200
            }
        }})
        //给vue原型上添加一个方法
        Vue.prototype.hello = ()=>{
            alert('你好啊')
        }
    }
}
