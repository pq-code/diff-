import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

const patch = init([
    propsModule,
    classModule,
    styleModule,
    eventListenersModule
]);//  让虚拟DOM上DOM树
// const vnode1 = h('a',{
//     props:{
//         href: 'www.baidu.com'
//     }
// },'百度')
// const vnode2 = h('div',[
//     h('ul',[
//         h('li', 'a'),
//         h('li', 'b'),
//         h('li', 'a')
//     ])
// ])
const diffButton = document.getElementById('diffButton');
const container = document.getElementById("container");

const vnode1 = h('div', {},[
    h('li',{key:'A'},'A'),
    h('li',{key:'B'},'B'),
    h('li',{key:'C'},'C'),
    h('li',{key:'D'},'D'),
])
patch(container,vnode1);
const vnode2 = h('div', {},[
    h('li',{key:'A'},'A'),
    h('li',{key:'B'},'B'),
    h('li',{key:'E'},'E'),
    h('li',{key:'D'},'D'),
    // h('li',{},'D1'),
])


console.log(vnode1,vnode2);
let a = true
diffButton.onclick = ()=> {
    if(a){
        a = !a;
        patch(vnode1,vnode2);
    }else {
        a = !a;
        patch(vnode2,vnode1);
    }
    patch(vnode1,vnode2);
}
