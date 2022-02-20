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
const vnode1 = h('a',{
    props:{
        href: 'www.baidu.com'
    }
},'百度')
const vnode2 = h('div',[
    h('ul',[
        h('li', 'a'),
        h('li', 'b'),
        h('li', 'a')
    ])
])

console.log(vnode2);
const container = document.getElementById("container");

patch(container,vnode2);