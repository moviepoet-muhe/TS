// 命名空间：对现有的空间可以做限定，规定哪些你可以使用，哪些使用不了，避免命名冲突问题

// const obj = {
//     name: '张三'
// }
// console.log(obj.name)

// 注意点：{} 这个花括号不是对象，而是一个空间。命名空间里面的数据，如果不导出，外界是使用不了的
namespace obj {
    export let name = '张三'
    export function fn() {
        console.log('哈哈')
    }
}
console.log(obj.name)

obj.fn()

namespace obj2 {
    export let name = '王江'
    // export let age = 18
}
console.log(obj2.name)


// console.log(obj2.age)