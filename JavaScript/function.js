/**FUNCTION
 * 1.Hàm
 * -Một khối mã
 * -Làm một cv cụ thể
 * 
 * 2.Loại hàm
 * -Build-in
 * -Tự định nghĩa
 * 3.Tính chất
 * 
 * -ko thực thi khi định nghĩa
 * -sẽ thực thi khi đc gọi
 * -có thể nhận tham số
 * -trả về một gtri
 * 
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

const handleWriteLog=(e,i)=> {
   console.log(e,i)
}
languages.forEach(handleWriteLog) 
/**Javascript
PHP
C++
Go
Ruby */
handleWriteLog("Hello",123)// Hello 123 đối số
handleWriteLog("Hello") //Hello undefined nếu có tham số nhưng ko truyền đối số tương ứng

/** RETURN TRONG FUNCTION */
const sum=(a,b)=> {
    return (a+b) //6
    console.log("he")
}
/**- ko có return mặc định trả về undifined 
 * - dòng code sau return ko chạy nữa
 * - trả về bất cứ dữ liệu gì
*/
const result=sum(2,4)
console.log(result)


