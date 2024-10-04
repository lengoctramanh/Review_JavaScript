/** Hàm build-in
 * 1.Alert
 * 2.Console.log
 * 3.Confirm
 * 4.Prompt
 * 5.setTimeout:sau n giây nó hiện ra 
 * 6.setInterval: sau n giây hiện ra m lần
 */

const myFunction=()=> {
   console.log("Lần :")
}
setTimeout(myFunction,200)
setInterval(myFunction,1000) 

// dùng const bị lỗi vì hằng số đc gán một lần nên ko thể tăng/giảm đc
let a_=5;
++a_;
console.log(a_)
/** Việc 1: cộng 1 vào biến a
 * Việc 2: return kq biến a
 */

let b_=5
b_++
console.log(b_)
/** Việc 1: copy một ô nhớ để nhớ gtr biến b
 * Việc 2: cộng 1 vào biến b
 * Việc 3: return về gtri b copy ban đầu
 */

let a=3
let b=4
let outPut=a++ + --b
console.log(outPut) //6

let c=5
c+=4
console.log(c)  //9

const firstName="Tram Anh"
const lastName="Le Ngoc"
console.log(firstName+" "+lastName) // C1
console.log(`${firstName} ${lastName}`) //C2

/** Phép so sánh
 * ==
 * !=
 * >=
 * <=
 * >
 * <
 * */

/** Phép boolean */
 const isValue=true;
 console.log(isValue)
const first=6
const second=3
const isResult=first<=second
console.log(isResult)

/** If-else */
/** Trong JS các gtri tự động đc convert sang boolen là false, còn lại là true
 * 1. NaN
 * 2.null
 * 3.undefined
 * 4.0
 * 5.false
 * 6.''-""
 */
 const a__=6
 const b__=3
  const isFinal=a__<=b__
  if(isResult){
    console.log("Đúng")
  }else {
    console.log("Sai")
  }
const example=0 //Sai
if(example){
         console.log("Đúng")
     }else {
        console.log("Sai")
      }
const date=6
if(date==2) {
   console.log("Hom nay thứ 2")
}
else if(date==3){
   console.log("Hom nay thứ 3")
}
else {
   console.log("Khong biết")
}

/** SWITCH CASE */
const date_=8
switch (date_) {
   case 2:
      console.log("Hom nay thứ 2")
      break;
   case 3:
      console.log("Hom nay thứ 3")
      break;
   case 4:
         console.log("Hom nay thứ 4")
         break;
   default:
      console.log("Khong biet")
      break;
}

/** Toán logic
 * 1.&& and
 * 2.|| or
 * 3. ! not
 */
  const _a=6
  const _b=3
  if(!(_a>5)) {
    console.log("Đúng")
  } else {
    console.log("Sai")
  }

/** Data type trong JS
 * 1.Dữ liệu nguyên thủy - Primitive Data: tạo ra một vùng nhớ, ko sửa đc gtri,
 * muốn sửa phải tạo ra vùng nhớ mới
 * -Number
 * -String
 * -Boolean
 * -Undefined
 * -Null
 *  
 * 2.Dữ liệu phức tạp -Complex Data:lưu vào vùng nhớ,gọi hàm
 * -Function
 * -Object
 * -Array
 */


let yourGender;
console.log(yourGender) // undefined

//null
const isNull=null;// nothing

/** Ví dụ sự khác biệt undefined và null
 * Nước: dữ liệu
 * Ly nước: biến
 * Cái ly ko có nước bên trong: null(có biến nhưng ko có dữ liệu)
 * Ko có cả ly và nước:undefined
 */

// Nhận obj làm tham số
const myFunction_=(obj)=> {
    console.log(obj)
}

console.log(typeof myFunction_) //ktra data type
const myObject={
    name:"TramAnh",
    age:19,
    address:"Nha Trang",
}
myFunction_(myObject)

/** Toán tử so sánh: so sánh value và data type
 * 1.===
 * 2.!==
 */
const number_1=1
const number_2=undefined
const isOutput=(number_1===number_2)?"Đúng":"Sai"
console.log(isOutput)// Sai

//**TOÁN TỬ BA NGÔI: dành cho trường hợp đơn giản //

const course={
   name:"Javascript",
   coin:250
}
if(course.coin>0){
   console.log(`${course.coin} Coins`)
   
} else {
   console.log("Miễn phí")
}

const result=course.coin>0?`${course.coin} Coins`:"Miễn phí"
console.log(result)






