/**FUNCTION
 * 1.Hàm
 * -Một khối lệnh
 * -Làm một cv cụ thể
 * -nằm trong {}
 * 
 * 2.Loại hàm
 * -Build-in
 * -Tự định nghĩa
 * 
 * 
 * 3.Tính chất
 * -ko thực thi khi định nghĩa
 * -sẽ thực thi khi đc gọi
 * -có thể nhận tham số
 * -trả về một gtri
 * 5. C++ tạo ra node=> giúp js chạy trên mọi browser
 * node:môi trường chạy js,đc cài sẵn trong mọi browser vì có v8
 * 4.Tạo hàm 
 */

const handleInput=()=> {
console.log("Hello")
}
handleInput()


/**THAM SỐ
 * 1.-định nghĩa:gtri truyền vào khi gọi function (e), truyền đc nhiều tham số
 * -kiểu dữ liệu:ko giới hạn
 * 
 */

// Các loại function
//1.Function Declaration (Khai báo hàm):khai báo xong,lưu vào ô nhớ, có thể gọi hàm trc dòng khai báo
addNumber(console.log(3,5))
function addNumber(x,y) {
    return x,y
}
//2. Function Expression (Biểu thức hàm):
const square=function (num) {
    return num*num;
}
console.log(square(5))

//3.Arrow Function
const handleCount=(d,e)=> {
return d+e
}
console.log(handleCount(3,5))

// spread operator:khi muốn truyền nhiều đối số 
const combineStrings=(...strings)=> {
    return strings.join("")
}
console.log(combineStrings("Hi","World"))
console.log(combineStrings("fsdvfs"))

// RETURN {}: trả về object hoặc array vì giống,
// nên return({}) hoặc return([]) để tránh nhầm lẫn block code
const myObject={};
const createUser=(name,age)=> {
return ([
    name=name,
    age=age
]) 
}
const user=createUser("TramAnh",25)
console.log(user) //[ 'TramAnh', 25 ]

const createUserContact=(phone,email)=> {
    return ({phone:phone,
        email:email})
     }
console.log(createUserContact("6555","gebg"))
//{ phone: '6555', email: 'gebg' }

//RETURN:trả về gtri đơn(string,number)
const greet=(name)=>{
    return "Hello"+ " "+ name+"!"
}
console.log(greet("fvfdb"))


const createProduct=(...inf)=> {
    const [id,brand,price]=inf
    return  {   id, brand,price}
}
console.log(createProduct(1, "Laptop", 1500))

//vì js tự động hiểu return là stop ko chạy nữa
const createBook=(...info)=> {
const [title,author,content]=info
return
{title,
author,
content
}
}
console.log(createBook("dfvb","egre","ểg"))// undefined