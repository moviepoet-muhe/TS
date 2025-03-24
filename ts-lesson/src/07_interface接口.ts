// 当一个对象类型被多次使用时，一般会使用接口（interface）来描述对象的类型，达到复用的目的
// interface dataType {
//     code: number
//     msg: string
// }   
// const obj: dataType = {
//     code: 1,
//     msg: '登录成功'
// }
// console.log(obj)

// interface A {
//     name: string
//     age: number
// }
// interface B extends A {
//     sex: string
//     like: string[],
//     say: ()=> void
// }
// const obj2: B = {
//     name: '张三',
//     age: 18,
//     sex: '男',
//     like: ['篮球', '足球', '排球'],
//     say() {
//         console.log('你好啊')
//     },
// }
// console.log(obj2)

// interface A {
//     name: string
//     age: number
//     info: {
//         id: number
//         myName: string
//     }
// }


interface B {
    id: number
    myName: string
}

interface A {
    name: string
    age: number
    info: B
}

const obj3: A = {
    name: '张三',
    age: 18,
    info: {
        id: 1,
        myName: '王江'
    }
}
console.log(obj3)


