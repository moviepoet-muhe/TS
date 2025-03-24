// 函数类型
// function getSum(a: number, b: number){
//     return a + b
// }
// getSum(10, 20)

// 规范返回值的类型
// function getSum(a: number, b: number): number{
//     return a + b
// }
// getSum(10, 20)

// void 当没有返回值的时候可以使用
// function getSum(a: number, b: number): void{
//     console.log('hello')
// }
// getSum(10, 20)

// function getUserInfo(name: string, age: number): object{
//     return {name, age}
// }
// console.log(getUserInfo('王江', 20))

// function getUserInfo(name: string, age: number=18): object{
//     return {name, age}
// }
// console.log(getUserInfo('王江'))

// 注意点：为箭头函数时指定类型
// const add: (num1: number, num2: number) => number = (num1, num2) => {
// 	return num1 + num2
// }
// console.log(add(10, 20))

// 可选参数
// 注意点：可选参数不能放在前面，由于参数是可选的，可选的意思可以有可以没有，所以不能进行初始化赋值
// function getUserInfo(name: string, age: number, sex?: string): object{
//     console.log(sex)
//     return {name, age}
// }
// console.log(getUserInfo('王江', 20, '男'))



