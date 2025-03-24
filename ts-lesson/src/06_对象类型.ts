// 对象类型
// const obj: {name: string, age: number, sex: string} = {name: '张三', age: 18, sex: '男'}
type personType = {
    name: string, 
    age: number, 
    sex: string,
    like?: string[],
    // say: ()=> void
    getSum: (a: number, b: number)=> number
}
const obj: personType = {
    name: '王江',
    age: 18,
    sex: '男',
    // like: ['篮球', '足球'],
    getSum(a, b){
        return a + b
    }
}
obj.getSum(10, 20)

console.log(obj)
