// class 类
// class Person {
//     // 表示在构造函数上添加属性和类型注解
//     name: string
//     age: number
//     // 注意点：name: string, age: number 主要是给传递参数的时候使用（更为严格）
//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }
//     getSum(a: number, b: number): number{
//         return a + b
//     }
// }
// const p = new Person('王江', 18)
// console.log(p)

// p.getSum(10, 20)

// class Son extends Person {
//     sex: string
//     constructor(name: string, age: number, sex: string){
//         super(name, age)
//         this.sex = sex
//     }
// }
// const s = new Son('王小江', 18, '男')

// console.log(s)

// 注意点：继承只是把其他的构造函数里面的属性和方法拿过来。接口是给你这个构造函数（class）做限定
// interface A {
//     name: string
//     age: number
//     say: ()=> void
// }

// class Person implements A {
//     name: string
//     age: number
//     constructor(name: string, age: number){
//         this.name = name   
//         this.age = age
//     }
//     say(){
//         console.log('hello')
//     }
// }

// const obj: A = {
//     name: '张三',
//     age: 18,
//     say(){
//         console.log('hello')
//     }
// }

// class Person {
//     // 表示在构造函数上添加属性和类型注解
//     name: string
//     age: number
//     // 注意点：name: string, age: number 主要是给传递参数的时候使用（更为严格）
//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }
//     // public：表示公有的、公开的，公有成员可以被任何地方访问，默认可见性。**
//     // public say(){
//     //     console.log('嘿嘿')
//     // }
// }
// const p = new Person('王江', 18)
// p.say()


// class Person {
//     name: string
//     age: number
//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }
//     // protected：表示受保护的，仅对其声明所在类和子类中（非实例对象）可见
//     protected say(){
//         console.log('哈哈')
//     }
//     move(){
//         console.log('我是一个方法')
//         this.say()
//     }
// }
// new Person('王江', 18).move()

// class Son extends Person {
//     constructor(name: string, age: number){
//         super(name, age)
//     }
//     rg(){
//         this.say()
//         console.log('我是子类里面的一个方法')
//     }
// }
// new Son('张三', 18).rg()



// class Person {
//     name: string
//     age: number
//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }
//     // private：表示私有的，只在当前类中可见，对实例对象以及子类也是不可见的
//     private say(){
//         console.log('哈哈')
//     }
//     move(){
//         console.log('我是一个方法')
//         this.say()
//     }
// }
// new Person('王江', 18).move()

// class Person {
//     name: string
//     // readonly：表示只读，用来防止在构造函数之外对属性进行赋值
//     readonly age: number
//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }
// }
// const p = new Person('王江', 18)
// // p.age = 20 // 无法进行修改的
// console.log(p)

// 抽象类
abstract class Person {
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('hello')
    }
}
class Son extends Person{}
new Son('张三', 18).say()