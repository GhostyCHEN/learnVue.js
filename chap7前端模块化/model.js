
var name = 'Tom'
var age = 18
var flag = true



function sum(num1,num2){
    return num1 + num2;
}

if(flag){
    console.log(sum(10,20));
    
}


// 1.导出方式一
export {
    flag,sum
}

// 2.导出方式二
export var num1 = 10000;

export var height = 1.88

// 3.导出函数/类
export function mul(num1,num2){
    return num1*num2
}

export class Person{
    run(){
        return 'person!'
    }
}

// 4.export default
const address = 'place'
// export{
//     address
// }
export default address //默认只有一个