//数据对象
var data = { a : 1};

var vm = new Vue({
    data:data
})
vm.a == data.a  // => true;

vm.a = 2;
data.a // =>2

data.a = 3
vm.s // => 3

Object.freeze();
//阻止修改现有的property

vm.$data === data // => true
vm.$el === document.getElementById('example') //=>true

vm.$watch('a',function(newValue,oldValue){
    //这个回调会在'vm.a'改变后调用
})