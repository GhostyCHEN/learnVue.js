var app = new Vue({
    el:'#app',
    data:{
        msg:'Hello Vue!'
    }
})
// app.msg = 'coolVue!';


var app2 = new Vue({
    el:'#app-2',
    data:{
        msg:new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})
// app3.seen = false;

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            { text:'cool'},
            { text:'good'},
            { text:'not bad'}
        ]
    }
})
app4.todos.push({ text:'Wow!!'})

var app5 = new Vue({
    el:'#app-5',
    data:{
        msg:'Hello Vue.js'
    },
    methods:{
        reverseMessage:function(){
            this.msg = this.msg.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        msg:'please input'
    }
})

// Vue.component('todo-item',{
//     template:'<li>待办项</li>'
// })

// var app7 = new Vue({
//     el:"#app-7",
//     data:{

//     }
// })
// 👇修改
Vue.component('todo-item',{
    //todo-item现在接受一个'prop',类似于一个自定义attribute
    props:['todo'],
    template:"<li>{{ todo.text}}</li>"
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            { id:0,text:'AAA'},
            { id:1,text:'BBB'},
            { id:3,text:'CCC'}
        ]
    }
})