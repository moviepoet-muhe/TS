// 泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class 中。
// function fn(a: number){
//     console.log(a)
// }
// fn(10)
// fn('hello') // 如果类型确定，那么传递其他的类型会报错。有时候类型只有再使用的时候才能确定传递什么，这个时候就可以使用泛型

// 有时候类型只有再使用的时候才能确定传递什么，这个时候就可以使用泛型
// function fn<T>(a: T){
//     console.log(a)
// }
// fn(10)
// fn('hello')
// fn(true)

// function fn<T1, T2>(a: T1, b: T2){
//     console.log(a, b)
// }
// fn(10, 'hello')
// fn('hello', 10)


// function fn<T>(a: T){
//     console.log(a)
// }
// fn<number>(10)
// fn<string>('hello')
// fn<boolean>(true)

// function fn<T1, T2>(a: T1, b: T2){
//     console.log(a, b)
// }
// fn<number, string>(10, 'hello')
// fn<string, number>('hello', 10)

// 接口泛型
// interface objType<T> {
//     title: string
//     price: T
// }
// const person: objType<number> = {
//     title: '红米K80',
//     price: 2999
// }

// const person: objType<string> = {
//     title: '红米K80',
//     price: '2999元'
// }

// const person1: objType<number> = {
//     title: '红米K80',
//     price: 2999
// }
// const person2: objType<string> = {
//     title: '红米K80',
//     price: '2999元'
// }

// 泛型类
class Person<T> {
    name: string
    age: T
    constructor(name: string, age: T){
        this.name = name
        this.age = age
    }
}
new Person<string>('王江', '18岁')