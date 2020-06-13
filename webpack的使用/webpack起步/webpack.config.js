const path = require('path')

module.exports = {
    entry:'./src/min.js',
    output:{
        //动态获取绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
}