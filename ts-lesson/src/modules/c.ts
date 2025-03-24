// import {num, add} from './a'
// import {index, cart} from './b'

// 表示先把 a 和 c 文件里面的内容导入，再一次性把 a 和 b 全部导出，在其他页面使用的时候会以解构赋值的形式使用
// 注意点：这是一个组合，表示先导入，再一次性导出，因此不能使用导入的内容
export * from './a'
export * from './b'


