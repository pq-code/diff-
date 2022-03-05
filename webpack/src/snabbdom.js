
import h from './mysnabbdom/h.js';
import patch from './mysnabbdom/patch.js';

const container = document.getElementById("container");
const vnode = h('h1',{},'你好')

patch(container,vnode);
let vnode1 =h('div',[
    h('ul',[
        h('li', 'a'),
        h('li', 'b'),
        h('li', 'a')
    ])
])
let vnode2 =h('div',[
    h('ul',[
        h('li', 'a'),
        h('li', 'b'),
        h('li', 'a')
    ])
])

// let vnode = h('div',{},'虚拟DOM')
// console.log('Diff算法练习',vnode)



