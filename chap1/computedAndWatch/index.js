var vm = new Vue({
    el:'#example',
    data:{
        message:'Hello'
    },
    computed:{
        //计算属性的getter
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    }
})
// 触发重新渲染时，调用方法会再次执行函数，计算属性不会。
console.log(vm.reversedMessage);
vm.message = 'Goodbye';
