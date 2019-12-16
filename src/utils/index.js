export function copy(){
    window.getSelection().removeAllRanges()
    let copyDOM = document.querySelector('#code-view')
    let range = document.createRange() // 创建容器
    range.selectNode(copyDOM) // 选中需要复制的节点
    window.getSelection().addRange(range) // 执行选中元素
    let result = document.execCommand('copy')// 执行 copy 操作
    return result
}