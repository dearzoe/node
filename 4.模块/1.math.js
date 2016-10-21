/**
 * Created by Administrator on 2016/10/21.
 */
/**
 * 私有，模块外无法访问
 * @param a 
 * @param b
 * @returns {*}
 */
function add(a,b){
    return a+b
}
exports.add=add;//抛出接口
console.log(exports.add);//输出