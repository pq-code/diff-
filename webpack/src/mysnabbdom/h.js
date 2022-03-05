import vnode from './vnode.js'

// 简易版h函数，目前必须接受3个参数，
// 功能较弱
// 测试用例
// h('div',{},Steing)
// h('div',{},[])
// h('div',{},h())
export default function (sel, data, c) {
    // 检查参数的个数
    //arguments对象不是一个 Array 。它类似于Array，但除了length属性和索引元素之外没有任何Array属性。例如，它没有 pop 方法。但是它可以被转换为一个真正的Array：
    if (arguments.length != 3) {
        throw new Error('h函数目前必须传入3个参数')
    }
    if (typeof c == 'string' || typeof c == 'number') {
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        let children = [];
        for(let i = 0;i < c.length;i++) {
            // 检查c[i]必须是一个对象，如果不满足
            if(!(typeof c[i]) == 'object' && c[i].hasOwnProperty('sel')){
                children.push(c[i])
            }
        }
        // 循环结束说明children收集完毕了
        return vnode(sel, data, children, undefined, undefined);
    } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
        // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
        let children = [c];
        return vnode(sel, data, children, undefined, undefined);
    } else {
        throw new Error('传入的第三个类型不对')
    }
}