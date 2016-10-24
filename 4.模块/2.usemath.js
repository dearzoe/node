/**
 * Created by Administrator on 2016/10/21.
 */
var math=require("./1.math.js");
console.log(math.add(1,2));
console.log(require.cache); //缓存
console.log(require.resolve('./1.math.js'));　//获取一个模块的绝对路径
