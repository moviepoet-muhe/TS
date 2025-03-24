// class Person {
//     constructor () {}
//     play () {
//         console.log('玩')
//     }
//     study () {
//         console.log('学习')
//     }
//     sleep () {
//         console.log('睡觉')
//     }
// }
// class Student {
//     constructor () {}
//     play () {
//         console.log('玩')
//     }
//     study () {
//         console.log('学习')
//     }
//     sleep () {
//         console.log('睡觉')
//     }
// }
// class Teacher {
//     constructor () {}
//     play () {
//         console.log('玩')
//     }
//     study () {
//         console.log('学习')
//     }
//     sleep () {
//         console.log('睡觉')
//     }
// }

// abstract class Base {
//     constructor(){}
//     play () {
//         console.log('玩')
//     }
//     study () {
//         console.log('学习')
//     }
//     sleep () {
//         console.log('睡觉')
//     }
// }

// class Person extends Base{}
// class Student extends Base{}
// class Teacher extends Base{}

// new Person().play()
// new Person().sleep()
// new Person().study()

// 注意点：给那个类前面添加装饰器，那么obj参数指的是就是那个类
// function baseFn(obj: any){
//     obj.prototype.play = function(){
//         console.log('玩')
//     }
//     obj.prototype.study = function(){
//         console.log('学习')
//     }
//     obj.prototype.sleep = function(){
//         console.log('睡觉')
//     }
// }

function playFn(obj: any){
    obj.prototype.play = function(){
        console.log('玩')
    }
}
function studyFn(obj: any){
    obj.prototype.study = function(){
        console.log('学习')
    }
}
function sleepFn(obj: any){
    obj.prototype.sleep = function(){
        console.log('睡觉')
    }
}
// 装饰器
@playFn
class Person {}
console.log(new Person())

@playFn
@sleepFn
class Student {}
console.log(new Student)

@playFn
@studyFn
@sleepFn
class Teacher {}
console.log(new Teacher())
