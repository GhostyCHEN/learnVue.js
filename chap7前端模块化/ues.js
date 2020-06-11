
// 1.导入的{}中定义的变量
import {flag,sum} from './model.js'

if(flag){
    console.log('success!');
    console.log(sum(20,30));
    
}

// 2.直接导入export定义的变量
import {num1,height} from './model.js'

console.log(num1);
console.log(height);



// 3.导入export的function/class
import {mul,Person} from './model.js'
console.log(mul(10,20));
const p = new Person();
console.log(p.run());



//导入export default

import addr from './model.js'
console.log(addr);

// 5.统一全部导入
// *