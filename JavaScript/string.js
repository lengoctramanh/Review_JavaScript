/** STRING
 * 1.Tạo chuỗi
 * 2. Một số case sử dụng backlash(\)
 * 3.Xem độ dài chuỗi
 * 4.Chú ý độ dài khi viết code
 * 5. Template string ES6
 */
const fullName = "TA 'đẹp gái' \ ";
console.log(fullName.length)
const firstName="Tram Anh"
const lastName="Le Ngoc"
console.log(firstName+" "+lastName) // C1
console.log(`${firstName} ${lastName}`) //C2

/** STRING METHODS
 * 1.length
 * 2.find index: =1 tìm thấy,=-1 ko tìm thấy
 * 3 cut string
 * 4.replace
 * 5.convert to uppercase
 * 6.convert to lowercase
 * 7. trim
 * 8.split
 * 9.get a character by index
 */

const myString="  My, name, is, Trâm Anh. She is 18.  "
console.log(myString.indexOf("is")) //8
console.log(myString.lastIndexOf("is")) //23
console.log(myString.search("is")) //8
console.log(myString.slice(0)) // My name is Trâm Anh. She is 18.
console.log(myString.slice(3,7)) //name
console.log(myString.replace("Trâm Anh","Mẫn Nhi")) //My name is Mẫn Nhi. She is 18.
console.log(myString.toUpperCase()) //MY NAME IS TRÂM ANH. SHE IS 18.
console.log(myString.toLowerCase()) //my name is trâm anh. she is 18.
console.log(myString.trim()) // bỏ khoảng trắng đầu và cuối
console.log(myString.split(',')) //[ '  My', ' name', ' is', ' Trâm Anh. She is 18.  ' ]

const string="Trâm Anh"
console.log(string[3]) //m
