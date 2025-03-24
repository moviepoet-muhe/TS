import axios from "axios"

// axios.get('http://localhost:8888/test/first').then(res=>{
//     console.log(res.data)
// })

// axios({
//     url: 'http://localhost:8888/test/fourth',
//     method: 'post',
//     headers: {'content-type': 'application/x-www-form-urlencoded'},
//     data: {
//         name: '张三',
//         age: 18
//     }
// })
// .then(res=>{
//     console.log(res.data)
// })

/*
    {
        "message": "我接收到了你的请求, 你的请求方式是 POST, 并且正确携带了 'name' 和 'age' 参数给我 ! <(*￣▽￣*)/",
        "code": 1,
        "info": {
            "msg": "这是你带来的参数, 我还返回给你, 让你看看, 证明你带过来了",
            "name": "张三",
            "age": "18"
        }
    }
*/
// interface dataType {
//     message: string
//     code: number,
//     info: {
//         msg: string
//         name: string,
//         age: string
//     }
// }

// interface dataType {
//     message: string;
//     code: number;
//     info: Info;
//   }
  
//   interface Info {
//     msg: string;
//     name: string;
//     age: string;
//   }

import { dataType } from './type/request'
async function request(){
    const {data} = await axios({
        url: 'http://localhost:8888/test/fourth', 
        method: 'post', 
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: {
            name: '张三',
            age: 18
        }
    })
    console.log(data)
    const list: dataType = data
    console.log(list.message)
}
request()