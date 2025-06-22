//FUNCTION SCOPE
const varExample=()=> {
    var x=10
    if (true) {
        var x=20
        console.log(x)//20
    }
    console.log(x)//20
}
varExample()
//BLOCK SCOPE
const letExample=()=> {
let y=10
// {} tạo một scope mới 
if (true) {
    let y=20
    console.log(20)//20
}
console.log(y)//10
}
letExample()

const constExample=()=> {
    const z=10
    console.log(z)
    //z=20 => ra lỗi ko gán lại gtri cho biến
}
constExample()