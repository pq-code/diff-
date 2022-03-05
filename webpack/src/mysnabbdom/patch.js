import vnode from './vnode'

export default function patch(oldVnode, newVnode) {
    // 判断传入的第一个参数，是DOM节点还是虚拟节点？
    if(oldVnode.sel==''||oldVnode.sel==undefined){
        //传入的是DOM节点，需要包装诚Vnode
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode);
    }
    console.log(oldVnode);
};