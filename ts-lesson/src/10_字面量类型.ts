// 字面量，范围的限定
type Direction = '上' | '下' | '左' | '右'
function fn(direction: Direction){
    console.log(direction)
}
fn('上')
fn('下')
fn('右')
fn('左')

